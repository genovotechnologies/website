import { Product, TeamMember, ResearchPaper, NavItem, Article, JobListing } from './types';
import { Cpu, Globe, Activity, Terminal, Layers, Wind, GitBranch, Shield, Zap, Box, Database, Server } from 'lucide-react';

export const COMPANY_NAME = "GENOVO TECHNOLOGIES";
export const COLORS = {
  offWhite: "#F5F5F5",
  charcoal: "#1A1A1A",
  taskrBlue: "#191970",
  taskrOrange: "#FF5F1F",
  homevyGreen: "#10B981",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Synthos", path: "/products/synthos" },
  { label: "SCOS", path: "/products/scos" },
  { label: "Asphallea", path: "/products/asphallea" },
  { label: "Research", path: "/research" },
  { label: "Company", path: "/about" },
];

export const PRODUCTS: Product[] = [
  {
    id: "synthos",
    name: "SynthOS",
    category: "AI Training Data Validation",
    description: "The flagship AI training data validation platform eliminating model collapse.",
    longDescription: "SynthOS represents a paradigm shift in how AI models perceive reality. By validating training data at the entropic level, SynthOS acts as an immune system for Large Language Models and Generative Architectures. It detects subtle statistical drifts that lead to model collapse before they impact inference quality, ensuring long-term stability for mission-critical AI deployments.",
    specs: [
        { label: "Validation Rate", value: "10TB/hr" },
        { label: "Drift Detection", value: "<1ms" },
        { label: "Integration", value: "REST/gRPC" },
        { label: "Architecture", value: "Distributed Mesh" }
    ],
    features: ["End-to-end dataset validation", "Drift detection", "Performance warranties"],
    color: "liquid-glass",
    textColor: "text-white",
    githubUrl: "https://github.com/genovotechnologies",
    architectureType: "synthos"
  },
  {
    id: "scos",
    name: "SCOS",
    category: "Industrial Intelligence OS",
    description: "Synthetic Cognition Operating System for manufacturing and smart cities.",
    longDescription: "The Synthetic Cognition Operating System (SCOS) is a bare-metal hypervisor designed for city-scale autonomy and industrial robotics. Unlike general-purpose OSs, SCOS is deterministic, ensuring that critical operations happen within guaranteed time windows. It serves as the nervous system for smart factories and autonomous logistics networks.",
    specs: [
        { label: "Kernel Type", value: "Microkernel" },
        { label: "Interrupt Latency", value: "40ns" },
        { label: "Safety Level", value: "ASIL-D Ready" },
        { label: "Footprint", value: "50MB" }
    ],
    features: ["Nanosecond response", "Self-optimizing compute", "Latency-aware"],
    color: "liquid-glass",
    textColor: "text-white",
    githubUrl: "https://github.com/genovotechnologies",
    architectureType: "scos"
  },
  {
    id: "asphallea",
    name: "Asphallea",
    category: "Security & Execution Policy",
    description: "A security utility designed to enforce execution policies and guardrails around runtime tools.",
    longDescription: "Asphallea provides deterministic security execution policies, isolation boundaries, and runtime tool guardrails for mission-critical software systems. It intercepts syscalls, enforces capability limits, and monitors execution paths to guarantee absolute system integrity under zero-trust assumptions.",
    specs: [
        { label: "Policy Engine", value: "Deterministic AST" },
        { label: "Overhead", value: "<5μs per check" },
        { label: "Isolation", value: "eBPF / Sandbox" },
        { label: "Model", value: "Zero-Trust Guardrail" }
    ],
    features: ["Runtime policy enforcement", "Syscall containment", "Execution guardrails", "Zero-trust verification"],
    color: "liquid-glass",
    textColor: "text-white",
    githubUrl: "https://github.com/genovotechnologies",
    architectureType: "asphallea"
  },
  {
    id: "tosinlang",
    name: "TosinLang",
    category: "Programming Language",
    description: "Systems programming language featuring a custom lexer and parser targeting LLVM IR.",
    longDescription: "TocinLang (TosinLang) bridges the gap between high-level abstraction and register-level control. Designed for the era of heterogeneous compute, it treats GPUs and TPUs as first-class citizens and compiles down to LLVM IR.",
    specs: [
        { label: "Compiler", value: "Custom Lexer/Parser" },
        { label: "Target IR", value: "LLVM IR" },
        { label: "Interop", value: "C/C++ Zero-cost" },
        { label: "Backend", value: "LLVM Native" }
    ],
    features: ["Low-level compilation", "LLVM IR targeting", "Real-time systems"],
    color: "liquid-glass",
    textColor: "text-white",
    githubUrl: "https://github.com/genovotechnologies",
    architectureType: "tosinlang"
  },
  {
    id: "epoch",
    name: "EPOCH VCS",
    category: "Version Control",
    description: "Distributed version control system built with C++ and Rust that leverages Merkle DAGs.",
    longDescription: "EPOCH creates a content-addressable spacetime for codebases. Built with C++ and Rust, it leverages Merkle DAG structures and continuous log-structured merge trees for petabyte-scale diffing operations.",
    specs: [
        { label: "Core Stack", value: "C++ / Rust" },
        { label: "Data Structure", value: "Merkle DAG" },
        { label: "Checkout Speed", value: "10GB/s" },
        { label: "Network", value: "P2P Gossip" }
    ],
    features: ["Merkle DAG architecture", "C++/Rust implementation", "High-performance checkout"],
    color: "liquid-glass",
    textColor: "text-white",
    githubUrl: "https://github.com/genovotechnologies",
    architectureType: "epoch"
  }
];

