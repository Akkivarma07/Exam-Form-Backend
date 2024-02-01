const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const routes = require('./routes');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cookieParser());
let origin =  process.env.CLIENT_ORIGIN;
console.log(process.env.CLIENT_ORIGIN);
// console.log('here env', process.env.NODE_ENV);
// if(process.env.NODE_ENV === 'production') {
//     origin = process.env.CLIENT_ORIGIN;
// }
app.use(
  cors({
      credentials: true,
      origin
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
