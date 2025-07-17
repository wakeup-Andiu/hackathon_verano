"use client";

import { useMemo } from "react";

function CalendarDemo() {
  // Mock: lecciones agendadas (YYYY-MM-DD)
  const lessons = [
    { date: "2025-07-15", title: "Python con Luis", future: false },
    { date: "2025-07-17", title: "Inglés con Sofía", future: true },
    { date: "2025-07-21", title: "Matemáticas con Ana", future: true },
  ];
  const today = new Date("2025-07-17T12:52:14-06:00");
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekday = firstDay.getDay(); // 0=domingo
  const daysInMonth = lastDay.getDate();

  // Crea la matriz de días para el calendario
  const calendar = useMemo(() => {
    const weeks: any[][] = [];
    let week: any[] = [];
    let dayNum = 1 - firstWeekday;
    while (dayNum <= daysInMonth) {
      for (let i = 0; i < 7; i++) {
        if (dayNum > 0 && dayNum <= daysInMonth) {
          const dateStr = `${year}-${(month+1).toString().padStart(2,'0')}-${dayNum.toString().padStart(2,'0')}`;
          const lesson = lessons.find(l => l.date === dateStr);
          week.push({
            day: dayNum,
            lesson,
          });
        } else {
          week.push(null);
        }
        dayNum++;
      }
      weeks.push(week);
      week = [];
    }
    return weeks;
  }, [year, month, daysInMonth, firstWeekday, lessons]);

  return (
    <div>
      <table style={{ width: "100%", background: "#fffbe7", borderRadius: 8, overflow: "hidden", marginTop: 12 }}>
        <thead>
          <tr style={{ color: "var(--color-teal)", fontWeight: 700 }}>
            <th>D</th><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((cell, j) => (
                <td key={j} style={{
                  padding: 6,
                  textAlign: "center",
                  border: "1px solid #f0f0d0",
                  minWidth: 32,
                  background: cell && cell.lesson ? (cell.lesson.future ? "#e6ffe6" : "#ffe6e6") : undefined
                }}>
                  {cell ? (
                    <div style={{ fontWeight: 600 }}>
                      {cell.day}
                      <div style={{ fontSize: 18 }}>
                        {cell.lesson && (cell.lesson.future ? <span title={cell.lesson.title} style={{ color: 'var(--color-green)' }}>✅</span> : <span title={cell.lesson.title} style={{ color: 'red' }}>❌</span>)}
                      </div>
                    </div>
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-4">
        <span><span style={{ color: 'var(--color-green)' }}>✅</span> Lección agendada</span>
        <span><span style={{ color: 'red' }}>❌</span> Lección pasada</span>
      </div>
    </div>
  );
}

export default function Calendario() {
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
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-green)' }}>Mi Calendario</h1>
        <CalendarDemo />
      </div>
    </>
  );
}
