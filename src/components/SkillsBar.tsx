
import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, icon: '🟨', color: '#f7df1e' },
  { name: 'TypeScript', level: 85, icon: '🔷', color: '#3178c6' },
  { name: 'React', level: 88, icon: '⚛️', color: '#61dafb' },
  { name: 'Astro', level: 80, icon: '🚀', color: '#ff5d01' },
  { name: 'Node.js', level: 82, icon: '🟢', color: '#339933' },
  { name: 'Tailwind', level: 90, icon: '🎨', color: '#06b6d4' }
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
                <span className="text-lg">{skill.icon}</span>
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