export const LEADERSHIP: TeamMember[] = [
  {
    name: "Oluwatosin Abioye Afolabi",
    role: "Founder & CEO",
    bio: "A systems engineer, compiler architect, and ML researcher with dual degrees in Computer Science and Psychology. Leads Genovo’s technical vision, R&D, and strategy.",
    expertise: ["Systems Engineering", "Compiler Design", "ML Research"],
    linkedin: "https://www.linkedin.com/in/tafolabi009",
    twitter: "https://twitter.com/tosin_afolabi009"
  },
  {
    name: "Adegbitẹ Ifeoluwa",
    role: "Co-Founder & CTO",
    bio: "Architects core infrastructure with a decisive focus on security, system integrity, and technical leadership. Oversees cybersecurity operations.",
    expertise: ["Cybersecurity", "System Architecture", "DevSecOps"],
    linkedin: "https://www.linkedin.com/in/adegbite06",
    twitter: "https://twitter.com/ifeoluwa_cto"
  }
];

const ENGINEERING_TEAM: TeamMember[] = [
    {
        name: "Chiebidolu “Chiboy”",
        role: "Engineering Lead",
        bio: "Backend and DevOps powerhouse fluent in Go, Rust, and Python. Leads engineering velocity, backend architecture, and infrastructure automation.",
        expertise: ["Backend", "DevOps", "Go/Rust", "CI/CD"],
        linkedin: "https://www.linkedin.com/in/chiebidolu"
    },
    {
        name: "Gasper Samuel",
        role: "Product Manager & Engineer",
        bio: "Bridges product strategy with technical execution. Anchors engineering, research, and user-centered product delivery using Go and Python.",
        expertise: ["Product Mgmt", "Backend", "ML"],
        linkedin: "https://www.linkedin.com/in/gasper-samuel"
    },
    {
        name: "John \"Virus\"",
        role: "Machine Learning Engineer",
        bio: "Applied ML engineer focusing on model optimization, experimentation pipelines, and data-driven architecture for high-performance systems.",
        expertise: ["Model Optimization", "ML Pipelines", "Data Arch"],
        linkedin: "https://www.linkedin.com/in/john-virus"
    }
];

const SECURITY_TEAM: TeamMember[] = [
    {
        name: "Iseoluwa Promise",
        role: "Cybersecurity Engineer",
        bio: "Focuses on penetration testing, vulnerability research, secure pipeline design, and compliance operations.",
        expertise: ["Pen-Testing", "Vulnerability Research"],
        linkedin: "https://www.linkedin.com/in/iseoluwa-promise"
    },
    {
        name: "Alayo Micheal",
        role: "Cybersecurity Engineer",
        bio: "Cybersecurity operator focused on threat modeling, network security, and incident response. Scales the layered defense posture.",
        expertise: ["Threat Modeling", "Network Security"],
        linkedin: "https://www.linkedin.com/in/alayo-micheal"
    }
];

const DESIGN_TEAM: TeamMember[] = [
    {
        name: "Joy Ojochegbe",
        role: "Product & Brand Design",
        bio: "Shapes user-facing identity, UI/UX flows, and brand systems. Ensures design language remains modern and globally competitive.",
        expertise: ["UI/UX", "Brand Identity"],
        linkedin: "https://www.linkedin.com/in/joy-ojochegbe"
    },
    {
        name: "Ruby Cotterell",
        role: "Product & Brand Design",
        bio: "Supports UI/UX execution, branding, and design prototypes across multiple product lines.",
        expertise: ["Visual Design", "Prototyping"],
        linkedin: "https://www.linkedin.com/in/ruby-cotterell"
    },
    {
        name: "Osagie",
        role: "Social Media & Design",
        bio: "Oversees Genovo's brand presence, content visuals, and engagement design across digital channels.",
        expertise: ["Content Strategy", "Graphics"],
        linkedin: "https://www.linkedin.com/in/osagie-design"
    }
];

