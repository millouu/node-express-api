import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

let users = [
];

//all routes in here are starting with /users (defined in index.js)
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
    const user = req.body;
    
    users.push({...user,id:uuidv4()});
  res.send(`User with the name ${req.body.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
    //destructuring the id from req.params
    const { id } = req.params;
    //find the user with the id
    const found=users.find((user) => user.id === id);
    res.send(found)
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`User with the id ${id} deleted from the database.`)
 })

export default router;
