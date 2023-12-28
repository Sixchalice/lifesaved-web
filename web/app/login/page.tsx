'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import LoginForm from "@/app/login/login-form";

const Page = () => {
    const [user, setUser] = useState();
    const [folders, setFolders] = useState([]);

    // const setUserFetchFolders = async (user) => {
    //     setUser(user);
    //     if(!user) return;
    //     const result = await tasksLib.getAll(user.id);
    //     setFolders(result);
    // }
    //
    // useEffect(() => {
    //     async function getUser() {
    //         const result = await me();
    //         setUserFetchFolders(result);
    //     }
    //     getUser();
    // }, [setUser, setFolders]);


    return (
        <div>
            <Link href={"/"}
                  className="font-medium text-black hover:underline  border bg-blue-400 rounded-2xl w-fit px-4 py-1"
            >
                Home
            </Link>


            {/*<LoginForm setUser={setUserFetchFolders}/>*/}
            <LoginForm/>


        </div>
    );
};

export default Page;