'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="relative">
			{/* Основная шапка */}
			<div className="flex justify-between items-center px-4 md:px-6 border-b border-gray-200">
				<div className="bg-white/80 pb-2 pt-1 px-4 rounded">
					<Link href="/">
						<Image
							src={'/assets/icons/vzlet.svg'}
							width={128}
							height={32}
							alt="Логотип"
							className="w-24 md:w-32"
						/>
					</Link>
				</div>
				{/* Десктопное меню */}
				<div className="hidden md:flex justify-between items-center  px-6 py-3 ">
					<nav className="text-lg font-semibold uppercase">
						<div className="flex gap-16">
							<Link
								href="/about"
								className="hover:text-blue-600 transition-colors"
							>
								О компании
							</Link>
							<Link
								href="/services"
								className="hover:text-blue-600 transition-colors"
							>
								Услуги
							</Link>
							<Link
								href="/subscribers"
								className="hover:text-blue-600 transition-colors"
							>
								Абонентам
							</Link>
							<Link
								href="/news"
								className="hover:text-blue-600 transition-colors"
							>
								Новости
							</Link>
							<Link
								href="/contacts"
								className="hover:text-blue-600 transition-colors"
							>
								Контакты
							</Link>
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
							<Link
								href="/about"
								className="block py-2 hover:text-blue-600"
								onClick={() => setIsMenuOpen(false)}
							>
								О компании
							</Link>
						</li>
						<li>
							<Link
								href="/services"
								className="block py-2 hover:text-blue-600"
								onClick={() => setIsMenuOpen(false)}
							>
								Услуги
							</Link>
						</li>
						<li>
							<Link
								href="/subscribers"
								className="block py-2 hover:text-blue-600"
								onClick={() => setIsMenuOpen(false)}
							>
								Абонентам
							</Link>
						</li>
						<li>
							<Link
								href="/news"
								className="block py-2 hover:text-blue-600"
								onClick={() => setIsMenuOpen(false)}
							>
								Новости
							</Link>
						</li>
						<li>
							<Link
								href="/contacts"
								className="block py-2 hover:text-blue-600"
								onClick={() => setIsMenuOpen(false)}
							>
								Контакты
							</Link>
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
