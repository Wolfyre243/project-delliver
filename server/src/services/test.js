const data = await fetch('http://localhost:3000/api/assistant', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: 'Hello' }),
}).then((res) => res.body)

const reader = data.getReader()
let result = ''

while (true) {
  const { done, value } = await reader.read()
  if (done) break
  const chunk = new TextDecoder().decode(value, { stream: true })
  console.log(chunk)
  result += chunk
}
