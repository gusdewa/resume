import type { ResumeVariant } from '../../types/resume';

export const defaultVariant: ResumeVariant = {
  metadata: {
    variantName: 'default',
    title: 'Rahadian Dewandono - Resume',
    description: 'Solution Architect | Tech Advisor | Ex-McKinsey | Ex-CTO Startup',
  },
  header: {
    name: 'Rahadian Dewandono',
    title: 'Solution Architect | Tech Advisor | Ex-McKinsey | Ex-CTO Startup',
    contact: {
      email: 'gusdewa@gmail.com',
      location: 'Jakarta Metropolitan Area',
      linkedin: 'linkedin.com/in/rdewa',
    },
  },
  summary: `I specialize in bridging business strategy with hands-on technology to deliver measurable results. With experience across tech consulting, startups, and digital transformation for Fortune 500 companies, I build practical, scalable solutions that drive business growth.

At Sinarmas' AI Center of Excellence, I focus on solving complex challenges and accelerating transformation through AI-driven decision systems and agentic workflows. I am committed to building high-performing teams, mentoring future tech leaders, and delivering solutions that are simple, sustainable, and high-impact.

Certified in cloud computing, DevOps, and agile leadership, with credentials from top hyperscalers and global executive programs.`,
  experience: [
    {
      company: 'PT SMART Tbk',
      title: 'Solutions Architect - Strategic Initiative Management Office',
      location: 'Jakarta Metropolitan Area',
      period: 'January 2026 - Present',
      highlights: [],
    },
    {
      company: 'SRX',
      title: 'Solutions Architect',
      location: 'Jakarta, Indonesia',
      period: 'May 2024 - December 2025',
      description: 'I help Sinarmas business units rewire their digital strategies with AI. I bridge AI and digital technologies with business goals, focusing on solutions that deliver tangible, scalable results through data-driven decision support systems and agentic AI workflows.',
      highlights: [
        'Integrated agentic AI workflows into enterprise operations by designing and deploying a Command Center platform for plantation management across 537K hectares, seamlessly connecting field data, enterprise systems, and real-time decision support',
        'Built scalable GenAI applications that drive faster and smarter issue resolution, using natural language interfaces, retrieval-augmented generation (RAG), and generative UI to simplify user interaction with complex backend & enterprise systems',
        'Led group-wide AI upskilling and knowledge-sharing initiatives, training ~150 employees in AI and digital capabilities and fostering collaboration across Sinarmas CIOs and internal experts',
      ],
      technologies: ['React', 'Python', 'LangChain', 'LangGraph', 'MCP', 'LLaMA', 'PGVector', 'Azure'],
    },
    {
      company: 'Fita',
      title: 'Chief Technology Officer',
      location: 'Jakarta, Indonesia',
      period: 'January 2022 - May 2024',
      highlights: [
        'Designed Fita\'s platform with 25 microservices using Go and NodeJS, supporting 500K+ MAU with DDD, Event-Driven Architecture, and CQRS patterns',
        'Led zero-trust security initiatives and a bug bounty program, fortifying user data protection',
        'Integrated GenAI technologies (Pinecone, LangChain, OpenAI), saving $2,500/month and improving operational efficiency',
        'Enhanced system stability, cost-effectiveness, and developer experience through strategic upgrades',
        'Sustained team performance through resource-constrained phases, driving faster profitability via adaptive sprints and streamlined roadmaps',
        'Streamlined delivery with DevOps tools (Terraform, Kubernetes, GCP) and QA automation frameworks, reducing time-to-market',
        'Scaled and nurtured a team of 50+ engineers, QAs, and DevOps professionals',
      ],
      technologies: ['Go', 'NodeJS', 'Microservices', 'Kubernetes', 'GCP', 'Terraform', 'Pinecone', 'LangChain', 'OpenAI'],
    },
    {
      company: 'Telkomsel',
      title: 'CTO for Specialized Business Unit',
      location: 'Jakarta, Indonesia',
      period: 'July 2021 - 2022',
      description: 'As CTO of Fita (was a BU under Telkomsel), I took a pivotal role during the early growth:',
      highlights: [
        'Architected Scalable Solutions: Designed a robust, future-ready architecture for Fita\'s fitness and wellness platform, enabling a seamless user experience',
        'Expanded Engineering Talent: Tripled the engineering team in 4 months, fostering high engagement and collaboration',
        'Led Strategic Spin-Off: Orchestrated the engineering and IT carve-out during Fita\'s spin-off from Telkomsel, ensuring operational continuity',
      ],
    },
    {
      company: 'McKinsey & Company',
      title: 'Digital Specialist',
      location: 'Jakarta, Indonesia',
      period: '2020 - July 2021',
      highlights: [
        'Provided visionary architecture and governance for a platform ecosystem, leading the team to build out advanced credit scoring system',
        'Formulated and enforced robust data security protocols aligned with Indonesian regulations for handling sensitive customer data on hybrid infrastructure',
        'Directed engineering teams in design and deployment of Kubernetes, Docker, and microservices-based scalable platforms, handling 20M+ monthly users',
        'Strategically aligned API integrations with key telco partnerships in South East Asia',
        'Championed DevOps methodologies through CI/CD pipelines, translating into accelerated development cycles',
      ],
      technologies: ['Kubernetes', 'Docker', 'Microservices', 'CI/CD'],
    },
    {
      company: 'McKinsey & Company',
      title: 'Senior Digital Analyst',
      location: 'Jakarta, Indonesia',
      period: 'November 2017 - 2020',
      highlights: [
        'Engineered backend infrastructure for B2C telco apps with 20M+ MAU to handle increased traffic, ensuring high availability and scalability',
        'Implemented A/B tests and utilized analytics to fine-tune application technical parameters for optimal user engagement',
        'Championed adoption of agile methodologies, specifically targeting technology layers of organizations',
        'Implemented CI/CD pipelines, code reviews, and microservices to drive technological efficiency',
        'Led Data Engineering and Data Science teams in developing predictive maintenance models for mining using Random Forests and Gradient Boosting',
        'Established robust data pipelines for nearly real-time analytics processing raw and unstructured machine-generated data',
      ],
      technologies: ['Python', 'Machine Learning', 'Random Forests', 'Gradient Boosting', 'CI/CD'],
    },
    {
      company: 'ABB',
      title: 'Senior Software Engineer',
      location: 'Denpasar Area, Bali, Indonesia',
      period: 'August 2016 - November 2017',
      highlights: [
        'Led modernization of legacy desktop application using 12 Factor Apps, Domain-Driven Design (DDD), Microservices Architecture (MSA), and Single-Page Application (SPA) frameworks',
        'Seamlessly migrated app to the cloud, unlocking scalability, resilience, and enhanced user experience',
        'Championed agile methodologies and fostered culture of continuous improvement',
        'Exhibited full-stack proficiency by spearheading coding efforts, implementing unit testing frameworks, and establishing automated testing',
        'Pioneered implementation of robust CI/CD pipeline setups, reducing time-to-market',
        'Spearheaded delivery of rapid prototyping initiatives and proof of concepts',
      ],
      technologies: ['Microservices', 'DDD', 'Cloud', 'CI/CD', 'SPA'],
    },
    {
      company: 'The eCEOs Sdn. Bhd',
      title: 'Technical Leader',
      location: 'Greater Jakarta Area, Indonesia',
      period: 'December 2014 - August 2016',
      highlights: [
        'Provided expert advisory services on enterprise architecture, technology selection, and project management methodologies',
        'Led high-tech industry and government agency software delivery projects',
        'Pioneered adoption of agile practices within enterprise projects',
        'Demonstrated strong leadership in team building, talent acquisition, and outsourcing strategies',
        'Orchestrated entire product life cycle (PLC) management from conception to release',
      ],
    },
    {
      company: 'Nalysa',
      title: '.NET Project Manager / Application Development Engineer',
      location: 'Greater Jakarta Area, Indonesia',
      period: 'January 2014 - November 2014',
      highlights: [
        'Successfully established and led the company\'s software development department from inception',
        'Championed agile project management methodologies including Scrum, TDD, and CI/CD',
        'Meticulously oversaw project execution, ensuring adherence to timelines, scope, quality standards, and budgets',
      ],
      technologies: ['.NET', 'Scrum', 'TDD', 'CI/CD'],
    },
    {
      company: 'Young Leaders for Indonesia Foundation',
      title: 'Young Leaders for Indonesia - National Wave 4',
      location: 'Greater Jakarta Area, Indonesia',
      period: 'April 2012 - December 2012',
      highlights: [
        'Successfully awarded prestigious scholarship among 1000+ applicants for accelerated leadership development program, sponsored by McKinsey & Company',
        'Engaged in immersive learning experience to gain comprehensive knowledge of McKinsey\'s fundamental management consulting frameworks',
        'Spearheaded high-impact leadership project under guidance of distinguished leaders from Indonesia',
      ],
    },
  ],
  education: [
    {
      institution: 'Institut Teknologi Sepuluh Nopember Surabaya',
      degree: 'Master\'s degree',
      field: 'Computer Science',
      location: 'Surabaya, Indonesia',
      period: '2011 - 2013',
    },
    {
      institution: 'The University of Göttingen',
      degree: 'Master of Computer Applications - MCA',
      field: 'Process Mining',
      location: 'Göttingen, Germany',
      period: '2013',
    },
    {
      institution: 'Institut Teknologi Sepuluh Nopember Surabaya',
      degree: 'Bachelor\'s Degree',
      field: 'Computer Science',
      location: 'Surabaya, Indonesia',
      period: '2008 - 2012',
      details: [
        'The Best Graduate - Computer Science Department',
        'The University\'s Outstanding Student',
      ],
    },
  ],
  skills: [
    {
      category: 'Cloud & Infrastructure',
      skills: ['Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['LangChain', 'LangGraph', 'RAG', 'GenAI', 'LLaMA', 'OpenAI', 'Pinecone', 'PGVector'],
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'Go', 'NodeJS', 'React', 'TypeScript', '.NET'],
    },
    {
      category: 'Architecture & Patterns',
      skills: ['Microservices', 'Domain-Driven Design', 'Event-Driven Architecture', 'CQRS', '12 Factor Apps'],
    },
    {
      category: 'DevOps & Practices',
      skills: ['CI/CD', 'Agile', 'Scrum', 'TDD', 'DevOps'],
    },
    {
      category: 'Leadership & Strategy',
      skills: ['Management Consulting', 'Digital Strategy', 'Team Building', 'Technical Advisory'],
    },
  ],
  certifications: [
    {
      name: 'Cloud Computing, DevOps, and Agile Leadership',
      issuer: 'Top Hyperscalers and Global Executive Programs',
    },
    {
      name: 'The Winner of National System Design Competition',
      issuer: 'Arkavidia 2.0',
    },
    {
      name: 'The Winner of GEMPA National Competition',
      issuer: 'GEMPA',
      year: '2012',
    },
    {
      name: 'The Honourable Mention ACM-ICPC Regional Contest',
      issuer: 'ACM-ICPC',
    },
  ],
};
