const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middlewares/auth');

router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const movies = await db.movies.findAll({
      limit,
      offset: (page - 1) * limit
    });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const movie = await db.movies.findByPk(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { title, genres, year } = req.body;
    const movie = await db.movies.create({ title, genres, year });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const { title, genres, year } = req.body;
    const movie = await db.movies.findByPk(req.params.id);
    movie.title = title || movie.title;
    movie.genres = genres || movie.genres;
    movie.year = year || movie.year;
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const movie = await db.movies.findByPk(req.params.id);
    await movie.destroy();
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
