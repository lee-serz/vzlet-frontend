'use client'

import { KeyRound, Mail } from 'lucide-react'
import { AuthToggle } from './AuthToggle'
import { useAuthForm } from './useAuthForm'
import { ErrorMessage } from '@/errors/errorMessage'

interface AuthFormProps {
	isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
	const { handleSubmit, isLoading, onSubmit, register, formState } =
		useAuthForm(isLogin)

	const passwordError = formState.errors['password']?.message
	const emailError = formState.errors['email']?.message

	return (
		<div className="min-h-screen flex flex-col justify-center items-center p-4">
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 py-12 rounded-box">
					<legend className="fieldset-legend text-2xl">
						{isLoading ? 'Загрузка...' : isLogin ? 'Вход' : 'Регистрация'}
					</legend>
					<label className="input">
						<Mail size={20} strokeWidth={1} />
						<input
							type="email"
							placeholder="Почта"
							{...register('email', {
								required: 'Обязательно для заполнения',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Неверный формат почты'
								}
							})}
							className="grow"
						/>
					</label>
					<ErrorMessage message={emailError} />

					<label className="input">
						<KeyRound size={20} strokeWidth={1} />
						<input
							type="password"
							placeholder="Пароль"
							{...register('password', {
								required: 'Обязательно для заполнения',
								minLength: {
									value: 6,
									message: 'Пароль не менее 6 символов'
								}
							})}
							className="grow"
						/>
					</label>
					<ErrorMessage message={passwordError} />

					<button
						type="submit"
						className="btn btn-soft btn-primary"
						disabled={isLoading}
					>
						{isLoading
							? 'Загрузка...'
							: isLogin
							? 'Войти'
							: 'Зарегистрироваться'}
					</button>

					<AuthToggle isLogin={isLogin} />
				</fieldset>
			</form>
		</div>
	)
}
