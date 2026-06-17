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

module.exports = {
  createTask,
  getTasks,
};