"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            email: "bambang123@mail.com",
            password: "admin123"
        }

        if (data.email === email && data.password === password) {
            alert("Welcome to JCWD3204!")
            Cookies.set('email', email, { expires: 7 })
            router.push('/')
        } else {
            alert("Please check your email and password again")
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Input Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            className="text-black w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Input Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            className="text-black w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Link Register */}
                <p className="mt-4 text-center text-gray-600">
                    Belum punya akun?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Daftar di sini
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Auth;
