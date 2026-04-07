export const metadata = {
  title: 'Netso.energy',
  description: 'Netso Energy - Solar OPEX platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
