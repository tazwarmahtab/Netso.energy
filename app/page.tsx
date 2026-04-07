'use client'

import Hero3D from './components/three/Hero3D'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <main className="min-h-screen text-white">
      {mounted && <Hero3D />}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-xl">
          Netso.energy
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8">
          Powering businesses with clean, affordable solar energy through flexible OPEX contracts.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-[#FF8C42] hover:bg-[#e67e3a] rounded-full text-lg font-semibold shadow-lg transition">
            Get Started
          </button>
          <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-full text-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 bg-slate-900/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold mb-2">No Upfront Cost</h3>
            <p className="text-slate-400">Start generating solar power immediately with zero capital investment.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold mb-2">Predictable OPEX</h3>
            <p className="text-slate-400">Fixed monthly fees that scale with your energy usage, no surprises.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold mb-2">Carbon Reduction</h3>
            <p className="text-slate-400">Lower your carbon footprint with clean, renewable energy certificates.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the waitlist</h2>
          <p className="text-slate-400 mb-8">Be the first to know when we launch in Bangladesh.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 w-full sm:w-80 text-white placeholder:text-slate-400" />
            <button type="submit" className="px-6 py-3 bg-[#FF8C42] hover:bg-[#e67e3a] rounded-lg font-semibold transition">Notify Me</button>
          </form>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-6 border-t border-white/10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Netso.energy — Solar OPEX for a sustainable future.
      </footer>
    </main>
  )
}
