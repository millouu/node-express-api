import express from "express";
const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

//all routes in here are starting with /users (defined in index.js)
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
    users.push(req.body);
  res.send(`User with the name ${req.body.firstName} added to the database!`);
});

export default router;