export const CORE_TEAM: TeamMember[] = [
  ...LEADERSHIP,
  ...ENGINEERING_TEAM,
  ...SECURITY_TEAM,
  ...DESIGN_TEAM
];

export const RESEARCH_HIGHLIGHTS: ResearchPaper[] = [
  {
    title: "Temporal Eigenstate Networks: Linear-Complexity Sequence Modeling via Spectral Decomposition",
    description: "We introduce Temporal Eigenstate Networks (TEN), a novel architecture achieving O(T) complexity compared to O(T²) transformers. TEN operates by decomposing temporal dynamics into learned eigenstate superpositions that evolve through complex-valued phase rotations, eliminating the attention bottleneck while maintaining theoretical guarantees.",
    metric: "Linear O(T)",
    url: "/rad#research",
    date: "Nov 2025",
    author: "Oluwatosin A. Afolabi"
  },
  {
    title: "Thermodynamic Manifold Alignment: A Physics-Inspired Route to Compositional Abstract Reasoning",
    description: "A novel physics-inspired framework that models abstract concepts as parameterized manifolds and treats compositional reasoning as an energy-minimization process. TMAM combines Gaussian mixture manifold estimation with attention-based composition operators to achieve superior performance on abstract reasoning benchmarks.",
    metric: "State-of-the-Art",
    url: "/rad#research",
    date: "Sep 2025",
    author: "Oluwatosin A. Afolabi"
  },
  {
    title: "Resonance Neural Networks: Frequency-Domain Information Processing with Holographic Memory",
    description: "Introducing Resonance Neural Networks (RNNs), an architecture that processes information through frequency-domain resonance chambers. Unlike transformers, RNNs achieve O(n log n) complexity while maintaining superior information capacity through holographic interference patterns and provable gradient stability.",
    metric: "O(n log n)",
    url: "/rad#research",
    date: "Aug 2025",
    author: "Oluwatosin A. Afolabi"
  }
];

