import Hero from './Hero'
import MainSection from './MainSection'

export default function Content() {
  return (
    <div className='flex flex-col gap-20'>
      <Hero />
      <MainSection />
    </div>
  )
}