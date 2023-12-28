import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
        <div>
            <h1>Hello</h1>
            <div className="border bg-blue-400 rounded-2xl w-fit px-4 py-1">
                <Link href={"/login"}
                      className="font-medium text-black hover:underline"
                >
                    Login
                </Link>
            </div>

            <br/>

        </div>
    </main>
  )
}
