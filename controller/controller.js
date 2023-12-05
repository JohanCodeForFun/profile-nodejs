var dbConfig = require('../config/db');
const asyncHandler = require('express-async-handler')
let pool = dbConfig.pool;

const getFilms = (request, response) => {
  pool.query('SELECT film_id, title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, fulltext FROM film', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

const getFilmsStar = (request, response) => {
  pool.query('SELECT * FROM film', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}
const getFilmsAsync = asyncHandler(async (request, response) => {
  pool.query('SELECT film_id, title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, fulltext FROM film', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
});

const getFilmsStarAsync = asyncHandler(async (request, response) => {
  pool.query('SELECT * FROM film', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
});

const getFilmById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM film WHERE film_id = $1',[id], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows)
    response.status(200).json(results.rows);
  })
}

module.exports = {
  getFilms,
  getFilmsStar,
  getFilmsAsync,
  getFilmsStarAsync,
  getFilmById
}