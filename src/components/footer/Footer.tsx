import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-zinc-200 text-gray-800 pt-12  px-6">
			<div className="max-w-6xl mx-auto">
				{/* Main footer content */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div className=" md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<div>
								<Image
									src={'/assets/icons/vzlet.svg'}
									width={128}
									height={32}
									alt="Логотип"
								/>
							</div>
							<p className="text-sm pt-2">ООО "Взлёт-сервис" © 2003-2024</p>
						</div>
					</div>

					{/* Navigation column */}
					<div>
						<h3 className="font-bold mb-4">Навигация</h3>
						<ul className="space-y-2">
							<li>О компании</li>
							<li>Услуги</li>
							<li>Абонентам</li>
							<li>Новости</li>
							<li>Контакты</li>
						</ul>
					</div>

					{/* Company info column */}
					<div>
						<h3 className="font-bold mb-4">Реквизиты</h3>
						<ul className="space-y-2 text-sm">
							<li>ОГРН: 1076167004440</li>
							<li>ИНН: 6167094046</li>
							<li>КПП: 616601001</li>
							<li>ОКПО: 80403522</li>
							<li>ОКАТО: 60401378000</li>
							<li>ОКФС: 16</li>
							<li>ОКОПФ: 12300</li>
						</ul>
					</div>

					{/* Contact info column */}
					<div>
						<h3 className="font-bold mb-4">Контакты</h3>
						<ul className="space-y-2 text-sm">
							<li>Тел/факс: +7 800 551 12 45</li>
							<li>Адрес: Россия, г.Ростов-на-Дону, 344065 ул.Орская, 17 В</li>
							<li>Email: vzlet-rostov@yandex.ru</li>
							<li>График работы:</li>
							<li>Понедельник-Пятница</li>
							<li>09:00 - 17:00</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
