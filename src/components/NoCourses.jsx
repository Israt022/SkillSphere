import { Card } from "@heroui/react";
import Image from "next/image";
import NotFound from "@/assets/not-found.png";

const NoCourses = () => {
    return (
        <Card className=" mx-auto shadow-sm min-h-[60vh] space-y-3 lg:w-8/12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-10 py-10">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Opps,</h1>
                    <p className="text-lg font-semibold text-gray-500">No Courses Found!</p>
                </div>
                 <div className="hidden lg:block w-px bg-indigo-600 self-stretch"></div>
                <Image
                    src={NotFound}
                    alt="not found"
                    width={350}
                    height={300}
                    className="text-indigo-500"/>
            </div>
        </Card>
    );
};

export default NoCourses;