import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, icon: 'public/icons/javascript.png', color: '#f7df1e' },
  { name: 'TypeScript', level: 80, icon: 'public/icons/typescript.png', color: '#3178c6' },
  { name: 'React', level: 80, icon: 'public/icons/react.png', color: '#61dafb' },
  { name: 'Next', level: 55, icon: 'public/icons/nextjs.png', color: '#000000' },
  { name: 'Node.js', level: 65, icon: 'public/icons/nodejs.png', color: '#339933' },
  { name: 'Tailwind', level: 60, icon: 'public/icons/tailwind.png', color: '#06b6d4' },
  { name: 'Python', level: 90, icon: 'public/icons/python.png', color: '#117799' },
  { name: 'MySQL', level: 65, icon: 'public/icons/mysql.png', color: '#ff5d01' },
  { name: 'Ubuntu', level: 40, icon: 'public/icons/ubuntu.png', color: '#ff4522' }
];

const SkillsBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>(new Array(skills.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate each skill bar with a delay
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Render the icon as an <img> tag */}
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </div>
              <span className="text-xs text-cosmic-cyan">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  animatedSkills[index] ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  width: animatedSkills[index] ? `${skill.level}%` : '0%',
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                  boxShadow: `0 0 10px ${skill.color}66`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBar;
