import { Product, TeamMember, ResearchPaper, NavItem } from './types';
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
  { label: "Products", path: "/products" },
  { label: "RAD", path: "/rad" },
  { label: "Team", path: "/team" },
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
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
    color: "bg-[#1A1A1A]",
    textColor: "text-white"
  },
  {
    id: "taskr",
    name: "Taskr",
    category: "Global Talent Marketplace",
    description: "Bridging Africa to global wage opportunities through AI-driven matching.",
    longDescription: "Taskr creates a frictionless membrane between global capital and African human intelligence. Utilizing a proprietary matching algorithm based on skill-graph ontology rather than keyword matching, Taskr ensures that talent is routed to opportunities with high context awareness. The platform handles cross-border compliance, payments, and performance tracking natively.",
    specs: [
        { label: "Settlement", value: "Real-time USDC/Fiat" },
        { label: "Coverage", value: "54 Countries" },
        { label: "KYC", value: "AI-Automated" },
        { label: "Matching Latency", value: "<200ms" }
    ],
    features: ["Cross-border payments", "Verified talent network", "Real-time routing"],
    color: "bg-blue-50",
    textColor: "text-blue-900"
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
    color: "bg-orange-50",
    textColor: "text-orange-900"
  },
  {
    id: "tosinlang",
    name: "TosinLang",
    category: "Programming Language",
    description: "Python-like syntax with C++-like performance and deep systems control.",
    longDescription: "TosinLang bridges the gap between high-level abstraction and register-level control. Designed for the era of heterogeneous compute, it treats GPUs and TPUs as first-class citizens. TosinLang compiles down to a custom Intermediate Representation that maps efficiently to both von Neumann and neuromorphic architectures.",
    specs: [
        { label: "Paradigm", value: "Multi-paradigm" },
        { label: "Memory Safety", value: "Compile-time Borrow Checker" },
        { label: "Interop", value: "C/C++ Zero-cost" },
        { label: "Backend", value: "LLVM / Custom" }
    ],
    features: ["Low-level compilation", "Memory-efficient IR", "Real-time systems"],
    color: "bg-emerald-50",
    textColor: "text-emerald-900"
  },
  {
    id: "navierflow",
    name: "NavierFlow",
    category: "CFD Engine",
    description: "High-performance fluid dynamics engine for scalable simulations.",
    longDescription: "NavierFlow leverages custom physics-informed neural networks (PINNs) to solve Computational Fluid Dynamics equations orders of magnitude faster than traditional solvers. It enables real-time aerodynamic simulation for drone swarms and efficient cooling modeling for hyperscale data centers.",
    specs: [
        { label: "Solver Type", value: "Hybrid Spectral/Neural" },
        { label: "Scale", value: "Exascale Ready" },
        { label: "Precision", value: "Mixed FP64/BF16" },
        { label: "Mesh Generation", value: "Automated" }
    ],
    features: ["Navier-Stokes modeling", "Optimized simulation core"],
    color: "bg-cyan-50",
    textColor: "text-cyan-900"
  },
  {
    id: "epoch",
    name: "EPOCH VCS",
    category: "Version Control",
    description: "Next-Gen Distributed Version Control System. 10x faster than Git.",
    longDescription: "EPOCH creates a content-addressable spacetime for your codebase. It abandons the traditional snapshot model for a continuous log-structured merge tree approach, allowing for instant checkout of petabyte-scale repositories and SIMD-accelerated diffing operations.",
    specs: [
        { label: "Throughput", value: "10GB/s checkout" },
        { label: "Deduplication", value: "Block-level Rolling Hash" },
        { label: "Consistency", value: "Strong Eventual" },
        { label: "Network", value: "P2P Gossip" }
    ],
    features: ["SIMD-accelerated", "50% more storage-efficient"],
    color: "bg-purple-50",
    textColor: "text-purple-900"
  }
];

export const LEADERSHIP: TeamMember[] = [
  {
    name: "Oluwatosin Abioye Afolabi",
    role: "Founder & CEO",
    bio: "A systems engineer, compiler architect, and ML researcher with dual degrees in Computer Science and Psychology. Leads Genovo’s technical vision, R&D, and strategy.",
    expertise: ["Systems Engineering", "Compiler Design", "ML Research"]
  },
  {
    name: "Adegbitẹ Ifeoluwa",
    role: "Co-Founder & CTO",
    bio: "Architects core infrastructure with a decisive focus on security, system integrity, and technical leadership. Oversees cybersecurity operations.",
    expertise: ["Cybersecurity", "System Architecture", "DevSecOps"]
  }
];

