'use client'

import { useState } from 'react'
import { instance } from '@/api/axios'
import { toast } from 'react-hot-toast'

export const SendEmailModal = ({
	application,
	isOpen,
	onClose
}: {
	application: { id: string; email: string; userName: string }
	isOpen: boolean
	onClose: () => void
}) => {
	const [subject, setSubject] = useState('Ответ на вашу заявку')
	const [message, setMessage] = useState(
		`Уважаемый(ая) ${application.userName},\n\nМы рассмотрели вашу заявку.\n\nС уважением,\nАдминистрация`
	)
	const [isSending, setIsSending] = useState(false)

	const handleSubmit = async () => {
		setIsSending(true)
		try {
			await instance.post(`/applications/${application.id}/send-email`, {
				subject,
				message
			})
			toast.success('Письмо успешно отправлено')
			onClose()
		} catch (err) {
			toast.error('Ошибка при отправке письма')
		} finally {
			setIsSending(false)
		}
	}

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
				<div className="p-6">
					<h3 className="text-xl font-bold mb-4">Отправить письмо клиенту</h3>

					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Кому:
							</label>
							<input
								type="text"
								value={application.email}
								readOnly
								className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Тема:
							</label>
							<input
								type="text"
								value={subject}
								onChange={e => setSubject(e.target.value)}
								className="w-full px-3 py-2 border border-gray-300 rounded-md"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Текст письма:
							</label>
							<textarea
								value={message}
								onChange={e => setMessage(e.target.value)}
								rows={10}
								className="w-full px-3 py-2 border border-gray-300 rounded-md"
							/>
						</div>
					</div>
				</div>

				<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					<button
						type="button"
						disabled={isSending}
						onClick={handleSubmit}
						className="w-full inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto disabled:opacity-50"
					>
						{isSending ? 'Отправка...' : 'Отправить'}
					</button>
					<button
						type="button"
						onClick={onClose}
						className="mt-3 w-full inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
					>
						Отмена
					</button>
				</div>
			</div>
		</div>
	)
}
