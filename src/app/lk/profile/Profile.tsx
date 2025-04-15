import { useProfile } from '@/hooks/useProfile'
import { useEffect } from 'react'

export default function Profile() {
	const { user, isLoading, isError, fetchProfile } = useProfile()

	useEffect(() => {
		fetchProfile()
	}, [fetchProfile])

	if (isLoading)
		return <span className="loading loading-spinner loading-xl"></span>
	if (isError) return <div>Ошибка: {isError} </div>

	return (
		<div className="">
			<p>id: {user?.id}</p>
			<p>name: {user?.name}</p>
			<p>email: {user?.email}</p>
			<p>avatarPath: {user?.avatarPath}</p>
			<p>rights: {user?.rights}</p>
			<p>token: {user?.token}</p>
		</div>
	)
}
