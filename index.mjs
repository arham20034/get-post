import express, { response } from "express";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())

var posts=[

{text: "new post 1"},
{text: "new post 2"},
{text: "new post 3"}]

app.get('/post/:id', (req, res) => {

    const id = Number(req.params.id)

    res.send(posts [id])
})

app.get('/posts', (req, res) => {

    res.send(posts)
})

app.post('/post', (req, res) => {

    posts.push(req.body);

    res.send(`you succeed and total post is ${posts.length} now `)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Hello server is listening at http://localhost:${PORT}`)
})

