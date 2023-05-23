const express = require('express')
const app = express()
const mongoose = require('mongoose')

let isDatabaseConnected = false; // Initialisiert den Datenbank status

//Wenn man z.B den localhost ändert und er sich nichtmehr mit der Datenbank verbinden kann wird "down" unter localhost:3001/health angegeben
mongoose.connect('mongodb://127.0.0.1/artists').then(
  () => { 
    isDatabaseConnected = true; // Datenbank wurde mit dem Server verbunden
    console.log("Connected to DB!");
  },
  err => { 
    console.log(err);
    console.log("Connecting to DB failed")
  }
);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
const artistsRouter = require('./routes/artists.js')
app.use('/artists', artistsRouter)


const db = mongoose.connection;
db.on('error', (error) => {
  console.error(error);
  isDatabaseConnected = false; // Wenn ein Fehler auftritt soll die Datenbank verbindun auf False gesetzt werden
});
db.once('open', () => {
  isDatabaseConnected = true; // Wenn die Datenbankverbindung möglich bzw offen ist soll die Verbindung auf True gesetzt werden
  console.log('Connected to Database');
});


// Health indicator endpoint
app.get('/health', (req, res) => {
  if (isDatabaseConnected) {
    res.status(200).json({ status: 'UP' });
  } else {
    res.status(500).json({ status: 'DOWN' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

process.on('uncaughtException', function (err) {
  console.log(err);
});
