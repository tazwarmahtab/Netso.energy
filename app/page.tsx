'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Scene from '@/components/Scene'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      const data = await res.json()
      
      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Failed to connect to the server')
    }
  }

  return (
    <div ref={containerRef} className="relative bg-navy text-white">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 border-2 border-teal rounded-lg mb-8 mx-auto animate-pulse flex items-center justify-center">
                 <span className="text-teal font-bold text-xl">Netso</span>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-white/60 text-lg font-light tracking-widest uppercase"
              >
                Own Your Energy. <span className="text-amber font-bold">Own Your Future.</span>
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Scene scrollYProgress={scrollYProgress} />

      <main className="relative z-10 font-geist">
        {/* 1. Hero Section */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center p-8 text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl pointer-events-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
              Own Your <span className="text-teal">Energy</span>. Own Your Future.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-inter">
              Empowering homeowners to achieve complete energy independence with beautiful, intuitive management.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-teal text-navy rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Explore the Journey →
              </button>
              <a href="#vision" className="px-10 py-5 border border-white/20 rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
                Join the Waitlist
              </a>
            </div>
            
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-bold text-teal">100%</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Independence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal">Real-time</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Monitoring</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal">AI-Powered</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Optimization</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. The Problem: The Invisible Energy Avalanche */}
        <section id="problem" className="h-screen flex flex-col items-center justify-center p-8">
          <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">The Invisible <span className="text-amber">Energy Avalanche</span></h2>
              <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed font-inter">
                Rising costs, complex regulations, and grid uncertainty. You're producing energy, but are you really in control?
              </p>
              <p className="text-lg md:text-xl text-amber font-medium font-inter">
                847 factors can affect your home's energy efficiency. We make them visible.
              </p>
            </motion.div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-amber mb-2">847</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Variables Tracked</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution: Meet Netso */}
        <section id="solution" className="h-screen flex flex-col items-center justify-center p-8 bg-teal/5">
          <div className="max-w-5xl grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-navy border border-teal/20 rounded-3xl p-8 aspect-video flex items-center justify-center shadow-2xl shadow-teal/5">
               <div className="w-full h-full border border-teal/10 rounded-xl p-4 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="text-teal font-bold">NETSO_DASHBOARD</div>
                    <div className="text-[10px] text-teal/40 font-mono">LIVE_FEED</div>
                  </div>
                  <div className="flex-1 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-teal/20 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
               </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Meet <span className="text-teal">Netso</span></h2>
              <ul className="space-y-6 font-inter">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Solar Inverter Support</h3>
                    <p className="text-white/60">Compatible with the top 3 inverters out of the box.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Battery Optimization</h3>
                    <p className="text-white/60">Intelligent storage management to save you more.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Real-Time Insights</h3>
                    <p className="text-white/60">Know exactly what's happening, as it happens.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 4. Feature Showcase */}
        <section id="platform" className="h-[200vh] relative p-8">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">Energy Intelligence <span className="text-teal">Platform</span></h2>
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
              {[
                { title: "Energy Monitoring", desc: "Real-time production and consumption tracking." },
                { title: "Smart Optimization", desc: "Let AI handle the complexity of energy usage." },
                { title: "Multi-Device Support", desc: "Your home's energy, in your pocket." }
              ].map((f, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-teal">{f.title}</h3>
                  <p className="text-white/60 font-inter">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The Vision / Waitlist */}
        <section id="vision" className="h-screen flex flex-col items-center justify-center p-8 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <p className="text-white/5 text-[20vw] font-bold absolute -bottom-10 -left-10 leading-none">ENERGY</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center z-10 max-w-4xl"
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-8">Join the <span className="text-teal">Movement</span></h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-inter">
              We're building the operating system for household energy independence. Join 500+ homeowners on the waitlist.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl max-w-md mx-auto">
               <h3 className="text-2xl font-bold mb-6">Join the Waitlist</h3>
               {status === 'success' ? (
                <div className="bg-teal/20 border border-teal p-6 rounded-2xl">
                  <p className="font-bold text-teal">{message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full px-6 py-4 rounded-full bg-navy border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-teal text-navy rounded-full font-bold hover:bg-[#40E6FF] transition-colors"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
                  </button>
                  {status === 'error' && <p className="text-red-400 text-sm mt-2">{message}</p>}
                </form>
              )}
            </div>
          </motion.div>
        </section>

        {/* 6. Footer */}
        <footer className="p-12 border-t border-white/10 bg-[#050B14]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <p className="text-3xl font-bold mb-6 text-teal">Netso.energy</p>
              <p className="text-white/40 max-w-xs mb-8 font-inter">
                Empowering homeowners to achieve complete energy independence.
              </p>
            </div>
            <div>
              <p className="font-bold mb-6 uppercase tracking-widest text-xs opacity-40">Company</p>
              <ul className="space-y-4 text-white/60 font-inter">
                <li><a href="#" className="hover:text-teal transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-teal transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-teal transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-teal transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-6 uppercase tracking-widest text-xs opacity-40">Newsletter</p>
              <p className="text-white/40 text-sm mb-4 font-inter">Get the latest insights on home energy optimization.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal flex-1" />
                <button className="bg-teal text-navy px-4 py-2 rounded-lg text-sm font-bold">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs">
            <p>© 2026 Netso Energy. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Github</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}