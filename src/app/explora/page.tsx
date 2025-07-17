"use client";
import { useState } from "react";

const MOCK_USERS = [
  {
    username: "ana-tutora",
    nombre: "Ana Tutora",
    habilidades: ["Matemáticas", "Física"],
    bio: "Aprender es divertido cuando lo compartes",
  },
  {
    username: "luis-codigo",
    nombre: "Luis Código",
    habilidades: ["Programación", "Python"],
    bio: "¡Hagamos código juntos!",
  },
  {
    username: "sofia-idiomas",
    nombre: "Sofía Idiomas",
    habilidades: ["Inglés", "Francés"],
    bio: "¡Habla sin miedo!",
  },
  {
    username: "mario-musica",
    nombre: "Mario Música",
    habilidades: ["Guitarra", "Piano"],
    bio: "La música es el idioma universal",
  },
];

export default function Explora() {
  const [busqueda, setBusqueda] = useState("");
  const filtrados = MOCK_USERS.filter(u =>
    busqueda === "" ||
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.habilidades.some(h => h.toLowerCase().includes(busqueda.toLowerCase()))
  );

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
      <div className="max-w-2xl mx-auto p-6 rounded shadow" style={{ background: "var(--color-cream)", color: "var(--color-blue-dark)" }}>
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-green)' }}>Explora perfiles</h1>
        <input
          type="text"
          placeholder="¿Qué te interesa aprender?"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className="border px-3 py-2 rounded mb-6 w-full"
          style={{ borderColor: "var(--color-teal)", background: "#fffbe7" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtrados.map(u => (
            <a key={u.username} href={`/explora/${u.username}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fffbe7', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(66,201,135,0.07)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-green)' }}>{u.nombre}</div>
                <div style={{ color: 'var(--color-blue-dark)' }}>{u.habilidades.join(", ")}</div>
                <div style={{ fontSize: 13, color: '#888' }}>{u.bio}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
