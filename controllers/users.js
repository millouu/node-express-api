import { v4 as uuidv4 } from 'uuid';

let users = [
];

export const getAllUsers = (req, res) => {
    res.send(users);
  }

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user,id:uuidv4()});
  res.send(`User with the name ${req.body.firstName} added to the database!`);
}

export const getUser=(req, res) => {
    //destructuring the id from req.params
    const { id } = req.params;
    //find the user with the id
    const found=users.find((user) => user.id === id);
    res.send(found)
}

export const deleteUser=(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`User with the id ${id} deleted from the database.`)
}

export const updateUser=(req, res) => {
    const { id } = req.params;
    const userToBeUpdated = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;
    if(firstName){
        userToBeUpdated.firstName = firstName;
    }
    if(lastName){
        userToBeUpdated.lastName = lastName;
    }
    if(age){
        userToBeUpdated.age = age;
    }
    res.send(`User with the id ${id} has been updated.`)
 }
