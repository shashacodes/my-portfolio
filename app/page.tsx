'use client'
import Link from 'next/link'
import { Button } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
<main className="min-h-screen text-white px-6 py-24 flex items-center justify-center relative overflow-hidden bg-[#010802]">

  <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-green-100">Sharon</span> 👋
        </h1>
        <TypeAnimation
  sequence={[
    'Frontend Developer',
    1500,
    'Next.js Specialist',
    1500,
    'UI Engineer',
    1500,
    'React & TypeScript Dev',
    1500,
    'Creative Problem Solver',
    1500,
    'Performance-Driven Coder',
    1500,
    'User-Centered Designer',
    1500,
    'Responsive Web Architect',
    1500,
    'Pixel-Perfect Developer',
    1500,
    'Modern Web Enthusiast',
    1500
  ]}
  wrapper="h2"
  cursor={true}
  repeat={Infinity}
  className="text-xl md:text-2xl bg-gradient-to-r from-green-950 to-green-400 bg-clip-text text-transparent mb-8"
/>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Passionate about building smooth, responsive, and visually stunning user interfaces. 
          I love turning ideas into reality with clean code and modern tools.
        </p>

        <div className="flex justify-center gap-4 mb-8">
        <Link href="/projects">
  <Button
    variant="contained"
    size="large"
    sx={{
      backgroundColor: '#052E16',
      '&:hover': {
        backgroundColor: '#388E3C', 
      },
    }}
  >
    View Projects
  </Button>
</Link>

          <Link href="/contact">
            <Button variant="outlined" size="large" color="inherit"  sx={{
      '&:hover': {
        backgroundColor: '#388E3C', 
      },
    }}>
              Contact Me
            </Button>
          </Link>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/shashacodes" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sharon-ibanga-511894177/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ibsharon19@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </main>
  )
}
