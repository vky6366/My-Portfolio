"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Brain,
  Smartphone,
  Server,
  Award,
  TrendingUp,
  Users,
  Zap,
  Briefcase,
  MapPin,
  Calendar,
  Container,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "projects",
        "other-projects",
        "experience",
        "research",
        "certifications",
        "achievements",
        "skills",
        "resume",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const featuredProjects = [
    {
      title: "AI-Powered Cyber Defense Platform",
      description:
        "Engineered an AI-driven SOC platform with LangGraph, FastAPI, and Human-in-the-Loop workflows. Features a custom MCP server for threat enrichment (MITRE ATT&CK, NVD) and is deployed on a highly-available, cloud-native AWS backend (ECS Fargate, RDS) supporting zero-downtime deployments.",
      impact: "LangGraph orchestration • Human-in-the-Loop workflows • AWS cloud deployment",
      techStack: ["Python", "LangGraph", "FastAPI", "Docker", "AWS ECS Fargate", "PostgreSQL", "ChromaDB", "MITRE ATT&CK"],
      github: "https://github.com/vky6366/AI-Cyber-Defense-Platform",
    },
    {
      title: "AI-Powered Operations Management Platform",
      description:
        "Built a modern internal operations platform for eyewear manufacturing with an embedded XGBoost model for predictive SLA monitoring. Integrated OpenAI for context-aware executive briefings and automated SMTP risk alerts, supported by a responsive React frontend and a high-performance FastAPI backend.",
      impact: "Predictive SLA monitoring • GenAI executive briefings • Automated risk triage",
      techStack: ["React", "FastAPI", "XGBoost", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/vky6366/ELUNO_Assignment",
    },
    {
      title: "Multi- Modal DeepFake Detection",
      description:
        "Advanced deepfake detection system using EfficientNet ensembles, audio spectrograms, and frame-based classification. First-authored research paper under review with state-of-the-art performance.",
      impact: "99.8% AUC • Multi-modal analysis • Research publication",
      techStack: ["Python", "PyTorch", "CNNs", "Librosa", "OpenCV", "FastAPI", "Kotlin"],
      github: "https://github.com/vky6366/DeepFake-Detection",
    },
    {
      title: "AI Code Generating Agent",
      description:
        "AI-Code-Generating-Agent is an intelligent tool that leverages OpenAI API to generate code based on user prompt.",
      impact: "Generate code using OpenAI's powerful models • Interactive Python interface • Simple setup and usage",
      techStack: ["Python", "Langchain", "LangGraph", "Pydantic", "OpenAI API", "GPT 4o-mini"],
      github: "https://github.com/vky6366/AI-Code-Generating-Agent",
    },
    {
      title: "AI Powered Medical Appointment Scheduling Agent",
      description:
        "Built an AI-powered medical appointment scheduling system with autonomous patient intake and intelligent slot management. Integrated React frontend hosted on AWS S3, Google OAuth authentication, PDF/email notifications, and deployed backend services using AWS ECS Fargate with AWS RDS.",
      impact: "Autonomous patient intake • AWS cloud deployment • Full-stack system",
      techStack: ["Python", "React", "LangChain", "LangGraph", "Pydantic", "OpenAI API", "AWS"],
      github: "https://github.com/vky6366/AI-Powered-Medical-Appointment-Scheduling-Agent",
    },
    {
      title: "YouTube Q&A RAG Assistant",
      description:
        "LangChain-powered RAG system enabling natural language queries on YouTube videos using extracted transcripts. Intelligent video content analysis with semantic search capabilities.",
      impact: "Real-time Q&A • Semantic search • Video transcript analysis",
      techStack: ["LangChain", "OpenAI GPT", "FAISS", "Streamlit", "YouTube API"],
      github: "https://github.com/vky6366/YT-Insight",
    },
    {
      title: "Tooth Detection & Numbering with YOLOv8",
      description:
        "This project demonstrates how to train a YOLOv8 object detection model to detect and number teeth in panoramic dental X-rays using the FDI Tooth Numbering System.",
      impact: "Precision: 0.905 • Recall: 0.921 • mAP@50: 0.941",
      techStack: ["Python", "YOLOv8", "TorchVision", "torch"],
      github: "https://github.com/vky6366/dental-teeth-fdi-yolo",
    },
    {
      title: "Phishing Domain Detector",
      description:
        "Real-time phishing URL detection system using lexical and host-based features. Deployed via REST API with Android integration for mobile security.",
      impact: "Real-time detection • REST API • Mobile integration",
      techStack: ["Python", "Scikit-learn", "BeautifulSoup", "Flask", "Kotlin"],
      github: "https://github.com/vky6366/Phishing-Domains-Detection",
    },
    {
      title: "TFLite On-Device Image Classifier",
      description:
        "Custom image classifier optimized for Android deployment with quantization techniques. Achieves real-time prediction with minimal latency on mobile devices.",
      impact: "On-device inference • Real-time prediction • Optimized performance",
      techStack: ["TensorFlow", "TFLite", "Android Studio", "Kotlin", "Quantization"],
      github: "https://github.com/vky6366/OnDevice_Image-Classification",
    },
    {
      title: "AI Interview Simulator (In-Process)",
      description:
        "Behavioral interview simulator using LLMs to evaluate and score candidate responses. Provides detailed feedback and improvement suggestions.",
      impact: "LLM evaluation • Automated scoring • Interview preparation",
      techStack: ["LangChain", "Gradio", "Transformers", "NLP", "Scoring", "Firebase", "FastAPI", "Kotlin"],
      github: "https://github.com/vky6366/Interview-Simulator",
    },
  ]

  const otherProjects = [
    {
      title: "Cricket Score Predictor",
      description:
        "Built XGBoost-based T20I and ODI score prediction models using match statistics and contextual features. Deployed real-time predictions on AWS EC2 using Streamlit with model serving and cloud instance management.",
      impact: "ML-powered predictions • AWS EC2 deployment • Real-time inference",
      techStack: ["Python", "XGBoost", "scikit-learn", "Streamlit", "AWS EC2"],
      github: "https://github.com/vky6366/Cricket-Score-Predictor",
    },
    {
      title: "Quora Question Pair Similarity",
      description:
        "NLP system classifying duplicate questions using semantic and syntactic similarity models with advanced text processing techniques.",
      impact: "Semantic similarity • Duplicate detection • NLP processing",
      techStack: ["Python", "Word2Vec", "Neural Networks"],
      github: "https://github.com/vky6366/Quora-Question-Pairs",
    },
    {
      title: "Faculty Research Portal",
      description:
        "Institutional web portal for storing and displaying faculty achievements including papers, patents, and research work. Deployed for university use.",
      impact: "Institutional deployment • Research management • Live system",
      techStack: ["PHP", "XAMPP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/vky6366/College_Project",
      liveUrl: "https://research.aitmbgm.ac.in/",
    },
    {
      title: "Intelligent Transportation System",
      description:
        "Built a multilingual web platform for my Head of Department to promote road safety and smart transportation awareness. The website supported real-time translation in 14 languages, enabling inclusive access to international audiences. Presented at the IEEE Fellowship for the Intelligent Transportation Systems (ITS) WIE/YP Research Forum in Paris.",
      impact: "IEEE Conference • Smart city prototype • International presentation",
      techStack: ["PHP", "Firebase", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/vky6366/Intelligent-transportation-system-Website",
      liveUrl: "https://intelligent-transportation-system.aitmbgm.ac.in/",
    },
  ]

  const achievements = [
    {
      title: "KarNova S.G.Balekundri Institute of Technology",
      description: "Winner - Multi-modal Deepfake Detection System",
      icon: Award,
      highlight:
        "Awarded for developing CNNs and facial artifact analysis system with innovation and real-world applicability",
    },
    {
      title: "Ingenious Angadi Institute of Technology",
      description: "Runner-up - Enhanced Deepfake Detection Project",
      icon: TrendingUp,
      highlight: "Secured 2nd place with improvements in video and image stream handling across platforms",
    },
    {
      title: "Hack2Future - 24 Hour Hackathon",
      description: "Gogte Institute of Technology",
      icon: Zap,
      highlight:
        "Built end-to-end misinformation detection tool combining Deepfake Detection with LLM-based Fake News Detector",
    },
    {
      title: "IEEE Fellowship for the Intelligent Transportation Systems (ITS) WIE/YP Research Forum",
      description: "International Presentation - Paris",
      icon: Users,
      highlight: "Presented Intelligent Transportation System at global conference",
    },
    {
      title: "Research Publication",
      description: "First Author - Multi-Modal Deepfake Detection",
      icon: TrendingUp,
      highlight: "Under review in cybersecurity journal with 99.8% AUC performance",
    },
  ]

  const skills = [
    { name: "Python", icon: Code },
    { name: "C/C++", icon: Code },
    { name: "PyTorch", icon: Brain },
    { name: "TensorFlow", icon: Brain },
    { name: "Scikit-Learn", icon: Brain },
    { name: "LangChain", icon: Brain },
    { name: "LangGraph", icon: Brain },
    { name: "RAG", icon: Brain },
    { name: "Prompt Engineering", icon: Code },
    { name: "FAISS", icon: Database },
    { name: "Qdrant", icon: Database },
    { name: "Hybrid Search", icon: Search },
    { name: "TFLite", icon: Smartphone },
    { name: "OpenCV", icon: Code },
    { name: "FastAPI", icon: Server },
    { name: "Flask", icon: Server },
    { name: "Hugging Face", icon: Brain },
    { name: "Firebase", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Docker", icon: Container },
    { name: "AWS", icon: Server },
    { name: "AWS S3", icon: Server },
    { name: "AWS ECS Fargate", icon: Container },
    { name: "AWS RDS", icon: Database },
    { name: "AWS EC2", icon: Server },
    { name: "Amazon Bedrock", icon: Brain },
    { name: "AWS SageMaker", icon: Brain },
    { name: "GitHub", icon: Github },
  ]

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "other-projects", label: "Other Projects" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-indigo-500/20 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] -z-10 overflow-hidden pointer-events-none">
        {/* Dot pattern */}
        <svg className="absolute inset-0 h-full w-full text-slate-300 opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>

        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse duration-1000"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[400px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse duration-1000" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[60%] left-[20%] w-[60%] h-[500px] rounded-full bg-pink-600/10 blur-[120px] animate-pulse duration-1000" style={{ animationDelay: "4s" }}></div>
        
        {/* Fade to background color at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-semibold tracking-tight">
              <span className="text-slate-100">Vishwakalyan</span>
              <span className="text-blue-400 ml-1">Patil</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-slate-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-800/50">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex-1 text-center lg:text-left max-w-3xl">
              <div className="mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                  <span className="text-foreground">Vishwakalyan</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
                    Patil
                  </span>
                </h1>
              </div>
              <p className="text-xl sm:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
                AI/ML Engineer | LLMs, RAG & Multi-Agent Systems | Cloud-Native Backend Developer | 2x AWS Certified
              </p>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
                Specializing in building robust LLM applications, RAG pipelines, and intelligent multi-agent systems with cloud-native backends. Experienced with prompt engineering, NLP, and fine-tuning workflows, alongside an ongoing focus on MLOps and System Design. Actively seeking opportunities in Machine Learning Engineering or Generative AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Featured <span className="text-blue-400">AI/ML Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Production-ready AI systems with measurable impact and scalable architecture
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/40 backdrop-blur-sm border-slate-800 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-slate-100 text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-blue-400 font-medium text-sm tracking-wide">{project.impact}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Additional Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Other <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-stack applications and mobile solutions with proven user adoption
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/30 border-slate-800/50 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-slate-100 text-lg font-semibold">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-green-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-blue-400 font-medium text-sm tracking-wide">{project.impact}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Professional Journey</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Work <span className="text-blue-400">Experience</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Building production-grade AI systems and driving innovation in healthcare technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                      <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
                        AI Intern
                      </h3>
                    </div>
                    <p className="text-xl font-medium text-blue-400 mb-2">AI Chef</p>
                    <p className="text-slate-400 text-sm">Healthcare + LLM Startup</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <div className="flex items-center gap-2 text-slate-300 mb-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="font-medium">Sept 2025 – Dec 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span>Remote – Mumbai, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex gap-3 items-start group/item hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300">
                    <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <p className="text-slate-300 leading-relaxed">
                      Built custom <span className="text-blue-400 font-medium">LLM retrieval modules</span> including
                      hybrid BM25 + embedding search and query compression, enabling{" "}
                      <span className="text-blue-400 font-medium">2× faster multi-LLM workflows</span>.
                    </p>
                  </div>

                  <div className="flex gap-3 items-start group/item hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300">
                    <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <p className="text-slate-300 leading-relaxed">
                      Designed and deployed a{" "}
                      <span className="text-blue-400 font-medium">production-grade FastAPI backend</span> with RAG
                      endpoints, Bring-Your-Own-Key (BYOK) support, and vector databases (Qdrant).
                    </p>
                  </div>

                  <div className="flex gap-3 items-start group/item hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300">
                    <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <p className="text-slate-300 leading-relaxed">
                      Containerized the full stack{" "}
                      <span className="text-blue-400 font-medium">(FastAPI, MongoDB, Qdrant)</span> using Docker and
                      iteratively improved healthcare recommendation quality using user interaction data.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/50">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      LangChain
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      FastAPI
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      RAG
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      Qdrant
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      Python
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Academic Contribution</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-blue-400">Research</span> & Publications
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Cutting-edge research in deepfake detection with state-of-the-art performance metrics
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-800/50 hover:border-blue-500/30 transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-slate-100 text-2xl font-semibold mb-2">
                      Advanced DeepFake Detection Using Multi-Modal Analysis
                    </CardTitle>
                    <CardDescription className="text-blue-400 text-lg font-medium">
                      Preprint Published on Research Square · Under Review · First Author
                    </CardDescription>
                  </div>
                  <a
                    href="https://www.researchsquare.com/article/rs-7949701/v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  >
                    View Preprint
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Developed a high-performance deepfake detection system using frame-level analysis and
                  EfficientNet-based ensembles. The system combines robust preprocessing, facial alignment, and
                  explainable AI techniques to achieve near real-time inference while maintaining strong generalization
                  across benchmark datasets.
                </p>
                {/* Performance metrics unchanged */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700/50">
                    <div className="text-3xl font-bold text-blue-400 mb-2">0.998</div>
                    <div className="text-slate-400 font-medium">AUC Score</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700/50">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                    <div className="text-slate-400 font-medium">Accuracy</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-2">15ms</div>
                    <div className="text-slate-400 font-medium">Inference</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700/50">
                    <div className="text-3xl font-bold text-orange-400 mb-2">5M+</div>
                    <div className="text-slate-400 font-medium">Samples</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Professional Credentials</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-blue-400">Certifications</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Industry-recognized certifications validating expertise in cloud AI and machine learning
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-800/50 hover:border-blue-500/30 transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-slate-100 text-2xl font-semibold mb-2">
                      AWS Certified AI Practitioner
                    </CardTitle>
                    <CardDescription className="text-blue-400 text-lg font-medium">
                      Amazon Web Services (AWS)
                    </CardDescription>
                  </div>
                  <a
                    href="https://www.credly.com/badges/725918d1-3cef-4c5c-a2fb-972e5afaafb5/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  >
                    Show Credential
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="text-slate-400 font-medium text-sm mb-2">Issued</div>
                    <div className="text-slate-100 font-semibold">January 2026</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="text-slate-400 font-medium text-sm mb-2">Expires</div>
                    <div className="text-slate-100 font-semibold">January 2029</div>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 mb-6">
                  <div className="text-slate-400 font-medium text-sm mb-2">Credential ID</div>
                  <div className="text-slate-100 font-mono text-sm break-all">725918d1-3cef-4c5c-a2fb-972e5afaafb5</div>
                </div>
                <div>
                  <div className="text-slate-300 font-medium text-sm mb-3">Associated Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Amazon Web Services (AWS)",
                      "Amazon Bedrock",
                      "AWS SageMaker",
                      "Machine Learning",
                      "Deep Learning",
                      "Artificial Intelligence (AI)",
                      "Reinforcement Learning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 mt-8">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-slate-100 text-2xl font-semibold mb-2">
                      AWS Certified Solutions Architect – Associate (SAA-C03)
                    </CardTitle>
                    <CardDescription className="text-blue-400 text-lg font-medium">
                      Amazon Web Services (AWS)
                    </CardDescription>
                  </div>
                  <a
                    href="https://www.credly.com/badges/b10eac39-8dc3-4abe-b31a-0bd873394ab5/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  >
                    Show Credential
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="text-slate-400 font-medium text-sm mb-2">Issued</div>
                    <div className="text-slate-100 font-semibold">May 2026</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="text-slate-400 font-medium text-sm mb-2">Expires</div>
                    <div className="text-slate-100 font-semibold">May 2029</div>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 mb-6">
                  <div className="text-slate-400 font-medium text-sm mb-2">Credential ID</div>
                  <div className="text-slate-100 font-mono text-sm break-all">b10eac39-8dc3-4abe-b31a-0bd873394ab5</div>
                </div>
                <div>
                  <div className="text-slate-300 font-medium text-sm mb-3">Associated Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cloud Architecture",
                      "Cloud Infrastructure",
                      "AWS",
                      "System Design"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Recognition</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-blue-400">Achievements</span> & Awards
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recognition for technical excellence and leadership in competitive environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="bg-slate-900/30 p-8 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/50 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-blue-400 text-sm font-medium">{achievement.highlight}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Technical Expertise</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Skills & <span className="text-blue-400">Technologies</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Proficient in modern AI/ML frameworks and full-stack development technologies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/50 text-center group"
                >
                  <IconComponent className="h-8 w-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-slate-200 font-medium">{skill.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Professional Profile</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-blue-400">Resume</span> & CV
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive overview of my professional experience, education, and technical expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-800/50 hover:border-blue-500/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-4">Download My Resume</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl">
                    Get a detailed overview of my academic background, technical skills, project experience, and
                    professional achievements. Updated with my latest work in AI/ML and software development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
                    >
                      <a
                        href="https://drive.google.com/file/d/1bMmOjsetRcu2URth1IvAh0t9DcZnbWs2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        View Resume
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 px-8 py-3 text-lg font-medium rounded-xl transition-all duration-300 bg-transparent"
                    >
                      <a
                        href="https://drive.google.com/file/d/1bMmOjsetRcu2URth1IvAh0t9DcZnbWs2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Let's <span className="text-blue-400">Connect</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Open to discussing opportunities in AI/ML engineering, research collaborations, or innovative technology
              projects. Let's build something impactful together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
            >
              <a href="mailto:vishwakalyanpatil@gmail.com">
                <Mail className="mr-3 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-transparent"
            >
              <a href="https://github.com/vky6366" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 bg-transparent"
            >
              <a href="https://linkedin.com/in/vishwakalyan-patil" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-3 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800/50 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-slate-400 text-lg">© 2026 Vishwakalyan Patil</p>
              <p className="text-slate-500 text-sm mt-1">Crafted with precision and passion</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:vishwakalyanpatil@gmail.com"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/vky6366"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/vishwakalyan-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
