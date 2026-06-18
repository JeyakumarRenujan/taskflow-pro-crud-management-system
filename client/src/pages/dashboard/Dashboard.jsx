import {

    FaTasks,

    FaClock,

    FaSpinner,

    FaCheckCircle

} from "react-icons/fa";

import StatCard from "../../components/cards/StatCard";

function Dashboard() {

    return (

        <div>

            <h1 className="text-4xl font-bold">

                Good Morning 👋

            </h1>

            <p className="text-gray-500 mt-2">

                Welcome back to TaskFlow Pro

            </p>

            <div

                className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
                mt-8
                "

            >

                <StatCard

                    title="Total Tasks"

                    value="12"

                    icon={<FaTasks />}

                    color="#6366F1"

                />

                <StatCard

                    title="Pending"

                    value="5"

                    icon={<FaClock />}

                    color="#F59E0B"

                />

                <StatCard

                    title="In Progress"

                    value="4"

                    icon={<FaSpinner />}

                    color="#3B82F6"

                />

                <StatCard

                    title="Completed"

                    value="3"

                    icon={<FaCheckCircle />}

                    color="#22C55E"

                />

            </div>

        </div>

    );

}

export default Dashboard;