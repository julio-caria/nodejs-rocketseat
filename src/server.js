import http from "node:http"

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if(method === "GET" && url === "/users") {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if(method === "POST" && url === "/users") {
    
    try {
      users.push({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'psw123'
      })

      return res.end('Usuário criado com sucesso')
    } catch (error) {
      return res.status(500).send();
    }
  }
})

server.listen(3333);