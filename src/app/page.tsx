import MainLayout from '@/components/main-layout/MainLayout'
import About from '@/components/welcome/About'
import Advantages from '@/components/welcome/Advantages'
import { Contacts } from '@/components/welcome/Contacts'
import Stoks from '@/components/welcome/Stoks'

async function HomePage() {
	return (
		<MainLayout>
			<About />
			<Advantages />
			<Stoks />
			<Contacts />
		</MainLayout>
	)
}

export default HomePage
