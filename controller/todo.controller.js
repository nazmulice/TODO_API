const Todo = require("../model/todo.model");

const getAll = async (req, res) => {
    try {
        const getTodo = await Todo.find();
        res.send(getTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getSingle = async (req, res) => {
    try {
      const getSingle = await Todo.findOne(req.params._id);
      res.send(getSingle);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const createTodo = async (req, res) => {
    try {
        const newTodo = await new Todo(req.body);
        newTodo.save();
        res.status(201).send(newTodo);
    
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const multipleCreate = async (req, res) => {
    try {
        const all = await Todo.insertMany(req.body);
        res.status(201).send(all);
        
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
    try {
        const { title, status, description } = req.body;
        const update = await Todo.updateOne(req.params._id, {
            $set: {
                title,
                status,
                description
            }
        });

        res.status(200).send(update);        
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
    try {
       await Todo.deleteOne(req.params._id);
       res.send("delete successfully");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


module.exports = {
  getAll,
  getSingle,
  createTodo,
  multipleCreate,
  updateTodo,
  deleteTodo,
};