import './globals.css'
import { Inter, Geist, Montserrat, Open_Sans, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata = {
  title: 'Netso.energy | Own Your Energy. Own Your Future.',
  description: 'Empowering homeowners to achieve complete energy independence with beautiful, intuitive management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} ${montserrat.variable} ${openSans.variable} ${firaCode.variable}`}>
      <body className="bg-[#0A1628] text-white font-opensans overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
