import { useState, useEffect } from 'react'
import { instance } from '@/api/axios'
import { Application } from '@/types/application.types'

export const useApplications = () => {
	const [applications, setApplications] = useState<Application[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	const fetchApplications = async () => {
		try {
			const { data } = await instance.get('/applications')
			setApplications(data)
		} catch (err) {
			setError('Ошибка загрузки заявок')
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const deleteApplication = async (id: string) => {
		try {
			await instance.delete(`/applications/${id}`)
			setApplications(prev => prev.filter(app => app.id !== id))
			return true
		} catch (err) {
			console.error('Ошибка удаления:', err)
			setError('Не удалось удалить заявку')
			return false
		}
	}

	useEffect(() => {
		fetchApplications()
	}, [])

	return {
		applications,
		loading,
		error,
		deleteApplication,
		refetch: fetchApplications
	}
}
