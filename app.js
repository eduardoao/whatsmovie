const express = require('express')
const app = express()

const port = process.env.port || 3000

app.listen (port, () => {
    console.log (`Server Up: ${port}`)
})

app.get ('/api/movies', (req, res) => {
    res.json([
        { id: "2", name: "X-men" },
        { id: "3", name: "Tomb Raider" }
    ])
})

