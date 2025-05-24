import Image from 'next/image'
import Link from 'next/link'

const NewsPage = () => {
	const newsItems = [
		{
			id: 1,
			title: 'Новая линейка тепловычислителей ТСРВ-044',
			excerpt:
				'Представляем новую серию тепловычислителей с улучшенной точностью измерений и расширенным функционалом',
			date: '15.05.2025',
			image: '/assets/images/news-2.jpg',
			category: 'Продукция',
			slug: 'new-heat-calculators'
		},
		{
			id: 2,
			title: 'Внедрение системы дистанционного мониторинга',
			excerpt:
				'Запускаем облачную платформу для удаленного сбора и анализа данных с приборов учета',
			date: '02.05.2025',
			image: '/assets/images/news-2.jpg',
			category: 'Технологии',
			slug: 'remote-monitoring'
		},
		{
			id: 3,
			title: 'Обновление нормативной документации',
			excerpt:
				'Важные изменения в требованиях к коммерческому учету тепловой энергии с 1 июня 2025 года',
			date: '28.04.2025',
			image: '/assets/images/news-2.jpg',
			category: 'Регламент',
			slug: 'regulation-updates'
		},
		{
			id: 4,
			title: 'Расширение сервисной сети',
			excerpt: 'Открытие новых сервисных центров в 5 регионах России',
			date: '12.04.2025',
			image: '/assets/images/news-2.jpg',
			category: 'Компания',
			slug: 'service-expansion'
		}
	]

	const popularTags = [
		{ name: 'Оборудование', count: 12 },
		{ name: 'Законодательство', count: 8 },
		{ name: 'Сервис', count: 15 },
		{ name: 'Модернизация', count: 6 },
		{ name: 'Вебинары', count: 4 }
	]

	return (
		<div className="bg-white">
			{/* Герой секция */}
			<section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-48 bg-[url(/assets/images/bg-about.jpg)] bg-cover bg-center text-white">
				<div className="absolute inset-0 bg-black/65"></div>
				<div className="relative z-1 max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
						Новости
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-6">
						Актуальные события и последние обновления нашей компании
					</p>
				</div>
			</section>

			{/* Основной контент */}
			<section className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 md:py-16">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col lg:flex-row gap-8">
						{/* Список новостей */}
						<div className="lg:w-2/3">
							<div className="grid grid-cols-1 gap-8 md:gap-10">
								{newsItems.map(item => (
									<article key={item.id} className="group">
										<div className="flex flex-col md:flex-row gap-6">
											<div className="md:w-1/3">
												<div className="relative h-48 md:h-40 rounded-lg overflow-hidden">
													<Image
														src={item.image}
														alt={item.title}
														fill
														className="object-cover transition-transform duration-300 group-hover:scale-105"
													/>
													<div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 text-xs rounded">
														{item.category}
													</div>
												</div>
											</div>
											<div className="md:w-2/3">
												<time className="text-gray-500 text-sm">
													{item.date}
												</time>
												<h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
													<Link href={`/news/${item.slug}`}>{item.title}</Link>
												</h2>
												<p className="text-gray-600 mb-4">{item.excerpt}</p>
												<Link
													href={`/news/${item.slug}`}
													className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
												>
													Читать далее
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
									</article>
								))}
							</div>

							{/* Пагинация */}
							<div className="mt-12 flex justify-center">
								<nav className="flex items-center gap-1">
									<button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
										←
									</button>
									<button className="px-3 py-1 rounded border border-blue-600 bg-blue-600 text-white">
										1
									</button>
									<button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
										2
									</button>
									<button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
										3
									</button>
									<span className="px-2">...</span>
									<button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
										5
									</button>
									<button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
										→
									</button>
								</nav>
							</div>
						</div>

						{/* Сайдбар */}
						<div className="lg:w-1/3">
							{/* Поиск */}
							<div className="mb-8">
								<h3 className="text-lg font-bold mb-4">Поиск по новостям</h3>
								<div className="relative">
									<input
										type="text"
										placeholder="Введите ключевые слова..."
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
									<button className="absolute right-2 top-2 text-gray-500 hover:text-blue-600">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</button>
								</div>
							</div>

							{/* Категории */}
							<div className="mb-8">
								<h3 className="text-lg font-bold mb-4">Категории</h3>
								<ul className="space-y-2">
									<li>
										<Link
											href="#"
											className="flex justify-between items-center text-gray-700 hover:text-blue-600"
										>
											<span>Все новости</span>
											<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
												24
											</span>
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="flex justify-between items-center text-gray-700 hover:text-blue-600"
										>
											<span>Продукция</span>
											<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
												8
											</span>
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="flex justify-between items-center text-gray-700 hover:text-blue-600"
										>
											<span>Технологии</span>
											<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
												5
											</span>
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="flex justify-between items-center text-gray-700 hover:text-blue-600"
										>
											<span>Регламент</span>
											<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
												4
											</span>
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="flex justify-between items-center text-gray-700 hover:text-blue-600"
										>
											<span>Компания</span>
											<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
												7
											</span>
										</Link>
									</li>
								</ul>
							</div>

							{/* Популярные теги */}
							<div className="mb-8">
								<h3 className="text-lg font-bold mb-4">Популярные теги</h3>
								<div className="flex flex-wrap gap-2">
									{popularTags.map((tag, index) => (
										<Link
											key={index}
											href="#"
											className="inline-block bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors"
										>
											{tag.name} ({tag.count})
										</Link>
									))}
								</div>
							</div>

							{/* Архив */}
							<div>
								<h3 className="text-lg font-bold mb-4">Архив новостей</h3>
								<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
									<option>Выберите месяц</option>
									<option>Май 2025</option>
									<option>Апрель 2025</option>
									<option>Март 2025</option>
									<option>Февраль 2025</option>
									<option>Январь 2025</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NewsPage
