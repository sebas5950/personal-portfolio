import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">

      <Header />
     {/* Hero */}
     <section id='hero'>
      <Hero />
     </section>

     {/* About */}

     {/* experience */}

     {/* Skills */}

     {/* Projects */}

     {/* Contact Me */}

    </div>
  )
}
