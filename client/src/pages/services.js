const services = [
  { title: "Web development", text: "Responsive React and Next.js front ends with Flask, Node or Django back ends.", color: "#0f766e" },
  { title: "Mobile and desktop apps", text: "Cross-platform apps with React Native and Electron.", color: "#9a3b5a" },
  { title: "Cloud deployment", text: "Hosting on AWS and DigitalOcean with Nginx, Gunicorn and Cloudflare.", color: "#2f4b7c" },
  { title: "API and AI integration", text: "REST and GraphQL APIs, Shopify integrations and OpenAI-powered features.", color: "#b7791f" },
];

export default function Services() {
  return (
    <section className="page">
      <h1>Services</h1>

      <div className="grid">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <div className="swatch" style={{ background: service.color }} aria-hidden="true">
              {service.title[0]}
            </div>
            
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
