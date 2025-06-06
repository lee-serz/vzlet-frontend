'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
	const router = useRouter()

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/')
		}, 10000) // Автоперенаправление через 10 сек

		return () => clearTimeout(timer)
	}, [router])

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
			<div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
				<div className="text-green-500 mb-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-16 w-16 mx-auto"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>

				<h1 className="text-2xl font-bold mb-4">Спасибо за вашу заявку!</h1>
				<p className="mb-6">
					Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
					>
						На главную
					</Link>
					<Link
						href="/services"
						className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
					>
						Другие услуги
					</Link>
				</div>

				<p className="text-sm text-gray-500 mt-6">
					Вы будете перенаправлены автоматически через 10 секунд...
				</p>
			</div>
		</div>
	)
}
