"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { ThemeContext } from "@/utils/context/themeContext";

interface ILayout {
    children?: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const router = useRouter();
    const [email, setEmail] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    useEffect(() => {

        const storedEmail = Cookies.get("email"); // --> mengambil data 'email' menggunakan cookies
        // const storedEmail = sessionStorage.getItem("email") // --> mengambil data 'email' menggunakan session
        // const storedEmail = localStorage.getItem("email") // --> mengambil data 'email' menggunakan local storage

        if (!storedEmail) {
            router.push("/auth");
        } else {
            setEmail(storedEmail);
        }
    }, [router]);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure you want to log out?",
            text: "You will need to log in again to access your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log me out",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("email"); // Hapus cookie email
                Swal.fire({
                    title: "Logged out successfully!",
                    text: "You have been signed out. See you again soon!",
                    icon: "success"
                });
                router.push("/auth"); // Redirect ke halaman login
            }
        });
    };

    return (
        <div className={`${theme === "light" ? "bg-slate-100" : "bg-slate-900"} w-screen min-h-screen flex flex-col`}>
            {/* Navbar */}
            <nav className="bg-blue-600 fixed top-0 left-0 w-full shadow-md">
                <div className="container mx-auto flex justify-between items-center h-16 px-6">
                    <h2 className="text-white text-lg font-semibold">
                        Modul 2 - JCWD3204
                    </h2>

                    {/* Right Section (Theme Toggle & Profile) */}
                    <div className="flex items-center gap-4 relative">
                        <button
                            className="bg-blue-700 text-white px-4 py-2 rounded-md transition hover:bg-blue-800"
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? "Dark Mode" : "Light Mode"}
                        </button>

                        {/* Profile */}
                        {email && (
                            <div className="relative">
                                {/* Avatar & Name */}
                                <button
                                    className="flex flex-row-reverse items-center gap-2 px-4 py-2 focus:outline-none"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                                        {email.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="text-white font-medium">
                                        Hello wasap, {email}
                                    </span>
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-10">
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-red-500 hover:text-white transition"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Spacer agar konten tidak tertutup navbar */}
            <div className="mt-16 w-full flex justify-center">{children}</div>
        </div>
    );
}
