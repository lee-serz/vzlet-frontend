'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LogIn, LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { user, isAuth, isLoading } = useAuth()
	const { logout, isLoading: isLoggingOut } = useLogout()
	console.log(user.isAdmin)
	const closeMenu = () => setIsMenuOpen(false)

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
				<div className="hidden md:flex justify-between items-center px-6 py-3">
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

				{/* Правая часть с контактами и кнопкой входа */}
				<div className="hidden md:flex items-center gap-6">
					<div className="text-sm text-right">
						<div className="font-medium">+7 800 551 12 45</div>
						<div className="text-gray-500">vzlet-rostov@yandex.ru</div>
					</div>

					{isLoading ? (
						<div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
					) : isAuth ? (
						<div className="flex items-center gap-4">
							{user.isAdmin ? (
								<Link
									href="/lk/admin"
									className="flex items-center gap-3 py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									<User size={20} className="text-gray-600" />
								</Link>
							) : (
								<Link
									href="/lk/profile"
									className="flex items-center gap-3 py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									<User size={20} className="text-gray-600" />
								</Link>
							)}
							<button
								onClick={() => logout()}
								disabled={isLoggingOut}
								className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
							>
								<LogOut size={20} />
								Выйти
							</button>
						</div>
					) : (
						<Link
							href="/login"
							className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
						>
							<LogIn size={20} />
							Войти
						</Link>
					)}
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

			{/* Мобильное меню */}
			<div
				className={`md:hidden fixed inset-0 z-50 bg-white text-black transition-all duration-300 ease-in-out transform ${
					isMenuOpen
						? 'translate-y-0 opacity-100'
						: '-translate-y-full opacity-0'
				}`}
				style={{ marginTop: '4rem' }}
			>
				<div className="h-full overflow-y-auto p-4">
					<nav className="mb-6">
						<ul className="space-y-4">
							<li>
								<Link
									href="/about"
									className="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									О компании
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									Услуги
								</Link>
							</li>
							<li>
								<Link
									href="/subscribers"
									className="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									Абонентам
								</Link>
							</li>
							<li>
								<Link
									href="/news"
									className="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									Новости
								</Link>
							</li>
							<li>
								<Link
									href="/contacts"
									className="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
									onClick={closeMenu}
								>
									Контакты
								</Link>
							</li>
						</ul>
					</nav>

					<div className="mb-6 p-4 bg-gray-50 rounded-lg">
						<div className="font-medium mb-1">+7 800 551 12 45</div>
						<div className="text-gray-500">vzlet-rostov@yandex.ru</div>
					</div>

					<div className="space-y-3">
						{isLoading ? (
							<div className="h-12 rounded-lg bg-gray-200 animate-pulse"></div>
						) : isAuth ? (
							<>
								{user.isAdmin ? (
									<Link
										href="/lk/admin"
										className="flex items-center gap-3 py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
										onClick={closeMenu}
									>
										<User size={20} className="text-gray-600" />
										<span>{user?.name || 'Мой профиль'}</span>
									</Link>
								) : (
									<Link
										href="/lk/profile"
										className="flex items-center gap-3 py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
										onClick={closeMenu}
									>
										<User size={20} className="text-gray-600" />
										<span>{user?.name || 'Мой профиль'}</span>
									</Link>
								)}
								<button
									onClick={() => {
										logout()
										closeMenu()
									}}
									disabled={isLoggingOut}
									className="w-full flex items-center gap-3 py-3 px-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
								>
									<LogOut size={20} />
									<span>Выйти из аккаунта</span>
								</button>
							</>
						) : (
							<Link
								href="/login"
								className="flex items-center gap-3 py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
								onClick={closeMenu}
							>
								<LogIn size={20} />
								<span>Войти в аккаунт</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
