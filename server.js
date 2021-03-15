const path = require('path');
const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require();
// const helpers = require();
const sequelize = require('./config/connection');
const { Comments, Post, User} = require(`./models`);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create();

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening on port 3001'));
});


