addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === "POST") {
    const data = await request.json()
    console.log(JSON.stringify(data))
    return new Response("OK")
  }
  return new Response("Telegram Webhook Ready")
}
