const Todo = require('../Models/todo.model')

exports.updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const response = await Todo.findByIdAndUpdate(
            {_id: id},
            {
                title,
                description,
                updatedAt: Date.now()
            }
        )
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Updated Successfully'
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