import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout.module";
import Loading from "@/components/loading/loading.module";
import { supabase } from "@/lib/supabase";
import { error } from "console";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  function handleLogin(e: any) {
    e.preventDefault();

    const data = {
      username: "agus123",
      password: "handless",
    };

    if (data.username === username && data.password === password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        router.push("/product");
      }, 2000);
    } else {
      alert("login gagal, silahkan cek username atau password kamu");
    }
  }

  async function handleOAuthGoogle(provider: "google" | "github") {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/product`,
      },
    });
    if (error) {
      alert("login error :" + error.message);
    }
  }

  return (
    <Layout>
      {isLoading === false ? (
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h2 className="text-2xl font-bold items-center text-amber-500 my-20">
            Madura Shop
          </h2>
          <form className="flex flex-col gap-y-5" onSubmit={handleLogin}>
            <input
              type="text"
              className="border p-3 my-2 rounded-md w-60 text-black"
              placeholder="Ketik username disini ..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="border p-3 my-2 rounded-md w-60 text-black"
              placeholder="Ketik password disini ..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 bg-amber-600 hover:bg-amber-700 rounded-md font-semibold"
            >
              Login
            </button>

            <div className="mt-10 w-full">
              <button
                onClick={() => handleOAuthGoogle("google")}
                className="bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold p-3 w-full h-14"
              >
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
