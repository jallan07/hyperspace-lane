// define the dependencies
const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

// establish the port variable
const PORT = process.env.PORT || 3030;

// use static content
app.use(express.static('public'));

// set the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//define the routes
app.get('/', function (req, res) {
  res.render('index');
});

app.get('*', function (req, res) {
  res.redirect('/');
});

// establish a connection to the server
app.listen(PORT, (req, res) => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
