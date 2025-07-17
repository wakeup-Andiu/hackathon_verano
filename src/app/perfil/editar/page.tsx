"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [habilidadesEnsenar, setHabilidadesEnsenar] = useState("");
  const [habilidadesAprender, setHabilidadesAprender] = useState("");

  const [mascota, setMascota] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) {
      setError("No hay usuario autenticado");
      setLoading(false);
      return;
    }
    const { error } = await supabase.from('users').update({
      nombre,
      habilidades_ensenar: habilidadesEnsenar,
      habilidades_aprender: habilidadesAprender,

      mascota
    }).eq('auth_user_id', user.id);
    if (error) setError(error.message);
    else router.push("/");
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow" style={{ background: "var(--color-cream)", color: "var(--color-blue-dark)" }}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "var(--color-green)" }}>
        Completa tu perfil
      </h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }} />
        <input type="text" placeholder="Habilidades que puedes enseñar (separadas por coma)" value={habilidadesEnsenar} onChange={e => setHabilidadesEnsenar(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }} />
        <input type="text" placeholder="Habilidades que quieres aprender (separadas por coma)" value={habilidadesAprender} onChange={e => setHabilidadesAprender(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }} />
        <input type="text" placeholder="Mascota de aprendizaje (nombre o emoji)" value={mascota} onChange={e => setMascota(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }} />
        {error && <div style={{ color: "#e53935" }}>{error}</div>}
        <button type="submit" className="px-4 py-2 rounded font-semibold" style={{ background: "var(--color-green)", color: "#fff", border: "none" }} disabled={loading}>
          Guardar perfil
        </button>
      </form>
    </div>
  );
}
