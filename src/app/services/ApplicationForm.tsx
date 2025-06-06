'use client'

import { useApplicationForm } from './useApplicationForm'
import { useProfile } from '@/hooks/useProfile'

export default function ApplicationForm({
	serviceSlug,
	serviceName
}: {
	serviceSlug: string
	serviceName: string
}) {
	const { user } = useProfile()
	const { formData, isLoading, error, handleChange, handleSubmit } =
		useApplicationForm(serviceSlug, serviceName)

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Ваше имя *
				</label>
				<input
					type="text"
					name="userName"
					value={formData.userName || user?.name || ''}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Телефон *
				</label>
				<input
					type="tel"
					name="phone"
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md"
					placeholder="+7 (XXX) XXX-XX-XX"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Email *
				</label>
				<input
					type="email"
					name="email"
					value={formData.email || user?.email || ''}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Комментарий
				</label>
				<textarea
					name="comment"
					value={formData.comment}
					onChange={handleChange}
					rows={3}
					className="w-full px-3 py-2 border border-gray-300 rounded-md"
				/>
			</div>

			{error && <div className="text-red-500 text-sm py-2">{error}</div>}

			<button
				type="submit"
				disabled={isLoading}
				className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
			>
				{isLoading ? (
					<span className="flex items-center justify-center">
						<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
							{/* Спиннер */}
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
							></path>
						</svg>
						Отправка...
					</span>
				) : (
					'Отправить заявку'
				)}
			</button>
		</form>
	)
}
