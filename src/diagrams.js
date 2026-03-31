/* ============================================================
   Sesha Gudimella — Portfolio Site (React)
   diagrams.js — SVG diagram definitions as ES module
   ============================================================ */

const DIAGRAMS = {

  heroTopology: `
    <svg viewBox="0 0 380 340" width="100%" style="max-width:380px;overflow:visible;">
      <defs>
        <filter id="ga"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="gg"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <line x1="85"  y1="75"  x2="190" y2="170" stroke="rgba(79,70,229,0.2)"  stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="295" y1="75"  x2="190" y2="170" stroke="rgba(79,70,229,0.2)"  stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="58"  y1="190" x2="190" y2="170" stroke="rgba(79,70,229,0.2)"  stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="322" y1="190" x2="190" y2="170" stroke="rgba(5,150,105,0.25)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="130" y1="295" x2="190" y2="170" stroke="rgba(79,70,229,0.15)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="250" y1="295" x2="190" y2="170" stroke="rgba(79,70,229,0.15)" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="190" cy="170" fill="none" stroke="rgba(79,70,229,0.3)"  stroke-width="1.5" class="pulse-ring"/>
      <circle cx="190" cy="170" fill="none" stroke="rgba(79,70,229,0.15)" stroke-width="1"   class="pulse-ring2"/>
      <circle cx="190" cy="170" r="42" fill="rgba(79,70,229,0.07)"  stroke="rgba(79,70,229,0.35)" stroke-width="2" filter="url(#ga)"/>
      <circle cx="190" cy="170" r="33" fill="rgba(79,70,229,0.04)"  stroke="rgba(79,70,229,0.15)" stroke-width="1"/>
      <text x="190" y="164" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="800" fill="#4f46e5" letter-spacing="0.04em">DATADOG</text>
      <text x="190" y="179" text-anchor="middle" font-family="Inter,sans-serif" font-size="8"  fill="rgba(79,70,229,0.65)">Unified Platform</text>
      <circle cx="85"  cy="75"  r="28" fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.45)" stroke-width="1.5"/>
      <text x="85"  y="70" text-anchor="middle" font-family="Inter,sans-serif" font-size="9"   font-weight="700" fill="#d97706">AWS</text>
      <text x="85"  y="83" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="rgba(217,119,6,0.6)">EC2 / Lambda</text>
      <circle cx="295" cy="75"  r="28" fill="rgba(245,158,11,0.07)"  stroke="rgba(245,158,11,0.4)"  stroke-width="1.5"/>
      <text x="295" y="70" text-anchor="middle" font-family="Inter,sans-serif" font-size="9"   font-weight="700" fill="#d97706">S3 / RDS</text>
      <text x="295" y="83" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" fill="rgba(217,119,6,0.55)">Data &amp; Storage</text>
      <circle cx="58"  cy="190" r="26" fill="rgba(220,38,38,0.07)"  stroke="rgba(220,38,38,0.3)"  stroke-width="1.5"/>
      <text x="58"  y="186" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" font-weight="700" fill="#dc2626">Jenkins</text>
      <text x="58"  y="199" text-anchor="middle" font-family="Inter,sans-serif" font-size="7"   fill="rgba(220,38,38,0.55)">~2k/day</text>
      <circle cx="322" cy="190" r="26" fill="rgba(5,150,105,0.08)"  stroke="rgba(5,150,105,0.35)"  stroke-width="1.5" filter="url(#gg)"/>
      <text x="322" y="186" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" font-weight="700" fill="#059669">FinOps</text>
      <text x="322" y="199" text-anchor="middle" font-family="Inter,sans-serif" font-size="7"   fill="rgba(5,150,105,0.6)">Cost Culture</text>
      <circle cx="130" cy="295" r="24" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.28)" stroke-width="1.5"/>
      <text x="130" y="291" text-anchor="middle" font-family="Inter,sans-serif" font-size="9"   font-weight="700" fill="#7c3aed">SLOs</text>
      <text x="130" y="303" text-anchor="middle" font-family="Inter,sans-serif" font-size="7"   fill="rgba(124,58,237,0.5)">Daily</text>
      <circle cx="250" cy="295" r="24" fill="rgba(14,165,233,0.07)" stroke="rgba(14,165,233,0.28)" stroke-width="1.5"/>
      <text x="250" y="291" text-anchor="middle" font-family="Inter,sans-serif" font-size="7.5" font-weight="700" fill="#0284c7">Microsvcs</text>
      <text x="250" y="303" text-anchor="middle" font-family="Inter,sans-serif" font-size="7"   fill="rgba(2,132,199,0.5)">Scale + Resilience</text>
    </svg>`,

  costChart: `
    <svg viewBox="0 0 300 200" width="100%" style="font-family:Inter,sans-serif;overflow:visible;">
      <text x="14" y="12" font-size="7.5" fill="#9ca3af" text-anchor="middle">$K</text>
      <line x1="28" y1="18"  x2="285" y2="18"  stroke="rgba(0,0,0,0.05)" stroke-width="1"/>
      <line x1="28" y1="50"  x2="285" y2="50"  stroke="rgba(0,0,0,0.05)" stroke-width="1"/>
      <line x1="28" y1="82"  x2="285" y2="82"  stroke="rgba(0,0,0,0.05)" stroke-width="1"/>
      <line x1="28" y1="101" x2="285" y2="101" stroke="rgba(79,70,229,0.4)" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="22" y="99"  font-size="7" fill="#6366f1" text-anchor="end" font-weight="600">$675K</text>
      <text x="22" y="109" font-size="6.5" fill="#9ca3af" text-anchor="end">budget</text>
      <rect x="36"  y="55"  width="34" height="90"  rx="4" fill="#fca5a5"/><rect x="36"  y="55"  width="34" height="90"  rx="4" fill="none" stroke="#ef4444" stroke-width="1"/>
      <text x="53"  y="50"  font-size="7" fill="#dc2626" text-anchor="middle">$752K</text>
      <rect x="84"  y="38"  width="34" height="107" rx="4" fill="#f87171"/><rect x="84"  y="38"  width="34" height="107" rx="4" fill="none" stroke="#dc2626" stroke-width="1"/>
      <text x="101" y="33"  font-size="7" font-weight="700" fill="#b91c1c" text-anchor="middle">$782K ▲</text>
      <rect x="132" y="98"  width="34" height="47"  rx="4" fill="#fca5a5"/><rect x="132" y="98"  width="34" height="47"  rx="4" fill="none" stroke="#ef4444" stroke-width="1"/>
      <text x="149" y="93"  font-size="7" fill="#dc2626" text-anchor="middle">$679K</text>
      <rect x="180" y="84"  width="34" height="61"  rx="4" fill="#fca5a5"/><rect x="180" y="84"  width="34" height="61"  rx="4" fill="none" stroke="#ef4444" stroke-width="1"/>
      <text x="197" y="79"  font-size="7" fill="#dc2626" text-anchor="middle">$703K</text>
      <rect x="228" y="107" width="34" height="38"  rx="4" fill="#6ee7b7"/><rect x="228" y="107" width="34" height="38"  rx="4" fill="none" stroke="#059669" stroke-width="1.5"/>
      <text x="245" y="101" font-size="7" font-weight="700" fill="#059669" text-anchor="middle">$665K ✓</text>
      <text x="53"  y="158" font-size="8" fill="#9ca3af" text-anchor="middle">Oct</text>
      <text x="101" y="158" font-size="8" fill="#9ca3af" text-anchor="middle">Nov</text>
      <text x="149" y="158" font-size="8" fill="#9ca3af" text-anchor="middle">Dec</text>
      <text x="197" y="158" font-size="8" fill="#9ca3af" text-anchor="middle">Jan</text>
      <text x="245" y="158" font-size="8" font-weight="600" fill="#059669" text-anchor="middle">Feb</text>
      <line x1="245" y1="160" x2="245" y2="170" stroke="rgba(5,150,105,0.4)" stroke-width="1"/>
      <text x="245" y="180" font-size="7" fill="#059669" text-anchor="middle">First under</text>
      <text x="245" y="190" font-size="7" fill="#059669" text-anchor="middle">budget</text>
      <text x="150" y="198" font-size="7" fill="#d1d5db" text-anchor="middle">Monthly Cloud Spend vs. $675K Budget</text>
    </svg>`,

  ciPipeline: `
    <svg viewBox="0 0 260 210" width="100%" style="font-family:Inter,sans-serif;overflow:visible;">
      <text x="130" y="14" text-anchor="middle" font-size="8" font-weight="700" fill="#9ca3af" letter-spacing="0.08em">BEFORE</text>
      <rect x="10"  y="22" width="68" height="26" rx="5" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
      <text x="44"  y="39" text-anchor="middle" font-size="8" fill="#dc2626">Jenkins</text>
      <rect x="96"  y="22" width="68" height="26" rx="5" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
      <text x="130" y="39" text-anchor="middle" font-size="8" fill="#dc2626">Spreadsheets</text>
      <rect x="182" y="22" width="68" height="26" rx="5" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
      <text x="216" y="39" text-anchor="middle" font-size="8" fill="#dc2626">Multi-platform</text>
      <line x1="130" y1="48" x2="130" y2="62" stroke="#fca5a5" stroke-width="1.5"/>
      <polygon points="125,59 135,59 130,66" fill="#fca5a5"/>
      <rect x="72" y="68" width="116" height="28" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="130" y="80" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">~1 day wait</text>
      <text x="130" y="90" text-anchor="middle" font-size="7.5" fill="#ef4444">for CI feedback</text>
      <line x1="20" y1="112" x2="240" y2="112" stroke="rgba(0,0,0,0.07)" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="130" y="125" text-anchor="middle" font-size="8" font-weight="700" fill="#059669" letter-spacing="0.08em">AFTER</text>
      <rect x="72" y="132" width="116" height="28" rx="8" fill="#ede9fe" stroke="#a78bfa" stroke-width="1.5"/>
      <text x="130" y="144" text-anchor="middle" font-size="9" font-weight="700" fill="#6d28d9">Datadog</text>
      <text x="130" y="155" text-anchor="middle" font-size="7.5" fill="#7c3aed">CI Pipeline Visibility</text>
      <line x1="130" y1="160" x2="130" y2="174" stroke="#6ee7b7" stroke-width="1.5"/>
      <polygon points="125,171 135,171 130,178" fill="#6ee7b7"/>
      <rect x="72" y="178" width="116" height="28" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
      <text x="130" y="190" text-anchor="middle" font-size="9" font-weight="700" fill="#059669">Real-time</text>
      <text x="130" y="200" text-anchor="middle" font-size="7.5" fill="#10b981">US + EU, no duplication</text>
    </svg>`,

  consolidation: `
    <svg viewBox="0 0 260 200" width="100%" style="font-family:Inter,sans-serif;overflow:visible;">
      <rect x="8"   y="30" width="70" height="32" rx="6" fill="#fffbeb" stroke="#fbbf24" stroke-width="1"/>
      <text x="43"  y="44" text-anchor="middle" font-size="7.5" font-weight="600" fill="#d97706">AWS Cost</text>
      <text x="43"  y="55" text-anchor="middle" font-size="7"   fill="#f59e0b">Explorer</text>
      <rect x="95"  y="8"  width="70" height="32" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="130" y="22" text-anchor="middle" font-size="7.5" font-weight="600" fill="#2563eb">nOps</text>
      <text x="130" y="33" text-anchor="middle" font-size="7"   fill="#60a5fa">Cost Reports</text>
      <rect x="182" y="30" width="70" height="32" rx="6" fill="#faf5ff" stroke="#c4b5fd" stroke-width="1"/>
      <text x="217" y="44" text-anchor="middle" font-size="7.5" font-weight="600" fill="#7c3aed">Separate</text>
      <text x="217" y="55" text-anchor="middle" font-size="7"   fill="#a78bfa">Infra / CI tools</text>
      <line x1="43"  y1="62" x2="118" y2="114" stroke="#d1d5db" stroke-width="1.5"/>
      <line x1="130" y1="40" x2="130" y2="108" stroke="#d1d5db" stroke-width="1.5"/>
      <line x1="217" y1="62" x2="142" y2="114" stroke="#d1d5db" stroke-width="1.5"/>
      <polygon points="115,110 121,118 127,110" fill="#d1d5db"/>
      <polygon points="127,104 133,112 139,104" fill="#d1d5db"/>
      <polygon points="139,110 145,118 151,110" fill="#d1d5db"/>
      <rect x="72" y="118" width="116" height="40" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="130" y="133" text-anchor="middle" font-size="10" font-weight="800" fill="#6d28d9">Datadog</text>
      <text x="130" y="148" text-anchor="middle" font-size="8"  fill="#7c3aed">Single Source of Truth</text>
      <line x1="130" y1="158" x2="130" y2="170" stroke="#6ee7b7" stroke-width="1.5"/>
      <polygon points="125,167 135,167 130,174" fill="#6ee7b7"/>
      <rect x="50" y="174" width="160" height="24" rx="6" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1"/>
      <text x="130" y="189" text-anchor="middle" font-size="8" font-weight="600" fill="#059669">Cost + Perf — one dashboard</text>
    </svg>`,

  incidentFramework: `
    <svg viewBox="0 0 260 195" width="100%" style="font-family:Inter,sans-serif;overflow:visible;">
      <rect x="10" y="14" width="114" height="104" rx="12" fill="rgba(5,150,105,0.06)" stroke="rgba(5,150,105,0.28)" stroke-width="1.5"/>
      <text x="67" y="34" text-anchor="middle" font-size="6.5" font-weight="700" fill="#6b7280" letter-spacing="0.08em">REPEAT INCIDENTS</text>
      <text x="67" y="82" text-anchor="middle" font-size="42" font-weight="900" fill="#059669">35%</text>
      <text x="67" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="#10b981">↓ reduction</text>
      <rect x="136" y="14" width="114" height="104" rx="12" fill="rgba(79,70,229,0.06)" stroke="rgba(79,70,229,0.22)" stroke-width="1.5"/>
      <text x="193" y="34" text-anchor="middle" font-size="6.5" font-weight="700" fill="#6b7280" letter-spacing="0.08em">MEAN TIME TO RECOVER</text>
      <text x="193" y="82" text-anchor="middle" font-size="42" font-weight="900" fill="#4f46e5">25%</text>
      <text x="193" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="#6366f1">↑ faster</text>
      <rect x="10" y="134" width="240" height="40" rx="9" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.12)" stroke-width="1"/>
      <text x="130" y="150" text-anchor="middle" font-size="6.5" fill="#9ca3af" letter-spacing="0.07em">TOOLING</text>
      <text x="130" y="165" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4f46e5">Datadog · Snowflake · Tableau</text>
    </svg>`,

  platformMap: `
    <svg viewBox="0 0 720 215" width="100%" style="min-width:540px;font-family:Inter,sans-serif;display:block;">
      <rect x="8"   y="8"   width="218" height="198" rx="14" fill="rgba(245,158,11,0.05)"  stroke="rgba(245,158,11,0.25)"  stroke-width="1.5" stroke-dasharray="5,4"/>
      <rect x="251" y="8"   width="218" height="198" rx="14" fill="rgba(79,70,229,0.04)"   stroke="rgba(79,70,229,0.2)"   stroke-width="1.5" stroke-dasharray="5,4"/>
      <rect x="494" y="8"   width="218" height="198" rx="14" fill="rgba(5,150,105,0.05)"   stroke="rgba(5,150,105,0.22)"  stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="117" y="30" text-anchor="middle" font-size="8.5" font-weight="700" letter-spacing="0.09em" fill="#d97706">CLOUD INFRA</text>
      <text x="360" y="30" text-anchor="middle" font-size="8.5" font-weight="700" letter-spacing="0.09em" fill="#4f46e5">CI / CD PLATFORM</text>
      <text x="603" y="30" text-anchor="middle" font-size="8.5" font-weight="700" letter-spacing="0.09em" fill="#059669">OBSERVABILITY &amp; FINOPS</text>
      <rect x="28"  y="44" width="90" height="54" rx="10" fill="white" stroke="rgba(245,158,11,0.45)" stroke-width="1.5"/>
      <text x="73"  y="67" text-anchor="middle" font-size="11" font-weight="800" fill="#d97706">AWS</text>
      <text x="73"  y="83" text-anchor="middle" font-size="7.5" fill="#9ca3af">EC2 · Lambda · EKS</text>
      <rect x="130" y="44" width="86" height="54" rx="10" fill="white" stroke="rgba(245,158,11,0.4)" stroke-width="1.5"/>
      <text x="173" y="67" text-anchor="middle" font-size="10" font-weight="800" fill="#d97706">S3 / RDS</text>
      <text x="173" y="83" text-anchor="middle" font-size="7.5" fill="#9ca3af">Data &amp; Storage</text>
      <rect x="48"  y="118" width="150" height="40" rx="10" fill="white" stroke="rgba(124,58,237,0.3)" stroke-width="1.5"/>
      <text x="123" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#7c3aed">Terraform</text>
      <text x="123" y="150" text-anchor="middle" font-size="7.5" fill="#9ca3af">Infrastructure as Code</text>
      <rect x="268" y="44" width="90" height="54" rx="10" fill="white" stroke="rgba(220,38,38,0.35)" stroke-width="1.5"/>
      <text x="313" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#dc2626">Jenkins</text>
      <text x="313" y="79" text-anchor="middle" font-size="7.5" fill="#9ca3af">~2,000</text>
      <text x="313" y="91" text-anchor="middle" font-size="7.5" fill="#9ca3af">builds/day</text>
      <rect x="372" y="44" width="90" height="54" rx="10" fill="white" stroke="rgba(31,41,55,0.25)" stroke-width="1.5"/>
      <text x="417" y="63" text-anchor="middle" font-size="9" font-weight="700" fill="#1f2937">GitHub</text>
      <text x="417" y="77" text-anchor="middle" font-size="9" font-weight="700" fill="#1f2937">Actions</text>
      <text x="417" y="91" text-anchor="middle" font-size="7.5" fill="#9ca3af">PR CI</text>
      <rect x="285" y="118" width="165" height="40" rx="10" fill="white" stroke="rgba(14,165,233,0.4)" stroke-width="1.5"/>
      <text x="367" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#0284c7">Kubernetes on EKS</text>
      <text x="367" y="150" text-anchor="middle" font-size="7.5" fill="#9ca3af">Container orchestration at scale</text>
      <rect x="512" y="44" width="182" height="54" rx="10" fill="white" stroke="rgba(124,58,237,0.5)" stroke-width="1.5"/>
      <text x="603" y="68" text-anchor="middle" font-size="12" font-weight="900" fill="#7c3aed">Datadog</text>
      <text x="603" y="85" text-anchor="middle" font-size="7.5" fill="#9ca3af">APM · Logs · CI · Cost · Dashboards</text>
      <rect x="512" y="118" width="82" height="40" rx="10" fill="white" stroke="rgba(79,70,229,0.3)" stroke-width="1.5"/>
      <text x="553" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#4f46e5">SLOs / SLIs</text>
      <text x="553" y="150" text-anchor="middle" font-size="7.5" fill="#9ca3af">Daily review</text>
      <rect x="612" y="118" width="82" height="40" rx="10" fill="white" stroke="rgba(5,150,105,0.4)" stroke-width="1.5"/>
      <text x="653" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#059669">FinOps</text>
      <text x="653" y="150" text-anchor="middle" font-size="7.5" fill="#9ca3af">$100K/mo saved</text>
      <line x1="228" y1="107" x2="249" y2="107" stroke="rgba(79,70,229,0.35)" stroke-width="2"/>
      <polygon points="245,103 253,107 245,111" fill="rgba(79,70,229,0.5)"/>
      <line x1="471" y1="107" x2="492" y2="107" stroke="rgba(5,150,105,0.4)" stroke-width="2"/>
      <polygon points="488,103 496,107 488,111" fill="rgba(5,150,105,0.55)"/>
      <text x="360" y="205" text-anchor="middle" font-size="8" font-weight="500" fill="#d1d5db" letter-spacing="0.04em">End-to-end platform ownership · Sesha Gudimella</text>
    </svg>`,

}

export default DIAGRAMS
