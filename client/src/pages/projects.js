const projects = [
  {
    title: "Plamogee",
    role: "Creator and full stack developer",
    outcome: "A note-taking and organization app for web (React), mobile (React Native) and desktop (Electron). It sends reminders by email and push notification, and runs on a Flask backend hosted on DigitalOcean with Nginx and Gunicorn."
  },
  {
    title: "ShopLove",
    role: "Software developer",
    outcome: "A fast fashion marketplace for web and mobile web, built with React, Node and Express. Shopify APIs supply products and collections and keep the cart in sync in real time."
  },
  {
    title: "Video Transcription Tool",
    role: "Contract software developer at VideoLocalize",
    outcome: "A Flask and React tool for videodub.ai that streamlines audio and video localization, plus a user registration and authentication system that improved security and UX."
  },
];

export default function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>

      <div className="grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h2>{project.title}</h2>
            <p className="meta">{project.role}</p>
            <p>{project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
