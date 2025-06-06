import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
	const { user, isLoading, isError } = useProfile()

	if (isLoading)
		return <div className="text-center py-16">Загрузка профиля...</div>
	if (isError)
		return (
			<div className="text-center py-16 text-red-500">
				Ошибка загрузки профиля
			</div>
		)
	console.log(user)
	return (
		<div className="bg-white">
			{/* Герой секция */}
			<section className="relative px-4 md:px-8 lg:px-16 bg-cover bg-center text-white">
				<div className="absolute inset-0"></div>
				<div className="relative z-10 max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-5xl font-bold mb-2 pt-2 text-black">
						Профиль
					</h1>
					<p className="text-lg md:text-xl">
						{user?.name || 'Добро пожаловать в ваш аккаунт'}
					</p>
				</div>
			</section>

			{/* Основная информация */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Аватар и контакты */}
					<div className="bg-gray-50 p-6 rounded-lg shadow-sm">
						<div className="flex flex-col items-center mb-6">
							<div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
								{user?.avatarPath ? (
									<Image
										src={user.avatarPath}
										alt="Аватар"
										fill
										className="object-cover"
									/>
								) : (
									<div className="w-full h-full bg-blue-100 flex items-center justify-center text-4xl text-blue-600">
										{user?.name?.charAt(0) || user?.email?.charAt(0)}
									</div>
								)}
							</div>
							<h2 className="text-xl font-bold text-center">{user?.name}</h2>
							<p className="text-gray-500 text-center">{user?.email}</p>
						</div>

						<div className="space-y-4">
							<Link
								href="/profile/edit"
								className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
							>
								Редактировать профиль
							</Link>
							<Link
								href="/profile/change-password"
								className="block w-full border border-gray-300 py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-colors"
							>
								Сменить пароль
							</Link>
						</div>
					</div>

					{/* Детали профиля */}
					<div className="md:col-span-2">
						<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
							<div className="border-b border-gray-200 px-6 py-4">
								<h3 className="text-lg font-medium">Основная информация</h3>
							</div>
							<div className="divide-y divide-gray-200">
								<div className="px-6 py-4">
									<p className="text-sm text-gray-500">Дата регистрации</p>
									<p className="mt-1">
										{new Date(user?.createdAt).toLocaleDateString('ru-RU')}
									</p>
								</div>
								<div className="px-6 py-4">
									<p className="text-sm text-gray-500">Роли</p>
									<div className="mt-1 flex flex-wrap gap-2">
										{user?.rights?.map((role, index) => (
											<span
												key={index}
												className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
											>
												{role}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Дополнительные секции */}
						<div className="mt-8">
							<h3 className="text-lg font-medium mb-4">Действия</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<Link
									href="/lk/profile/applications"
									className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
								>
									<h4 className="font-medium">Мои обращения</h4>
									<p className="text-sm text-gray-500 mt-1">
										Просмотр истории обращений
									</p>
								</Link>
								<Link
									href="/profile/settings"
									className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
								>
									<h4 className="font-medium">Настройки</h4>
									<p className="text-sm text-gray-500 mt-1">
										Управление настройками аккаунта
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
