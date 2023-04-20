const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const cors = require('cors');
const router = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})