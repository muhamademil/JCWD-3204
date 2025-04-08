import React, { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

export default function CallbackPage() {
  const router = useRouter();

  async function verifyUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error || !data.session) {
      alert("User not verified :" + error?.message);
    } else {
      localStorage.setItem("user-credentials", JSON.stringify(data));
      router.push("/product");
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-blue-600 font-semibold">verify login ...</h1>
    </div>
  );
}
