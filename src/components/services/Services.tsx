import Image from 'next/image'

export default function Services() {
	const services = [
		{
			title: 'Строительно-монтажные работы',
			image: '/assets/images/services-1.jpg'
		},
		{
			title: 'Проектирование объектов теплоэнергетики',
			image: '/assets/images/services-2.jpg'
		},
		{
			title: 'Техническое обслуживание объектов теплоэнергетики',
			image: '/assets/images/services-3.jpg'
		}
	]

	return (
		<section className=" px-6 py-12">
			<h2 className="text-3xl font-bold mb-8 px-64">
				Направления деятельности
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<div key={index} className="group">
						<div className="relative h-80 overflow-hidden rounded-t-lg bg-gray-200">
							<Image
								src={service.image}
								alt={service.title}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
							/>
						</div>
						<div className="bg-[#118BDD] h-16 pl-8 flex items-center justify-between cursor-pointer transition-bg duration-300 hover:bg-[#1e94e2]">
							<h3 className="text-lg text-white font-medium text-center">
								{service.title}
							</h3>
							<div className="bg-[#1e94e2] w-16 h-full flex items-center justify-center ">
								<Image
									src={'/assets/icons/icon-arrow-right.svg'}
									alt="Подробнее"
									width={12}
									height={12}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
