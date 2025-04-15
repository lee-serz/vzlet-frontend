'use client'

import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { useState } from 'react'

export function Contacts() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Обработка отправки формы
		console.log('Форма отправлена:', formData)
		alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
		setFormData({ name: '', email: '', message: '' })
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return (
		<div className=" py-12">
			<h2 className="text-3xl font-bold text-center mb-12">Наши контакты</h2>

			<div className="grid grid-cols-1 gap-8">
				{/* Контактная информация */}
				<div className="space-y-6">
					<div className="flex">
						<div className="card bg-base-200 shadow-lg w-1/2">
							<div className="card-body">
								<h3 className="card-title text-xl flex items-center gap-2">
									<MapPinIcon className="h-6 w-6 text-primary" />
									Наши офисы
								</h3>

								<div className="space-y-4 mt-4">
									<div>
										<h4 className="font-semibold">Головной офис (Москва)</h4>
										<p className="text-gray-600">
											ул. Тверская, д. 10, офис 305
										</p>
										<p className="text-gray-600">БЦ "Тверской Плаза"</p>
									</div>

									<div>
										<h4 className="font-semibold">Филиал (Санкт-Петербург)</h4>
										<p className="text-gray-600">
											Невский пр-т, д. 45, офис 210
										</p>
										<p className="text-gray-600">БЦ "Невский Палас"</p>
									</div>
								</div>
							</div>
						</div>

						<div className="card bg-base-200 shadow-lg w-1/2">
							<div className="card-body">
								<h3 className="card-title text-xl flex items-center gap-2">
									<ClockIcon className="h-6 w-6 text-primary" />
									Режим работы
								</h3>
								<p className="mt-2 text-gray-600">Пн-Пт: 9:00 - 18:00</p>
								<p className="text-gray-600">Сб-Вс: выходной</p>
							</div>
						</div>
					</div>

					<div className="flex">
						<div className="card bg-base-200 shadow-lg w-1/2">
							<div className="card-body">
								<h3 className="card-title text-xl flex items-center gap-2">
									<PhoneIcon className="h-6 w-6 text-primary" />
									Телефоны
								</h3>
								<div className="mt-2 space-y-2">
									<p className="text-gray-600">
										Москва:{' '}
										<a href="tel:+74951234567" className="link link-primary">
											+7 (495) 123-45-67
										</a>
									</p>
									<p className="text-gray-600">
										СПб:{' '}
										<a href="tel:+78121234567" className="link link-primary">
											+7 (812) 123-45-67
										</a>
									</p>
									<p className="text-gray-600">
										Бесплатный:{' '}
										<a href="tel:88001234567" className="link link-primary">
											8 (800) 123-45-67
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className="card bg-base-200 shadow-lg w-1/2">
							<div className="card-body">
								<h3 className="card-title text-xl flex items-center gap-2">
									<MailIcon className="h-6 w-6 text-primary" />
									Электронная почта
								</h3>
								<div className="mt-2 space-y-2">
									<p className="text-gray-600">
										Общие вопросы:{' '}
										<a
											href="mailto:info@company.com"
											className="link link-primary"
										>
											info@company.com
										</a>
									</p>
									<p className="text-gray-600">
										Поддержка:{' '}
										<a
											href="mailto:support@company.com"
											className="link link-primary"
										>
											support@company.com
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Форма обратной связи и карта */}
					<div className="space-y-6 flex">
						<div className="card bg-base-200 shadow-lg w-1/2">
							<div className="card-body">
								<h3 className="card-title text-xl mb-4">
									Форма обратной связи
								</h3>

								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="form-control">
										<label className="label">
											<span className="label-text">Ваше имя</span>
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="Иван Иванов"
											className="input input-bordered w-full"
											required
										/>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="label-text">Email</span>
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="ivan@example.com"
											className="input input-bordered w-full"
											required
										/>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="label-text">Сообщение</span>
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="textarea textarea-bordered h-32"
											placeholder="Ваше сообщение..."
											required
										></textarea>
									</div>

									<div className="form-control mt-6">
										<button type="submit" className="btn btn-primary">
											Отправить сообщение
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="card bg-base-200 shadow-lg w-1/2 h-[300px]">
							<div className="card-body">
								<h3 className="card-title text-xl">Карта проезда</h3>
								<div className=" bg-gray-200 rounded-lg overflow-hidden">
									<iframe
										className="h-full"
										src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0c45b9626c3996f0269d6fcf934a2a1c76cff2359e5e765aa46bc6a3db31e4f&amp;source=constructor"
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
