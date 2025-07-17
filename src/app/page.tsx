export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream)', color: 'var(--color-blue-dark)' }}>
      <nav style={{ background: 'var(--color-teal)', padding: '16px 0', marginBottom: 40 }}>
        <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
          <span style={{ fontWeight: 800, fontSize: 28, color: 'var(--color-cream)' }}>SkillLink</span>
          <div className="flex gap-4">
            <a href="/" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Home</a>
            <a href="/auth" style={{ color: 'var(--color-green)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Registrarse/Iniciar sesión</a>
          </div>
        </div>
      </nav>
      <main className="max-w-2xl mx-auto px-4">
        <h1 style={{ color: 'var(--color-green)', fontSize: 38, fontWeight: 700, marginBottom: 16 }}>Bienvenido a SkillLink</h1>
        <p style={{ fontSize: 20, marginBottom: 32 }}>
          SkillLink es una plataforma donde puedes conectar con personas para compartir, aprender y enseñar habilidades. Crea una cuenta, busca oportunidades de aprendizaje, publica tus propios cursos o encuentra mentores y estudiantes.
        </p>
        <ul style={{ fontSize: 18, marginBottom: 32, paddingLeft: 20, color: 'var(--color-blue-dark)' }}>
          <li>🔗 Conecta con expertos y aprendices de todo el mundo.</li>
          <li>📚 Publica y encuentra cursos, talleres y mentorías.</li>
          <li>🌱 Haz crecer tus habilidades y tu red profesional.</li>
        </ul>
        <a href="/auth" style={{ background: 'var(--color-green)', color: '#fff', padding: '12px 32px', borderRadius: 8, fontWeight: 600, fontSize: 20, textDecoration: 'none', boxShadow: '0 2px 8px rgba(66,201,135,0.1)' }}>
          ¡Comienza ahora!
        </a>
      </main>
    </div>
  );
}
