import React from 'react';
import Link from "next/link";
import LoginForm from "@/app/components/login-form";

const Page = () => {
    return (
        <div>
            <h1>IM INSIDE THE LOGIN PAGasdaE ssss</h1>

            <div>
                <LoginForm/>
            </div>


            <div className="border bg-amber-500 rounded-2xl w-fit px-4 py-1">
            <Link href={"/"}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
                Go To Home

            </Link>
            </div>
        </div>
    );
};

export default Page;