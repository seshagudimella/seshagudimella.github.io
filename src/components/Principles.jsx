const PRINCIPLES = [
  {
    num: '01',
    iconClass: 'p-icon-1',
    iconPath: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    iconStroke: '#4f46e5',
    title: 'Observability is a culture, not a tool.',
    body: 'You can deploy the best monitoring stack in the world and still fly blind — if teams don\'t own their signals. Real observability is built through habits, accountability, and dashboards engineers actually look at.',
  },
  {
    num: '02',
    iconClass: 'p-icon-2',
    iconPath: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    iconStroke: '#059669',
    title: 'Cost is an engineering problem.',
    body: 'Cloud spend doesn\'t belong in a finance spreadsheet reviewed once a quarter. It belongs next to your performance metrics, visible to every engineer, every day. When cost and code share a dashboard, behavior changes.',
  },
  {
    num: '03',
    iconClass: 'p-icon-3',
    iconPath: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconStroke: '#d97706',
    title: 'Proactive guardrails beat reactive firefighting.',
    body: 'The goal isn\'t to be fast at fixing incidents — it\'s to make incidents rarer. Every alert threshold, every budget guardrail, every SLO established is time bought back for the engineering team to build instead of debug.',
  },
  {
    num: '04',
    iconClass: 'p-icon-4',
    iconPath: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="21" y2="3"/><line x1="3" y1="21" x2="14" y2="10"/>',
    iconStroke: '#7c3aed',
    title: 'Consolidate before you complicate.',
    body: 'Tool sprawl is a stealth tax on engineering velocity. Before adopting something new, I ask: what can we eliminate? The most impactful infrastructure upgrade I\'ve made wasn\'t adding a platform — it was collapsing three tools into one.',
  },
  {
    num: '05',
    iconClass: 'p-icon-5',
    iconPath: '<polyline points="15 18 9 12 15 6"/>',
    iconStroke: '#0284c7',
    title: 'Shift left on everything.',
    body: 'Performance, cost, reliability — these shouldn\'t be discovered in production. The platform team\'s job is to move feedback as close to the code commit as possible, so engineers get the right signal at the moment they can still act on it.',
  },
  {
    num: '06',
    iconClass: 'p-icon-6',
    iconPath: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
    iconStroke: '#06b6d4',
    title: 'AI is infrastructure, not a feature.',
    body: 'Treating AI capabilities as bolt-on additions is the wrong model. Intelligent alerting, anomaly detection, and ML workloads need to be first-class citizens of the platform — built on the same observability, reliability, and cost guardrails as everything else.',
  },
]

export default function Principles() {
  return (
    <section id="principles" className="content-section">
      <div className="section-kicker">Principles</div>
      <h2 className="section-heading">How I think about platform engineering</h2>
      <p className="section-lead">The beliefs that guide every architectural decision, team conversation, and tooling choice.</p>
      <div className="principles-grid">
        {PRINCIPLES.map(p => (
          <div
            key={p.num}
            className="principle-card fade-up"
            style={p.wide ? { gridColumn: 'span 2' } : {}}
          >
            <div className="p-header">
              <div className={`p-icon ${p.iconClass}`}>
                <svg
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke={p.iconStroke} strokeWidth="2" strokeLinecap="round"
                  dangerouslySetInnerHTML={{ __html: p.iconPath }}
                />
              </div>
              <div className="p-num">{p.num}</div>
            </div>
            <div className="p-title">{p.title}</div>
            <div className="p-body">{p.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
