import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

let base;
let server;
let tempDir;

before(async () => {
  tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "fbt-tests-"));
  process.env.DATA_DIR = tempDir;
  ({ server } = await import("../server.js"));
  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      base = `http://127.0.0.1:${server.address().port}`;
      resolve();
    });
  });
});

after(async () => {
  await new Promise((resolve) => server.close(resolve));
  await fs.rm(tempDir, { recursive: true, force: true });
  delete process.env.DATA_DIR;
});

function rawRequest(method, rawPath, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { host: "127.0.0.1", port: server.address().port, method, path: rawPath },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body: data }));
      }
    );
    req.on("error", reject);
    if (body) {
      req.setHeader("Content-Type", "application/json");
      req.write(body);
    }
    req.end();
  });
}

test("serves the homepage", async () => {
  const res = await fetch(`${base}/`);
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type"), /text\/html/);
  assert.match(await res.text(), /Future Bridge Technologies/);
});

test("serves assets with correct mime types", async () => {
  const png = await fetch(`${base}/logo_officiel.png`);
  assert.equal(png.status, 200);
  assert.equal(png.headers.get("content-type"), "image/png");

  const js = await fetch(`${base}/app.js`);
  assert.equal(js.status, 200);
  assert.match(js.headers.get("content-type"), /text\/javascript/);
});

test("rejects path traversal", async () => {
  for (const rawPath of ["/../server.js", "/..%2f..%2fserver.js", "/%2e%2e%2f%2e%2e%2fserver.js"]) {
    const res = await rawRequest("GET", rawPath);
    assert.ok([403, 404].includes(res.status), `${rawPath} -> expected 403 or 404, got ${res.status}`);
    assert.ok(!res.body.includes("createServer"), `${rawPath} must not leak server source`);
  }
});

test("returns 404 for missing files", async () => {
  const res = await fetch(`${base}/does-not-exist.js`);
  assert.equal(res.status, 404);
});

test("accepts a valid contact request", async () => {
  const res = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test User",
      email: "test@example.com",
      profile: "Investor",
      message: "Testing the contact API"
    })
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.ok, true);
  assert.match(data.leadId, /^contact-/);
});

test("rejects a contact request with missing fields", async () => {
  const res = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Only Name" })
  });
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.ok, false);
  assert.match(data.error, /Missing fields/);
});

test("rejects invalid JSON bodies with 400", async () => {
  const res = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{not valid json"
  });
  assert.equal(res.status, 400);
});

test("rejects oversized bodies with 413", async () => {
  const big = "x".repeat(70 * 1024);
  const res = await fetch(`${base}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: big })
  });
  assert.equal(res.status, 413);
});

test("chat endpoint returns a reply", async () => {
  const res = await fetch(`${base}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Tell me about the agents" })
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.ok, true);
  assert.match(data.reply, /Agent Guild/);
});

test("chat endpoint rejects empty messages", async () => {
  const res = await fetch(`${base}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "   " })
  });
  assert.equal(res.status, 400);
});
