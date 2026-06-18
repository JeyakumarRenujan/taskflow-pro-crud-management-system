import { motion } from "framer-motion";

function StatCard({

    title,

    value,

    icon,

    color

}) {

    return (

        <motion.div

            whileHover={{ y: -4 }}

            className="
            bg-white
            rounded-2xl
            p-6
            shadow-md
            "

        >

            <div className="flex justify-between">

                <div>

                    <p className="text-gray-500">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                        {value}

                    </h2>

                </div>

                <div

                    className="text-4xl"

                    style={{

                        color

                    }}

                >

                    {icon}

                </div>

            </div>

        </motion.div>

    );

}

export default StatCard;