const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    const timeStamp = new Date().getTime()
    const fileName = file.originalname
    cb(null, `${timeStamp}-${fileName}` )
  }
})


const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1000
  }})

module.exports = upload