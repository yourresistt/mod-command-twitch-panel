# Mod Command — Twitch Moderation Panel

Dark pro Twitch moderation admin panel prototype for moderators.

## What is included

- Moderation queue with suspicious chat messages
- User detail drawer
- Quick actions: timeout, delete, ban
- Moderator action log backed by SQLite
- Chat command management
- Twitch OAuth readiness screen
- Express backend + Vite React frontend

## Local setup

Install dependencies:

```bash
npm install
```

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Fill in:

```env
TWITCH_CLIENT_ID=your_client_id_here
TWITCH_CLIENT_SECRET=your_client_secret_here
TWITCH_REDIRECT_URI=http://localhost:5000/api/twitch/callback
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:5000
```

## Twitch Console setup

In Twitch Developer Console, create a normal Application, not an Extension.

Use this local redirect URL:

```text
http://localhost:5000/api/twitch/callback
```

For production deployment, replace it with your deployed backend callback URL, for example:

```text
https://your-domain.com/api/twitch/callback
```

## Deployment note

This project uses an Express backend, so Render or Railway is simpler than Vercel. Vercel can work, but the backend should be adapted to Vercel serverless functions first.
