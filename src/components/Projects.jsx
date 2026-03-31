const PROJECTS = [
  {
    iconBg: 'rgba(245,158,11,0.1)',
    iconBorder: '1px solid rgba(245,158,11,0.25)',
    iconPath: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/><path d="M7 7h1m3 0h6"/><path d="M7 11h1m3 0h3"/>',
    iconStroke: '#d97706',
    name: 'AWS Cost Optimization Playbook',
    descShort: 'Scripts & runbooks for EC2 rightsizing and Savings Plans',
    body: 'A collection of Python scripts, Shell automation, and documented runbooks for identifying rightsizing candidates, automating Savings Plan analysis, and tagging unused resources — built from the real $100K/mo savings initiative.',
    langColor: '#3572a5',
    lang: 'Python · Shell',
  },
  {
    iconBg: 'rgba(124,58,237,0.1)',
    iconBorder: '1px solid rgba(124,58,237,0.2)',
    iconPath: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    iconStroke: '#7c3aed',
    name: 'CI Pipeline Health Dashboard',
    descShort: 'Datadog dashboard JSON for CI pipeline observability',
    body: 'A ready-to-import Datadog dashboard template for tracking CI pipeline health at scale — execution time, queue time, blocked builds, and P95 latency across Jenkins and GitHub Actions. Inspired by the Datadog case study.',
    langColor: '#e97316',
    lang: 'JSON · Datadog',
  },
  {
    iconBg: 'rgba(14,165,233,0.1)',
    iconBorder: '1px solid rgba(14,165,233,0.25)',
    iconPath: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconStroke: '#0284c7',
    name: 'SLO Starter Kit',
    descShort: 'Templates and guidance for defining service-level objectives',
    body: 'A practical starter kit for engineering teams new to SLOs — includes a template library, error budget calculator, and a guide on setting initial availability and latency targets without overcomplicating the rollout.',
    langColor: '#6366f1',
    lang: 'Markdown · YAML',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      <div className="section-kicker">Open Work</div>
      <h2 className="section-heading">Scripts, tools &amp; side projects.</h2>
      <p className="section-lead">
        Automation, runbooks, and tools built from real platform problems — things I've packaged up for others to use or adapt.
      </p>

      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div key={p.name} className="project-card fade-up">
            <div className="proj-header">
              <div
                className="proj-icon"
                style={{ background: p.iconBg, border: p.iconBorder }}
              >
                <svg
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke={p.iconStroke} strokeWidth="2" strokeLinecap="round"
                  dangerouslySetInnerHTML={{ __html: p.iconPath }}
                />
              </div>
              <div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc-short">{p.descShort}</div>
              </div>
            </div>
            <p className="proj-body">{p.body}</p>
            <div className="proj-footer">
              <div className="proj-lang">
                <span className="proj-lang-dot" style={{ background: p.langColor }} />
                {p.lang}
              </div>
            </div>
          </div>
        ))}

        {/* Coming soon card */}
        <div
          className="project-card fade-up"
          style={{ background: 'rgba(79,70,229,0.03)', borderStyle: 'dashed' }}
        >
          <div className="proj-header">
            <div
              className="proj-icon"
              style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.15)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <div className="proj-name" style={{ color: 'var(--text-muted)' }}>More coming soon</div>
              <div className="proj-desc-short">Actively working on open-sourcing more tooling</div>
            </div>
          </div>
          <p className="proj-body" style={{ fontStyle: 'italic' }}>
            Currently packaging up Terraform modules for multi-cloud cost tagging and a FinOps maturity assessment template. Watch this space — or connect on LinkedIn.
          </p>
          <div className="proj-footer">
            <div className="proj-lang">
              <span className="proj-lang-dot" style={{ background: '#9ca3af' }} />
              Terraform · HCL
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
