import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

function TaskModal({

    isOpen,

    onClose,

    onSubmit,

    initialData

}) {

    const [form, setForm] = useState({

        title: "",

        description: "",

        category: "",

        priority: "Medium",

        status: "Pending",

        deadline: ""

    });

    useEffect(() => {

        if (initialData) {

            setForm(initialData);

        }

    }, [initialData]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl p-8 w-full max-w-lg">

                <h2 className="text-2xl font-bold mb-6">

                    Add Task

                </h2>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-4"

                >

                    <Input

                        label="Title"

                        name="title"

                        value={form.title}

                        onChange={handleChange}

                    />

                    <Input

                        label="Description"

                        name="description"

                        value={form.description}

                        onChange={handleChange}

                    />

                    <Input

                        label="Category"

                        name="category"

                        value={form.category}

                        onChange={handleChange}

                    />

                    <div className="flex gap-4">

                        <select

                            name="priority"

                            value={form.priority}

                            onChange={handleChange}

                            className="w-full p-3 rounded-xl border"

                        >

                            <option>Low</option>

                            <option>Medium</option>

                            <option>High</option>

                        </select>

                        <select

                            name="status"

                            value={form.status}

                            onChange={handleChange}

                            className="w-full p-3 rounded-xl border"

                        >

                            <option>Pending</option>

                            <option>In Progress</option>

                            <option>Completed</option>

                        </select>

                    </div>

                    <Input

                        type="date"

                        name="deadline"

                        value={form.deadline}

                        onChange={handleChange}

                    />

                    <div className="flex gap-4">

                        <Button

                            type="button"

                            onClick={onClose}

                            className="bg-gray-500"

                        >

                            Cancel

                        </Button>

                        <Button type="submit">

                            Save Task

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default TaskModal;