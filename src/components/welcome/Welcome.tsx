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
		<main className="px-64 py-8 bg-[url(/assets/images/bg-welcome.jpg)] bg-no-repeat bg-cover bg-center text-white">
			<Header />
			<div className="py-42">
				<h1 className="text-6xl font-extrabold mb-2">ООО «Взлёт-сервис»</h1>
				<h2 className="text-6xl font-extrabold text-zinc-300 mb-6">
					Тепловычислители и расходомеры
				</h2>

				<p className="max-w-200 text-xl/10 lineh">
					Ведущее российское производственное предприятие полного цикла, более
					30 лет изготавливает высокотехнологичное оборудование, которое широко
					используется в ЖКХ и промышленности
				</p>
			</div>

			<div className="border-t border-gray-200"></div>

			<div className="flex justify-between mt-8">
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
						<div className="max-w-72">
							<h3 className="text-lg font-medium mb-2">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}
