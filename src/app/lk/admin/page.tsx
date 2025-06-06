'use client'

import { useState } from 'react'
import { useApplications } from '@/hooks/useApplications'
import { SendEmailModal } from '@/components/SendEmailModal'
import { Toaster, toast } from 'react-hot-toast'
import Link from 'next/link'

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState('applications')
	const [emailModalOpen, setEmailModalOpen] = useState(false)
	const [selectedApplication, setSelectedApplication] = useState<{
		id: string
		email: string
		userName: string
	} | null>(null)

	const { applications, loading, error, deleteApplication, refetch } =
		useApplications()

	const tabs = [
		{ id: 'applications', label: 'Заявки' },
		{ id: 'users', label: 'Пользователи' },
		{ id: 'services', label: 'Услуги' },
		{ id: 'settings', label: 'Настройки' }
	]

	const handleDelete = async (id: string) => {
		if (confirm('Удалить заявку?')) {
			const success = await deleteApplication(id)
			if (success) {
				toast.success('Заявка удалена')
			}
		}
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
					<h1 className="text-xl font-bold text-gray-900">
						Административная панель
					</h1>
					<nav className="flex space-x-4">
						<Link
							href="/"
							className="text-blue-600 hover:text-blue-800 text-sm font-medium"
						>
							← Вернуться на сайт
						</Link>
						<button
							className="text-gray-600 hover:text-gray-900 text-sm font-medium"
							onClick={() => toast('Функция выхода в разработке')}
						>
							Выйти
						</button>
					</nav>
				</div>
			</header>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="border-b border-gray-200 mb-6">
					<nav className="-mb-px flex space-x-8">
						{tabs.map(tab => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
									activeTab === tab.id
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								{tab.label}
							</button>
						))}
					</nav>
				</div>

				<div className="bg-white shadow rounded-lg overflow-hidden">
					{activeTab === 'applications' && (
						<div className="p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-lg font-medium text-gray-900">
									Список заявок
								</h2>
								<button
									onClick={() => refetch()}
									className="text-sm text-blue-600 hover:text-blue-800"
								>
									Обновить список
								</button>
							</div>

							{loading ? (
								<div className="flex justify-center py-8">
									<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
								</div>
							) : error ? (
								<div className="text-red-500 py-4 text-center">{error}</div>
							) : applications.length === 0 ? (
								<div className="text-gray-500 py-8 text-center">Нет заявок</div>
							) : (
								<div className="overflow-x-auto">
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-gray-50">
											<tr>
												<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													ID
												</th>
												<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Услуга
												</th>
												<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Клиент
												</th>
												<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Телефон
												</th>
												<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Дата
												</th>
												<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Действия
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{applications.map(app => (
												<tr key={app.id} className="hover:bg-gray-50">
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
														{app.id.slice(0, 6)}...{app.id.slice(-4)}
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<Link
															href={`/services/${app.serviceSlug}`}
															className="text-blue-600 hover:underline text-sm"
														>
															{app.serviceName}
														</Link>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">
															{app.userName}
														</div>
														<div className="text-sm text-gray-500">
															{app.email}
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{app.phone}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{new Date(app.createdAt).toLocaleDateString(
															'ru-RU',
															{
																day: '2-digit',
																month: '2-digit',
																year: 'numeric',
																hour: '2-digit',
																minute: '2-digit'
															}
														)}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
														<button
															onClick={() => {
																setSelectedApplication({
																	id: app.id,
																	email: app.email,
																	userName: app.userName
																})
																setEmailModalOpen(true)
															}}
															className="text-blue-600 hover:text-blue-900"
														>
															Письмо
														</button>
														<button
															onClick={() => handleDelete(app.id)}
															className="text-red-600 hover:text-red-900"
														>
															Удалить
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					)}

					{/* Остальные вкладки... */}
				</div>
			</div>

			{selectedApplication && (
				<SendEmailModal
					application={selectedApplication}
					isOpen={emailModalOpen}
					onClose={() => {
						setEmailModalOpen(false)
						setSelectedApplication(null)
					}}
				/>
			)}
		</div>
	)
}

export default AdminPage
