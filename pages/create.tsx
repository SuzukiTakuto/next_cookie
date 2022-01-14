import type {FormEvent} from "react";

import {NextPage} from "next";
import {useState} from "react";
import {useRouter} from "next/router";

import {create} from "../utils";

const CreatePage: NextPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await create(email, password);
        router.push("/dashboard");
    };

    return (
        <div>
            <h1>アカウント作成画面</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" value={email} onInput={(e) => setEmail(e.currentTarget.value)} />
                </div>
                <div>
                    <label htmlFor="email">Password:</label>
                    <input id="email" value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
                </div>

                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default CreatePage;