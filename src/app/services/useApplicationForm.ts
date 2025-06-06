'use client'

import { useRouter } from 'next/navigation'
import { instance } from '@/api/axios'
import { useState } from 'react'
import { useProfile } from '@/hooks/useProfile'

export const useApplicationForm = (
	serviceSlug: string,
	serviceName: string
) => {
	const router = useRouter()
	const { user } = useProfile()
	const [formData, setFormData] = useState({
		userName: '',
		phone: '',
		email: '',
		comment: ''
	})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		setError('')

		try {
			const payload = {
				serviceSlug,
				serviceName,
				...formData,
				userId: user?.id || null
			}

			console.log('Submitting application:', payload)

			const { data } = await instance.post('/applications', payload)
			router.push('/lk/thanks')
			return data
		} catch (err: any) {
			console.error('Submission error:', err)
			setError(err.response?.data?.message || 'Ошибка при отправке заявки')
			throw err
		} finally {
			setIsLoading(false)
		}
	}

	return {
		formData,
		isLoading,
		error,
		handleChange,
		handleSubmit
	}
}
