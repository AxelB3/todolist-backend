require("dotenv").config()
const http = require('http');
const express = require('express');
const cors = require("cors")
const tareasRouter = require('./routes/tareas.routes');
const app = express()

app.use(express.json())
app.use(cors())
app.use(tareasRouter)

const PORT = 3001

http.createServer(app).listen(PORT, () => {
  console.log(`Servidor listo en el http://localhost:${PORT}`);
});
