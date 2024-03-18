const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/student', (req, res) => {
  res.render('student', { title: 'Student Page' });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
