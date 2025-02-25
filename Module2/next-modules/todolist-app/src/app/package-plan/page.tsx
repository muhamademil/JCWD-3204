"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function PackagePlan() {
    const [plan, setPlan] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedPlan = Cookies.get("type") || "default";
        setPlan(storedPlan);
    }, []);

    const handlePlanChange = (selectedPlan: string) => {
        Cookies.set("type", selectedPlan, { expires: 7 });
        setPlan(selectedPlan);

        Swal.fire({
            title: "Success!",
            text: `You have chosen the ${selectedPlan} package.`,
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => {
            router.push("/");
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Package Plan</h1>

            {/* Menampilkan paket yang dipilih */}
            <div className="text-lg font-semibold text-blue-600 mb-6">
                Selected Plan: <span className="text-red-500">{plan}</span>
            </div>

            {/* Deskripsi Paket */}
            <div className="mb-6 text-center text-black">
                <p className="mb-2">
                    <strong>Default Plan:</strong> Free access with basic features.
                </p>
                <p>
                    <strong>VIP Plan:</strong> Premium features, priority support, and exclusive content.
                </p>
            </div>

            {/* Pilihan Paket */}
            <div className="flex gap-4">
                <button
                    className={`px-6 py-2 rounded-lg font-semibold transition ${plan === "Default" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                    onClick={() => handlePlanChange("default")}
                >
                    Default Plan
                </button>
                <button
                    className={`px-6 py-2 rounded-lg font-semibold transition ${plan === "VIP" ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                    onClick={() => handlePlanChange("vip")}
                >
                    VIP Plan
                </button>
            </div>
        </div>
    );
}
