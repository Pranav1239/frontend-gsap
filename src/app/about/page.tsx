import Image from 'next/image'
import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Pranav Kumar"
            width={300}
            height={300}
            className="rounded-full border-4 border-white"
          />
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">Pranav Kumar</h1>
            <p className="text-xl">
              17-year-old full stack developer from Vizag, India
            </p>
            <p className="text-gray-400">
              1 year of experience in the tech industry
            </p>
            <p className="text-gray-400">
              Currently working at Techsolace
            </p>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start space-x-4">
          <button variant="outline">Skills</button>
          <button variant="outline">Experience</button>
        </div>
        
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}