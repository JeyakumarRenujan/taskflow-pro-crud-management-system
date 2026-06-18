import { useState, useEffect } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

function TaskModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const initialForm = {
    title: "",
    description: "",
    category: "",
    priority: "Medium",
    status: "Pending",
    deadline: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(initialForm);
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(form);

    setForm(initialForm);
  };

  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      justify-center
      items-center
      p-4
      z-50
      "
    >
      <div
        className="
        w-full
        max-w-xl
        bg-white
        rounded-2xl
        shadow-2xl
        p-8
        animate-in
        "
      >
        <h2 className="text-3xl font-bold mb-6">
          {initialData ? "Edit Task" : "Add Task"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <Input
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Task title"
          />

          <Input
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Task description"
          />

          <Input
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Work, Study, Personal..."
          />

          <div className="grid grid-cols-2 gap-4">
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-xl
                border
                outline-none
              "
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-xl
                border
                outline-none
              "
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <Input
            label="Deadline"
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />

          <div className="flex gap-4 pt-2">
            <Button
              type="button"
              onClick={() => {
                setForm(initialForm);
                onClose();
              }}
              className="bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </Button>

            <Button type="submit">
              {initialData ? "Update Task" : "Create Task"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;