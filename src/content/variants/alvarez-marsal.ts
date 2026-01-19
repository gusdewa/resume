import type { PartialResumeVariant } from '../../types/resume';

export const alvarezMarsalVariant: PartialResumeVariant = {
  metadata: {
    variantName: 'alvarez-marsal',
    title: 'Rahadian Dewandono - Resume (Alvarez & Marsal)',
    description: 'Technology leader focused on transaction ready IT, carve out execution, and value creation delivery',
  },
  header: {
    title: 'Technology leader focused on transaction ready IT, carve out execution, and value creation delivery',
  },
  summary: `I specialize in bridging business strategy with hands-on technology to deliver measurable results. With experience across tech consulting, startups, and digital transformation for Fortune 500 companies, I build practical, transaction-ready solutions that drive business growth and enable investor-grade clarity.

At Sinarmas' AI Center of Excellence, I focus on solving complex challenges and accelerating transformation through AI-driven decision systems and agentic workflows. I am committed to building high-performing teams, delivering solutions that are simple, sustainable, and high-impact, with a track record of successful carve-out execution, run-rate baselining, and cost optimization initiatives.

Certified in cloud computing, DevOps, and agile leadership, with credentials from top hyperscalers and global executive programs.`,
  experience: [
    {
      company: 'Sinarmas (PT SMART Tbk / SRX)',
      title: 'Solutions Architect',
      location: 'Jakarta Metropolitan Area',
      period: 'May 2024 - Present',
      highlights: [
        'Leading strategic technology initiatives across the enterprise to drive value creation and operational excellence',
        'Help Sinarmas business units achieve transaction ready IT and accelerate value creation through AI-driven transformation, bridging AI and digital technologies with business goals for investor-grade clarity',
        'Integrated agentic AI workflows into enterprise operations by designing and deploying a Command Center platform for plantation management across 537K hectares, providing investor-grade visibility into field operations, enterprise systems, and real-time decision support with measurable ROI',
        'Built scalable GenAI applications that drive faster issue resolution and cost optimization, using retrieval-augmented generation (RAG) and natural language interfaces to simplify user interaction with complex backend systems while establishing clear run-rate baselines',
        'Led group-wide AI upskilling and knowledge-sharing initiatives, training ~150 employees in AI and digital capabilities, establishing enterprise risk identification frameworks, and fostering collaboration on emerging technologies and cybersecurity',
      ],
      technologies: ['React', 'Python', 'LangChain', 'LangGraph', 'MCP', 'LLaMA', 'PGVector', 'Azure'],
    },
    {
      company: 'Fita',
      title: 'Chief Technology Officer',
      location: 'Jakarta, Indonesia',
      period: 'January 2022 - May 2024',
      highlights: [
        'Designed transaction-ready platform architecture with 25 microservices using Go and NodeJS, supporting 500K+ MAU with clear separation of concerns and investor-grade documentation',
        'Led zero-trust security initiatives and bug bounty program, establishing enterprise risk identification framework and fortifying user data protection with measurable security metrics',
        'Integrated GenAI technologies (Pinecone, LangChain, OpenAI), delivering quantifiable cost optimization of $2,500/month with documented run-rate improvements',
        'Enhanced system stability and cost-effectiveness through strategic upgrades, establishing clear baseline metrics and delivering value creation through operational efficiency',
        'Sustained team performance through resource-constrained phases, driving faster profitability via adaptive sprints, streamlined roadmaps, and disciplined cost management',
        'Streamlined delivery with DevOps tools (Terraform, Kubernetes, GCP) and QA automation, reducing time-to-market and establishing clear delivery baselines',
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
        'Architected transaction-ready, future-proof platform for Fita\'s fitness and wellness business with investor-grade documentation and clear technical due diligence materials',
        'Expanded Engineering Talent: Tripled the engineering team in 4 months with disciplined hiring, establishing clear organizational structure and capabilities baseline',
        'Led Strategic Spin-Off and Carve-Out Execution: Orchestrated complete engineering and IT separation during Fita\'s spin-off from Telkomsel, ensuring operational continuity, establishing standalone IT capabilities, and delivering investor-ready infrastructure',
      ],
    },
    {
      company: 'McKinsey & Company',
      title: 'Digital Specialist',
      location: 'Jakarta, Indonesia',
      period: 'November 2017 - July 2021',
      highlights: [
        'Provided visionary architecture and governance for advanced credit scoring platform ecosystem, establishing investor-grade controls and compliance frameworks aligned with Indonesian regulations',
        'Formulated and enforced robust data security protocols with clear audit trails for handling highly sensitive customer data on hybrid cloud infrastructure, establishing enterprise risk identification and mitigation frameworks',
        'Directed engineering teams in design and deployment of transaction-ready, scalable platforms handling 20M+ monthly users using Kubernetes and microservices, with documented run-rate baselines and cost structures',
        'Strategically aligned API integrations with key telco partnerships in South East Asia, enabling value creation through platform synergies',
        'Championed DevOps methodologies through CI/CD pipelines, delivering measurable acceleration in development cycles and establishing clear delivery baselines',
        'Engineered scalable backend infrastructure for B2C telco apps with 20M+ MAU, establishing clear capacity baselines and cost optimization frameworks',
        'Implemented A/B tests and utilized analytics to establish run-rate performance baselines and optimize application parameters for measurable user engagement improvements',
        'Led Data Engineering and Data Science teams in developing predictive maintenance models for mining operations, delivering quantifiable cost savings through optimized maintenance schedules',
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
