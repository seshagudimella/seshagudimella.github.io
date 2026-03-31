export default function Writing() {
  return (
    <section id="writing" className="content-section">
      <div className="section-kicker">Writing &amp; Recognition</div>
      <h2 className="section-heading">Published work</h2>
      <p className="section-lead">External validation that the thinking holds up beyond the org chart.</p>
      <div className="writing-row">

        <a
          href="https://tech-blog.sonos.com/posts/building-and-automating-cloud-services-performance/"
          target="_blank"
          rel="noopener"
          className="writing-card fade-up"
        >
          <div className="wc-banner wc-banner-sonos">
            <div className="wc-icon wc-icon-sonos">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div>
              <div className="wc-banner-label">Sonos Tech Blog</div>
              <div className="wc-banner-sub">Engineering article · Author</div>
            </div>
          </div>
          <div className="wc-body">
            <div className="wc-title">Building and Automating Cloud Services Performance</div>
            <div className="wc-desc">
              An inside look at how the platform team builds proactive guardrails to keep microservices scalable, resilient, and cost-aware — before problems reach production.
            </div>
            <div className="wc-link">Read the post <span className="wc-link-arrow">→</span></div>
          </div>
        </a>

        <a
          href="https://www.datadoghq.com/case-studies/sonos/"
          target="_blank"
          rel="noopener"
          className="writing-card fade-up"
        >
          <div className="wc-banner wc-banner-dd">
            <div className="wc-icon wc-icon-dd">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <div className="wc-banner-label">Datadog — Official Case Study</div>
              <div className="wc-banner-sub">Named &amp; quoted · Vendor feature</div>
            </div>
          </div>
          <div className="wc-body">
            <div className="wc-title">Sonos reduces CI costs by 50% with Datadog CI Pipeline Visibility</div>
            <div className="wc-quote">
              "We now have daily insights into execution time, queue time, and blocked time, which aids in better infrastructure management and tooling."
            </div>
            <div className="wc-desc">
              Featured in Datadog's official case study library — the outcome of driving CI observability, EKS cost optimization, and real-time pipeline visibility across the engineering organization.
            </div>
            <div className="wc-link">Read the case study <span className="wc-link-arrow">→</span></div>
          </div>
        </a>

      </div>
    </section>
  )
}
