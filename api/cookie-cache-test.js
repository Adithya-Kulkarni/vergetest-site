export default function handler(req, res) {
  const cookie = req.headers.cookie || "no-cookie";

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(`Cookie received: ${cookie}`);
}
