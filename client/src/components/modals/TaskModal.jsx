import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            flex
            justify-center
            items-center
            p-4
            z-50
          "
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              w-full
              max-w-2xl
              bg-white
              rounded-3xl
              shadow-2xl
              p-8
            "
          >
            <div className="mb-8">
              <h2
                className="
                  text-3xl
                  font-bold
                  text-[var(--text-primary)]
                "
              >
                {initialData
                  ? "Edit Task"
                  : "Create New Task"}
              </h2>

              <p
                className="
                  mt-2
                  text-[var(--text-secondary)]
                "
              >
                Fill in the task details below.
              </p>
            </div>

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

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-medium text-sm">
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="
                      mt-2
                      w-full
                      px-4
                      py-3
                      rounded-2xl
                      border
                      border-[var(--border)]
                      outline-none
                      focus:ring-4
                      focus:ring-[var(--accent)]
                    "
                  >
                    <option>
                      Low
                    </option>

                    <option>
                      Medium
                    </option>

                    <option>
                      High
                    </option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-sm">
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="
                      mt-2
                      w-full
                      px-4
                      py-3
                      rounded-2xl
                      border
                      border-[var(--border)]
                      outline-none
                      focus:ring-4
                      focus:ring-[var(--accent)]
                    "
                  >
                    <option>
                      Pending
                    </option>

                    <option>
                      In Progress
                    </option>

                    <option>
                      Completed
                    </option>
                  </select>
                </div>
              </div>

              <Input
                label="Deadline"
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
              />

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    onClose();
                  }}
                  className="
                    bg-gray-200
                    hover:bg-gray-300
                    text-gray-700
                  "
                >
                  Cancel
                </Button>

                <Button type="submit">
                  {initialData
                    ? "Update Task"
                    : "Create Task"}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TaskModal;
