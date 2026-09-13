import { ShieldCheck, Target, LockKeyhole } from "lucide-react";

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <p className="eyebrow">ABOUT CYBERGUARD</p>

        <h1>Cybersecurity shouldn't feel complicated.</h1>

        <p>
          CyberGuard is building practical tools and resources that help
          individuals, freelancers, and small businesses improve their
          everyday security without needing to become cybersecurity experts.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <ShieldCheck size={28} />

          <h2>What we do</h2>

          <p>
            We create simple cybersecurity tools, checklists, guides, and
            practical resources focused on problems people actually face.
          </p>
        </article>

        <article className="about-card">
          <Target size={28} />

          <h2>Our goal</h2>

          <p>
            Our goal is to make good security practices easier to understand,
            easier to implement, and easier to maintain.
          </p>
        </article>

        <article className="about-card">
          <LockKeyhole size={28} />

          <h2>Our approach</h2>

          <p>
            We prioritize practical security, privacy-conscious tools,
            straightforward explanations, and resources that can be used
            without a large IT budget.
          </p>
        </article>
      </section>

      <section className="about-story">
        <p className="eyebrow">WHY CYBERGUARD EXISTS</p>

        <h2>
          Security knowledge is useful only when people can actually use it.
        </h2>

        <p>
          Cybersecurity information can quickly become overwhelming. There
          are thousands of tools, recommendations, standards, and technical
          terms, but many people simply need to know what to do next.
        </p>

        <p>
          CyberGuard exists to bridge that gap. We turn complex security
          concepts into practical workflows, tools, and resources that help
          people take meaningful steps toward better security.
        </p>

        <p>
          CyberGuard is an independent project and is not affiliated with
          government agencies, security vendors, or standards organizations.
        </p>
      </section>
    </div>
  );
}

export default About;