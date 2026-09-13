Future Bridge Technologies site

To run the website:
1. Double-click start-site.bat  (or run: npm start)
2. Open http://127.0.0.1:4173/ if the browser does not open automatically.

Notes:
- The contact form needs the local server to save requests in data/leads.json.
- Opening public/index.html directly can show the page, but the form API needs npm start.

Optional configuration (set as environment variables):
- OPENAI_API_KEY (or CHAT_API_KEY): enables the real LLM for the Albatross AI chat widget.
  - CHAT_API_URL: OpenAI-compatible base URL (default https://api.openai.com/v1)
  - CHAT_MODEL: model name (default gpt-4o-mini)
  - Without a key, the chat uses built-in keyword answers.
- NOTIFICATION_WEBHOOK_URL: POSTs each new lead to your webhook.
- SMTP_HOST / SMTP_PORT / SMTP_SECURE / SMTP_USER / SMTP_PASS / SMTP_FROM / NOTIFY_EMAIL:
  send a notification email for each new lead (requires: npm install).
- DATA_DIR: override where leads are saved (default ./data).
- PORT: override the server port (default 4173).

Run the tests: npm test
