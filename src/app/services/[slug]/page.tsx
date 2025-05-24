// app/services/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Тип данных для услуги
type Service = {
	slug: string
	title: string
	description: string
	image: string
	fullDescription: string
	features: string[]
	price?: string
	documents?: {
		title: string
		url: string
	}[]
}

// Данные всех услуг (можно вынести в отдельный файл)
const allServices: Service[] = [
	{
		slug: 'heat-metering',
		title: 'Установка узлов учёта тепловой энергии',
		description:
			'Проектирование, монтаж и пусконаладка узлов учета тепловой энергии с использованием современных тепловычислителей',
		image: '/assets/images/services-1.jpg',
		fullDescription: `
      <p>Мы предлагаем полный комплекс услуг по установке узлов учета тепловой энергии:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Проектирование узлов учета согласно нормативным требованиям</li>
        <li>Монтаж оборудования с соблюдением всех технических стандартов</li>
        <li>Пусконаладочные работы и тестирование системы</li>
        <li>Сдача в эксплуатацию с оформлением всей документации</li>
      </ul>
      <p>Используем собственные тепловычислители ТСРВ-044 с погрешностью не более 0.5%.</p>
    `,
		features: [
			'Срок выполнения от 5 рабочих дней',
			'Гарантия 3 года на оборудование',
			'Сертифицированные специалисты с допусками СРО',
			'Дистанционный мониторинг показаний',
			'Техническая поддержка 24/7'
		],
		price: 'от 75 000 ₽',
		documents: [
			{ title: 'Типовой договор', url: '/docs/contract-heat.pdf' },
			{ title: 'Технические требования', url: '/docs/tech-requirements.pdf' },
			{ title: 'Сертификаты оборудования', url: '/docs/certificates.pdf' }
		]
	},
	{
		slug: 'wastewater-metering',
		title: 'Установка узлов учёта сточных вод',
		description:
			'Комплексные решения по учету сточных вод для промышленных предприятий и ЖКХ',
		image: '/assets/images/services-2.jpg',
		fullDescription: `
      <p>Профессиональный монтаж систем учета сточных вод:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Расчет и проектирование с учетом специфики объекта</li>
        <li>Установка расходомеров и датчиков уровня</li>
        <li>Настройка программного обеспечения</li>
        <li>Обучение персонала</li>
      </ul>
      <p>Применяем расходомеры с защитой от засорения для работы в агрессивных средах.</p>
    `,
		features: [
			'Работаем с любыми типами стоков',
			'Автоматическая передача данных',
			'Калибровка на месте',
			'Гарантия 2 года',
			'Техническое сопровождение'
		],
		price: 'от 68 000 ₽',
		documents: [
			{ title: 'Пример проекта', url: '/docs/wastewater-project.pdf' },
			{
				title: 'Рекомендации по эксплуатации',
				url: '/docs/wastewater-manual.pdf'
			}
		]
	},
	{
		slug: 'water-metering',
		title: 'Установка узлов учета холодной воды',
		description:
			'Монтаж и обслуживание водомерных узлов с дистанционным съемом показаний',
		image: '/assets/images/services-3.jpg',
		fullDescription: `
      <p>Комплексные решения для учета холодного водоснабжения:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Подбор оптимального типа счетчиков</li>
        <li>Монтаж с минимальным вмешательством в существующие сети</li>
        <li>Интеграция с системами автоматического считывания</li>
        <li>Поверка и калибровка</li>
      </ul>
      <p>Используем ультразвуковые и тахометрические счетчики ведущих производителей.</p>
    `,
		features: [
			'Монтаж за 1 день',
			'Дистанционный сбор данных',
			'Антимагнитная защита',
			'Гарантия 5 лет',
			'Бесплатный выезд на диагностику'
		],
		price: 'от 45 000 ₽',
		documents: [
			{ title: 'Каталог счетчиков', url: '/docs/water-meters-catalog.pdf' },
			{ title: 'Схемы подключения', url: '/docs/water-schemes.pdf' }
		]
	},
	{
		slug: 'calibration',
		title: 'Поверка и калибровка приборов',
		description:
			'Аттестованная лаборатория для поверки и калибровки приборов учета',
		image: '/assets/images/services-4.jpg',
		fullDescription: `
      <p>Аккредитованная лаборатория выполняет:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Поверку теплосчетчиков, водомеров, расходомеров</li>
        <li>Калибровку датчиков давления и температуры</li>
        <li>Ремонт и настройку оборудования</li>
        <li>Оформление свидетельств о поверке</li>
      </ul>
      <p>Имеем аттестат аккредитации № RA.RU.312572 от 12.04.2022</p>
    `,
		features: [
			'Собственная аккредитованная лаборатория',
			'Срок поверки - 1-2 дня',
			'Выездная поверка на объекте',
			'Работаем со всеми типами приборов',
			'Официальные документы'
		],
		price: 'от 3 500 ₽ за прибор',
		documents: [
			{ title: 'Аттестат аккредитации', url: '/docs/accreditation.pdf' },
			{ title: 'Прейскурант на поверку', url: '/docs/calibration-price.pdf' }
		]
	},
	{
		slug: 'maintenance',
		title: 'Техническое обслуживание',
		description:
			'Регулярное обслуживание и ремонт узлов учета для поддержания точности измерений',
		image: '/assets/images/services-5.jpg',
		fullDescription: `
      <p>Комплексное обслуживание узлов учета включает:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Плановые проверки оборудования</li>
        <li>Диагностику и устранение неисправностей</li>
        <li>Чистку и калибровку датчиков</li>
        <li>Анализ корректности показаний</li>
        <li>Замену расходных материалов</li>
      </ul>
      <p>Предлагаем гибкие условия абонентского обслуживания.</p>
    `,
		features: [
			'Круглосуточная поддержка',
			'Аварийный выезд в течение 2 часов',
			'Собственный склад запчастей',
			'Персональный инженер',
			'Отчетность по установленной форме'
		],
		price: 'от 8 000 ₽/месяц',
		documents: [
			{
				title: 'Договор на обслуживание',
				url: '/docs/maintenance-contract.pdf'
			},
			{ title: 'Перечень работ', url: '/docs/maintenance-scope.pdf' }
		]
	},
	{
		slug: 'consulting',
		title: 'Консультации и аудит',
		description: 'Экспертные консультации и энергетический аудит систем учета',
		image: '/assets/images/services-6.jpg',
		fullDescription: `
      <p>Профессиональные консультационные услуги:</p>
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Энергетический аудит систем учета</li>
        <li>Оптимизация схем коммерческого учета</li>
        <li>Подготовка технических заданий</li>
        <li>Экспертиза проектной документации</li>
        <li>Сопровождение в спорах с ресурсоснабжающими организациями</li>
      </ul>
      <p>Наши специалисты имеют опыт работы в Госэнергонадзоре и знают все нюансы законодательства.</p>
    `,
		features: [
			'Бесплатный первичный анализ',
			'Эксперты с 15+ летним опытом',
			'Полный пакет отчетных документов',
			'Поддержка в судебных спорах',
			'Конфиденциальность'
		],
		price: 'от 25 000 ₽',
		documents: [
			{ title: 'Пример отчета по аудиту', url: '/docs/audit-sample.pdf' },
			{
				title: 'Перечень консультационных услуг',
				url: '/docs/consulting-list.pdf'
			}
		]
	}
]

export default function ServiceDetail({
	params
}: {
	params: { slug: string }
}) {
	const service = allServices.find(s => s.slug === params.slug)

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

							{service.documents && service.documents.length > 0 && (
								<div className="bg-gray-50 p-4 rounded-lg">
									<h3 className="text-lg font-bold mb-4">Документы</h3>
									<ul className="space-y-2">
										{service.documents.map((doc, index) => (
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
							)}
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
								<Link
									href="/contacts"
									className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
								>
									Оставить заявку
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
