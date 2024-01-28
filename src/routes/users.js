const express = require("express")
const {getAllUsers, createNewUser, updateUser, deleteUser} = require("../controller/users")

const router = express.Router()

// CREATE
router.post("/", createNewUser)

// READ
router.get("/", getAllUsers)

// UPDATE
router.patch("/:id", updateUser)

// DELETE
router.delete("/:id", deleteUser)

module.exports = router