import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
	return (
		<div className='h-screen w-screen bg-black'>
			<div className='h-screen w-screen overflow-scroll bg-gradient-to-tl from-cyan-900/40 to-sky-500/70'>
				<div className='mx-auto flex min-h-screen max-w-screen-2xl flex-col justify-between gap-12 bg-black/20 p-4 text-white drop-shadow-2xl backdrop-blur-3xl'>
					<Navbar />
					<Content />
					<Footer />
				</div>
			</div>
		</div>
	)
}
