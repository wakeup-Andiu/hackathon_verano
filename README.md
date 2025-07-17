Una aplicación web llamada SkillLink. Es una plataforma para que personas intercambien habilidades: por ejemplo, alguien que enseña guitarra puede encontrar a alguien que enseña francés y así hacer un "match".

1. Autenticación:
   - Registro e inicio de sesión con email/contraseña o Google.
   - Página de perfil con nombre, ciudad, bio, edad y foto.

2. Sistema de habilidades:
   - Cada usuario selecciona:
     - Habilidades que puede enseñar.
     - Habilidades que desea aprender.
   - Estas se pueden elegir de una lista o escribir manualmente.
   - Se pueden editar en el perfil.

3. Matching:
   - Algoritmo que encuentra usuarios que puedan enseñar lo que tú quieres aprender y que quieran aprender lo que tú enseñas.
   - Muestra lista de matches sugeridos.
   - Botón de “match” para conectar, tipo Tinder (pero sin swipe).

4. Mensajería:
   - Simulación de chat entre usuarios con los que hiciste match.
   - Notificación cuando recibes mensaje nuevo.

5. Calendario/Sesiones:
   - Opcional: Permitir agendar una sesión con un usuario conectado.
   - Integración con calendario local o simple sistema de fechas.

6. Reputación y feedback:
   - Después de una sesión, los usuarios pueden dejar una reseña con foto.
   - Mostrar promedio de estrellas en el perfil.

7. Motivación
   - Una mascota que crezca con relación al numero de sesiones que se toman/el numero de habilidades obtenidas.
   - Un feed en el perfil que sirva como diario digital de la realización de habilidades obtenidas.

8. Extras
   - Swipe de retos a elegir, relacionados con las habilidades obtenidas.
   - Retos de "Lección sorpresa" que se pueden completar de manera aleatoria.
   - 


Quiero que desarrolles una aplicación web llamada **SkillLink**. Es una plataforma para que personas intercambien habilidades: por ejemplo, alguien que enseña guitarra puede encontrar a alguien que enseña francés y así hacer un "match".

El frontend debe estar construido en Next.js y el backend en Node.js con supabase (API Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eHR5cXlpa2d3emJlY2xxbGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3Njg4MTAsImV4cCI6MjA2ODM0NDgxMH0.gAaP7767sG8GNcJjk67TA6Io-6lqzW0SRdXeRiD4ln0 ) como base de datos. Usa Tailwind CSS para el estilo.

---

**FUNCIONALIDADES PRINCIPALES:**

1. **Autenticación:**
   - Registro e inicio de sesión con email/contraseña o Google.
   - Página de perfil con nombre, ciudad, bio, edad y foto.

2. **Sistema de habilidades:**
   - Cada usuario selecciona:
     - Habilidades que puede enseñar.
     - Habilidades que desea aprender.
   - Estas se pueden elegir de una lista o escribir manualmente.
   - Se pueden editar en el perfil.

3. **Matching:**
   - Algoritmo que encuentra usuarios que puedan enseñar lo que tú quieres aprender y que quieran aprender lo que tú enseñas.
   - Muestra lista de matches sugeridos.
   - Botón de “match” para conectar, tipo Tinder (pero sin swipe).

4. **Mensajería:**
   - Chat en tiempo real con usuarios con los que hiciste match.
   - Notificación cuando recibes mensaje nuevo.

5. **Calendario/Sesiones:**
   - Opcional: Permitir agendar una sesión con un usuario conectado.
   - Integración con calendario local o simple sistema de fechas.

6. **Reputación y feedback:**
   - Después de una sesión, los usuarios pueden dejar una reseña.
   - Mostrar promedio de estrellas en el perfil.

---

**Diseño sugerido:**
- Estilo amigable, accesible, moderno.
- Página de inicio con llamada a la acción.
- Navegación simple: Home, Buscar, Chats, Perfil.

---

**Extras (opcional):**
- Sistema de puntos o niveles por enseñar.
- Modo oscuro.
- Responsive (para usarse desde celular).