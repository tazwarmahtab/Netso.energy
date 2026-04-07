'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'

const AVERAGE_SUN_HOURS = 4.5 // Bangladesh average daily sunshine hours
const SYSTEM_LOSSES = 0.15 // 15% system losses
const NET_METERING_RATE = 0.80 // 80% of generation credited back
const BANGLADESH_ELECTRICITY_RATE = 8.5 // BDT/kWh average

function calculateSolar(monthlyBill: number, rate: number = BANGLADESH_ELECTRICITY_RATE) {
  // Monthly consumption (kWh)
  const monthlyConsumption = monthlyBill / rate

  // Daily consumption
  const dailyConsumption = monthlyConsumption / 30

  // Required daily generation to offset 100% (accounting for net metering)
  const requiredDailyGen = dailyConsumption / (1 - SYSTEM_LOSSES)

  // System size needed (kW)
  const systemSizeKw = requiredDailyGen / AVERAGE_SUN_HOURS

  // Monthly generation (kWh)
  const monthlyGeneration = systemSizeKw * AVERAGE_SUN_HOURS * 30 * (1 - SYSTEM_LOSSES)

  // Savings: offset consumption minus system losses
  const monthlySavings = monthlyConsumption * rate // Full bill saved if net metering covers offset

  // Net metering credits: if generation > consumption, excess is credited at 80%
  const excessGen = Math.max(0, monthlyGeneration - monthlyConsumption)
  const netMeteringCredit = excessGen * rate * NET_METERING_RATE

  // Total benefit
  const totalBenefit = monthlySavings + netMeteringCredit

  return {
    monthlyConsumption: Math.round(monthlyConsumption),
    systemSizeKw: systemSizeKw.toFixed(2),
    monthlyGeneration: Math.round(monthlyGeneration),
    monthlySavings: Math.round(monthlySavings),
    netMeteringCredit: Math.round(netMeteringCredit),
    totalBenefit: Math.round(totalBenefit),
    excessGen: Math.round(excessGen),
  }
}

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState('')
  const [rate, setRate] = useState(BANGLADESH_ELECTRICITY_RATE.toString())
  const [results, setResults] = useState<any>(null)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (results) {
      gsap.fromTo('#calc-results', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
    }
  }, [results])

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    const bill = parseFloat(monthlyBill)
    const r = parseFloat(rate)
    if (isNaN(bill) || bill <= 0) {
      alert('Please enter a valid electricity bill amount')
      return
    }
    const res = calculateSolar(bill, r)
    setResults(res)
    setShowResults(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
      <h3 className="text-3xl font-bold mb-2 text-center">Solar Savings Calculator</h3>
      <p className="text-slate-300 mb-6 text-center">Estimate your solar system size and savings based on your electricity bill</p>

      <form onSubmit={handleCalculate} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Monthly Electricity Bill (BDT)</label>
          <input
            type="number"
            step="100"
            min="0"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(e.target.value)}
            placeholder="e.g., 5000"
            className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Electricity Rate (BDT/kWh) — defaults to Bangladesh avg</label>
          <input
            type="number"
            step="0.1"
            min="1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#FF8C42] hover:bg-[#e67e3a] rounded-lg font-bold text-lg shadow-lg transition"
        >
          Calculate My Solar System
        </button>
      </form>

      {showResults && results && (
        <div id="calc-results" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-slate-400">Monthly Consumption</div>
            <div className="text-2xl font-semibold">{results.monthlyConsumption.toLocaleString()} kWh</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-slate-400">Recommended System Size</div>
            <div className="text-2xl font-semibold text-[#FF8C42]">{results.systemSizeKw} kW</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-slate-400">Est. Monthly Generation</div>
            <div className="text-2xl font-semibold">{results.monthlyGeneration.toLocaleString()} kWh</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-slate-400">Net Metering Credit</div>
            <div className="text-2xl font-semibold text-green-400">+{results.netMeteringCredit.toLocaleString()} BDT</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 md:col-span-2">
            <div className="text-sm text-slate-400">Total Monthly Benefit</div>
            <div className="text-3xl font-bold text-[#FF8C42]">{results.totalBenefit.toLocaleString()} BDT</div>
          </div>

          <div className="md:col-span-2 text-center pt-4">
            <a
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg shadow-lg transition"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Join WhatsApp for Free Evaluation
            </a>
            <p className="text-slate-400 text-sm mt-2">Our team will assess your needs and provide a custom quote</p>
          </div>
        </div>
      )}
    </div>
  )
}
