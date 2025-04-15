import { Headset, ShieldCheck, Wrench } from 'lucide-react'

export default function Advantages() {
	return (
		<div className="mt-6 grid grid-cols-3 gap-5">
			<div className="card w-full bg-base-200 shadow-sm">
				<div className="card-body">
					<div className="flex justify-between">
						<h2 className="text-3xl font-bold m-auto">
							<Headset size={64} />
						</h2>
					</div>
					<ul className="mt-6 flex flex-col gap-2 text-base">
						<li className="text-center">
							<span>
								Подробные консультации специалистов с многолетним стажем работы
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="card w-full bg-base-200 shadow-sm">
				<div className="card-body">
					{/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
					<div className="flex justify-between">
						<h2 className="text-3xl font-bold m-auto">
							<ShieldCheck size={64} />
						</h2>
					</div>
					<ul className="mt-6 flex flex-col gap-2 text-base">
						<li className="text-center">
							<span>Гарантийное и пост-гарантийное обслуживание и ремонт</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="card w-full bg-base-200 shadow-sm">
				<div className="card-body">
					{/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
					<div className="flex justify-between">
						<h2 className="text-3xl font-bold m-auto">
							<Wrench size={64} />
						</h2>
					</div>
					<ul className="mt-6 flex flex-col gap-2 text-base">
						<li className="text-center">
							<span>
								Монтаж оборудования «под ключ», его настройка и запуск;
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
