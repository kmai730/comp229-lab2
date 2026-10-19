export default function About() {
  return (
    <section className="page about">
      <div>
        <h1>Kevin Hien Luong Mai</h1>
        <p>
          I'm a full stack developer with more than 10 years of experience building, deploying and
          scaling web, mobile and desktop applications. I work across Flask, React, React Native,
          AWS and DigitalOcean, and I enjoy taking a product from concept to production.
        </p>
        <p>
          I'm currently studying Software Engineering Technology (Artificial Intelligence) and
          expanding my skills in AI and machine learning applications.
        </p>
        <a className="btn" href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank" rel="noreferrer">View my resume (PDF)</a>
      </div>
    </section>
  );
}
