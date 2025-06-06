import Image from 'next/image'
import Link from 'next/link'

const ContactsPage = () => {
	const office = {
		city: 'Ростов-на-Дону',
		address: 'ул. Орская, 17В',
		phone: '+7 (863) 123-45-67',
		email: 'rostov@vzlet-service.ru',
		hours: 'Пн-Пт: 9:00 - 18:00',
		coords: [47.222531, 39.718676],
		image: '/assets/images/map.jpg'
	}

	const departments = [
		{
			name: 'Отдел продаж',
			phone: '+7 (800) 551-12-45',
			email: 'sales@vzlet-service.ru'
		},
		{
			name: 'Техническая поддержка',
			phone: '+7 (800) 551-12-46',
			email: 'support@vzlet-service.ru'
		},
		{
			name: 'Бухгалтерия',
			phone: '+7 (863) 123-45-68',
			email: 'accounting@vzlet-service.ru'
		}
	]

	return (
		<div className="bg-white">
			{/* Герой секция */}
			<section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-48 bg-[url(/assets/images/bg-about.jpg)] bg-cover bg-center text-white">
				<div className="absolute inset-0 bg-black/65"></div>
				<div className="relative z-1 max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
						Контакты
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-6">
						Свяжитесь с нами удобным для вас способом
					</p>
				</div>
			</section>

			{/* Основной контент */}
			<section className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 md:py-16">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Контактная информация */}
						<div>
							<h2 className="text-2xl md:text-3xl font-bold mb-6">Наш офис</h2>

							<div className="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 className="text-xl font-bold mb-4">{office.city}</h3>
								<div className="space-y-4">
									<div className="flex items-start">
										<svg
											className="w-5 h-5 text-blue-600 mr-3 mt-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										<div>
											<p className="font-medium">Адрес:</p>
											<p>{office.address}</p>
										</div>
									</div>

									<div className="flex items-start">
										<svg
											className="w-5 h-5 text-blue-600 mr-3 mt-1"
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
											<p className="font-medium">Телефон:</p>
											<p>{office.phone}</p>
										</div>
									</div>

									<div className="flex items-start">
										<svg
											className="w-5 h-5 text-blue-600 mr-3 mt-1"
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
										<div>
											<p className="font-medium">Email:</p>
											<p>{office.email}</p>
										</div>
									</div>

									<div className="flex items-start">
										<svg
											className="w-5 h-5 text-blue-600 mr-3 mt-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<div>
											<p className="font-medium">Часы работы:</p>
											<p>{office.hours}</p>
										</div>
									</div>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-4">Отделы компании</h3>
							<div className="space-y-4">
								{departments.map((dept, index) => (
									<div key={index} className="border-b border-gray-200 pb-4">
										<h4 className="font-bold">{dept.name}</h4>
										<div className="flex items-center mt-2 text-gray-600">
											<svg
												className="w-4 h-4 mr-2"
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
											{dept.phone}
										</div>
										<div className="flex items-center mt-1 text-gray-600">
											<svg
												className="w-4 h-4 mr-2"
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
											{dept.email}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Карта и форма */}
						<div>
							<div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
								<Image
									src={office.image}
									alt={`Карта: ${office.address}`}
									fill
									className="object-cover"
								/>

								<div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
									<h4 className="font-bold">{office.city}</h4>
									<p className="text-sm">{office.address}</p>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-4">Напишите нам</h3>
							<form className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Ваше имя
									</label>
									<input
										type="text"
										id="name"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Телефон
									</label>
									<input
										type="tel"
										id="phone"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Сообщение
									</label>
									<textarea
										id="message"
										rows={4}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									></textarea>
								</div>

								<button
									type="submit"
									className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
								>
									Отправить сообщение
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactsPage
