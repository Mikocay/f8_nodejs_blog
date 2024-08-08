const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Middleware để phân tích dữ liệu từ form gửi lên
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  'hbs',
  handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set(
  'views',
  path.join(__dirname, 'resources', 'views')
);

route(app);

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
