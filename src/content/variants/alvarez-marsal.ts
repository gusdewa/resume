import type { PartialResumeVariant } from '../../types/resume';

export const alvarezMarsalVariant: PartialResumeVariant = {
  metadata: {
    variantName: 'alvarez-marsal',
    title: 'Rahadian Dewandono - Resume (Alvarez & Marsal)',
    description: 'Technology leader delivering value creation through modernization, carve-outs, and cost optimization',
  },
  header: {
    title: 'Technology leader delivering value creation through modernization, carve-outs, and cost optimization',
  },
  summary: `Technology leader focused on value creation through digital and technology services. I translate strategy into execution across technology modernization, IT cost optimization, operating model design, and risk governance, with experience in consulting, enterprise transformation, and high-growth product environments.

At Sinarmas' AI Center of Excellence, I lead initiatives that improve operating performance through AI-driven decision systems, clearer run-rate baselines, and measurable ROI. I deliver transaction-ready capabilities that support carve-outs and integration planning, and build execution models that balance speed, cost, and resilience.

Certified in cloud computing, DevOps, and agile leadership, with credentials from top hyperscalers and global executive programs.`,
  experience: [
    {
      company: 'Sinarmas (PT SMART Tbk / SRX)',
      title: 'Solutions Architect',
      location: 'Jakarta Metropolitan Area',
      period: 'May 2024 - Present',
      highlights: [
        'Lead enterprise technology initiatives that deliver value creation, modernization, and operating model improvements across business units',
        'Enable transaction-ready IT by aligning AI and digital capabilities with business goals, creating clear run-rate baselines and measurable ROI',
        'Designed and deployed a Command Center platform for plantation operations across 537K hectares, improving governance, visibility, and real-time decision support',
        'Delivered GenAI applications that reduced issue resolution time and improved cost performance through RAG and natural language interfaces',
        'Led AI upskilling for ~150 employees and established risk identification practices across emerging tech and cybersecurity',
      ],
      technologies: ['React', 'Python', 'LangChain', 'LangGraph', 'MCP', 'LLaMA', 'PGVector', 'Azure'],
    },
    {
      company: 'Fita',
      title: 'Chief Technology Officer',
      location: 'Jakarta, Indonesia',
      period: 'January 2022 - May 2024',
      highlights: [
        'Built transaction-ready architecture with 25 microservices using Go and NodeJS, supporting 500K+ MAU with documented controls and scalability',
        'Implemented zero-trust security and a bug bounty program to strengthen risk posture and user data protection',
        'Integrated GenAI technologies (Pinecone, LangChain, OpenAI) to optimize costs by $2,500/month with tracked run-rate improvements',
        'Modernized platform reliability and performance through targeted upgrades and operational baselining',
        'Drove cost discipline and delivery speed through adaptive roadmaps, DevOps automation, and QA frameworks',
      ],
      technologies: ['Go', 'NodeJS', 'Microservices', 'Kubernetes', 'GCP', 'Terraform', 'Pinecone', 'LangChain', 'OpenAI'],
    },
    {
      company: 'Telkomsel',
      title: 'CTO for Specialized Business Unit',
      location: 'Jakarta, Indonesia',
      period: 'July 2021 - 2022',
      description: 'As CTO of Fita (was a BU under Telkomsel), I led critical carve-out execution and transaction ready IT initiatives:',
      highlights: [
        'Defined the target-state architecture and due diligence materials for a transaction-ready platform',
        'Scaled the engineering organization rapidly, establishing a clear operating model and capability baseline',
        'Led IT separation planning and execution for the carve-out, ensuring Day 1 readiness and clean TSA exit paths',
      ],
    },
    {
      company: 'McKinsey & Company',
      title: 'Digital Specialist',
      location: 'Jakarta, Indonesia',
      period: 'November 2017 - July 2021',
      highlights: [
        'Shaped platform architecture and governance for credit scoring ecosystems, aligning controls with regulatory and investor requirements',
        'Established security and risk protocols for sensitive data on hybrid cloud, including audit-ready governance',
        'Led design and deployment of scalable platforms serving 20M+ monthly users with documented run-rate and cost structures',
        'Drove API integration strategy across telco partnerships to unlock cross-platform value creation',
        'Implemented DevOps and delivery baselines to improve speed, reliability, and cost transparency',
        'Optimized B2C telco infrastructure and performance using analytics and experimentation',
        'Led data engineering and data science teams delivering predictive maintenance models with measurable savings',
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
};
