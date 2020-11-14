const functions = require("firebase-functions");
const fs = require('fs')

const express = require("express");

const { Client } = require('pg')
const client = new Client({
  host: 'bicyklujemepokope-postgresql-fra1-50153-do-user-2870756-0.b.db.ondigitalocean.com',
  port: 25060,
  user: 'doadmin',
  password: 'g3soxrf6fbepkp5c',
  database: 'defaultdb',
  ssl: {
    ca: fs.readFileSync('./pg.cert').toString()
  }
})

client.connect()
client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err)
  } else {
    console.log(res)
  }
})

// Init app
const app = express();

// Automatically allow cross-origin requests
const cors = require("cors");
app.use(cors({ origin: true }));


const geo = {
  destinations: [
    {
      osm_id: 570751166,
      name: 'Základná škola Pavla Marcelyho'
    },
    {
      osm_id: 570751722,
      name: 'Základná škola Medzilaborecká'
    }
  ]
}

app.get("/:id", (req, res) => {
  res.send({
    status: "works",
    data: [
      {
        id: "16feaf6d2d8b9c0cd5b4b36355ad78ef",
        type: "Feature",
        properties: { color: "#F7455D" },
        geometry: {
          coordinates: [
            [17.149142716886672, 48.160252794498604],
            [17.154206727506875, 48.16065356613447],
            [17.160794232847508, 48.16112590011423],
            [17.161974404813805, 48.16008103426722],
            [17.16268250799436, 48.15896457874814],
            [17.16289708471507, 48.15767633064934],
            [17.153841947080508, 48.156917680524174],
          ],
          type: "LineString",
        },
      },
    ],
  });
});

function exitHandler(exitCode) {
  client.end()
}

process.on('exit', exitHandler)

exports.route = functions.https.onRequest(app);
