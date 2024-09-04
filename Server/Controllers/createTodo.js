const Todo = require('../Models/todo.model')

exports.createTodo = async (req, res) => {
    try{
        const {title, description} = req.body;
        const response = await Todo.create({
            title,
            description,
        })
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
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