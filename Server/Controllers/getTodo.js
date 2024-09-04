const Todo = require('../Models/todo.model')

exports.getTodos = async (req, res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json(
            {
                success: true,
                data: todos,
                message: 'Data Fetched Successfully.'
            }
        )
    }
    catch(err){
        console.error(err)
        res.status(500).json(
            {
                success: false,
                data: "Server Error",
                message: err.message,
            }
        )
    }
}

exports.getTodoById = async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        if(!todo) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Data Not Found"
                }
            )
        }
        res.status(200).json(
            {
                success: true,
                data: todo,
                message: 'Data Fetched Successfully.'
            }
        )
    }
    catch(err){
        console.error(err)
        res.status(500).json(
            {
                success: false,
                data: "Server Error",
                message: err.message,
            }
        )
    }
}