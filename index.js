const express = require('express')
const app = express();

const categories = [
    {id:1, name:"drama"},
    {id:2, name:"terror"},
    {id:3, name:"romance"},
];

app.get('/api/categories', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(categories));
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});