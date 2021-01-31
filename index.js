
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let thingsToDo = [];

app.post('/addItem', (req, res) => {
    let toDo = req.body.text;
    let toDoId = req.body.id;
    thingsToDo.push({ text: toDo, id: toDoId });
    res.sendStatus(200);
})

app.delete('/deleteItem', (req, res) => {
    let toDoId = req.body.id;
    thingsToDo = thingsToDo.filter(item => item.id != toDoId);
    res.sendStatus(200);
})

app.get('/getList', (req, res) => {
    res.send(thingsToDo)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

