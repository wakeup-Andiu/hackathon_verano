"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else {
      // Guarda el usuario en la tabla users
      const userId = data?.user?.id;
      if (userId) {
        await supabase.from('users').insert({ auth_user_id: userId, email });
      }
      router.push("/auth/success");
    }
    setLoading(false);
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded shadow" style={{ background: "var(--color-cream)", color: "var(--color-blue-dark)" }}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "var(--color-green)" }}>SkillLink - Iniciar sesión / Registrarse</h2>
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
          style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border px-3 py-2 rounded"
          style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }}
        />
        {error && <div style={{ color: "#e53935" }}>{error}</div>}
        <button
          onClick={handleSignIn}
          className="px-4 py-2 rounded font-semibold"
          style={{ background: "var(--color-green)", color: "#fff", border: "none" }}
          disabled={loading}
        >
          Iniciar sesión
        </button>
        <button
          onClick={handleSignUp}
          className="px-4 py-2 rounded font-semibold"
          style={{ background: "var(--color-green-light)", color: "var(--color-blue-dark)", border: "none" }}
          disabled={loading}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
