const Todo = require('../Models/todo.model')

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await Todo.findByIdAndDelete({
            _id: id
        })
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Deleted Successfully'
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