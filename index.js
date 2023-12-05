const express = require('express');
const app = express();
const port = 3000;

const { getFilms, getFilmById, getFilmsStar, getFilmsAsync, getFilmsStarAsync } = require('./controller/controller')

app.get('/', (req, res) => {
  res.send("Hello World!")
})

/* GET users listing. */
app.get('/films', getFilms);
app.get('/films-star', getFilmsStar);
app.get('/films-async', getFilmsAsync);
app.get('/films-async-star', getFilmsStarAsync);

// Get a particular user
app.get('/films/:id', getFilmById)

app.listen(port, () => {
  console.log("Server listening on:", port)
});