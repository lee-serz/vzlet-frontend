'use client'

import { useEffect } from 'react'

export default function Modal({
	isOpen,
	onClose,
	children
}: {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}) {
	// Закрытие по ESC
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'auto'
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 overflow-y-auto">
			{/* Затемнение фона */}
			<div
				className="fixed inset-0 bg-black/50 transition-opacity"
				onClick={onClose}
			/>

			{/* Контент модалки */}
			<div className="flex min-h-full items-center justify-center p-4">
				<div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
					{/* Кнопка закрытия */}
					<button
						type="button"
						onClick={onClose}
						className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Закрыть</span>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					{/* Дочерний контент (форма) */}
					<div className="p-6">{children}</div>
				</div>
			</div>
		</div>
	)
}
