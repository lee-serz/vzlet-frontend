import { axiosClassic } from '@/api/axios'
import Image from 'next/image'
import Link from 'next/link'

interface Service {
	id: string
	slug: string
	title: string
	description: string
	image: string
	price?: string
}

interface Feature {
	title: string
	icon: string
}

async function getServices(): Promise<Service[]> {
	try {
		const { data } = await axiosClassic.get<Service[]>('/services')
		return data
	} catch (error) {
		console.error('Error fetching services:', error)
		throw new Error('Failed to fetch services')
	}
}

const ServicesPage = async () => {
	const services = await getServices()

	const features: Feature[] = [
		{
			title: 'Собственное производство',
			icon: '/assets/icons/icon-award.svg'
		},
		{
			title: 'Сертифицированные специалисты',
			icon: '/assets/icons/icon-award.svg'
		},
		{
			title: 'Гарантия на работы',
			icon: '/assets/icons/icon-award.svg'
		},
		{
			title: 'Под ключ',
			icon: '/assets/icons/icon-award.svg'
		}
	]

	return (
		<div className="bg-white">
			{/* Герой секция */}
			<section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-48 bg-[url(/assets/images/bg-about.jpg)] bg-cover bg-center text-white">
				<div className="absolute inset-0 bg-black/65"></div>
				<div className="relative z-1 max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
						Наши услуги
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-6">
						Полный комплекс услуг по проектированию, монтажу и обслуживанию
						узлов учета
					</p>
				</div>
			</section>

			{/* Основные услуги */}
			<section className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 md:py-16">
				<div className="max-w-4xl mx-auto mb-12 text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Основные направления
					</h2>
					<p className="text-gray-600">
						Более 30 лет мы предоставляем профессиональные услуги в области
						приборного учета энергоресурсов
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{services.map(service => (
						<div
							key={service.id}
							className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative h-48 md:h-56 overflow-hidden">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-6 bg-white">
								<h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-4">{service.description}</p>
								{service.price && (
									<p className="text-lg font-semibold text-blue-600 mb-4">
										{service.price}
									</p>
								)}
								<Link
									href={`/services/${service.slug}`}
									className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
								>
									Подробнее
									<svg
										className="w-4 h-4 ml-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Преимущества */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
						Почему выбирают нас
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map((feature, index) => (
							<div
								key={index}
								className="bg-white py-6 rounded-lg shadow-md text-center"
							>
								<div className="flex justify-center mb-4">
									<Image
										src={feature.icon}
										alt={feature.title}
										width={48}
										height={48}
									/>
								</div>
								<h3 className="text-lg font-medium">{feature.title}</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA секция */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-blue-600 text-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Готовы обсудить ваш проект?
					</h2>
					<p className="text-lg mb-8 max-w-2xl mx-auto">
						Оставьте заявку и наши специалисты свяжутся с вами для консультации
					</p>
					<Link
						href="/contacts"
						className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
					>
						Оставить заявку
					</Link>
				</div>
			</section>
		</div>
	)
}

export default ServicesPage
