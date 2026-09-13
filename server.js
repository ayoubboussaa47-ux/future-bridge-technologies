import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");
const dataDir = process.env.DATA_DIR || path.join(__dirname, "data");
const port = Number(process.env.PORT || 4173);
const MAX_BODY_BYTES = 64 * 1024;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

const chatAnswers = [
  {
    keys: ["agent", "agents", "guild"],
    text: "The AI Agent Guild includes Albatross-CTO, Sentinel-Risk, Nexus-Growth, Nexus-Ops, Juris-Legal, Alpha-Sales, Atlas-Research and Ledger-Finance."
  },
  {
    keys: ["price", "package", "pricing", "cost"],
    text: "Future Bridge Technologies offers Pilot Startup, Enterprise OS Licensing and Strategic Partnership models. The best path depends on scope and operating maturity."
  },
  {
    keys: ["partner", "partnership", "investor", "co-founder"],
    text: "Partnership requests start with profile selection, Alpha-Sales qualification and a strategic call to define the pilot or venture structure."
  },
  {
    keys: ["albatrix", "funded"],
    text: "Albatrix Funded is the pilot client ecosystem for applying Albatross AI to proprietary trading operations, risk and analytics workflows."
  },
  {
    keys: ["service", "automation", "integration", "risk", "growth"],
    text: "Core services include AI agent deployment, API integrations, risk and compliance automation, operational workflows and growth systems."
  }
];

const defaultChatReply =
  "I can help with Future Bridge Technologies, Albatross AI, Albatrix Funded, packages, services and partnership requests.";

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": mimeTypes[".json"] });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error("Body too large");
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function saveLead(kind, payload) {
  await fs.mkdir(dataDir, { recursive: true });
  const file = path.join(dataDir, "leads.json");
  let leads = [];
  try {
    leads = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    leads = [];
  }
  const lead = {
    id: `${kind}-${Date.now()}`,
    kind,
    createdAt: new Date().toISOString(),
    payload
  };
  leads.push(lead);
  await fs.writeFile(file, JSON.stringify(leads, null, 2));
  console.log(`[Future Bridge Technologies] New ${kind} request`, lead);
  return lead;
}

async function notifyLead(lead) {
  const webhook = process.env.NOTIFICATION_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead)
      });
      console.log("[Future Bridge Technologies] Lead notified via webhook");
    } catch (error) {
      console.log("[Future Bridge Technologies] Webhook notification failed", error.message);
    }
  }

  const smtpHost = process.env.SMTP_HOST;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  if (smtpHost && notifyEmail) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS || "" }
          : undefined
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: notifyEmail,
        subject: `[Future Bridge Technologies] New ${lead.kind} request: ${lead.payload.name}`,
        text: JSON.stringify(lead, null, 2)
      });
      console.log("[Future Bridge Technologies] Lead notified by email");
    } catch (error) {
      console.log("[Future Bridge Technologies] Email notification failed", error.message);
    }
  }
}

function chatReply(message) {
  const normalized = message.toLowerCase();
  return chatAnswers.find((answer) => answer.keys.some((key) => normalized.includes(key)))?.text
    || defaultChatReply;
}

async function handleChat(message) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.CHAT_API_KEY;
  if (!apiKey) return { reply: chatReply(message) };

  try {
    const baseUrl = (process.env.CHAT_API_URL || "https://api.openai.com/v1").replace(/\/$/, "");
    const model = process.env.CHAT_MODEL || "gpt-4o-mini";
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are Albatross AI, the support assistant for Future Bridge Technologies. " +
              "Answer briefly about AI agents, automation, services, packages, partnerships and Albatrix Funded."
          },
          { role: "user", content: message }
        ],
        max_tokens: 200
      })
    });
    if (response.ok) {
      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content;
      if (reply && reply.trim()) return { reply: reply.trim() };
    }
  } catch (error) {
    console.log("[Future Bridge Technologies] Chat API unavailable, using local fallback", error.message);
  }
  return { reply: chatReply(message) };
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);

    if (req.method === "POST") {
      if (url.pathname === "/api/chat") {
        let payload;
        try {
          payload = JSON.parse(await readBody(req));
        } catch (error) {
          json(res, error.status || 400, { ok: false, error: "Invalid JSON body" });
          return;
        }
        const message = String(payload.message || "").trim();
        if (!message) {
          json(res, 400, { ok: false, error: "Missing field: message" });
          return;
        }
        json(res, 200, { ok: true, reply: (await handleChat(message)).reply });
        return;
      }

      if (["/api/contact", "/api/partnership"].includes(url.pathname)) {
        let payload;
        try {
          payload = JSON.parse(await readBody(req));
        } catch (error) {
          json(res, error.status || 400, { ok: false, error: "Invalid JSON body" });
          return;
        }
        const required = ["name", "email", "profile", "message"];
        const missing = required.filter((field) => !String(payload[field] || "").trim());
        if (missing.length) {
          json(res, 400, { ok: false, error: `Missing fields: ${missing.join(", ")}` });
          return;
        }
        const lead = await saveLead(url.pathname.includes("partnership") ? "partnership" : "contact", payload);
        notifyLead(lead);
        json(res, 200, { ok: true, leadId: lead.id });
        return;
      }
    }

    const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(requestedPath);
    } catch {
      json(res, 400, { ok: false, error: "Malformed URL encoding" });
      return;
    }
    const safePath = path.normalize(decodedPath);
    const filePath = path.join(publicDir, safePath);
    if (!filePath.startsWith(publicDir)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  } catch (error) {
    if (error.status === 413) {
      json(res, 413, { ok: false, error: "Body too large" });
      return;
    }
    if (error.code === "ENOENT") {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    json(res, 500, { ok: false, error: "Server error" });
  }
});

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  server.listen(port, () => {
    console.log(`Future Bridge Technologies site running at http://localhost:${port}`);
  });
}

export { server };
