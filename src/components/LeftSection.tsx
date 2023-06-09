import { cookies } from 'next/headers'
import { Hero } from './Hero'
import { Profile } from './Profile'
import { Signin } from './Signin'
import { Copyright } from './Copyright'

export function LeftSection() {
  const isAuthenticated = cookies().has('token')

  return (
    <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

      {isAuthenticated ? <Profile /> : <Signin />}

      <Hero />

      <Copyright />
    </section>
  )
}
