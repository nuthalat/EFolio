const projects = [
  {
    title: 'E-Folio Personal Website',
    description:
      'A polished personal portfolio that highlights achievements, storytelling, and contact pathways.',
    links: [
      { label: 'HTML Standard', url: 'https://html.spec.whatwg.org/' },
      { label: 'CSS Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ]
  },
  {
    title: 'AI Productivity Toolkit',
    description:
      'A set of prompts and helper scripts that streamline research, writing, and technical planning workflows.',
    links: [
      { label: 'OpenAI Platform', url: 'https://platform.openai.com/' },
      { label: 'Prompting Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' }
    ]
  },
  {
    title: 'Automation Utility Scripts',
    description:
      'Reusable scripts for setup, validation, and repetitive project tasks to improve developer velocity.',
    links: [
      { label: 'Python Docs', url: 'https://docs.python.org/3/' },
      { label: 'Git Docs', url: 'https://git-scm.com/doc' }
    ]
  },
  {
    title: 'Performance & Accessibility Improvements',
    description:
      'Applied measurable front-end best practices to improve load speed, readability, and inclusive usability.',
    links: [
      { label: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/overview' },
      { label: 'WCAG Overview', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' }
    ]
  }
];

const projectGrid = document.getElementById('projectGrid');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          ${project.links
            .map(
              (link) =>
                `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
            )
            .join('')}
        </div>
      </article>
    `
  )
  .join('');
