import Image from 'next/image'
import Header from '../header/Header'

const features = [
	{
		title: 'Профессионализм',
		description:
			'Равнообразный и богатый опыт дальнейшего развития различных форм деятельности',
		icon: '/assets/icons/icon-award.svg'
	},
	{
		title: 'Прозрачность',
		description: 'Равнообразный и богатый опыт дальнейшего развития',
		icon: '/assets/icons/icon-docs.svg'
	},
	{
		title: 'Инновации',
		description:
			'Равнообразный и богатый опыт дальнейшего развития различных форм деятельности',
		icon: '/assets/icons/icon-lamp.svg'
	},
	{
		title: 'Стремление быть лучше',
		description:
			'Равнообразный и богатый опыт дальнейшего развития различных форм деятельности',
		icon: '/assets/icons/icon-stats.svg'
	}
]

export default function Welcome() {
	return (
		<main className="px-4 md:px-8 lg:px-16 xl:px-64 py-8 bg-[url(/assets/images/bg-welcome.jpg)] bg-no-repeat bg-cover bg-center text-white">
			<div className="py-8 md:py-16 lg:py-24">
				<h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-2">
					ООО «Взлёт-сервис»
				</h1>
				<h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-zinc-300 mb-6">
					Тепловычислители и расходомеры
				</h2>

				<p className="max-w-full md:max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed">
					Ведущее российское производственное предприятие полного цикла, более
					30 лет изготавливает высокотехнологичное оборудование, которое широко
					используется в ЖКХ и промышленности
				</p>
			</div>

			<div className="border-t border-gray-200/50 my-6"></div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
				{features.map((feature, index) => (
					<div key={index} className="flex items-start">
						<div className="mr-4 mt-1">
							<Image
								src={feature.icon}
								alt={feature.title}
								width={24}
								height={24}
								className="w-6 h-6"
							/>
						</div>
						<div className="max-w-full">
							<h3 className="text-lg font-medium mb-2">{feature.title}</h3>
							<p className="text-gray-300 text-sm">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}
