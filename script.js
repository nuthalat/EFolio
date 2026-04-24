const projects = [
  {
    title: 'Intent-Based Privacy Enforcement Framework (Amazon Business)',
    category: 'Platform / Security',
    summary:
      'Designed an intent-driven privacy enforcement layer to reduce over-permissioning and improve compliance for enterprise data access.',
    contributions: [
      'Designed fine-grained access control architecture across services and data domains.',
      'Implemented policy evaluation flows with secure defaults and measurable reduction in unnecessary access.',
      'Partnered across teams to standardize enforcement patterns and adoption.'
    ],
    metrics: ['64% access reduction', 'Enterprise customers', 'Security & compliance']
  },
  {
    title: 'Industrial Data Ingestion & Analytics Platform (OPC UA)',
    category: 'Data / Distributed Systems',
    summary:
      'Built an ingestion + analytics platform for high-frequency industrial telemetry, supporting reliable collection and analysis at scale.',
    contributions: [
      'Designed ingestion architecture for bursty telemetry with resilient retry and backpressure patterns.',
      'Implemented storage + query layers optimized for analytics workflows and cost-efficient retention.',
      'Delivered platform capabilities that enabled faster insights for downstream stakeholders.'
    ],
    metrics: ['PB-scale', 'Near real-time SLAs', 'High-frequency telemetry']
  },
  {
    title: 'Fire TV Web Rendering Platform Upgrade',
    category: 'Platform / Media',
    summary:
      'Upgraded critical rendering platform components to improve performance, stability, and user experience at massive scale.',
    contributions: [
      'Led platform-level improvements targeting stability and predictable performance.',
      'Improved runtime behavior using profiling-informed optimizations and reliability guardrails.',
      'Aligned cross-functional requirements with rollout strategies and operational monitoring.'
    ],
    metrics: ['50M+ users impacted', 'Platform stability', 'Performance improvements']
  },
  {
    title: 'Multimodal Video Partner Integration Platform',
    category: 'Integrations / Platform',
    summary:
      'Delivered a scalable integration platform for onboarding video partners with consistent ingestion, validation, and delivery workflows.',
    contributions: [
      'Designed extensible integration patterns to accelerate new partner onboarding.',
      'Implemented validation and observability to reduce operational load and improve troubleshooting.',
      'Coordinated with partner-facing teams to meet delivery timelines and quality standards.'
    ],
    metrics: ['Partner onboarding', 'Operational reliability', 'Observability']
  },
  {
    title: 'Japanese Government e-Procurement Integration (GEPS)',
    category: 'Enterprise / Government',
    summary:
      'Built a robust integration to support government procurement workflows, with strict reliability and compliance requirements.',
    contributions: [
      'Designed secure integration flows with traceability across systems.',
      'Implemented resilient processing with clear failure semantics and recovery paths.',
      'Collaborated with stakeholders to translate policy constraints into concrete system behavior.'
    ],
    metrics: ['Government integration', 'Security-first', 'High reliability']
  },
  {
    title: 'High-Scale Data Lake Query Optimization',
    category: 'Data / Analytics',
    summary:
      'Optimized analytics query paths on large datasets to improve performance and reduce compute waste.',
    contributions: [
      'Identified bottlenecks using data profiling and query plan analysis.',
      'Implemented layout/partitioning and execution optimizations aligned to access patterns.',
      'Delivered measurable gains while maintaining correctness and SLA expectations.'
    ],
    metrics: ['33% query improvement', 'Cost efficiency', 'PB-scale datasets']
  }
];

const projectGrid = document.getElementById('projectGrid');
const year = document.getElementById('year');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (year) year.textContent = new Date().getFullYear();

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = projects
    .map((p) => {
      const contributions = (p.contributions || [])
        .map((c) => `<li>${escapeHtml(c)}</li>`)
        .join('');
      const metrics = (p.metrics || [])
        .map((m) => `<span class="chip">${escapeHtml(m)}</span>`)
        .join('');

      return `
        <article class="project-card">
          <div class="project-topline">
            <h3>${escapeHtml(p.title)}</h3>
            <span class="tag">${escapeHtml(p.category)}</span>
          </div>
          <p class="project-desc">${escapeHtml(p.summary)}</p>
          <details class="project-details">
            <summary>Key contributions & metrics</summary>
            <div class="project-meta">
              <div>
                <h4>Key contributions</h4>
                <ul>${contributions}</ul>
              </div>
              <div>
                <h4>Impact metrics</h4>
                <div class="project-metrics">${metrics}</div>
              </div>
            </div>
          </details>
        </article>
      `;
    })
    .join('');
}

function setNavOpen(isOpen) {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navLinks.classList.toggle('is-open', isOpen);
}

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  setNavOpen(!isOpen);
});

navLinks?.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.tagName === 'A') setNavOpen(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setNavOpen(false);
});

renderProjects();
