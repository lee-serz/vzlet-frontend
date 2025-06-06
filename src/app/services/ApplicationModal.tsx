'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ApplicationForm from './ApplicationForm'
import { instance } from '@/api/axios'
import { useProfile } from '@/hooks/useProfile'
import { useAuth } from '@/hooks/useAuth'
import { isatty } from 'tty'
import Link from 'next/link'

export default function ApplicationModal({
	serviceSlug
}: {
	serviceSlug: string
}) {
	const router = useRouter()
	const { isAuth } = useAuth()
	const [isOpen, setIsOpen] = useState(false)
	const [serviceData, setServiceData] = useState<{
		title: string
	} | null>(null)

	const handleOpen = async () => {
		setIsOpen(true)
		try {
			const { data } = await instance.get(`/services/${serviceSlug}`)
			setServiceData(data)
		} catch (err) {
			console.error('Failed to load service:', err)
		}
	}

	const handleSuccess = () => {
		router.push('/thanks')
	}

	return (
		<>
			<button
				onClick={handleOpen}
				className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
			>
				Оставить заявку
			</button>

			{isOpen &&
				(isAuth ? (
					<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
						<div className="bg-white rounded-lg max-w-md w-full p-6 relative">
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
							>
								✕
							</button>

							<h3 className="text-xl font-bold mb-4">
								Заявка на услугу: {serviceData?.title || 'Загрузка...'}
							</h3>

							<ApplicationForm
								serviceSlug={serviceSlug}
								serviceName={serviceData?.title || ''}
							/>
						</div>
					</div>
				) : (
					<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
						<div className="bg-white rounded-lg max-w-md w-full p-6 relative">
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
							>
								✕
							</button>

							<h3 className="text-xl font-bold mb-4">
								Необходимо авторизоваться
							</h3>
							<Link
								href={'/login'}
								className="block text-center w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
							>
								Вход
							</Link>
						</div>
					</div>
				))}
		</>
	)
}
