"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

type MockUser = {
  nombre: string;
  habilidades: string[];
  bio: string;
  detalle: string;
};

const MOCK_USERS: Record<string, MockUser> = {
  "ana-tutora": {
    nombre: "Ana Tutora",
    habilidades: ["Matemáticas", "Física"],
    bio: "Aprender es divertido cuando lo compartes",
    detalle: "Profesora con 10 años de experiencia en enseñanza de ciencias exactas. Ama los retos y el aprendizaje colaborativo.",
  },
  "luis-codigo": {
    nombre: "Luis Código",
    habilidades: ["Programación", "Python"],
    bio: "¡Hagamos código juntos!",
    detalle: "Desarrollador fullstack, mentor en hackatones y apasionado por enseñar a programar desde cero.",
  },
  "sofia-idiomas": {
    nombre: "Sofía Idiomas",
    habilidades: ["Inglés", "Francés"],
    bio: "¡Habla sin miedo!",
    detalle: "Lingüista y políglota. Ayuda a romper la barrera del idioma con métodos prácticos y divertidos.",
  },
  "mario-musica": {
    nombre: "Mario Música",
    habilidades: ["Guitarra", "Piano"],
    bio: "La música es el idioma universal",
    detalle: "Músico profesional. Da clases personalizadas y te ayuda a encontrar tu propio ritmo.",
  },
};

export default function PerfilMock({ params }: { params: { username: string } }) {
  const router = useRouter();
  const user = MOCK_USERS[params.username];

  if (!user) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow" style={{ background: '#fffbe7', color: 'var(--color-blue-dark)' }}>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-green)' }}>Perfil no encontrado</h2>
        <button onClick={() => router.push('/explora')} className="px-4 py-2 rounded font-semibold" style={{ background: 'var(--color-teal)', color: '#fff', border: 'none' }}>
          Volver a explorar
        </button>
      </div>
    );
  }

  return (
    <>
      <nav style={{ background: 'var(--color-teal)', padding: '16px 0', marginBottom: 40 }}>
        <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
          <span style={{ fontWeight: 800, fontSize: 28, color: 'var(--color-cream)' }}>SkillLink</span>
          <div className="flex gap-4">
            <Link href="/" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Home</Link>
            <Link href="/perfil" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Perfil</Link>
            <Link href="/explora" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Explorar</Link>
            <Link href="/calendario" style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Calendario</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow" style={{ background: '#fffbe7', color: 'var(--color-blue-dark)' }}>
        <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: 'var(--color-green)' }}>{user.nombre}</h2>
        <div className="mb-2 text-center" style={{ color: 'var(--color-blue-dark)' }}>{user.bio}</div>
        <div className="mb-2 text-center" style={{ color: 'var(--color-teal)' }}>{user.habilidades.join(', ')}</div>
        <div className="mb-4 text-center" style={{ color: '#444' }}>{user.detalle}</div>
        <button onClick={() => router.push(`/calendario/agendar?con=${params.username}`)} className="px-4 py-2 rounded font-semibold" style={{ background: 'var(--color-green)', color: '#fff', border: 'none', marginRight: 12 }}>
          Agregar a Calendario
        </button>
        <button onClick={() => router.push('/explora')} className="px-4 py-2 rounded font-semibold" style={{ background: 'var(--color-teal)', color: '#fff', border: 'none' }}>
          Volver a explorar
        </button>
      </div>
    </>
  );
}