const ENGINEERING_TEAM: TeamMember[] = [
    {
        name: "Chiedbidolu “Chiboy”",
        role: "Engineering Lead",
        bio: "Backend and DevOps powerhouse fluent in Go, Rust, and Python. Leads engineering velocity, backend architecture, and infrastructure automation.",
        expertise: ["Backend", "DevOps", "Go/Rust", "CI/CD"]
    },
    {
        name: "Gasper Samuel",
        role: "Product Manager & Engineer",
        bio: "Bridges product strategy with technical execution. Anchors engineering, research, and user-centered product delivery using Go and Python.",
        expertise: ["Product Mgmt", "Backend", "ML"]
    },
    {
        name: "John “Virus”",
        role: "Machine Learning Engineer",
        bio: "Applied ML engineer focusing on model optimization, experimentation pipelines, and data-driven architecture for high-performance systems.",
        expertise: ["Model Optimization", "ML Pipelines", "Data Arch"]
    }
];

const SECURITY_TEAM: TeamMember[] = [
    {
        name: "Iseoluwa Promise",
        role: "Cybersecurity Engineer",
        bio: "Focuses on penetration testing, vulnerability research, secure pipeline design, and compliance operations.",
        expertise: ["Pen-Testing", "Vulnerability Research"]
    },
    {
        name: "Alayo Micheal",
        role: "Cybersecurity Engineer",
        bio: "Cybersecurity operator focused on threat modeling, network security, and incident response. Scales the layered defense posture.",
        expertise: ["Threat Modeling", "Network Security"]
    }
];

const DESIGN_TEAM: TeamMember[] = [
    {
        name: "Joy Ojochegbe",
        role: "Product & Brand Design",
        bio: "Shapes user-facing identity, UI/UX flows, and brand systems. Ensures design language remains modern and globally competitive.",
        expertise: ["UI/UX", "Brand Identity"]
    },
    {
        name: "Ruby Cotterell",
        role: "Product & Brand Design",
        bio: "Supports UI/UX execution, branding, and design prototypes across multiple product lines.",
        expertise: ["Visual Design", "Prototyping"]
    },
    {
        name: "Osagie",
        role: "Social Media & Design",
        bio: "Oversees Genovo’s brand presence, content visuals, and engagement design across digital channels.",
        expertise: ["Content Strategy", "Graphics"]
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
    url: "#",
    date: "Nov 2025",
    author: "Oluwatosin A. Afolabi"
  },
  {
    title: "Thermodynamic Manifold Alignment: A Physics-Inspired Route to Compositional Abstract Reasoning",
    description: "A novel physics-inspired framework that models abstract concepts as parameterized manifolds and treats compositional reasoning as an energy-minimization process. TMAM combines Gaussian mixture manifold estimation with attention-based composition operators to achieve superior performance on abstract reasoning benchmarks.",
    metric: "State-of-the-Art",
    url: "#",
    date: "Sep 2025",
    author: "Oluwatosin A. Afolabi"
  },
  {
    title: "Resonance Neural Networks: Frequency-Domain Information Processing with Holographic Memory",
    description: "Introducing Resonance Neural Networks (RNNs), an architecture that processes information through frequency-domain resonance chambers. Unlike transformers, RNNs achieve O(n log n) complexity while maintaining superior information capacity through holographic interference patterns and provable gradient stability.",
    metric: "O(n log n)",
    url: "#",
    date: "Aug 2025",
    author: "Oluwatosin A. Afolabi"
  }
];

export const ARTICLES = [
    { title: "Architecture Selector", date: "2024 Modern Mips Spec 2.0", icon: Layers, color: "bg-sky-100", textColor: "text-sky-800" },
    { title: "Decentralized Systems", date: "200B Modern Data Trust", icon: Shield, color: "bg-orange-100", textColor: "text-orange-800" },
    { title: "Network Operations", date: "23/40ms latency guaranteed", icon: Activity, color: "bg-amber-100", textColor: "text-amber-800" },
    { title: "Sustainable Solutions", date: "223.12 Green w/h Power", icon: Wind, color: "bg-gray-200", textColor: "text-gray-800" },
    { title: "Foundation Reference", date: "100.12 Editon Main", icon: Box, color: "bg-gray-100", textColor: "text-gray-600" },
    { title: "Economic Engine", date: "20% GDP Addition", icon: Globe, color: "bg-slate-100", textColor: "text-slate-600" },
];