'use client';
import React, {useState} from 'react';
// import {login, signup} from "@/app/lib/auth";

type Props = {
    setUser: () => null;
}
const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value.toLowerCase());
    }
    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }
    const handleConfirmChange = (event: React.FormEvent<HTMLInputElement>) => {
        setConfirm(event.currentTarget.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted")
        // const func = isLogin ? login : signup;
        // if (!isLogin) {
        //     if (password !== confirm) {
        //         return alert("Passwords do not match");
        //     }
        // }
        // const result = await func(username, password);
        // props.setUser(result);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold py-5">{isLogin ? "Login" : "Sign Up"}</h2>
                <input
                    name="username"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                {!isLogin && (
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="confirm password"
                        value={confirm}
                        onChange={handleConfirmChange}
                        required
                    />
                )}
                <button type="submit">Submit</button>
                <button className="bg-auto bg-red-600 border border-red-500" type="button"
                        onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Need an account?" : "Already have an account?"}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;