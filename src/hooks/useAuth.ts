// hooks/useAuth.ts
'use client'

import { useProfile } from './useProfile'
import { getAccessToken } from '@/services/auth/auth.helper'

export function useAuth() {
	const { user, isLoading, isProfileQuerySuccess } = useProfile()
	const accessToken = getAccessToken()

	return {
		user,
		isLoading,
		isAuth: !!accessToken && isProfileQuerySuccess && !!user
	}
}
