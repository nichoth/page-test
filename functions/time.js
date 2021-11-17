export const onRequest = () => {
  return new Response(new Date().toISOString(), { status: 200 })
}

