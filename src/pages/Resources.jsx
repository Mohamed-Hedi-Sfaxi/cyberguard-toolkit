import { Download, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className="resources-page">
      <section className="resource-grid">
        <article className="resource-card featured-resource">
          <div className="resource-icon">
            <ShieldCheck size={28} />
          </div>

          <p className="resource-type">FREE GUIDE</p>

          <h2>Small Business Cybersecurity Starter Kit</h2>

          <p>
            A practical starting point covering accounts, devices, backups,
            phishing, incident response, and ongoing security reviews.
          </p>

          <a
            href="/downloads/CyberGuard_Small_Business_Security_Starter_Kit.pdf"
            download
            className="button button-primary"
          >
            <Download size={17} />
            Download free
          </a>
        </article>

        <article className="resource-card">
          <div className="resource-icon">
            <ShieldCheck size={28} />
          </div>

          <p className="resource-type">PRO TOOLKIT</p>

          <h2>Small Business Security Pro Toolkit</h2>

          <p>
            A complete implementation workbook with policies, worksheets, risk
            tracking, access reviews, incident planning, and a 90-day security
            roadmap.
          </p>

          <Link to="/pro-toolkit" className="button button-primary">
            View Pro Toolkit
          </Link>
        </article>
      </section>
    </div>
  );
}

export default Resources;
