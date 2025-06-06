import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ApplicationModal from '../ApplicationModal'
import { axiosClassic } from '@/api/axios'

interface Service {
	id: string
	slug: string
	title: string
	description: string
	image: string
	fullDescription: string
	features: string[]
	price?: string
}

const COMMON_DOCUMENTS = [
	{ title: 'Типовой договор', url: '/docs/general-contract.pdf' },
	{ title: 'Реквизиты компании', url: '/docs/company-details.pdf' },
	{ title: 'Лицензии', url: '/docs/licenses.pdf' }
]

async function getService(slug: string): Promise<Service | null> {
	try {
		const { data } = await axiosClassic.get<Service>(`/services/${slug}`)
		return data
	} catch (error) {
		console.error('Error fetching service:', error)
		return null
	}
}
export default async function ServiceDetail({ params }: any) {
	const service = await getService(params.slug)

	if (!service) {
		notFound()
	}

	return (
		<div className="bg-white">
			{/* Хлебные крошки */}
			<nav className="px-4 md:px-8 lg:px-16 py-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<ol className="flex items-center space-x-2 text-sm">
						<li>
							<Link href="/" className="text-blue-600 hover:underline">
								Главная
							</Link>
						</li>
						<li>/</li>
						<li>
							<Link href="/services" className="text-blue-600 hover:underline">
								Услуги
							</Link>
						</li>
						<li>/</li>
						<li className="text-gray-500">{service.title}</li>
					</ol>
				</div>
			</nav>

			{/* Основной контент */}
			<section className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Левая колонка - изображение и цена */}
						<div className="lg:col-span-1 space-y-6">
							<div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover"
								/>
							</div>

							{service.price && (
								<div className="bg-blue-50 p-4 rounded-lg">
									<h3 className="text-lg font-bold text-blue-800 mb-2">
										Стоимость
									</h3>
									<p className="text-2xl font-bold">{service.price}</p>
								</div>
							)}

							<div className="bg-gray-50 p-4 rounded-lg">
								<h3 className="text-lg font-bold mb-4">Документы</h3>
								<ul className="space-y-2">
									{COMMON_DOCUMENTS.map((doc, index) => (
										<li key={index}>
											<Link
												href={doc.url}
												target="_blank"
												className="flex items-center text-blue-600 hover:underline"
											>
												<svg
													className="w-5 h-5 mr-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
													/>
												</svg>
												{doc.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Правая колонка - описание услуги */}
						<div className="lg:col-span-2">
							<h1 className="text-2xl md:text-3xl font-bold mb-4">
								{service.title}
							</h1>

							<div
								className="prose max-w-none mb-8"
								dangerouslySetInnerHTML={{ __html: service.fullDescription }}
							/>

							<div className="mb-8">
								<h2 className="text-xl font-bold mb-4">Особенности услуги</h2>
								<ul className="space-y-3">
									{service.features.map((feature, index) => (
										<li key={index} className="flex items-start">
											<svg
												className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg">
								<h2 className="text-xl font-bold mb-4">Заказать услугу</h2>
								<p className="mb-4">
									Оставьте заявку и наши специалисты свяжутся с вами для
									уточнения деталей
								</p>
								<ApplicationModal serviceSlug={params.slug} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
