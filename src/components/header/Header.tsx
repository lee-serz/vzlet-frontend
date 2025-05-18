'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="relative">
			{/* Основная шапка */}
			<div className="flex justify-between items-center pb-4 px-4 md:px-6 border-b border-gray-200">
				<div className="bg-white/80 pb-2 pt-1 px-4 rounded">
					<Image
						src={'/assets/icons/vzlet.svg'}
						width={128}
						height={32}
						alt="Логотип"
						className="w-24 md:w-32"
					/>
				</div>
				{/* Десктопное меню */}
				<div className="hidden md:flex justify-between items-center px-6 py-3 ">
					<nav className="text-lg font-semibold uppercase">
						<div className="flex gap-8">
							<a href="#" className="hover:text-blue-600 transition-colors">
								О компании
							</a>
							<a href="#" className="hover:text-blue-600 transition-colors">
								Услуги
							</a>
							<a href="#" className="hover:text-blue-600 transition-colors">
								Абонентам
							</a>
							<a href="#" className="hover:text-blue-600 transition-colors">
								Новости
							</a>
							<a href="#" className="hover:text-blue-600 transition-colors">
								Контакты
							</a>
						</div>
					</nav>
				</div>
				{/* Контакты - всегда видимы */}
				<div className="hidden md:block text-sm text-right">
					<div className="font-medium">+7 800 551 12 45</div>
					<div className="text-gray-500">vzlet-rostov@yandex.ru</div>
				</div>

				{/* Бургер-кнопка для мобильных */}
				<button
					className="md:hidden p-2 focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Меню"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Мобильное меню (появляется при клике) */}
			<div
				className={`md:hidden absolute z-10 w-full bg-white text-black shadow-lg transition-all duration-300 ease-in-out ${
					isMenuOpen
						? 'max-h-screen opacity-100'
						: 'max-h-0 opacity-0 overflow-hidden'
				}`}
			>
				<nav className="px-4 py-3 border-b border-gray-200">
					<ul className="space-y-3">
						<li>
							<a href="#" className="block py-2 hover:text-blue-600">
								О компании
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 hover:text-blue-600">
								Услуги
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 hover:text-blue-600">
								Абонентам
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 hover:text-blue-600">
								Новости
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 hover:text-blue-600">
								Контакты
							</a>
						</li>
					</ul>
				</nav>

				<div className="px-4 py-3 text-sm">
					<div className="font-medium mb-1">+7 800 551 12 45</div>
					<div className="text-gray-500">vzlet-rostov@yandex.ru</div>
				</div>
			</div>
		</header>
	)
}