export const ARTICLES = [
    { id: "architecture-selector", title: "Architecture Selector", excerpt: "A deep dive into modern MIPS architecture specifications and how they shape next-gen computing platforms.", date: "Dec 15, 2024", author: "Oluwatosin A. Afolabi", category: "Engineering", icon: Layers, color: "bg-sky-100", textColor: "text-sky-800", readTime: "8 min read", content: `
## Introduction to Modern MIPS Spec 2.0

The landscape of computer architecture is evolving rapidly. MIPS (Microprocessor without Interlocked Pipeline Stages) has long been a foundational architecture in computing education and embedded systems. With the release of Spec 2.0, we're seeing a paradigm shift in how processors handle instruction pipelining and memory management.

## Key Innovations

### Pipeline Optimization
The new specification introduces advanced hazard detection mechanisms that reduce pipeline stalls by up to 40%. This is achieved through:
- Dynamic instruction scheduling
- Improved branch prediction algorithms
- Enhanced forwarding units

### Memory Hierarchy
Memory access patterns have been reimagined with a focus on cache coherency in multi-core systems. The new L3 cache protocols enable better data sharing between cores while maintaining strict consistency guarantees.

## Implementation Considerations

When implementing MIPS Spec 2.0 compliant processors, engineers must consider:
1. Power consumption trade-offs
2. Die area constraints
3. Backward compatibility requirements

## Conclusion

The Architecture Selector framework we've developed at Genovo leverages these innovations to automatically choose optimal configurations for specific workloads, reducing design time by 60%.
    ` },
    { id: "decentralized-systems", title: "Decentralized Systems", excerpt: "Exploring how modern data trust frameworks handle 200B+ data points with Byzantine fault tolerance.", date: "Dec 10, 2024", author: "Adegbitẹ Ifeoluwa", category: "Research", icon: Shield, color: "bg-orange-100", textColor: "text-orange-800", readTime: "12 min read", content: `
## The 200 Billion Data Point Challenge

In an era where data is the new oil, managing trust at scale becomes paramount. Our research into decentralized systems has yielded frameworks capable of handling 200 billion data points while maintaining cryptographic integrity.

## Byzantine Fault Tolerance at Scale

Traditional BFT protocols struggle with more than a few dozen nodes. Our approach introduces:

### Hierarchical Consensus
- Regional leader election
- Cross-region verification
- Lazy synchronization for non-critical paths

### Cryptographic Innovations
We employ zero-knowledge proofs for data validation without exposing underlying information, enabling compliance with GDPR and other privacy regulations.

## Trust Metrics

Our trust scoring system evaluates:
1. Historical reliability
2. Stake-weighted voting power
3. Geographic distribution
4. Temporal consistency

## Real-World Applications

This framework powers Taskr's cross-border payment verification, ensuring that talent payments are processed securely across 54 African countries.

## Future Directions

We're exploring quantum-resistant cryptography to future-proof these systems against emerging threats.
    ` },
    { id: "network-operations", title: "Network Operations", excerpt: "Achieving guaranteed 23-40ms latency in global distributed systems through intelligent routing.", date: "Dec 5, 2024", author: "Chiebidolu 'Chiboy'", category: "Engineering", icon: Activity, color: "bg-amber-100", textColor: "text-amber-800", readTime: "6 min read", content: `
## Latency: The Silent Killer

In distributed systems, latency compounds. A 100ms delay in one service becomes 500ms when chained across five services. Our network operations research focuses on guaranteeing sub-40ms latency globally.

## The 23/40ms Guarantee

We achieve this through:

### Anycast Routing
- 47 global edge locations
- BGP optimization
- Real-time path scoring

### Protocol Optimization
- QUIC over traditional TCP
- Connection pooling
- Request coalescing

## Measurement Infrastructure

Our monitoring stack captures:
- P50, P95, P99 latencies
- Jitter analysis
- Packet loss correlation

## Case Study: SynthOS API

The SynthOS validation API serves requests to ML pipelines worldwide. Before optimization, P99 latency was 340ms. After implementing our network operations framework:
- P50: 18ms
- P95: 31ms
- P99: 39ms

## Implementation Guide

Teams can implement these optimizations using our open-source edge router configuration tools.
    ` },
    { id: "sustainable-solutions", title: "Sustainable Solutions", excerpt: "How Genovo achieves 223.12 Green watts/hour power efficiency in our data centers.", date: "Nov 28, 2024", author: "Gasper Samuel", category: "Company News", icon: Wind, color: "bg-gray-200", textColor: "text-gray-800", readTime: "5 min read", content: `
## Green Computing Initiative

At Genovo, sustainability isn't an afterthought—it's engineered into our DNA. Our data centers achieve an unprecedented 223.12 Green watts/hour power efficiency rating.

## How We Achieve This

### Renewable Energy Sources
- 100% renewable energy procurement
- On-site solar installations
- Wind power purchase agreements

### Cooling Innovation
Our liquid cooling systems reduce HVAC requirements by 70% compared to traditional air cooling:
- Direct-to-chip liquid cooling
- Free cooling using ambient temperatures
- Heat recycling for nearby facilities

### Hardware Efficiency
- Custom ARM-based servers
- Workload-aware power management
- Aggressive component lifecycle management

## Carbon Offset Program

For unavoidable emissions, we invest in:
1. Reforestation projects in Nigeria
2. Ocean carbon capture research
3. Local community solar programs

## Metrics and Transparency

We publish quarterly sustainability reports detailing:
- Total energy consumption
- Carbon emissions
- Water usage
- E-waste recycling rates

## Join the Movement

We're open-sourcing our data center efficiency playbook to help other tech companies reduce their environmental impact.
    ` },
    { id: "foundation-reference", title: "Foundation Reference", excerpt: "The comprehensive guide to Genovo's foundational APIs and integration patterns.", date: "Nov 20, 2024", author: "John 'Virus'", category: "Product", icon: Box, color: "bg-gray-100", textColor: "text-gray-600", readTime: "15 min read", content: `
## Foundation Reference v100.12

This edition of our Foundation Reference provides comprehensive documentation for integrating with Genovo's platform APIs.

## API Overview

### Authentication
All APIs use OAuth 2.0 with JWT tokens. Tokens are valid for 1 hour and can be refreshed without user interaction.

### Rate Limiting
- Standard tier: 1000 requests/minute
- Enterprise tier: 10000 requests/minute
- Burst allowance: 2x for 30 seconds

## Core Endpoints

### SynthOS API
\`POST /v1/validate\` - Submit datasets for validation
\`GET /v1/status/{job_id}\` - Check validation status
\`GET /v1/report/{job_id}\` - Retrieve validation report

### Taskr API
\`POST /v1/tasks\` - Create new task
\`GET /v1/matches\` - Get talent matches
\`POST /v1/payments\` - Initiate payment

## SDK Support

Official SDKs available for:
- Python (pip install genovo-sdk)
- Node.js (npm install @genovo/sdk)
- Go (go get github.com/genovo/sdk)
- Rust (cargo add genovo-sdk)

## Best Practices

1. Always implement exponential backoff
2. Cache responses where appropriate
3. Use webhooks instead of polling
4. Validate inputs client-side before submission

## Support

For integration support, contact our developer relations team.
    ` },
    { id: "economic-engine", title: "Economic Engine", excerpt: "Analyzing how African tech can contribute 20% to continental GDP by 2035.", date: "Nov 15, 2024", author: "Oluwatosin A. Afolabi", category: "Research", icon: Globe, color: "bg-slate-100", textColor: "text-slate-600", readTime: "10 min read", content: `
## The African Tech Opportunity

Africa stands at an inflection point. With a young, growing population and increasing digital connectivity, the continent is poised for a tech-driven economic transformation.

## The 20% GDP Vision

Our research indicates that with proper infrastructure investment and policy support, technology could contribute 20% of Africa's GDP by 2035:

### Current State (2024)
- Tech contribution: ~5% of GDP
- Tech workforce: 4 million
- Startup funding: $4B annually

### 2035 Projections
- Tech contribution: 20% of GDP
- Tech workforce: 25 million
- Startup funding: $50B annually

## Key Enablers

### Infrastructure
- Undersea cable investments
- Mobile network expansion
- Data center construction

### Education
- STEM curriculum reform
- Coding bootcamps at scale
- University-industry partnerships

### Policy
- Startup-friendly regulations
- Data sovereignty frameworks
- Cross-border payment systems

## Genovo's Role

Through platforms like Taskr, we're directly contributing to this vision by:
1. Connecting African talent to global opportunities
2. Enabling cross-border digital commerce
3. Building critical infrastructure locally

## Call to Action

Governments, investors, and technologists must collaborate to realize this potential. The window of opportunity is now.
    ` },
];

