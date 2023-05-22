import { ReactNode } from 'react'

interface RightSectionProps {
  children: ReactNode
}

export function RightSection({ children }: RightSectionProps) {
  return (
    <section className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
      {children}
    </section>
  )
}
