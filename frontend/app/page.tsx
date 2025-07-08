'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Shield, Cpu, Wifi, Lock, Bug, Server, Database, 
  Network, Zap, Code, Briefcase, User, Mail, Download,
  ExternalLink, Calendar, MapPin, Star, Award, Globe,
  Smartphone, Palette, Cloud, GitBranch, Monitor, Users,
  HardDrive, Activity, Eye, Key, Fingerprint, Router,
  Smartphone as Mobile, Cpu as Chip, Wifi as NetworkIcon
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const tabs: Tab[] = [
  { id: 'about', label: 'About Me', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    'root@sum1d3v:~$ whoami',
    'sum1d3v - Cybersecurity & IoT Specialist',
    '',
    'root@sum1d3v:~$ cat /etc/skills',
    'Linux Administration | Network Security | IoT Development',
    'Penetration Testing | Embedded Systems | Cloud Security',
    '',
    'root@sum1d3v:~$ systemctl status experience',
    '● Active: 4+ years in cybersecurity and IoT',
    '● Status: Currently accepting new challenges',
    '',
    'root@sum1d3v:~$ ping -c 1 future',
    'PING future (opportunities.local) - Ready to connect!',
    '',
    'root@sum1d3v:~$ _'
  ];

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < terminalLines.length; i++) {
        const line = terminalLines[i];
        if (line === '') {
          setTerminalText(prev => prev + '\n');
          await new Promise(resolve => setTimeout(resolve, 500));
          continue;
        }
        
        for (let j = 0; j < line.length; j++) {
          setTerminalText(prev => prev + line[j]);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        setTerminalText(prev => prev + '\n');
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    };

    typeText();
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Network Security Monitoring System',
      description: 'Real-time network traffic analysis with threat detection using machine learning algorithms.',
      technologies: ['Python', 'Snort', 'ELK Stack', 'Docker', 'Kubernetes'],
      category: 'Security',
      githubUrl: 'https://github.com/sum1d3v/network-monitor',
      liveUrl: 'https://demo.sum1d3v.dev',
      featured: true
    },
    {
      id: 2,
      title: 'IoT Device Security Framework',
      description: 'Comprehensive security framework for IoT devices with encryption and authentication.',
      technologies: ['C++', 'Arduino', 'ESP32', 'MQTT', 'TLS'],
      category: 'IoT',
      githubUrl: 'https://github.com/sum1d3v/iot-security',
      liveUrl: 'https://iot-demo.sum1d3v.dev',
      featured: true
    },
    {
      id: 3,
      title: 'Linux Penetration Testing Toolkit',
      description: 'Custom penetration testing tools and scripts for Linux environments.',
      technologies: ['Bash', 'Python', 'Metasploit', 'Nmap', 'Wireshark'],
      category: 'Security',
      githubUrl: 'https://github.com/sum1d3v/pen-test-tools',
      liveUrl: 'https://tools.sum1d3v.dev',
      featured: true
    },
    {
      id: 4,
      title: 'Embedded System Controller',
      description: 'Low-level embedded system controller for industrial IoT applications.',
      technologies: ['C', 'ARM Cortex-M', 'FreeRTOS', 'CAN Bus', 'Modbus'],
      category: 'IoT',
      githubUrl: 'https://github.com/sum1d3v/embedded-controller',
      liveUrl: 'https://embedded.sum1d3v.dev',
      featured: false
    }
  ];

  const experience = [
    {
      id: 1,
      title: 'Senior Security Engineer',
      company: 'CyberDefense Corp',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Leading security operations, threat hunting, and incident response for enterprise clients.',
      technologies: ['SIEM', 'EDR', 'Threat Intelligence', 'Incident Response', 'Forensics'],
      achievements: [
        'Reduced incident response time by 60%',
        'Implemented zero-trust architecture',
        'Led 15+ security assessments'
      ]
    },
    {
      id: 2,
      title: 'IoT Security Specialist',
      company: 'SmartTech Solutions',
      period: '2021 - 2023',
      location: 'San Francisco, CA',
      description: 'Developed secure IoT solutions and implemented security protocols for connected devices.',
      technologies: ['IoT Security', 'Embedded Systems', 'Cryptography', 'Network Security'],
      achievements: [
        'Secured 1000+ IoT devices',
        'Developed custom security protocols',
        'Reduced vulnerabilities by 80%'
      ]
    },
    {
      id: 3,
      title: 'Linux System Administrator',
      company: 'TechInfra Inc',
      period: '2020 - 2021',
      location: 'New York, NY',
      description: 'Managed Linux servers, implemented security policies, and automated system administration.',
      technologies: ['Linux', 'Bash', 'Ansible', 'Docker', 'Kubernetes'],
      achievements: [
        'Automated 90% of system tasks',
        'Improved system uptime to 99.9%',
        'Implemented security hardening'
      ]
    }
  ];

  const skills = {
    security: [
      { name: 'Penetration Testing', level: 95, icon: Shield },
      { name: 'Network Security', level: 90, icon: Network },
      { name: 'Incident Response', level: 88, icon: Activity },
      { name: 'Threat Hunting', level: 85, icon: Eye },
      { name: 'Forensics', level: 82, icon: HardDrive },
    ],
    iot: [
      { name: 'Embedded Systems', level: 90, icon: Chip },
      { name: 'IoT Security', level: 88, icon: Lock },
      { name: 'Firmware Analysis', level: 85, icon: Cpu },
      { name: 'Wireless Protocols', level: 80, icon: Wifi },
      { name: 'Hardware Security', level: 78, icon: Server },
    ],
    linux: [
      { name: 'Linux Administration', level: 92, icon: Terminal },
      { name: 'Bash Scripting', level: 90, icon: Code },
      { name: 'System Security', level: 88, icon: Shield },
      { name: 'Container Security', level: 85, icon: Database },
      { name: 'Kernel Programming', level: 75, icon: Cpu },
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-matrix">About Me</h2>
                <p className="text-lg text-green-300 mb-6 leading-relaxed">
                  I'm a cybersecurity specialist and IoT developer with over 4 years of experience 
                  in securing digital systems and building connected devices. My expertise spans 
                  from penetration testing to embedded systems development.
                </p>
                <p className="text-lg text-green-300 mb-6 leading-relaxed">
                  When I'm not hacking systems (ethically), you can find me developing IoT solutions, 
                  contributing to open-source security tools, or exploring the latest in cybersecurity.
                </p>
                <div className="flex gap-4">
                  <button className="btn-cyber flex items-center gap-2">
                    <Download size={20} />
                    Download Resume
                  </button>
                  <button className="btn-secondary flex items-center gap-2">
                    <Mail size={20} />
                    Get In Touch
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="card-terminal p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={20} className="text-green-400" />
                    <span className="text-green-400 font-mono">System Status</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield size={16} className="text-green-400" />
                      <span className="text-green-300">Security Level: MAXIMUM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Network size={16} className="text-cyan-400" />
                      <span className="text-cyan-300">Network: SECURE</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cpu size={16} className="text-purple-400" />
                      <span className="text-purple-300">IoT Devices: 50+</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bug size={16} className="text-red-400" />
                      <span className="text-red-300">Vulnerabilities: 0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-matrix">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-cyber hover:shadow-cyber transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-400">{job.title}</h3>
                      <p className="text-lg font-semibold text-cyan-300">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-green-300">
                        <Calendar size={16} />
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-300">
                        <MapPin size={16} />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-green-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="security-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-green-300">
                        <Star size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-matrix">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-cyber group hover:shadow-cyber transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-900/50 to-black h-48 rounded-lg mb-4 flex items-center justify-center">
                      {project.category === 'Security' && <Shield size={48} className="text-red-400" />}
                      {project.category === 'IoT' && <Chip size={48} className="text-purple-400" />}
                      {project.category === 'Linux' && <Terminal size={48} className="text-blue-400" />}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 security-badge">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      {project.category === 'Security' && <span className="security-badge">Security</span>}
                      {project.category === 'IoT' && <span className="iot-badge">IoT</span>}
                      {project.category === 'Linux' && <span className="linux-badge">Linux</span>}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
                      <p className="text-green-300 mb-3">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-green-900/50 border border-green-400 text-green-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-green-900/50 border border-green-400 text-green-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-300 hover:text-green-400 transition-colors"
                      >
                        <Code size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-300 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-matrix">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-xl font-semibold capitalize text-green-400">{category}</h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon size={16} className="text-green-400" />
                            <span className="font-medium text-green-300">{skill.name}</span>
                          </div>
                          <span className="text-sm text-green-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-green-900/50 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-matrix">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Let's Work Together</h3>
                  <p className="text-green-300 mb-6">
                    I'm always interested in new cybersecurity challenges and IoT projects. 
                    Whether you need security consulting or IoT development, feel free to reach out!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-green-400" />
                    <div>
                      <p className="font-medium text-green-300">Email</p>
                      <p className="text-green-400">hack@sum1d3v.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={20} className="text-green-400" />
                    <div>
                      <p className="font-medium text-green-300">PGP Key</p>
                      <p className="text-green-400">0x1234567890ABCDEF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-green-400" />
                    <div>
                      <p className="font-medium text-green-300">Location</p>
                      <p className="text-green-400">Secure Location</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-green-300 hover:text-green-400 transition-colors">
                    <Code size={24} />
                  </a>
                  <a href="#" className="text-green-300 hover:text-green-400 transition-colors">
                    <Shield size={24} />
                  </a>
                  <a href="#" className="text-green-300 hover:text-green-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="card-cyber">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Send Secure Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-green-300">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-green-400/50 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-black text-green-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-green-300">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-green-400/50 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-black text-green-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-green-300">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-green-400/50 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-black text-green-300"
                      placeholder="Your secure message..."
                    />
                  </div>
                  <button type="submit" className="btn-cyber w-full">
                    Send Secure Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black circuit-bg">
      {/* Terminal Hero Section */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card-terminal p-6">
              <div className="font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {terminalText}
                  {showCursor && <span className="terminal-cursor">█</span>}
                </pre>
              </div>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient glitch" data-text="sum1d3v">sum1d3v</span>
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 mb-6">
                  Cybersecurity & IoT Specialist
                </p>
                <p className="text-lg text-green-300 mb-8">
                  Securing the digital world, one system at a time
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="btn-cyber flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
                <button className="btn-secondary flex items-center gap-2">
                  <Mail size={20} />
                  Contact Me
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="section-padding bg-black/50">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-green-900/20 border border-green-400/50 rounded-xl p-2 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-400 text-black shadow-cyber'
                      : 'text-green-400 hover:text-green-300 hover:bg-green-400/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <div key={activeTab} className="min-h-[600px]">
              {renderTabContent()}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-400/50 text-green-400 py-8">
        <div className="container-max text-center">
          <p className="font-mono">&copy; 2024 sum1d3v. All systems secure.</p>
        </div>
      </footer>
    </div>
  );
} 