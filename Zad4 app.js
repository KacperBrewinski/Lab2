const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/student', (req, res) => {
  res.render('student', { title: 'Student Profile' });
});

app.post('/student', (req, res) => {
  const { name, lastname, age, gender, code, studyField } = req.body;


  const data = `Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}`;
  fs.writeFile(`${code}.txt`, data, (err) => {
    if (err) throw err;
    console.log('Dane zostały zapisane do pliku.');
  });


  res.render('student', { title: 'Student Profile', code, name, lastname, gender, age, studyField });
});

app.use((req, res, next) => {
  res.status(404).type('text/html').send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
