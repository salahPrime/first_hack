export default function handler(_req, res) { res.status(200).json({ ok: true, service: "lock-room", timestamp: new Date().toISOString() }); }
