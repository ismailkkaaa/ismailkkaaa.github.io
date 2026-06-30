import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

// --- Shared Components for Notebook Realism ---

const GlobalPaperTexture = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-multiply opacity-[0.15]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  }} />
);

const NotebookPage = ({ children, pageNum, className = "", rotation = 0 }: { children: React.ReactNode, pageNum: string, className?: string, rotation?: number }) => (
  <div 
    className="relative w-full max-w-[1440px] mx-auto my-8 md:my-16 bg-[#F7F3EA] rounded-xl overflow-hidden border border-[#111111]/[0.03]"
    style={{
      transform: `rotate(${rotation}deg)`,
      boxShadow: '0 2px 4px rgba(0,0,0,0.02), 0 10px 30px rgba(0,0,0,0.05), inset 0 2px 10px rgba(255,255,255,0.5)'
    }}
  >
    
    {/* Subtle paper grain specific to the page */}
    <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.2]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'multiply'
    }} />

    {/* Light Blue Horizontal Ruling (3-5% Opacity) */}
    <div className="absolute inset-0 pointer-events-none z-0" style={{
      backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, rgba(155, 190, 255, 0.04) 31px, rgba(155, 190, 255, 0.04) 32px)`,
      backgroundAttachment: 'local'
    }} />

    {/* Faded Red Left Margin */}
    <div className="absolute left-[64px] top-0 bottom-0 w-px bg-[#E6A4A4] opacity-25 pointer-events-none z-0" />

    {/* Page Number */}
    <div className="absolute top-8 right-8 font-handwriting text-xl text-[#2D6BFF] opacity-90 rotate-2 z-10 pointer-events-none">
      {pageNum}
    </div>

    {/* Micro Details: random pencil dot/smudge */}
    <div className="absolute top-[20%] left-[80%] w-1 h-1 rounded-full bg-[#111111]/5 blur-[0.5px] pointer-events-none z-0" />
    <div className="absolute bottom-[30%] left-[10%] w-2 h-0.5 rounded-full bg-[#111111]/5 blur-[1px] rotate-45 pointer-events-none z-0" />

    {/* Content Wrapper */}
    <div className={`relative z-10 ${className}`}>
      {children}
    </div>
  </div>
);

const Tape = ({ className = "" }: { className?: string }) => (
  <div 
    className={`absolute h-8 w-28 bg-white/60 backdrop-blur-sm border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.1)] z-20 ${className}`} 
    style={{ 
      clipPath: 'polygon(3% 0, 96% 2%, 100% 12%, 98% 45%, 100% 88%, 95% 100%, 4% 98%, 0 85%, 2% 50%, 0 15%)',
      backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
    }} 
  />
);

const DrawnArrow = ({ className = "", path = "M10,50 Q40,10 90,50" }) => (
  <svg className={`text-[#2D6BFF] ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <motion.path d={path} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} />
    <motion.path d="M75,40 L90,50 L75,60" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.7 }} />
  </svg>
);

const Highlighter = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <motion.span 
      className="absolute bottom-0 left-[-2%] h-[60%] bg-[#FFE66D] -z-10 rounded-sm mix-blend-multiply"
      initial={{ width: 0 }} whileInView={{ width: '104%' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      style={{ transform: 'rotate(-1deg)' }}
    />
    <span className="relative z-10">{children}</span>
  </span>
);

const DrawnUnderline = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <motion.svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2D6BFF]" preserveAspectRatio="none" viewBox="0 0 100 10">
      <motion.path d="M0,5 Q50,8 100,2" fill="none" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} />
    </motion.svg>
  </span>
);

// --- Sections ---

const CoverPage = () => (
  <NotebookPage pageNum="01" rotation={0}>
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      <div className="absolute inset-x-8 inset-y-8 md:inset-12 border border-[#111111]/5 rounded-sm pointer-events-none z-10" />
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center z-20 space-y-8">
        <motion.div whileHover={{ rotate: -4, scale: 1.02 }} className="inline-block p-4 border border-[#111111]/5 rounded bg-white shadow-sm transform -rotate-2 mb-16 relative">
           <Tape className="-top-4 left-1/2 -translate-x-1/2" />
           <p className="font-handwriting text-2xl text-[#2D6BFF]">Property of:</p>
           <p className="font-sans font-bold text-xl mt-1 text-[#111111]">Albasith C A</p>
        </motion.div>

        <h1 className="text-[5rem] md:text-[10rem] font-sans font-bold tracking-tighter text-[#111111] leading-none mix-blend-multiply">ISMO</h1>
        
        <div className="relative inline-block">
          <p className="font-handwriting text-3xl md:text-5xl text-[#7B7B7B] transform -rotate-2 mt-4">Creative Portfolio</p>
          <motion.svg className="absolute -bottom-4 left-0 w-full h-6 text-[#2D6BFF]" viewBox="0 0 200 20">
            <motion.path d="M10,10 Q100,20 190,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.8 }} />
          </motion.svg>
        </div>
        
        <div className="mt-32">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7B7B7B]">Designed by</p>
          <p className="font-sans font-medium text-[#111111] mt-2 text-sm tracking-widest">ALBASITH C A</p>
        </div>
      </motion.div>
    </section>
  </NotebookPage>
);

