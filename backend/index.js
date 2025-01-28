const express = require('express');
const cors = require('cors');
const path = require("path");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;
const _dirname = path.dirname("");
const buildpath = path.join(_dirname,"../frontend/build");
console.log(buildpath)
console.log("===",_dirname)
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
    res.send('Hello This is home page!');
});
app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
