export function GET() {
  return new Response(
    '<html><body><h1>Set-Cookie Test</h1><p>Version 1</p></body></html>',
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Set-Cookie': 'vc_test=123; Path=/; Secure; SameSite=Lax'
      }
    }
  );
}