const HeroSection = () => (
  <NotebookPage pageNum="02" rotation={0.4}>
    <section className="min-h-screen flex items-center py-32 relative max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pl-[80px] md:pl-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative z-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-10 relative">
          <h2 className="text-5xl md:text-[5.5rem] font-bold font-sans tracking-tighter text-[#111111] leading-[1.05]">
            Hello.<br/>I'm Albasith.
          </h2>
          <div className="space-y-3 font-handwriting text-4xl text-[#2D6BFF]">
            <p>Designer,</p>
            <p>Developer,</p>
            <p>Creative Problem Solver.</p>
          </div>
          <div className="font-sans text-lg md:text-xl text-[#7B7B7B] max-w-md leading-relaxed bg-[#F7F3EA]/80">
            <p>Ideas begin as <Highlighter>sketches.</Highlighter></p>
            <p className="mt-2">I turn them into digital experiences.</p>
          </div>
          <div className="flex flex-wrap gap-6 pt-6 font-sans">
            <button className="px-8 py-4 bg-[#111111] text-[#F7F3EA] rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
              View My Work <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, rotate: 6, y: 20 }} whileInView={{ opacity: 1, rotate: -2, y: 0 }} viewport={{ once: true }} whileHover={{ rotate: -1, scale: 1.02 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative justify-self-center mt-12 lg:mt-0">
          <div className="bg-white p-4 pb-20 shadow-[0_20px_40px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.05)] w-[320px] md:w-[380px] relative z-20">
            <Tape className="-top-4 right-10 rotate-6" />
            <Tape className="-bottom-4 left-10 -rotate-3" />
            <div className="aspect-[4/4.5] bg-[#E5DFD1] relative overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.1)] border border-black/5">
              <img src="https://images.unsplash.com/photo-1645055752527-873bf0d6c593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwZGVzaWduZXIlMjBza2V0Y2hpbmclMjBkZXNrfGVufDF8fHx8MTc4Mjg1MTIxOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Portrait" className="w-full h-full object-cover filter contrast-[1.1] brightness-[1.05]" />
            </div>
            <p className="font-handwriting text-3xl text-center absolute bottom-6 left-0 w-full text-[#111111]/90">me, sketching.</p>
          </div>
          <DrawnArrow className="absolute -top-16 -left-8 w-24 h-24 transform -scale-x-100 rotate-[60deg] z-30" path="M10,60 Q30,10 90,40" />
          <span className="absolute -top-24 -left-12 font-handwriting text-2xl text-[#2D6BFF] rotate-[-10deg] z-30 bg-[#F7F3EA]/60 px-2">This is me</span>
        </motion.div>
      </div>
    </section>
  </NotebookPage>
);

const AboutSection = () => (
  <NotebookPage pageNum="03" rotation={-0.5}>
    <section className="py-32 relative max-w-5xl mx-auto px-6 md:px-16 pl-[80px] md:pl-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 z-20 relative">
        <div className="md:col-span-3 hidden md:block relative pt-24">
          <div className="font-handwriting text-2xl text-[#7B7B7B] rotate-[-2deg] space-y-12">
            <p className="relative bg-[#F7F3EA]/80 py-1">
              <span className="text-[#2D6BFF]">*</span> Keep it simple.
              <DrawnArrow className="absolute -right-12 top-4 w-12 h-12" path="M0,0 Q20,10 40,-10" />
            </p>
            <p className="pl-4 rotate-[3deg] bg-[#F7F3EA]/80 py-1">Design is how it works.</p>
          </div>
        </div>

        <div className="md:col-span-9 relative">
          <h3 className="font-sans font-bold tracking-tighter text-5xl md:text-6xl mb-12 text-[#111111]">My approach.</h3>
          <div className="space-y-8 font-sans text-xl md:text-2xl text-[#111111] leading-relaxed max-w-2xl font-light">
            <p className="bg-[#F7F3EA]/60">
              I believe that great design is not just about aesthetics, it's about solving complex problems with <Highlighter>simple, elegant solutions.</Highlighter>
            </p>
            <p className="bg-[#F7F3EA]/60">
              With a background blending <DrawnUnderline>graphic design</DrawnUnderline> and frontend development, I bridge the gap between imagination and execution.
            </p>
            <p className="text-[#7B7B7B] bg-[#F7F3EA]/60">
              My journey started with a pencil and a sketchbook, drawing interfaces before I even knew what UX was. Today, I use modern tools to bring those sketches to life.
            </p>

            <div className="mt-16 pt-8 relative inline-block">
              <Tape className="-top-4 right-4 rotate-3 w-16" />
              <svg className="absolute inset-0 w-full h-full text-[#111111]/10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path d="M2,2 L98,4 L96,96 L4,98 Z M5,5 L95,6 L93,94 L6,95 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
              </svg>
              <div className="p-8 font-handwriting text-3xl md:text-4xl text-[#111111] text-center leading-tight bg-[#F7F3EA]/80">
                "Mission: To design digital spaces that people actually want to spend time in."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NotebookPage>
);

const ProjectsSection = () => {
  const projects = [
    { name: "Dreams Creation", img: "https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2ViJTIwZGVzaWduJTIwYXBwbGljYXRpb24lMjBVSXxlbnwxfHx8fDE3ODI4NDkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080", rotate: -1.5, hoverRotate: -0.5, delay: 0 },
    { name: "SpotOn Portal", img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsJTIwd2ViJTIwZGVzaWduJTIwYXBwbGljYXRpb24lMjBVSXxlbnwxfHx8fDE3ODI4NDkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080", rotate: 1.2, hoverRotate: 2, delay: 0.1 },
    { name: "LiftLog", img: "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwd2ViJTIwZGVzaWduJTIwYXBwbGljYXRpb24lMjBVSXxlbnwxfHx8fDE3ODI4NDkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080", rotate: -0.8, hoverRotate: -1.8, delay: 0.2 },
    { name: "PixNova", img: "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwd2ViJTIwZGVzaWduJTIwYXBwbGljYXRpb24lMjBVSXxlbnwxfHx8fDE3ODI4NDkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080", rotate: 1.8, hoverRotate: 0.5, delay: 0.3 },
  ];

  return (
    <NotebookPage pageNum="04" rotation={0.2}>
      <section className="py-32 max-w-6xl mx-auto px-6 md:px-16 relative pl-[80px] md:pl-[120px]">
        <div className="mb-24 relative inline-block z-20">
          <h2 className="text-6xl md:text-8xl font-sans font-bold text-[#111111] tracking-tighter bg-[#F7F3EA]/80 inline-block pr-4">Selected</h2>
          <h2 className="text-6xl md:text-8xl font-sans font-bold text-[#111111] tracking-tighter md:ml-12 bg-[#F7F3EA]/80 inline-block">Projects.</h2>
          <div className="absolute -right-24 top-8 font-handwriting text-3xl text-[#2D6BFF] -rotate-6 hidden md:block bg-[#F7F3EA]/80 px-2">
            The good stuff
            <DrawnArrow className="absolute -bottom-10 -left-6 w-16 h-16 rotate-180" path="M10,15 Q40,40 80,15" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-20 z-20 relative">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: project.delay }} whileHover={{ scale: 1.03, rotate: project.hoverRotate, zIndex: 30 }} style={{ rotate: `${project.rotate}deg` }} className="group cursor-pointer relative">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 w-20" />
              <div className="bg-white p-4 pb-16 shadow-[0_15px_30px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-[#111111]/5 transition-shadow duration-300 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                <div className="aspect-[4/3] overflow-hidden bg-[#E5DFD1] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-black/5 relative">
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover filter contrast-110 sepia-[0.05]" />
                </div>
                <div className="absolute bottom-5 left-0 w-full text-center">
                  <span className="font-handwriting text-3xl text-[#111111]">{project.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </NotebookPage>
  );
};

const GraphicDesignGallery = () => {
  const posters = [
    { img: "https://images.unsplash.com/photo-1782008237585-071aa5c6a886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYXBoaWMlMjBkZXNpZ24lMjBwb3N0ZXIlMjBtaW5pbWFsfGVufDF8fHx8MTc4Mjg0OTM3OXww&ixlib=rb-4.1.0&q=80&w=1080", rotate: -1.2, hoverRotate: -0.2 },
    { img: "https://images.unsplash.com/photo-1782008237570-6845712af7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdyYXBoaWMlMjBkZXNpZ24lMjBwb3N0ZXIlMjBtaW5pbWFsfGVufDF8fHx8MTc4Mjg0OTM3OXww&ixlib=rb-4.1.0&q=80&w=1080", rotate: 1.5, hoverRotate: 2 },
    { img: "https://images.unsplash.com/photo-1782008237490-1c9bec2841d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGdyYXBoaWMlMjBkZXNpZ24lMjBwb3N0ZXIlMjBtaW5pbWFsfGVufDF8fHx8MTc4Mjg0OTM3OXww&ixlib=rb-4.1.0&q=80&w=1080", rotate: -0.5, hoverRotate: -1.5 },
    { img: "https://images.unsplash.com/photo-1705453168890-6c244eb82942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGdyYXBoaWMlMjBkZXNpZ24lMjBwb3N0ZXIlMjBtaW5pbWFsfGVufDF8fHx8MTc4Mjg0OTM3OXww&ixlib=rb-4.1.0&q=80&w=1080", rotate: 1.8, hoverRotate: 1 },
  ];

  return (
    <NotebookPage pageNum="05" rotation={-0.3}>
      <section className="py-32 overflow-hidden relative pl-[80px] md:pl-[120px]">
        <div className="max-w-6xl mx-auto px-6 md:px-16 mb-24 relative z-20">
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-[#111111] bg-[#F7F3EA]/80 inline-block pr-4">Gallery</h2>
          <p className="font-handwriting text-3xl text-[#7B7B7B] mt-4 ml-2 bg-[#F7F3EA]/80 inline-block">Visual experiments</p>
        </div>
        
        <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-12 overflow-x-auto px-6 md:px-16 pb-12 snap-x snap-mandatory hide-scrollbar z-20 relative">
          {posters.map((poster, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05, zIndex: 10, rotate: poster.hoverRotate }} className="flex-shrink-0 w-72 md:w-auto snap-center relative shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white p-2 border border-[#111111]/10 transition-all duration-300" style={{ rotate: `${poster.rotate}deg` }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#111111] shadow-[0_4px_6px_rgba(0,0,0,0.3)] z-10 before:content-[''] before:absolute before:top-1 before:left-1 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/40" />
              <img src={poster.img} alt={`Graphic Design ${i+1}`} className="w-full h-auto aspect-[3/4] object-cover filter contrast-[1.05] opacity-90" />
            </motion.div>
          ))}
        </div>
      </section>
    </NotebookPage>
  );
};

const ContactSection = () => (
  <NotebookPage pageNum="06" rotation={0.1}>
    <section className="min-h-screen flex flex-col justify-between pt-32 pb-12 relative max-w-5xl mx-auto px-6 md:px-16 pl-[80px] md:pl-[120px]">
      <div className="text-center space-y-8 max-w-3xl mx-auto relative z-20 flex-grow flex flex-col justify-center bg-[#F7F3EA]/60 p-8 rounded-2xl">
        <h2 className="font-sans font-bold text-7xl md:text-[8rem] text-[#111111] tracking-tighter leading-none">
          Let's talk.
        </h2>
        <div className="pt-4">
          <span className="font-handwriting text-4xl text-[#7B7B7B] block transform -rotate-1">
            Maybe your idea could be the next page.
          </span>
        </div>

        <div className="pt-16 flex justify-center">
          <a href="mailto:hello@example.com" className="group flex items-center gap-4 font-sans font-medium text-2xl text-[#111111] hover:text-[#2D6BFF] transition-colors relative inline-block bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
            <Mail size={28} /> Drop me an email <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            <motion.div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#2D6BFF] origin-left" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} />
          </a>
        </div>
        
        <div className="flex justify-center gap-8 pt-16">
          {[Instagram, Twitter, Linkedin].map((Icon, i) => (
            <motion.a whileHover={{ y: -4, rotate: (i%2===0?5:-5) }} key={i} href="#" className="w-14 h-14 rounded-full flex items-center justify-center text-[#111111] border border-[#111111]/20 hover:border-[#111111] transition-colors shadow-sm bg-white">
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
      
      <DrawnArrow className="absolute top-1/4 right-12 md:right-32 w-48 h-48 opacity-30 rotate-12 z-20 pointer-events-none" path="M10,90 L90,10 L70,90 L45,70 L40,90 L30,65 Z M30,65 L90,10 M10,90 Q-10,110 5,130" />
      
      <footer className="w-full flex flex-col md:flex-row justify-between items-end pb-8 pt-8 mt-24 relative z-20">
        <div className="text-left bg-[#F7F3EA]/80 mb-8 md:mb-0">
          <p className="font-handwriting text-3xl text-[#111111] rotate-[-2deg]">End of Notebook.</p>
          <p className="font-handwriting text-xl text-[#7B7B7B] mt-2 rotate-[-1deg]">Thanks for reading.</p>
        </div>
        <div className="text-right">
          <p className="font-handwriting text-5xl text-[#111111] transform -rotate-3 bg-[#F7F3EA]/80 pr-4">
            Albasith C A
          </p>
        </div>
      </footer>
    </section>
  </NotebookPage>
);

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="font-sans bg-[#EBE7E0] text-[#111111] min-h-screen overflow-x-hidden selection:bg-[#FFE66D] selection:text-[#111111] relative py-4 md:py-8">
      <GlobalPaperTexture />
      <main className="relative z-10 w-full px-4 md:px-8">
        <CoverPage />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GraphicDesignGallery />
        <ContactSection />
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
