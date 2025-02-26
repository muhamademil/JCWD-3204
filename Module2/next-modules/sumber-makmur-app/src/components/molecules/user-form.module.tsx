"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

import { axiosInstance } from "@/utils/products.api";
import Swal from "sweetalert2";

export default function UserForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const bodyRequest = {
                email: email,
                password: password
            }
            const response = await axiosInstance.post('/users_sumber', bodyRequest)
            if (response) {
                Cookies.set('email', email, { expires: 7 })
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully register',
                    confirmButtonText: 'OK'
                }).then((response) => {
                    if (response.isConfirmed) {
                        router.push('/products')
                    }
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'Failed',
                text: 'Failed register, please try again later',
                confirmButtonText: 'OK'
            })
        }
    }

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
