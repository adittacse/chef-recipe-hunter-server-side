const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

const chef = require("./data/chef.json");

app.get('/', (req, res) => {
  res.send('Bistro Voltaire Is Cooking!');
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
  console.log(`Bistro Voltaire listening on port ${port}`);
})