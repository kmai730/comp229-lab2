import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const { state } = useLocation();

  return (
    <section className="page hero">
      {state?.sentBy && (
        <p className="notice" role="status">
          Thanks, {state.sentBy}. Your message was captured.
        </p>
      )}

      <h1>Hi, I'm Kevin. I build web and mobile apps from first idea to live product.</h1>

      <p className="lead">
        Full stack developer in Toronto with 10+ years of experience in React, Flask and cloud hosting.
      </p>

      <blockquote className="mission">
        Mission: build software that is simple to use, dependable in production, and worth coming back to.
      </blockquote>
      
      <div className="actions">
        <Link className="btn" to="/about">Meet me</Link>
        <Link className="btn ghost" to="/projects">See my projects</Link>
      </div>
    </section>
  );
}
