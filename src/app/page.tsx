import Footer from '@/components/footer/Footer'
import News from '@/components/news/News'
import Services from '@/components/services/Services'
import Welcome from '@/components/welcome/Welcome'

async function HomePage() {
	return (
		<>
			<Welcome />
			<Services />
			<News />
			<Footer />
		</>
	)
}

export default HomePage
