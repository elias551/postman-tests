import { createServer } from "http"

const users = [
    {id: "1", name: "user1"},
    {id: "2", name: "user2"},
]

const respond = (res, code, r?: any) => {
    res.writeHead(code);
    if (r) res.write(r)
    res.end()
}

const userRoute = /\/users\/(\d+)/

createServer((req, res) => {

    if (req.url === "/login?user=toto&pass=toto") {
        return respond(res, 200, JSON.stringify({token: "toto"}))
    }

    if (req.headers.authorization !== "Bearer toto") {
        return respond(res, 403)
    }

    if (req.url === "/users") {
        return respond(res, 200, JSON.stringify(users))
    }

    if (userRoute.test(req.url)) {
        const userId = userRoute.exec(req.url)[1]
        const user = users.find(u => u.id === userId)
        if (user) {
            return respond(res, 200, JSON.stringify(user))
        }
    }

    respond(res, 404, null)

}).listen(2000, () => console.log("let's gooo"))