const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

const form = document.querySelector("[data-form]");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  status.textContent = "Submitting request...";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Unable to submit");
    status.textContent = `Request received. Reference: ${result.leadId}`;
    form.reset();
  } catch (error) {
    status.textContent = "Could not submit right now. Please try again.";
  }
});

const launcher = document.querySelector(".chat-launcher");
const panel = document.querySelector(".chat-panel");
const chatForm = document.querySelector(".chat-form");
const chatLog = document.querySelector(".chat-log");

const answers = [
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

function addMessage(author, text) {
  const p = document.createElement("p");
  const b = document.createElement("b");
  b.textContent = `${author}:`;
  p.append(b, " ", text);
  chatLog.append(p);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getReply(message) {
  const normalized = message.toLowerCase();
  return answers.find((answer) => answer.keys.some((key) => normalized.includes(key)))?.text
    || "I can help with Future Bridge Technologies, Albatross AI, Albatrix Funded, packages, services and partnership requests.";
}

launcher?.addEventListener("click", () => {
  const isHidden = panel.hasAttribute("hidden");
  panel.toggleAttribute("hidden", !isHidden);
  launcher.setAttribute("aria-expanded", String(isHidden));
});

chatForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = chatForm.elements.message;
  const message = input.value.trim();
  if (!message) return;
  addMessage("You", message);
  input.value = "";
  let reply = getReply(message);
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const result = await response.json();
    if (response.ok && result.reply) reply = result.reply;
  } catch {
    // Local keyword fallback when the server is unreachable.
  }
  window.setTimeout(() => addMessage("Albatross AI", reply), 220);
});
