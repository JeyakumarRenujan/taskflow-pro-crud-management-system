import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { FaTimes } from "react-icons/fa";

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

  const [form, setForm] =
    useState(initialForm);

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
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            p-4
            backdrop-blur-sm
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              w-full
              max-w-3xl
              overflow-hidden
              rounded-[32px]
              bg-white
              shadow-2xl
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-gradient-to-r
                from-[#57BA98]
                to-[#65CCB8]
                p-7
                text-white
              "
            >
              <div>
                <h2 className="text-3xl font-bold">
                  {initialData
                    ? "Edit Task"
                    : "Create New Task"}
                </h2>

                <p className="mt-2 opacity-90">
                  Organize your work
                  efficiently.
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  hover:bg-white/30
                "
              >
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8"
            >
              <Input
                label="Task Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter task title"
              />

              <Input
                label="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your task"
              />

              <Input
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Work, Study, Personal..."
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-white
                      px-4
                      focus:border-[#57BA98]
                      focus:ring-4
                      focus:ring-[#57BA9820]
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
                  <label className="text-sm font-medium">
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-white
                      px-4
                      focus:border-[#57BA98]
                      focus:ring-4
                      focus:ring-[#57BA9820]
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

              <div
                className="
                  flex
                  justify-end
                  gap-4
                  pt-3
                "
              >
                <Button
                  type="button"
                  fullWidth={false}
                  onClick={() => {
                    setForm(initialForm);
                    onClose();
                  }}
                  className="
                    bg-gray-200
                    px-8
                    text-gray-700
                    hover:bg-gray-300
                  "
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  fullWidth={false}
                  className="px-8"
                >
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