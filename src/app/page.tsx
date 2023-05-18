import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Signin } from '@/components/Signin'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <Signin />}

        <Hero />

        <Copyright />
      </section>

      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </section>
    </main>
  )
}
