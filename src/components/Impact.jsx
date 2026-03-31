import DIAGRAMS from '../diagrams'

function ImpactCard({ colorClass, indexLabel, title, stat, statSub, statClass, diagram, tags, children }) {
  return (
    <div className={`impact-card ${colorClass} fade-up`}>
      <div className="ic-header">
        <div className="ic-index">{indexLabel}</div>
        <div className="ic-title-row">
          <div className="ic-title">{title}</div>
          <div className="ic-stat">
            <div
              className={`ic-stat-num ${statClass}`}
              dangerouslySetInnerHTML={{ __html: stat }}
            />
            <span className="ic-stat-sub">{statSub}</span>
          </div>
        </div>
      </div>
      <div className="ic-content-row">
        <div className="ic-body">{children}</div>
        <div
          className="ic-visual-pane"
          dangerouslySetInnerHTML={{ __html: diagram }}
        />
      </div>
      <div className="ic-tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="content-section">
      <div className="section-kicker">Impact</div>
      <h2 className="section-heading">Work that moved the needle</h2>
      <p className="section-lead">
        Five stories that define how I approach platform engineering — with urgency, precision, and long-term thinking.
      </p>
      <div className="impact-stack">

        <ImpactCard
          colorClass="card-c1"
          indexLabel="01 — Cloud Cost Optimization"
          title="From Consistently Over Budget to $100K Saved Every Month"
          stat="$100K"
          statSub="/ month saved"
          statClass="green"
          diagram={DIAGRAMS.costChart}
          tags={['AWS', 'Rightsizing', 'Reserved Instances', 'Spot Fleet', 'Savings Plans', 'FinOps', 'Cost Guardrails']}
        >
          <p>Our AWS spend was running <strong>$80–110K over budget every month</strong> — peaking at $782K against a $675K target. Rather than treating this as a finance problem, I treated it as an engineering one.</p>
          <p>I led a systematic cost reduction program: <strong>rightsizing compute instances</strong> to match actual workload profiles, migrating eligible jobs to <strong>Spot Fleet</strong>, replacing on-demand spend with <strong>Reserved Instances and Savings Plans</strong>, and aggressively eliminating idle and orphaned resources across accounts.</p>
          <p>The outcome: total spend fell from a $782K peak to <strong>$665K — the first month we came in under our $675K budget</strong>. Savings are now structural, backed by real-time guardrails that keep every team accountable to their cloud footprint.</p>
        </ImpactCard>

        <ImpactCard
          colorClass="card-c2"
          indexLabel="02 — CI Pipeline Observability"
          title="50% CI Cost Cut — and Engineers Got Dramatically Faster Too"
          stat="~50%"
          statSub="EKS CI cost reduction"
          statClass="accent"
          diagram={DIAGRAMS.ciPipeline}
          tags={['Datadog', 'CI Pipeline Visibility', 'Jenkins', 'EKS', 'SLOs', 'AWS', 'Shift-Left']}
        >
          <p>The engineering org runs <strong>~2,000 Jenkins jobs per day</strong> across a complex build, test, and deploy cycle. Debugging failures meant context-switching between multiple platforms. Worse, CI pipelines ran overnight US time — meaning the EU team waited <strong>nearly a full day</strong> for feedback on every commit.</p>
          <p>I implemented <strong>Datadog CI Pipeline Visibility</strong> to create a unified view across all Jenkins jobs — build, test, and deploy — replacing manual monthly spreadsheets with <strong>daily SLOs</strong> on execution time, queue time, and blocked time.</p>
          <p>The result: <strong>~50% reduction in EKS CI costs</strong> through workload optimization, and CI feedback collapsed from ~1 day to <strong>near real-time for both US and EU teams</strong> — without duplicating infrastructure. Datadog featured this work in their official case study.</p>
        </ImpactCard>

        <ImpactCard
          colorClass="card-c3"
          indexLabel="03 — Platform Strategy"
          title="One Ecosystem: From Fragmented Cost Tools to a Single Source of Truth"
          stat={`3 tools<br><span class="arrow">→ 1</span>`}
          statSub=""
          statClass="muted"
          diagram={DIAGRAMS.consolidation}
          tags={['AWS Cost Explorer', 'nOps', 'Datadog', 'Observability', 'Cost Culture', 'Platform Strategy', 'Dashboards']}
        >
          <p>Cost visibility was scattered across the org: <strong>AWS Cost Explorer</strong> for raw billing data, <strong>nOps</strong> for cost reporting, and separate systems for performance and infrastructure monitoring. Teams were constantly context-switching, and cost data lived in a silo disconnected from the engineering decisions that drove it.</p>
          <p>I led the strategic migration of cost observability into <strong>Datadog</strong> — consolidating cost reports, CI metrics, infrastructure performance, and alerting into a single organizational data ecosystem. By putting cost data next to the performance metrics that cause it, teams could no longer ignore the relationship between the two.</p>
          <p>Today, engineering teams across the org operate from <strong>real-time cost and performance dashboards in a single platform</strong> — making cost a first-class engineering concern, not a quarterly finance review.</p>
        </ImpactCard>

        <ImpactCard
          colorClass="card-c4"
          indexLabel="04 — Reliability Engineering"
          title="Postmortem Culture That Actually Stuck: 35% Fewer Repeat Incidents"
          stat="35%"
          statSub="fewer repeat incidents"
          statClass="green"
          diagram={DIAGRAMS.incidentFramework}
          tags={['Incident Management', 'Postmortem Framework', 'Datadog', 'Snowflake', 'Tableau', 'SLOs', 'MTTR']}
        >
          <p>Incidents were being resolved but not learned from. Root-cause analysis was inconsistent, action items fell through the cracks, and the same failure modes kept resurfacing across quarters — draining engineering time and eroding SLO budgets.</p>
          <p>I built a structured <strong>incident and postmortem framework</strong> — standardizing severity classification, blameless RCA processes, and systematic tracking of corrective actions through <strong>Datadog, Snowflake, and Tableau dashboards</strong>. Every postmortem became a closed loop with measurable follow-through.</p>
          <p>The result: <strong>35% reduction in repeat incidents</strong> and a <strong>25% improvement in mean time to recover (MTTR)</strong> — turning postmortems from a compliance exercise into a genuine reliability engine.</p>
        </ImpactCard>

        <ImpactCard
          colorClass="card-c5"
          indexLabel="05 — AI & Intelligent Operations"
          title="From Reactive Alerts to AI-Driven Insight: Watchdog, Anomaly Detection & ML Infra"
          stat={`Reactive<br><span class="arrow">→ Proactive</span>`}
          statSub=""
          statClass="muted"
          diagram={DIAGRAMS.aiPlatform}
          tags={['Datadog Watchdog', 'AI/ML', 'Anomaly Detection', 'Forecasting', 'SageMaker', 'EKS', 'GPU Nodes', 'MLOps']}
        >
          <p>Alert fatigue was real: static thresholds fired constantly, on-call engineers spent hours triaging noise, and actual anomalies were buried under false positives. Meanwhile, growing demand for ML workloads meant we needed GPU-capable infrastructure that didn't exist in our platform.</p>
          <p>I led the adoption of <strong>Datadog Watchdog AI</strong> — enabling anomaly detection, forecasting, and automated root-cause analysis across our observability stack. Static threshold alerts gave way to adaptive signals grounded in real workload baselines, dramatically reducing noise and accelerating MTTD.</p>
          <p>In parallel, I architected <strong>ML infrastructure on EKS</strong> — integrating GPU node pools and <strong>AWS SageMaker</strong> to support model training and inference workloads. The result: a platform that doesn't just monitor intelligently — it provides the compute foundation for the AI-driven products Sonos is building next.</p>
        </ImpactCard>

      </div>
    </section>
  )
}
