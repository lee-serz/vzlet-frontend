'use client'

export const ConfirmModal = ({
	isOpen,
	onClose,
	onConfirm,
	title = 'Подтвердите действие',
	message = 'Вы уверены, что хотите выполнить это действие?'
}: {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	title?: string
	message?: string
}) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 overflow-y-auto">
			{/* Основной фон */}
			<div className="fixed inset-0 bg-black/50 bg-opacity-50 transition-opacity" />

			{/* Контейнер модалки */}
			<div className="flex min-h-full items-center justify-center p-4 text-center">
				{/* Содержимое модалки */}
				<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
					<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							{title}
						</h3>
						<div className="mt-2">
							<p className="text-sm text-gray-500">{message}</p>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<button
							type="button"
							className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
							onClick={() => {
								onConfirm()
								onClose()
							}}
						>
							Удалить
						</button>
						<button
							type="button"
							className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
							onClick={onClose}
						>
							Отмена
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
