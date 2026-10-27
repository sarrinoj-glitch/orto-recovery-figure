import { BodyCards, PricesTeaser } from '@/components/site/Home'
import { HeroLive } from '@/components/site/HeroLive'
import { Start } from '@/components/site/Start'
import { SecondOpinion } from '@/components/site/Conditions'
import { Reviews } from '@/components/site/Reviews'
import { Visit } from '@/components/site/Visit'
import { Stats, StickySteps, Manifesto, DoctorsMorph, BookingFlow, MethodsMarquee, OrbitCta } from '@/components/site/Extras'

// Главная третьего варианта: на первом экране интерактивный человечек «Покажите, где болит», как в исходном демо
export default function HomePage() {
  return (
    <>
      <HeroLive />
      <main>
        <Start />
        <Stats />
        <BodyCards />
        <StickySteps />
        <Manifesto />
        <SecondOpinion />
        <DoctorsMorph />
        <BookingFlow />
        <MethodsMarquee />
        <Reviews />
        <PricesTeaser />
        <OrbitCta />
        <Visit />
      </main>
    </>
  )
}