export const JOB_LISTINGS: JobListing[] = [
    {
        id: "senior-systems-engineer",
        title: "Senior Systems Engineer",
        department: "Core Infrastructure",
        location: "Remote",
        type: "Full-time",
        tags: ["RUST", "C++"],
        tagColor: "bg-blue-100 text-blue-800 group-hover:bg-blue-600 group-hover:text-white",
        description: "Join our core infrastructure team to build the foundational systems that power SynthOS and our distributed computing platform.",
        requirements: [
            "5+ years of experience with systems programming in Rust or C++",
            "Deep understanding of memory management and concurrency",
            "Experience with distributed systems and consensus protocols",
            "Strong background in performance optimization",
            "Excellent communication skills for remote collaboration"
        ]
    },
    {
        id: "ml-ops-architect",
        title: "ML Ops Architect",
        department: "SynthOS Platform",
        location: "Remote",
        type: "Full-time",
        tags: ["PYTHON", "KUBERNETES"],
        tagColor: "bg-purple-100 text-purple-800 group-hover:bg-purple-600 group-hover:text-white",
        description: "Design and implement the ML infrastructure that enables SynthOS to validate AI training data at scale.",
        requirements: [
            "4+ years of experience in ML infrastructure and operations",
            "Proficiency in Python and ML frameworks (PyTorch, TensorFlow)",
            "Experience with Kubernetes and container orchestration",
            "Understanding of ML pipelines and data validation",
            "Track record of building scalable ML systems"
        ]
    },
    {
        id: "security-engineer",
        title: "Security Engineer",
        department: "Platform Security",
        location: "Remote",
        type: "Full-time",
        tags: ["SECURITY", "GO"],
        tagColor: "bg-red-100 text-red-800 group-hover:bg-red-600 group-hover:text-white",
        description: "Protect Genovo's infrastructure and products from evolving security threats.",
        requirements: [
            "3+ years of experience in application or infrastructure security",
            "Experience with penetration testing and vulnerability assessment",
            "Knowledge of secure coding practices",
            "Familiarity with compliance frameworks (SOC2, ISO 27001)",
            "Strong analytical and problem-solving skills"
        ]
    }
];

// Social Media Links
export const SOCIAL_LINKS = {
    twitter: "https://twitter.com/genovotech",
    linkedin: "https://www.linkedin.com/company/genovo-technologies",
    github: "https://github.com/genovotechnologies"
};
