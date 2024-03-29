import type {FormEvent} from "react";

import {NextPage} from "next";
import {useState} from "react";
import {useRouter} from "next/router";

import {login} from "../utils";

const LoginPage: NextPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await login(email, password);
        router.push("/dashboard");
    };

    const onClick = (event: FormEvent) => {
        event.preventDefault();
        router.push("/create");
    };

    return (
        <div>
            <h1>ログイン画面</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" value={email} onInput={(e) => setEmail(e.currentTarget.value)} />
                </div>
                <div>
                    <label htmlFor="email">Password:</label>
                    <input id="email" value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
                </div>

                <button type="submit">login</button>
            </form>
            <button type="button" onClick={onClick}>create</button>
        </div>
    );
};

export default LoginPage;