import Image from 'next/image'
import Link from 'next/link'

const SubscribersPage = () => {
	const services = [
		{
			title: 'Личный кабинет',
			description:
				'Удобный доступ к показаниям приборов учета и истории платежей',
			icon: '/assets/icons/icon-award.svg',
			link: '/subscribers/account'
		},
		{
			title: 'Передать показания',
			description: 'Быстрая передача текущих показаний приборов учета',
			icon: '/assets/icons/icon-award.svg',
			link: '/subscribers/meter-readings'
		},
		{
			title: 'Оплатить услуги',
			description: 'Безопасная онлайн-оплата без комиссии',
			icon: '/assets/icons/icon-award.svg',
			link: '/subscribers/payment'
		},
		{
			title: 'Заявка на обслуживание',
			description: 'Оставить заявку на техническое обслуживание оборудования',
			icon: '/assets/icons/icon-award.svg',
			link: '/subscribers/request'
		}
	]

	const documents = [
		{ title: 'Правила коммерческого учета', url: '/docs/accounting-rules.pdf' },
		{ title: 'Договор на обслуживание', url: '/docs/service-contract.pdf' },
		{ title: 'Тарифы на услуги', url: '/docs/service-tariffs.pdf' },
		{ title: 'Рекомендации по эксплуатации', url: '/docs/usage-guide.pdf' }
	]

	const faq = [
		{
			question: 'Как передать показания приборов учета?',
			answer:
				'Показания можно передать через личный кабинет на нашем сайте, по телефону +7 (800) 551-12-45 или в мобильном приложении.'
		},
		{
			question: 'Когда нужно передавать показания?',
			answer: 'Показания необходимо передавать с 20 по 25 число каждого месяца.'
		},
		{
			question: 'Как получить доступ к личному кабинету?',
			answer:
				'Для получения доступа обратитесь в абонентский отдел по телефону или email, вам будут предоставлены учетные данные.'
		},
		{
			question: 'Что делать при неисправности прибора учета?',
			answer:
				'Немедленно сообщите в нашу службу поддержки по телефону горячей линии и оставьте заявку на ремонт.'
		}
	]

	return (
		<div className="bg-white">
			{/* Герой секция */}
			<section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-48 bg-[url(/assets/images/bg-about.jpg)] bg-cover bg-center text-white">
				<div className="absolute inset-0 bg-black/65"></div>
				<div className="relative z-10 max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
						Абонентам
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-6">
						Удобные сервисы для наших клиентов
					</p>
				</div>
			</section>

			{/* Основные сервисы */}
			<section className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 md:py-16">
				<div className="max-w-4xl mx-auto mb-12 text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Онлайн-сервисы
					</h2>
					<p className="text-gray-600">
						Воспользуйтесь нашими удобными сервисами для абонентов
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<Link
							key={index}
							href={service.link}
							className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
						>
							<div className="flex justify-center mb-4">
								<div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
									<Image
										src={service.icon}
										alt={service.title}
										width={40}
										height={40}
									/>
								</div>
							</div>
							<h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
								{service.title}
							</h3>
							<p className="text-gray-600 text-sm">{service.description}</p>
						</Link>
					))}
				</div>
			</section>

			{/* Документы */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
						Документы
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{documents.map((doc, index) => (
							<Link
								key={index}
								href={doc.url}
								target="_blank"
								className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
							>
								<svg
									className="w-6 h-6 text-blue-600 mr-3"
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
								<span className="font-medium">{doc.title}</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Частые вопросы */}
			<section className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 md:py-16">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
						Частые вопросы
					</h2>

					<div className="space-y-4">
						{faq.map((item, index) => (
							<div
								key={index}
								className="border border-gray-200 rounded-lg overflow-hidden"
							>
								<details className="group">
									<summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
										<h3 className="font-medium">{item.question}</h3>
										<svg
											className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</summary>
									<div className="p-4 bg-white">
										<p>{item.answer}</p>
									</div>
								</details>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Контакты */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-blue-600 text-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
						Контакты абонентской службы
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Телефоны</h3>
							<ul className="space-y-3">
								<li className="flex items-center">
									<svg
										className="w-5 h-5 mr-3"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<div>
										<div className="font-medium">Абонентский отдел</div>
										<div>+7 (800) 551-12-45</div>
									</div>
								</li>
								<li className="flex items-center">
									<svg
										className="w-5 h-5 mr-3"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<div>
										<div className="font-medium">Техническая поддержка</div>
										<div>+7 (800) 551-12-46</div>
									</div>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold mb-4">Другие способы связи</h3>
							<ul className="space-y-3">
								<li className="flex items-center">
									<svg
										className="w-5 h-5 mr-3"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span>abonent@vzlet-service.ru</span>
								</li>
								<li className="flex items-center">
									<svg
										className="w-5 h-5 mr-3"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
										/>
									</svg>
									<span>Telegram: @vzlet_support</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SubscribersPage
