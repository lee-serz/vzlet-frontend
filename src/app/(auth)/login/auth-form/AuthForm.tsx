'use client'

import { Fingerprint, KeyRound, Mail } from 'lucide-react'
import { AuthToggle } from './AuthToggle'
import { useAuthForm } from './useAuthForm'
import { ErrorMessage } from '@/errors/errorMessage'
import Image from 'next/image'

interface AuthFormProps {
	isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
	const { handleSubmit, isLoading, onSubmit, register, formState } =
		useAuthForm(isLogin)

	const passwordError = formState.errors['password']?.message
	const emailError = formState.errors['email']?.message

	return (
		<div className="bg-white">
			{/* Форма */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
				<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
					<div className="text-center mb-8">
						<div className="flex justify-center mb-4">
							<Fingerprint />
						</div>
						<h2 className="text-2xl font-bold text-gray-800">
							{isLoading
								? 'Загрузка...'
								: isLogin
								? 'С возвращением!'
								: 'Создание аккаунта'}
						</h2>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Электронная почта
							</label>
							<div className="relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Mail size={20} className="text-gray-400" />
								</div>
								<input
									type="email"
									placeholder="your@email.com"
									{...register('email', {
										required: 'Обязательно для заполнения',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Неверный формат почты'
										}
									})}
									className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<ErrorMessage message={emailError} />
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Пароль
							</label>
							<div className="relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<KeyRound size={20} className="text-gray-400" />
								</div>
								<input
									type="password"
									placeholder="••••••••"
									{...register('password', {
										required: 'Обязательно для заполнения',
										minLength: {
											value: 6,
											message: 'Пароль не менее 6 символов'
										}
									})}
									className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<ErrorMessage message={passwordError} />
						</div>

						<div>
							<button
								type="submit"
								disabled={isLoading}
								className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
									isLoading ? 'opacity-70 cursor-not-allowed' : ''
								}`}
							>
								{isLoading
									? 'Обработка...'
									: isLogin
									? 'Войти'
									: 'Зарегистрироваться'}
							</button>
						</div>

						<div className="text-center">
							<AuthToggle isLogin={isLogin} />
						</div>
					</form>
				</div>
			</section>

			{/* CTA секция */}
			<section className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-gray-50 mb-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">Нужна помощь?</h2>
					<p className="text-lg mb-8 max-w-2xl mx-auto">
						Свяжитесь с нашей службой поддержки, если у вас возникли вопросы
					</p>
					<button className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
						Связаться с поддержкой
					</button>
				</div>
			</section>
		</div>
	)
}
