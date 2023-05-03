const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;

app.use(cors());

const chef = require("./data/chefData.json");
const recipe = require("./data/recipeData.json");

app.get('/', (req, res) => {
  res.send('Chef Recipe Hunter Is Running!');
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get("/chef/:id", (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id == id);
    res.send(selectedChef);
});

app.get('/recipe', (req, res) => {
    res.send(recipe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})