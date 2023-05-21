import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { LeftSection } from '@/components/LeftSection'
import { RightSection } from '@/components/RightSection'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const baiJamjuree = BaiJamjuree({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js e Tailwindcss.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
          <LeftSection />

          <RightSection>{children}</RightSection>
        </main>
      </body>
    </html>
  )
}
