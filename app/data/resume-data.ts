export const resumeData = {
  personal: {
    name: "Mahavir Ganapati Dash",
    title: "Backend Engineer | System Design | Distributed Systems",
    email: "mahavirdash2017@gmail.com",
    phone: "6370106741",
    location: "India (UTC +5.30)",
    website: "github.com/crypto-priest",
    linkedin: "linkedin.com/in/crypto-priest",
    github: "github.com/crypto-priest",
    twitter: "x.com/27Mahavir",
  },

  summary: "Backend Engineer with 3+ years of experience specializing in system design, distributed systems, and scalable backend architecture using Rust. Expertise in designing authentication systems, consensus mechanisms, and high-performance APIs serving 10,000+ users. Experienced in building production-grade distributed systems through blockchain development (Substrate/Polkadot). Skilled in API security, database optimization, and microservices architecture. Polkadot Blockchain Academy graduate and Web3 Foundation grant recipient, with a strong foundation in teaching and mentoring developers.",

  achievements: [
    "Received a grant from the Web3 Foundation for developing a self-sovereign identity-based blockchain-powered gamers' community, recognizing innovation in decentralized identity and gaming ecosystems.",
    "Partnered with STPI (Software Technology Park of India), a central government entity, to conduct technical workshops on Rust, blockchain, and backend development, contributing to skill development and technology adoption.",
    "Designed and taught a month-long Rust engineering course (110 hours) for Silicon University covering backend development and blockchain fundamentals, integrated into the academic curriculum as a credited internship program.",
    "Designed a custom consensus mechanism for private blockchain, optimizing storage efficiency through elimination of empty blocks, reducing infrastructure costs, and improving network performance.",
    "Designed and implemented distributed rate limiting system for authentication infrastructure to prevent DDoS attacks, successfully protecting 10,000+ user system and ensuring 99.9% uptime.",
  ],

  experience: [
    {
      id: 1,
      title: "Backend Engineer",
      company: "CO2 Network (Through Redrob)",
      location: "Remote",
      period: "05/2023 - Present",
      description: [
        "Architected distributed authentication infrastructure serving 10,000+ users with 99.9% uptime",
        "Designed rate-limiting system with DDoS protection capabilities",
        "Built and optimized RESTful and GraphQL APIs reducing latency by 30%",
        "Developed backend systems for distributed blockchain modules with runtime upgrades",
      ],
    },
    {
      id: 2,
      title: "Technical Instructor & Speaker",
      company: "STPI & Silicon University",
      location: "Bhubaneswar, India",
      period: "2023 - Present",
      description: [
        "Teaching Rust programming, backend development, and system design principles to university students and industry professionals",
        "Conducting workshops in collaboration with STPI (Software Technology Parks of India)",
        "Delivered 110+ hours of hands-on curriculum covering Rust fundamentals, database design, API development",
      ],
    },
    {
      id: 3,
      title: "Backend Engineer (Rust/Substrate)",
      company: "Squbix Digital",
      location: "Bhubaneswar, India",
      period: "09/2022 - 05/2023",
      description: [
        "Engineered backend infrastructure for custom blockchain using Rust and Substrate framework, implementing distributed consensus and state management systems",
        "Developed and optimized runtime modules (pallets) to implement business logic requirements, focusing on performance and reliability",
        "Wrote comprehensive unit and integration tests ensuring system reliability and maintainability of distributed backend systems",
        "Created Node.js SDK to provide developer-friendly API for frontend-blockchain communication, improving development velocity for client applications",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      name: "X402 Rust Template",
      description: "Built production-ready HTTP payment protocol implementation enabling pay-per-request API monetization using x402 standard on Solana blockchain. Designed modular architecture supporting multiple Rust web frameworks (Axum, Actix-web, Rocket) with payment verification, transaction handling, and settlement logic. Implemented complete payment flow including HTTP 402 responses, transaction verification, and facilitator integration with comprehensive error handling and CORS support.",
      technologies: ["Rust", "Solana", "Axum", "Actix-web", "Rocket", "HTTP 402"],
      link: "https://github.com/crypto-priest/x402-solana-rust",
    },
    {
      id: 2,
      name: "Custom Authentication Server",
      description: "Developed a secure authentication backend for verifying user identities and managing sessions using Biscuit tokens. Integrated SQL database connectivity via Diesel for efficient data storage and retrieval.",
      technologies: ["Rust", "Hyper", "Diesel", "SQL", "Biscuit Tokens"],
      link: "",
    },
    {
      id: 3,
      name: "Free Transaction (Gasless Blockchain)",
      description: "Designed novel blockchain economic model enabling gasless transactions through credit-based system developed during Polkadot Blockchain Academy program. Implemented stake-based credit accumulation mechanism where users earn transaction credits by staking cryptocurrency. Developed complete runtime logic including credit calculation, transaction validation, and state transitions.",
      technologies: ["Rust", "Substrate", "Blockchain", "Polkadot"],
      link: "",
    },
    {
      id: 4,
      name: "auth-middleware-pkg",
      description: "Developed open-source authentication middleware library for Rust web frameworks (Axum, Actix-web), providing plug-and-play session management and authorization patterns. Designed modular architecture supporting multiple authentication strategies including JWT, session-based, and token-based authentication. Published as Rust crate with comprehensive documentation and examples for community adoption.",
      technologies: ["Rust", "Axum", "Actix-web", "JWT"],
      link: "https://crates.io/crates/auth-middleware-pkg",
    },
  ],

  skills: {
    "System Design & Architecture": [
      { name: "Distributed Systems", level: 95 },
      { name: "Microservices Architecture", level: 90 },
      { name: "Consensus Mechanisms", level: 90 },
      { name: "Rate Limiting", level: 95 },
      { name: "Load Balancing", level: 85 },
      { name: "API Gateway Design", level: 90 },
      { name: "Database Optimization", level: 90 },
      { name: "System Scalability", level: 95 },
    ],
    "Backend Development": [
      { name: "Rust", level: 95 },
      { name: "Python", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "GraphQL", level: 90 },
      { name: "Hyper", level: 90 },
      { name: "Diesel", level: 90 },
      { name: "CI/CD Pipeline", level: 85 },
      { name: "Cloud Infrastructure (AWS)", level: 80 },
    ],
    "API Design & Protocols": [
      { name: "REST", level: 95 },
      { name: "GraphQL", level: 90 },
      { name: "WebSocket", level: 85 },
    ],
    "Database Management": [
      { name: "SQL (PostgreSQL/MySQL)", level: 90 },
      { name: "DynamoDB", level: 80 },
      { name: "Query Optimization", level: 90 },
    ],
    "Blockchain": [
      { name: "Substrate Framework", level: 95 },
      { name: "Consensus Algorithms", level: 90 },
      { name: "Anchor", level: 80 },
    ],
    "Frontend Integration": [
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SwiftUI", level: 75 },
    ],
    "Tools & Frameworks": [
      { name: "Substrate", level: 95 },
      { name: "Unit Testing (Mocha)", level: 85 },
      { name: "Biscuit Tokens", level: 90 },
    ],
  },

  education: [
    {
      id: 1,
      degree: "Polkadot Blockchain Academy",
      school: "Polkadot/Web3 Foundation",
      location: "U Town, Singapore",
      period: "06/2024",
      description: "Blockchain development program by Polkadot/Web3 Foundation",
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      school: "Silicon Institute of Technology, Bhubaneswar",
      location: "Bhubaneswar, India",
      period: "05/2023",
      branch: "Electronics and Communication Engineering",
      gpa: "CGPA: 8.64/10",
    },
  ],

  publications: [
    {
      id: 1,
      name: "X402-Solana-Rust-Template",
      platform: "GitHub",
      description: "Production-ready HTTP payment protocol implementation enabling pay-per-request API monetization using x402 standard on Solana blockchain.",
      link: "https://github.com/crypto-priest/x402-solana-rust",
    },
    {
      id: 2,
      name: "auth-middleware-pkg",
      platform: "crates.io",
      description: "Authentication middleware library for Rust web frameworks providing modular auth patterns.",
      link: "https://crates.io/crates/auth-middleware-pkg",
    },
    {
      id: 3,
      name: "cargo-auto-run",
      platform: "crates.io",
      description: "Rust package automating command execution during code changes for efficient development.",
      link: "https://crates.io/crates/cargo-auto-run",
    },
    {
      id: 4,
      name: "string-config-parser",
      platform: "crates.io",
      description: "Simplified configuration file parsing using Rust.",
      link: "https://crates.io/crates/string-config-parser",
    },
  ],
};

export type ResumeData = typeof resumeData;
