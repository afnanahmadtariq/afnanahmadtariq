import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ContactForm from '@/components/ContactForm'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiJavascript, SiHtml5, SiCss3, SiFigma, 
  SiAdobephotoshop, SiGit, SiGithub, SiVisualstudiocode 
} from 'react-icons/si'

export default function Home() {
  const skills = [
    { name: 'Frontend Development', description: 'Expertise in React, Next.js, and modern CSS frameworks' },
    { name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces' },
    { name: 'Responsive Web Design', description: 'Ensuring seamless experiences across all devices' },
    { name: 'Performance Optimization', description: 'Improving load times and overall site performance' }
  ]

  const projects = [
    {
      title: 'Flutter App',
      icon: '📱',
      description: 'A cross-platform mobile application developed using Flutter framework. Features include real-time data synchronization, custom animations, and integration with RESTful APIs.'
    },
    {
      title: 'Tic Tac Ultimate',
      icon: '🎮',
      description: 'An advanced version of the classic Tic-Tac-Toe game, built with React and featuring an unbeatable AI opponent using the minimax algorithm.'
    },
    {
      title: 'Catch Me',
      icon: '🎯',
      description: 'An interactive web game developed with vanilla JavaScript, HTML5 Canvas, and CSS3. Demonstrates proficiency in game logic implementation and browser performance optimization.'
    },
    {
      title: 'Weather Forecast',
      icon: '🌤',
      description: 'A weather forecasting web application that integrates with multiple weather APIs. Built with Next.js and featuring server-side rendering for improved SEO and performance.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <Link href="/" className="text-2xl font-bold">A</Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <Image
              src="/placeholder.svg"
              alt="Avatar"
              width={128}
              height={128}
              className="relative z-10 rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Hello! I Am <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl mb-2">A Designer who</p>
          <p className="text-2xl mb-4">
            Judges a book by its <span className="text-blue-400">cover</span>...
          </p>
          <h2 className="text-3xl font-bold mb-4">I'm a Software Engineer.</h2>
          <p className="text-gray-400">
            Currently, I'm a Software Engineer at <span className="text-blue-400">Company</span>
          </p>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A self-taught UI/UX designer functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-[#1A1830] border-none p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-20 text-center">
        <p className="text-xl mb-8">
          I'm currently looking to join a <span className="text-blue-400">cross-functional</span> team
        </p>
        <p className="text-gray-400 mb-12">that values improving people's lives through accessible design</p>
        <div className="relative w-96 h-96 mx-auto">
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">A</span>
          </div>
          {[SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, 
            SiCss3, SiFigma, SiAdobephotoshop, SiGit, SiGithub, SiVisualstudiocode].map((Icon, i) => (
            <div
              key={i}
              className="absolute w-10 h-10 bg-[#1A1830] rounded-full flex items-center justify-center"
              style={{
                left: `${50 + 40 * Math.cos(2 * Math.PI * i / 12)}%`,
                top: `${50 + 40 * Math.sin(2 * Math.PI * i / 12)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Icon className="text-blue-400 w-6 h-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-none' : ''}`}>
                <h3 className="text-sm text-blue-400 mb-2">Featured Project</h3>
                <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <span className="text-2xl">{project.icon}</span>
                </div>
              </div>
              <div className="bg-[#1A1830] rounded-lg p-4">
                <Image
                  src="/placeholder.svg"
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

