import Image from 'next/image'
import { Instagram, Linkedin, Github, Mail, Code, Briefcase, GraduationCap, Award, Heart, Coffee, Music, Book } from 'lucide-react'

export default function AboutPage() {
  const boxes = [
    { title: "About Me", content: "17-year-old full stack developer from Vizag, India", icon: <Heart className="w-8 h-8 mb-2" /> },
    { title: "Skills", content: "React, Node.js, Python, TypeScript", icon: <Code className="w-8 h-8 mb-2" /> },
    { title: "Experience", content: "1 year in the tech industry", icon: <Briefcase className="w-8 h-8 mb-2" /> },
    { title: "Education", content: "Self-taught programmer", icon: <GraduationCap className="w-8 h-8 mb-2" /> },
    { title: "Projects", content: "Portfolio, E-commerce site, Chat app", icon: <Code className="w-8 h-8 mb-2" /> },
    { title: "Achievements", content: "Hackathon winner, Open source contributor", icon: <Award className="w-8 h-8 mb-2" /> },
    { title: "Hobbies", content: "Coding, Reading, Music", icon: <Music className="w-8 h-8 mb-2" /> },
    { title: "Contact", content: "pranavkumar@example.com", icon: <Mail className="w-8 h-8 mb-2" /> },
  ]

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <div className="h-[calc(100vh-2rem)] grid grid-cols-4 gap-4 auto-rows-fr">
        {boxes.map((box, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col justify-center items-center text-center">
            {box.icon}
            <h2 className="text-xl font-bold mb-2">{box.title}</h2>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
