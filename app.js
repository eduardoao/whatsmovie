const express = require('express')
const app = express()

const topMovies = require('./movies.js')

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server Up: ${port}`)
})

app.get('/api/movies', (req, res) => {
    res.json(topMovies.results)
})

app.get('/api/movies/:moviesID', (req, res) => {
    const id = Number(req.params.moviesID)
    const movie = topMovies.results.find(movie => movie.id === id)

    if (!movie) {
        return res.status(404).send('Movie not found')
    }

    res.json(movie)
})

