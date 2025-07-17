"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function AgendarLeccion() {
  const params = useSearchParams();
  const router = useRouter();
  const con = params.get("con");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => router.push("/calendario"), 1500);
  };

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
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-green)' }}>Agendar lección</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div><b>Con:</b> {con}</div>
          <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: 'var(--color-teal)', background: '#fffbe7' }} required />
          <input type="time" value={hora} onChange={e => setHora(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: 'var(--color-teal)', background: '#fffbe7' }} required />
          <textarea placeholder="Mensaje para el tutor" value={mensaje} onChange={e => setMensaje(e.target.value)} className="border px-3 py-2 rounded" style={{ borderColor: 'var(--color-teal)', background: '#fffbe7' }} />
          <button type="submit" className="px-4 py-2 rounded font-semibold" style={{ background: 'var(--color-green)', color: '#fff', border: 'none' }}>
            Agendar
          </button>
        </form>
        {enviado && <div className="mt-4 text-green-600 text-center">¡Lección agendada! Redirigiendo...</div>}
      </div>
    </>
  );
}
