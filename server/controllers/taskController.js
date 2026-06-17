const pool = require("../config/db");

const createTask = async (req, res) => {
  try {
    const user_id = req.user.id;

    const {
      title,
      description,
      category,
      priority,
      status,
      deadline,
    } = req.body;

    await pool.query(
      `INSERT INTO tasks
      (user_id,title,description,category,priority,status,deadline)
      VALUES (?,?,?,?,?,?,?)`,
      [
        user_id,
        title,
        description,
        category,
        priority,
        status,
        deadline,
      ]
    );

    res.status(201).json({
      message: "Task created successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const user_id = req.user.id;

    const [tasks] = await pool.query(
      "SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC",
      [user_id]
    );

    res.status(200).json(tasks);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getTaskById = async (req, res) => {

  try {

    const user_id = req.user.id;
    const taskId = req.params.id;

    const [tasks] = await pool.query(

      "SELECT * FROM tasks WHERE id = ? AND user_id = ?",

      [taskId, user_id]

    );

    if (tasks.length === 0) {

      return res.status(404).json({

        message: "Task not found"

      });

    }

    res.status(200).json(tasks[0]);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error"

    });

  }

};

const updateTask = async (req, res) => {
  try {
    const user_id = req.user.id;
    const taskId = req.params.id;

    const {
      title,
      description,
      category,
      priority,
      status,
      deadline,
    } = req.body;

    const [task] = await pool.query(
      "SELECT * FROM tasks WHERE id = ? AND user_id = ?",
      [taskId, user_id]
    );

    if (task.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await pool.query(
      `UPDATE tasks
       SET title=?,description=?,category=?,priority=?,status=?,deadline=?
       WHERE id=?`,
      [
        title,
        description,
        category,
        priority,
        status,
        deadline,
        taskId,
      ]
    );

    res.status(200).json({
      message: "Task updated successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteTask = async (req, res) => {
  try {

    const user_id = req.user.id;
    const taskId = req.params.id;

    const [task] = await pool.query(
      "SELECT * FROM tasks WHERE id=? AND user_id=?",
      [taskId, user_id]
    );

    if (task.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await pool.query(
      "DELETE FROM tasks WHERE id=?",
      [taskId]
    );

    res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};