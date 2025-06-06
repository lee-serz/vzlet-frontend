import { useState } from 'react'
import { instance } from '@/api/axios'

export const useApplicationModal = (serviceSlug: string) => {
	const [isOpen, setIsOpen] = useState(false)
	const [success, setSuccess] = useState(false)
	const [serviceData, setServiceData] = useState<{ title: string } | null>(null)

	const handleOpen = async () => {
		setIsOpen(true)
		try {
			const { data } = await instance.get(`/services/${serviceSlug}`)
			setServiceData(data)
		} catch (e) {
			console.error('Failed to load service data', e)
		}
	}

	const handleClose = () => {
		setIsOpen(false)
		setSuccess(false)
	}

	const handleSuccess = () => {
		setSuccess(true)
		setTimeout(handleClose, 2000)
	}

	return {
		isOpen,
		success,
		serviceData,
		handleOpen,
		handleClose,
		handleSuccess
	}
}
