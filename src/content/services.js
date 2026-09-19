// How long each service stays in the spotlight before the next one appears (milliseconds).
export const SERVICE_ROTATION_MS = 6000

export const services = [
  {
    icon: 'users',
    title: 'Resource Augmentation',
    text: 'Skilled engineers, testers and specialists embedded in your team.',
    details: [
      'Full-stack, backend and mobile developers',
      'QA, automation and DevOps engineers',
      'Business analysts and project managers',
    ],
  },
  {
    icon: 'code',
    title: 'Software Development',
    text: 'Web, mobile and enterprise applications built to last.',
    details: [
      'Customer-facing web portals and mobile apps',
      'Multi-tenant, white-label SaaS platforms',
      'Microservices and cloud-native (AWS) builds',
    ],
  },
  {
    icon: 'compass',
    title: 'Software Consultancy',
    text: 'Architecture, technology and roadmap advice you can act on.',
    details: [
      'Enterprise and solution architecture',
      'Technical due diligence and reviews',
      'Delivery governance and Agile transformation',
    ],
  },
  {
    icon: 'shield',
    title: 'Software Testing',
    text: 'Manual and automated QA that protects release quality.',
    details: [
      'Functional, regression and UAT support',
      'Selenium, Playwright, Cypress and API suites',
      'Performance, security and cross-browser testing',
    ],
  },
  {
    icon: 'pen',
    title: 'Digital Content Creation',
    text: 'Website, marketing, video and technical content.',
    details: [
      'Website and web copy',
      'Video, animation and social campaigns',
      'Technical documentation and UI assets',
    ],
  },
  {
    icon: 'plug',
    title: 'Integration',
    text: 'APIs and connectors that make your systems work as one.',
    details: [
      'REST API design and API gateways',
      'ERP integration (e.g. NetSuite)',
      'Payment, banking and telecom integrations',
    ],
  },
  {
    icon: 'cloud',
    title: 'Migration',
    text: 'Safe moves to modern platforms, cloud and databases.',
    details: [
      'Monolith to microservices redesign',
      'On-premise to cloud modernisation',
      'Near-zero-downtime cutover planning',
    ],
  },
]
