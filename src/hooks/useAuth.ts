'use client'

import { useProfile } from './useProfile'

export function useAuth() {
	const { user, isLoading } = useProfile()
	console.log(user)

	return {
		user,
		isLoading,
		isAuth: !!user
	}
}
