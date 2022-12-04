const PORT = 8080;
const CORS_PORT = 8081;

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();
var corsOptions = {
    origin: ("http://localhost:%d", CORS_PORT)
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});

//For syncing when db drops and reloads
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to TwoDo' });
});

require("./routes/todo.routes")(app);

app.listen(PORT, () => console.log("App running and serving on %d", PORT));