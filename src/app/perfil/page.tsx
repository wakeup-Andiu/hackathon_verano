"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) {
        router.push("/auth");
        return;
      }
      const { data, error } = await supabase.from('users').select('*').eq('auth_user_id', user.id).single();
      if (error) setError("No se pudo cargar el perfil: " + error.message);
      else setUserData(data);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
  };

  const handleDelete = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;
    // Elimina de tabla users
    await supabase.from('users').delete().eq('auth_user_id', user.id);
    // Elimina de Supabase Auth
    await supabase.auth.signOut();
    router.push("/auth");
    // Nota: El borrado completo de la cuenta en Supabase Auth requiere un admin o función Edge
  };

  if (loading) return <div className="text-center mt-10">Cargando perfil...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;
  if (!userData) return null;

  return (
    <>
      <nav style={{ background: 'var(--color-teal)', padding: '16px 0', marginBottom: 40 }}>
        <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
          <span style={{ fontWeight: 800, fontSize: 28, color: 'var(--color-cream)' }}>SkillLink</span>
          <div className="flex gap-4">
            <a href="/" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Home</a>
            <a href="/perfil" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Perfil</a>
            <a href="/explora" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Explorar</a>
            <a href="/calendario" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Calendario</a>
          </div>
        </div>
      </nav>
      <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow" style={{ background: "var(--color-cream)", color: "var(--color-blue-dark)" }}>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "var(--color-green)" }}>Mi perfil</h2>
        <div className="mb-6">
          <div><b>Nombre:</b> {userData.nombre || "-"}</div>
          <div><b>Email:</b> {userData.email || "-"}</div>
          <div><b>Habilidades que puedes enseñar:</b> {userData.habilidades_ensenar || "-"}</div>
          <div><b>Habilidades que quieres aprender:</b> {userData.habilidades_aprender || "-"}</div>
          <div><b>Mascota:</b> {userData.mascota || "-"}</div>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => router.push("/perfil/editar")}
            className="px-4 py-2 rounded font-semibold"
            style={{ background: "var(--color-green-light)", color: "var(--color-blue-dark)", border: "none" }}>
            Editar perfil
          </button>
          <button onClick={handleLogout}
            className="px-4 py-2 rounded font-semibold"
            style={{ background: "var(--color-teal)", color: "#fff", border: "none" }}>
            Cerrar sesión
          </button>
          <button onClick={handleDelete}
            className="px-4 py-2 rounded font-semibold"
            style={{ background: "#e53935", color: "#fff", border: "none" }}>
            Eliminar cuenta
          </button>
        </div>
      </div>
    </>
  );
}
