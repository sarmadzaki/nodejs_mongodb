import { TodoSchema, UserToken } from '../../models';
import { MESSAGES } from '../../common/Messages';
const {
  ERROR_WITH_CUSTOM_MESSAGE
} = MESSAGES;
export const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req;
    if (title && description) {
      const response = await TodoSchema.create({
        title,
        description,
        user_id: id,
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
    const { id } = req;
    const response = await TodoSchema.find({ user_id: id });
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
    if (!id) return res.json(ERROR_WITH_CUSTOM_MESSAGE('Id is not provided'));
    const response = await TodoSchema.findOneAndDelete({ _id: id, user_id: req.id });
    let message = `Todo of ID ${id} not found.`
    if (!response) return res.json(ERROR_WITH_CUSTOM_MESSAGE(message));
    return res.json({
      code: 200,
      success: true,
      message: `Todo of ID ${id} is deleted successfully.`,
      data: response,
    })
  } catch (error) {
    res.json(ERROR_WITH_CUSTOM_MESSAGE(error.message));
  }
}
export const updateTodo = async (req, res) => {
  try {
    const { id, title } = req.body;
    if (!id) return res.json(ERROR_WITH_CUSTOM_MESSAGE('Id is not provided'));
    const response = await TodoSchema.findOneAndUpdate({id, user_id: req.id}, { title }, { new: true });
    let message = `Todo of ID ${id} not found.`
    if (!response) return res.json(ERROR_WITH_CUSTOM_MESSAGE(message));
    return res.json({
      code: 201,
      success: true,
      message: 'Todo is updated successfully',
      data: response,
    });
  } catch (error) {
    res.json({
      code: 400,
      success: false,
      message: error.message,
      data: []
    });
  }
}