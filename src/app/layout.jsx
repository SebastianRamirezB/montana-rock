import './globals.css'
import { Inter } from 'next/font/google'
import 'atropos/css'
import localFont from 'next/font/local'



const inter = Inter({ subsets: ['latin'] })

const blocklyn = localFont({
  src: '../../public/fonts/Blocklyn-Grunge.otf',
  display: 'swap',
})

export const metadata = {
  title: 'Montaña Rock Fest',
  description: 'Festival de Rock en Pensilvania y el Oriente de Caldas'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={blocklyn.className}>{children}</body>
    </html>
  )
}
