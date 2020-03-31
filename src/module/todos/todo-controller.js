import { TodoSchema } from '../../models';
export const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (title && description) {
      const response = await TodoSchema.create({
        title,
        description,
      });
      if (response) return res.json({
        code: 201,
        success: true,
        message: 'Todo is created successfully',
        data: response,
      })
    }
  } catch (error) {
    res.json({
      code: 400,
      success: false,
      message: error.message,
      data: []
    });
  }
}
export const getTodo = async (req, res) => {
  try {
    const response = await TodoSchema.find();
    if (response) return res.json({
      code: 200,
      success: true,
      message: 'Todo is fetched successfully',
      data: response,
    })
  } catch (error) {
    res.json({
      code: 400,
      success: false,
      message: error.message,
      data: []
    });
  }
}
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.json({
      code: 400,
      success: false,
      message: `id is not provided.`
    });
    const response = await TodoSchema.findOneAndDelete({ _id: id });
    if (!response) return res.json({
      code: 400,
      success: false,
      message: `Todo of ID ${id} not found.`
    });
    return res.json({
      code: 200,
      success: true,
      message: `Todo of ID ${id} is deleted successfully.`,
      data: response,
    })
  } catch (error) {
    res.json({
      code: 400,
      success: false,
      message: error.message,
      data: []
    });
  }
}