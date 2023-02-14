import Nav from './auth/Nav'
import './globals.css'
import { Roboto } from '@next/font/google'
import QueryWrapper from './auth/QueryWrapper'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-roboto'
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body className={`mx-4 md:mx-48 xl-96 ${roboto.variable} bg-slate-200`}> 
        <QueryWrapper>
          <Nav/>
          {children}
        </QueryWrapper>
        </body>
    </html>
  )
}
