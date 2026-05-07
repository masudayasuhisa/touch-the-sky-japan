import './globals.css'

export const metadata = {
  title: 'Touch the Sky JAPAN',
  description: 'Myoko Snow Learning Program. Where First Snow Opens New Horizons.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
