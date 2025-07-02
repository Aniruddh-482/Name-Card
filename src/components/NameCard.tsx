
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Typewriter from './Typewriter';
import SkillsBar from './SkillsBar';
import ContactModal from './ContactModal';
import SocialIcons from './SocialIcons';
import LiveClock from './LiveClock';
import ThemeToggle from './ThemeToggle';

const NameCard: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isRocketLaunched, setIsRocketLaunched] = useState(false);

  const typewriterTexts = [
    "Python & DSA Lover",
    "Good Chess Player", 
    "Open-Source Enthusiast",
    "Full-Stack Developer"
  ];

  const handleRocketLaunch = () => {
    setIsRocketLaunched(true);
    setTimeout(() => setIsRocketLaunched(false), 2000);
  };

  return (
    <div className="min-h-screen cosmic-bg relative overflow-hidden">
      {/* Animated stars background */}
      <div className="cosmic-stars"></div>
      
      {/* Theme toggle and clock */}
      <ThemeToggle />
      <LiveClock />
      
      {/* Easter egg rocket */}
      <button
        onClick={handleRocketLaunch}
        className={`fixed bottom-4 right-4 p-2 rounded-full bg-cosmic-purple/20 backdrop-blur-sm border border-cosmic-purple/30 hover:border-cosmic-purple transition-all duration-300 ${
          isRocketLaunched ? 'animate-rocket-launch' : 'hover:animate-float'
        }`}
      >
        <Rocket size={20} className="text-cosmic-purple" />
      </button>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Main card */}
          <div className="glass-card neon-border rounded-2xl p-8 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left side - Avatar and basic info */}
              <div className="text-center lg:text-left space-y-6">
                {/* Avatar */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full border-4 border-cosmic-purple overflow-hidden">
                      <img
                        src="public/aniruddh.png"
                        alt="Aniruddh Upadhyay"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-cyan opacity-30 blur animate-pulse"></div> */}
                  </div>
                </div>

                {/* Name and title */}
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                    Aniruddh Upadhyay
                  </h1>
                  <p className="text-lg text-gray-300">
                    Full-Stack Developer
                  </p>
                  <div className="text-base h-8">
                    <Typewriter texts={typewriterTexts} />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Button
                    asChild
                    className="rounded-full px-6 py-2 bg-gradient-to-r from-cosmic-purple to-cosmic-pink hover:from-cosmic-purple/80 hover:to-cosmic-pink/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cosmic-purple/50"
                  >
                    <a href="public/Aniruddh_Upadhyay_Resume.pdf" target="_blank">
                      Download Resume
                    </a>
                  </Button>
                  
                  <Button
                    onClick={() => setIsContactModalOpen(true)}
                    className="rounded-full px-6 py-2 bg-gradient-to-r from-cosmic-cyan to-cosmic-blue hover:from-cosmic-cyan/80 hover:to-cosmic-blue/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cosmic-cyan/50"
                  >
                    Contact Me
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-6 py-2 border-cosmic-purple/50 text-cosmic-purple hover:bg-cosmic-purple/10 transition-all duration-300 hover:scale-105"
                  >
                    <a href="/projects">View Projects</a>
                  </Button>
                </div>

                {/* Social icons */}
                <SocialIcons />
              </div>

              {/* Right side - Skills and additional info */}
              <div className="space-y-8">
                {/* Skills showcase */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white">Skills & Expertise</h2>
                  <SkillsBar />
                </div>

                {/* GitHub stats placeholder */}
                <div className="glass-card rounded-lg p-4 border border-cosmic-cyan/30">
                  <h3 className="text-lg font-medium text-white mb-3">GitHub Activity</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cosmic-cyan">120+</div>
                      <div className="text-sm text-gray-400">Commits</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cosmic-purple">8</div>
                      <div className="text-sm text-gray-400">Projects</div>
                    </div>
                  </div>
                </div>

                {/* Quote/Bio */}
                <div className="glass-card rounded-lg p-4 border border-cosmic-purple/30">
                  <blockquote className="text-gray-300 italic">
                    "Passionate about creating seamless user experiences and building the future of web development, one component at a time."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default NameCard;
