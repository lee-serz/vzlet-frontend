import Image from 'next/image'
import Link from 'next/link'

export default function News() {
	const newsItems = [
		{
			id: 1,
			title: 'Новая линейка тепловычислителей ТСРВ-044',
			excerpt:
				'Предназначен для организации коммерческого учета тепловой энергии. Упрощенный доступ к текущим значениям, сохранение настроечных параметров, простое и понятное меню и свободное конфигурирование или по встроенным типовым схемам!',
			date: '01.02.2025',
			image: '/assets/images/news-1.png'
		},
		{
			id: 2,
			title: 'Программная настройка Взлёт ТСРВ-044 ЛАЙТ и ПРО',
			excerpt:
				'22 апреля в 11:00 приглашаем на вебинар, где покажем настройку нового тепловычислителя ТСРВ-044 В прямом эфире: подключение к компьютеру через ПО «Монитор-конфигуратор», программная настройка, разбор типовых ситуаций и ответы на ваши вопросы',
			date: '15.04.2025',
			image: '/assets/images/news-2.jpg'
		}
	]

	return (
		<section className="px-4 md:px-6 lg:px-8 xl:px-16 py-8 md:py-12">
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
				<h2 className="text-2xl md:text-3xl font-bold">Новости</h2>
				<Link
					href="#"
					className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base"
				>
					ВСЕ НОВОСТИ
				</Link>
			</div>

			<div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10">
				{newsItems.map(item => (
					<article
						key={item.id}
						className="flex flex-col md:flex-row gap-4 md:gap-6 group"
					>
						<div className="relative w-full md:w-1/3 h-48 md:h-56 bg-gray-200 rounded-lg overflow-hidden">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
							/>
						</div>

						<div className="flex-1 flex flex-col justify-between gap-3 md:gap-4">
							<div>
								<h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
									{item.title}
								</h3>
								<p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-3">
									{item.excerpt}
								</p>
							</div>
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
								<time className="text-xs md:text-sm text-gray-500">
									{item.date}
								</time>
								<Link
									href="#"
									className="bg-blue-600 px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium text-white hover:bg-blue-700 transition-colors"
								>
									Читать далее →
								</Link>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
