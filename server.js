const express = require('express');
const path = require('path');
const app = express();

// Fix typo: 'view engine', not 'views engine'
app.set('view engine', 'ejs');

// Set views directory (optional but good practice)
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});
