const express = require('express');
const os = require ('os');

const PORT = 3000;

const app = express();
app.get('/', (req, res) => res.send(os.hostname()));
app.listen(PORT, () => console.log(`listening on port ${PORT}`));