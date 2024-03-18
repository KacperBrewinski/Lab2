const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

router.post('/student', (req, res) => {

  res.redirect('/student');
});

router.use((req, res) => {
  res.status(404).type('text/html').send('404 Not Found');
});

module.exports = router;
