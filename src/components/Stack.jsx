import DIAGRAMS from '../diagrams'

const CATEGORIES = [
  {
    label: '☁️ Cloud & Infrastructure',
    chips: [
      { color: '#f59e0b', text: 'AWS — EC2, Lambda, S3, EKS, RDS' },
      { color: '#8b5cf6', text: 'Terraform (IaC)' },
      { color: '#06b6d4', text: 'Kubernetes on EKS / Docker' },
      { color: '#10b981', text: 'AWS Savings Plans & Reserved Instances' },
      { color: '#6366f1', text: 'Spot Fleet Automation' },
    ],
  },
  {
    label: '🔭 Observability & Monitoring',
    chips: [
      { color: '#7c3aed', text: 'Datadog — APM, Logs, Dashboards, CI Visibility' },
      { color: '#e97316', text: 'Prometheus & Grafana' },
      { color: '#4f46e5', text: 'SLO / SLI Design' },
      { color: '#ec4899', text: 'Alerting Strategy & Runbooks' },
      { color: '#0284c7', text: 'Distributed Tracing' },
    ],
  },
  {
    label: '⚙️ CI/CD & Developer Experience',
    chips: [
      { color: '#dc2626', text: 'Jenkins — ~2,000 builds/day' },
      { color: '#1f2937', text: 'GitHub Actions' },
      { color: '#059669', text: 'Pipeline Observability' },
      { color: '#0284c7', text: 'Artifact & Registry Management' },
      { color: '#7c3aed', text: 'Developer Feedback Loops' },
    ],
  },
  {
    label: '📊 Data & Analytics',
    chips: [
      { color: '#29b5e8', text: 'Snowflake — Data Warehousing & Incident Analytics' },
      { color: '#e97316', text: 'Tableau — Engineering & Reliability Dashboards' },
      { color: '#4f46e5', text: 'Reliability Analytics — SLOs, MTTR, Repeat Incidents' },
    ],
  },
  {
    label: '💰 FinOps & Cost Engineering',
    chips: [
      { color: '#f59e0b', text: 'AWS Cost Explorer' },
      { color: '#10b981', text: 'nOps' },
      { color: '#7c3aed', text: 'Datadog Cost Visibility' },
      { color: '#4f46e5', text: 'Instance Rightsizing' },
      { color: '#0284c7', text: 'FinOps Culture & Team Training' },
    ],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="content-section">
      <div className="section-kicker">Technical Depth</div>
      <h2 className="section-heading">Tools I've owned end-to-end.</h2>
      <p className="section-lead">
        Not just used — architected, operated, and improved at scale. Every tool here represents real production ownership across cloud, observability, and platform engineering.
      </p>

      <div className="stack-cats">
        {CATEGORIES.map(cat => (
          <div key={cat.label} className="fade-up">
            <div className="stack-cat-label">{cat.label}</div>
            <div className="stack-chips">
              {cat.chips.map(chip => (
                <div key={chip.text} className="stack-chip">
                  <span className="chip-dot" style={{ background: chip.color }} />
                  {chip.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="arch-wrap fade-up">
        <div className="arch-eyebrow">Platform Ownership Map</div>
        <div dangerouslySetInnerHTML={{ __html: DIAGRAMS.platformMap }} />
      </div>
    </section>
  )
}
