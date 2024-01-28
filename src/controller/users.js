const UsersModel = require("../models/users")

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers()

    res.json({
      message: "GET All Users Success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message
    })
  }
}

const createNewUser = async (req, res) => {
  const {body} = req

  if(!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null
    })
  }
  
  try {
    await UsersModel.createNewUser(body)
    res.status(201).json({
      message: "Create New User Success",
      data: req.body
    })
  } catch(error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message
    })
  }
}

const updateUser = async (req, res) => {
  const {id} = req.params
  const {body} = req

  try {
    await UsersModel.updateUser(body, id)
    res.status(200).json({
      message: "PATCH SUCCESS with ID: " +  id,
      data: {
        id,
        ...body
      }
    })
  } catch (error) {
    req.status(500).json({
      message: "Server Error",
      serverMessage: error.message
    })
  }
}

const deleteUser = async (req, res) => {
  const {id} = req.params

  try {
    await UsersModel.deleteUser(id)
    res.json({
      message: "DELETE user success",
      data: null
    })
  } catch (error) {
    req.status(500).json({
      message: "Server Error",
      serverMessage: error.message
    })
  }
 
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}