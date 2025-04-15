import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { useRouter } from 'next/navigation'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	const router = useRouter()

	return (
		<div className="text-center mt-3">
			{isLogin ? (
				<div className="flex flex-col items-center text-xs font-normal">
					Нет аккаунта?
					<button
						type="button"
						className="btn btn-link h-[15px] text-xs font-normal"
						onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
					>
						Зарегистрироваться
					</button>
				</div>
			) : (
				<div className="flex flex-col items-center text-xs font-normal ">
					Уже есть аккаунт?
					<button
						type="button"
						className="btn btn-link h-[15px] text-xs font-normal"
						onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
					>
						Войти
					</button>
				</div>
			)}
		</div>
	)
}
