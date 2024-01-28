require('dotenv').config()
const express = require("express")
const usersRoute = require("./routes/users")
const middlewareLogRequet = require("./middleware/logs")
const {getAllUsers} = require("./models/users")
const upload = require('./middleware/multer')

const PORT = process.env.PORT || 5000
const app = express()

app.use(middlewareLogRequet)
app.use(express.json())
app.use('/assets',express.static("public/images"))

app.use("/users", usersRoute) 
app.post("/upload", upload.single('photo'), (req, res) => {
  res.json({
    message: "Upload berhasil"
  })
})
app.use((error, req, res, next) => {
  res.json({
    message: error.message
  })
})

app.use("/", getAllUsers)

app.listen(PORT, () => {
  console.log(`Server berhasil running di port: ${PORT}`)
})
