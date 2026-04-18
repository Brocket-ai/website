import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BookDemoProvider } from '@/components/book-demo-modal'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Brocket - AI Operating Layer for Finance Teams',
  description: 'Brocket sits on top of your ERP and handles the routine — variance analysis, forecasting, reporting — so your team focuses on decisions, not data.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <BookDemoProvider>
          {children}
        </BookDemoProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
