import Image from 'next/image'

export default function Header() {
	return (
		<header className="flex justify-between items-center pb-6 px-6 border-b border-gray-200">
			<div className="  bg-white/80 pb-2 pt-1 px-4 rounded">
				<Image
					src={'/assets/icons/vzlet.svg'}
					width={128}
					height={32}
					alt="Логотип"
				/>
			</div>
			<div className="text-lg font-semibold uppercase">
				<div className="flex gap-8">
					<div className="">
						<a href="" className="flex gap-2">
							О компании{' '}
						</a>{' '}
					</div>
					<div className="">
						<a href="" className="flex gap-2">
							Услуги{' '}
						</a>{' '}
					</div>
					<div className="">
						<a href="" className="flex gap-2">
							Абонентам{' '}
						</a>{' '}
					</div>
					<div className="">
						<a href="" className="flex gap-2">
							Новости{' '}
						</a>{' '}
					</div>
					<div className="">
						<a href="" className="flex gap-2">
							Контакты{' '}
						</a>{' '}
					</div>
				</div>
			</div>
			<div className="text-sm text-right">
				<div className="">+7 800 551 12 45</div>
				<div className="text-gray-500">vzlet-rostov@yandex.ru</div>
			</div>
		</header>
	)
}
