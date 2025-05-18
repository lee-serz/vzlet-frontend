import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-zinc-200 text-gray-800 pt-8 md:pt-12 px-4 md:px-6">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
					<div className="sm:col-span-2 lg:col-span-1">
						<div className="mb-4">
							<Image
								src={'/assets/icons/vzlet.svg'}
								width={128}
								height={32}
								alt="Логотип"
								className="w-24 md:w-32"
							/>
						</div>
						<p className="text-xs md:text-sm">
							ООО &quot;Взлёт-сервис&quot; © 2003-2024
						</p>
					</div>

					<div>
						<h3 className="font-bold mb-3 text-sm md:text-base">Навигация</h3>
						<ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									О компании
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Услуги
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Абонентам
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Новости
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Контакты
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-3 text-sm md:text-base">Реквизиты</h3>
						<ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
							<li>ОГРН: 1076167004440</li>
							<li>ИНН: 6167094046</li>
							<li>КПП: 616601001</li>
							<li>ОКПО: 80403522</li>
							<li>ОКАТО: 60401378000</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-3 text-sm md:text-base">Контакты</h3>
						<ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
							<li>Тел/факс: +7 800 551 12 45</li>
							<li>Адрес: г.Ростов-на-Дону, ул.Орская, 17 В</li>
							<li>Email: vzlet-rostov@yandex.ru</li>
							<li>Пн-Пт: 09:00 - 17:00</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
