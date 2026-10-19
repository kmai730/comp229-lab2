const qualifications = [
  {
    degree: "Advanced Diploma in Software Engineering Technology (Artificial Intelligence)",
    dates: "September 2025 to present",
    notes: "Cumulative GPA: 4.12",
  },
];

export default function Education() {
  return (
    <section className="page">
      <h1>Education</h1>

      {qualifications.map((item) => (
        <article className="card wide" key={item.degree}>
          <h2>{item.degree}</h2>
          <p className="meta">{item.dates}</p>
          <p>{item.notes}</p>
        </article>
      ))}
    </section>
  );
}
