import { ReactNode } from 'react'

interface RightSectionProps {
  children: ReactNode
}

export function RightSection({ children }: RightSectionProps) {
  return (
    <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
      {children}
    </section>
  )
}
