import './globals.css'
import { Inter, Geist } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

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

    <html lang="en" className={`${inter.variable} ${geist.variable} scroll-smooth`}>

      <head>

        {/* Analytics Placeholder */}

        <script

          dangerouslySetInnerHTML={{

            __html: `

              window.dataLayer = window.dataLayer || [];

              function gtag(){dataLayer.push(arguments);}

              gtag('js', new Date());

              // gtag('config', 'G-XXXXXXXXXX');

            `,

          }}

        />

      </head>

      <body className="bg-navy text-white font-inter antialiased overflow-x-hidden">

        {children}

      </body>

    </html>

  )

}
