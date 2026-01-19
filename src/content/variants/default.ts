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
      email: 'rahadian.dewandono@gmail.com',
      location: 'Jakarta Metropolitan Area',
      linkedin: 'linkedin.com/in/rdewa',
    },
  },
  summary: `I specialize in bridging business strategy with hands-on technology to deliver measurable results. With experience across tech consulting, startups, and digital transformation for Fortune 500 companies, I build practical, scalable solutions that drive business growth.

At Sinarmas' AI Center of Excellence, I focus on solving complex challenges and accelerating transformation through AI-driven decision systems and agentic workflows. I am committed to building high-performing teams, mentoring future tech leaders, and delivering solutions that are simple, sustainable, and high-impact.

Certified in cloud computing, DevOps, and agile leadership, with credentials from top hyperscalers and global executive programs.`,
  experience: [
    {
      company: 'Sinarmas (PT SMART Tbk / SRX)',
      title: 'Solutions Architect',
      location: 'Jakarta Metropolitan Area',
      period: 'May 2024 - Present',
      highlights: [
        'Leading strategic technology initiatives across the enterprise to drive value creation and operational excellence',
        'Help Sinarmas business units rewire their digital strategies with AI, bridging AI and digital technologies with business goals to deliver investor-grade clarity',
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
      period: 'November 2017 - July 2021',
      highlights: [
        'Provided visionary architecture and governance for a platform ecosystem, leading the team to build out advanced credit scoring system',
        'Formulated and enforced robust data security protocols aligned with Indonesian regulations for handling sensitive customer data on hybrid infrastructure',
        'Directed engineering teams in design and deployment of Kubernetes, Docker, and microservices-based scalable platforms, handling 20M+ monthly users',
        'Strategically aligned API integrations with key telco partnerships in South East Asia',
        'Championed DevOps methodologies through CI/CD pipelines, translating into accelerated development cycles',
        'Engineered backend infrastructure for B2C telco apps with 20M+ MAU to handle increased traffic, ensuring high availability and scalability',
        'Implemented A/B tests and utilized analytics to fine-tune application technical parameters for optimal user engagement',
        'Led Data Engineering and Data Science teams in developing predictive maintenance models for mining using Random Forests and Gradient Boosting',
      ],
      technologies: [
        'Kubernetes',
        'Docker',
        'Microservices',
        'CI/CD',
        'Python',
        'Machine Learning',
        'Random Forests',
        'Gradient Boosting',
      ],
    },
    {
      company: 'ABB',
      title: 'Senior Software Engineer',
      location: 'Denpasar Area, Bali, Indonesia',
      period: 'August 2016 - November 2017',
      highlights: [
        'Modernized a legacy desktop application using 12 Factor Apps, DDD, microservices, and SPA frameworks',
        'Migrated the platform to the cloud, improving scalability, resilience, and user experience',
        'Established CI/CD pipelines, automated testing, and delivery practices to reduce time-to-market',
      ],
      technologies: ['Microservices', 'DDD', 'Cloud', 'CI/CD', 'SPA'],
    },
    {
      company: 'The eCEOs Sdn. Bhd',
      title: 'Technical Leader',
      location: 'Greater Jakarta Area, Indonesia',
      period: 'December 2014 - August 2016',
      highlights: [
        'Advised client companies on enterprise architecture, technology selection, and delivery governance',
        'Led high-tech and government software delivery projects with tight quality and timeline constraints',
        'Drove agile adoption and built high-performing teams across multiple engagements',
      ],
    },
    {
      company: 'Nalysa',
      title: '.NET Project Manager / Application Development Engineer',
      location: 'Greater Jakarta Area, Indonesia',
      period: 'January 2014 - November 2014',
      highlights: [
        'Built the software development function from scratch and defined delivery standards',
        'Championed Scrum, TDD, and CI/CD to improve quality and predictability',
        'Owned end-to-end execution across scope, quality, and budget',
      ],
      technologies: ['.NET', 'Scrum', 'TDD', 'CI/CD'],
    },
    {
      company: 'CV Wirabumi Openbravo Indonesia',
      title: 'System Analyst',
      location: 'Malang Area, East Java, Indonesia',
      period: '2013 - 2014',
      highlights: [
        'Delivered ERP and business system analysis to support client operations and reporting',
      ],
    },
    {
      company: 'Indosat',
      title: '.NET Developer (Internship)',
      location: 'Surabaya Area, East Java, Indonesia',
      period: '2010',
      highlights: [
        'Built a .NET tool to automate SQL Server database maintenance',
        'Produced system design documentation for the maintenance automation',
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
