'use client'

import { useLogout } from '@/hooks/useLogout'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useDropdown } from '@/hooks/useDropdown'

export function Header() {
	const { logout, isLoading } = useLogout()
	const { dropdownRef, chevronRef, closeDropdown } = useDropdown()

	const handleAction = (action?: () => void) => {
		action?.()
		closeDropdown()
	}

	return (
		<div className="navbar bg-base-100 shadow-sm px-4 mb-4">
			<div className="flex-1">
				<Link href={'/lk'} className="text-xl font-bold">
					TimeForGood
				</Link>
			</div>
			<Link href={'login'}>Войти</Link>
			{/* <details ref={dropdownRef} className="dropdown dropdown-end">
				<summary className="flex items-center gap-1 cursor-pointer list-none">
					<div className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img
								alt="User avatar"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
					<ChevronLeft
						ref={chevronRef}
						size={20}
						style={{ transition: 'transform 0.2s ease' }}
					/>
				</summary>

				<ul className="menu menu-sm dropdown-content mt-3 z-[1] -right-4 top-14 p-2 shadow bg-base-100 rounded-box w-52">
					<li>
						<Link
							href="/lk/profile"
							className="text-base"
							onClick={() => handleAction()}
						>
							Профиль
						</Link>
					</li>
					<li>
						<a className="text-base" onClick={() => handleAction()}>
							Настройки <span className="badge text-xs">скоро</span>
						</a>
					</li>
					<li>
						<button
							className="text-base"
							onClick={() => handleAction(logout)}
							disabled={isLoading}
						>
							{isLoading ? 'Выход...' : 'Выход'}
						</button>
					</li>
				</ul>
			</details> */}
		</div>
	)
}
