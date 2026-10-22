export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    "vc_test=123; Path=/; Secure; SameSite=Lax"
  );

  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <!doctype html>
    <html>
      <body>
        <h1>VergeCloud Set-Cookie Test</h1>
        <p>Version 1</p>
      </body>
    </html>
  `);
}
