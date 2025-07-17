"use client";

export default function RegisterSuccess() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded shadow flex flex-col items-center" style={{ background: "var(--color-cream)", color: "var(--color-blue-dark)" }}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "var(--color-green)" }}>
        ¡Registro exitoso!
      </h2>
      <p className="mb-6 text-center">Revisa tu correo electrónico para confirmar tu cuenta y luego podrás iniciar sesión en SkillLink.</p>
      <a href="/auth" style={{ background: "var(--color-green)", color: "#fff", padding: "10px 24px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
        Volver al login
      </a>
    </div>
  );
}
