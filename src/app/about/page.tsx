import Image from 'next/image'

const AboutPage = () => {
	const companyInfo = [
		{
			title: '30+ лет',
			description: 'Успешной работы на рынке',
			icon: '/assets/icons/icon-stats.svg'
		},
		{
			title: '5000+',
			description: 'Установленных приборов учета',
			icon: '/assets/icons/icon-lamp.svg'
		},
		{
			title: '100%',
			description: 'Собственное производство',
			icon: '/assets/icons/icon-docs.svg'
		}
	]

	const history = [
		{
			year: '2003',
			event: 'Основание филлиала в г. Ростов-на-Дону'
		},
		{
			year: '2004',
			event: 'Запуск первого серийного тепловычислителя'
		},
		{
			year: '2005',
			event: 'Открытие собственного производственного цеха'
		},
		{
			year: '2015',
			event: 'Сертификация по международным стандартам'
		},
		{
			year: '2023',
			event: 'Запуск новой линейки приборов ТСРВ-044'
		}
	]

	return (
		<div className="bg-white">
			{/* Герой-секция */}
			<section className="relative px-4 md:px-8 lg:px-48 py-16 md:py-48 bg-[url(/assets/images/bg-about.jpg)] bg-cover bg-center text-white">
				<div className="absolute inset-0 bg-black/60"></div>
				<div className="relative z-10 max-w-4xl">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
						О компании
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-6 font-semibold">
						ООО «Взлёт-сервис» - ведущий российский производитель приборов учета
						тепловой энергии
					</p>
				</div>
			</section>

			{/* Основная информация */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">Наша миссия</h2>
					<p className="text-lg mb-8">
						Мы создаем надежные и точные приборы учета, которые помогают нашим
						клиентам эффективно управлять энергоресурсами и сокращать издержки.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
						{companyInfo.map((item, index) => (
							<div key={index} className="bg-gray-50 p-6 rounded-lg">
								<div className="flex items-center mb-4">
									<Image
										src={item.icon}
										alt={item.title}
										width={32}
										height={32}
										className="mr-3"
									/>
									<h3 className="text-xl font-bold">{item.title}</h3>
								</div>
								<p className="text-gray-600">{item.description}</p>
							</div>
						))}
					</div>

					<h2 className="text-2xl md:text-3xl font-bold mb-6">
						История компании
					</h2>
					<div className="relative pl-8 border-l-2 border-blue-500 space-y-8">
						{history.map((item, index) => (
							<div key={index} className="relative">
								<div className="absolute -left-13 w-9 h-9 text-sm font-light rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
									{item.year}
								</div>
								<p className="text-lg">{item.event}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Наши ценности */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
						Наши ценности
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex items-start">
							<Image
								src="/assets/icons/icon-award.svg"
								alt="Качество"
								width={48}
								height={48}
								className="mr-4"
							/>
							<div>
								<h3 className="text-xl font-bold mb-2">Качество</h3>
								<p className="text-gray-600">
									Мы используем только проверенные компоненты и строгий контроль
									на всех этапах производства.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<Image
								src="/assets/icons/icon-award.svg"
								alt="Инновации"
								width={48}
								height={48}
								className="mr-4"
							/>
							<div>
								<h3 className="text-xl font-bold mb-2">Инновации</h3>
								<p className="text-gray-600">
									Постоянное совершенствование продукции и внедрение новых
									технологий.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<Image
								src="/assets/icons/icon-award.svg"
								alt="Команда"
								width={48}
								height={48}
								className="mr-4"
							/>
							<div>
								<h3 className="text-xl font-bold mb-2">Команда</h3>
								<p className="text-gray-600">
									Наши сотрудники - это профессионалы с многолетним опытом в
									области теплоучета.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<Image
								src="/assets/icons/icon-award.svg"
								alt="Клиенты"
								width={48}
								height={48}
								className="mr-4"
							/>
							<div>
								<h3 className="text-xl font-bold mb-2">Клиенты</h3>
								<p className="text-gray-600">
									Мы выстраиваем долгосрочные отношения, основанные на доверии и
									взаимной выгоде.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Сертификаты */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
						Наши сертификаты
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						{[1, 2, 3, 4, 5, 6].map(item => (
							<div key={item} className="bg-gray-100 p-4 rounded-lg ">
								<div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
									<span className="text-gray-400">Сертификат {item}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutPage
