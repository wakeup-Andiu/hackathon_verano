import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream)', color: 'var(--color-blue-dark)' }}>
      <nav style={{ background: 'var(--color-teal)', padding: '16px 0', marginBottom: 40 }}>
        <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
          <span style={{ fontWeight: 800, fontSize: 28, color: 'var(--color-cream)' }}>SkillLink</span>
          <div className="flex gap-4">
            <Link href="/" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Home</Link>
            <Link href="/auth" style={{ color: 'var(--color-green)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Registrarse/Iniciar sesión</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-2xl mx-auto p-6 rounded shadow" style={{ background: "var(--color-cream)", color: "var(--color-blue-dark)" }}>
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-green)' }}>
          ¡Bienvenido a SkillLink!
        </h1>
        <ul className="mb-8 list-disc pl-6">
          <li>🔗 Conecta con expertos y aprendices de todo el mundo.</li>
          <li>📚 Publica y encuentra cursos, talleres y mentorías.</li>
          <li>🌱 Haz crecer tus habilidades y tu red profesional.</li>
        </ul>
        <div style={{ marginBottom: 32 }}>
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-teal)' }}>Perfiles destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/explora/ana-tutora" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fffbe7', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(66,201,135,0.07)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-green)' }}>Ana Tutora</div>
                <div style={{ color: 'var(--color-blue-dark)' }}>Matemáticas, Física</div>
                <div style={{ fontSize: 13, color: '#888' }}>"Aprender es divertido cuando lo compartes"</div>
              </div>
            </a>
            <a href="/explora/luis-codigo" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fffbe7', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(66,201,135,0.07)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-green)' }}>Luis Código</div>
                <div style={{ color: 'var(--color-blue-dark)' }}>Programación, Python</div>
                <div style={{ fontSize: 13, color: '#888' }}>"¡Hagamos código juntos!"</div>
              </div>
            </a>
            <a href="/explora/sofia-idiomas" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fffbe7', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(66,201,135,0.07)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-green)' }}>Sofía Idiomas</div>
                <div style={{ color: 'var(--color-blue-dark)' }}>Inglés, Francés</div>
                <div style={{ fontSize: 13, color: '#888' }}>"¡Habla sin miedo!"</div>
              </div>
            </a>
          </div>
        </div>
        <a href="/auth" style={{ background: 'var(--color-green)', color: '#fff', padding: '12px 32px', borderRadius: 8, fontWeight: 600, fontSize: 20, textDecoration: 'none', boxShadow: '0 2px 8px rgba(66,201,135,0.1)' }}>
          ¡Comienza ahora!
        </a>
      </main>
    </div>
  );
}
