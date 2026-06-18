import Card from "../ui/Card";

function TaskCard({

    task

}) {

    return (

        <Card>

            <h3 className="text-xl font-semibold">

                {task.title}

            </h3>

            <p className="text-gray-500 mt-2">

                {task.description}

            </p>

            <div className="flex justify-between mt-5">

                <span>

                    {task.priority}

                </span>

                <span>

                    {task.status}

                </span>

            </div>

        </Card>

    );

}

export default TaskCard;