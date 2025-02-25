"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            email: "bambang123@mail.com",
            password: "admin123"
        };

        if (data.email === email && data.password === password) {
            Swal.fire({
                title: "Welcome!",
                text: "Welcome to JCWD3204!",
                icon: "success",
                confirmButtonColor: "#3085d6"
            }).then(() => {
                Cookies.set("type", "default")
                Cookies.set("email", email, { expires: 7 }); // --> authentication menggunakan cookies
                // sessionStorage.setItem("email", email) // --> authentication menggunakan session
                // localStorage.setItem("email", email) // --> authentication menggunakan local storage
                router.push("/");
            });
        } else {
            Swal.fire({
                title: "Login Failed",
                text: "Please check your email and password again",
                icon: "error",
                confirmButtonColor: "#d33"
            });
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
}

export default Auth;
