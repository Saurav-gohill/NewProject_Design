import { motion } from 'framer-motion';

export default function Background3D() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating 3D Shapes */}
      {/* 1. Rotating Cube-like shape */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/30 rounded-3xl backdrop-blur-sm"
        animate={{
          y: [0, -40, 0],
          rotateX: [0, 45, 0],
          rotateY: [0, 45, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ perspective: 1000 }}
      />

      {/* 2. Floating Sphere */}
      <motion.div
        className="absolute top-[25%] right-[15%] w-56 h-56 bg-gradient-to-bl from-purple-500/15 to-transparent border border-purple-500/20 rounded-full backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* 3. Orbiting Planetoid */}
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-32 h-32 border-2 border-dashed border-cyan-500/20 rounded-full flex items-center justify-center p-2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-20 h-20 bg-cyan-500/10 rounded-full blur-md" />
      </motion.div>

      {/* 4. Background Geometric Grid */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
         <svg className="w-full h-full">
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
         </svg>
      </motion.div>

       {/* 5. Floating Particles */}
       {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
