// supabase new project password: p.xkf49aRaC-Cm%
// clerk domain link: https://live-barnacle-97.clerk.accounts.dev

import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>
        Popular Companions
      </h1>

      <section className='home-section' >
        <CompanionCard
          id = '123'
          name = 'Neura the Brainy Explorer'
          topic = 'Neural Network of the Brain'
          subject = 'Science'
          duration = {45}
          color = '#ffda6e'
        />
         <CompanionCard
          id = '456'
          name = 'Countsy the Number Wizard'
          topic = 'Derivatives and Integrals'
          subject = 'Math'
          duration = {30}
          color = '#e5d0ff'
        />
         <CompanionCard
          id = '789'
          name = 'Verba the Vocabulary Builder'
          topic = 'English Literature'
          subject = 'Language'
          duration = {30}
          color = '#ffda6e'
        />
        
      </section>

      <section className='home-section'>
        <CompanionsList 
            title="Recently completed sessions"
            companions = {recentSessions}
            classNames="w-2/3 mb-5 p-5 border border-black rounded-2xl  max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page