
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Aniruddh-482',
    icon: Github,
    color: '#ffffff'
  },
  {
    name: 'Twitter', 
    url: 'https://x.com/Aniruddh_482',
    icon: Twitter,
    color: '#1da1f2'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aniruddh-upadhyay-0170a51b2/',
    icon: Linkedin,
    color: '#0077b5'
  }
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:border-cosmic-purple/50 transition-all duration-300 hover:scale-110 hover:animate-glow group"
            style={{
              boxShadow: `0 0 0 ${social.color}00`,
              transition: 'all 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${social.color}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 ${social.color}00`;
            }}
          >
            <IconComponent 
              size={20} 
              className="text-gray-300 group-hover:text-white transition-colors"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
