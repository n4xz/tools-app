import Hero from './Hero'
import MainSection from './MainSection'

export default function Content() {
  return (
    <div className='flex flex-col items-center gap-20'>
      <Hero />
      <MainSection />
    </div>
  )
}