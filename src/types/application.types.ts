export type ApplicationFormData = {
	userName: string
	phone: string
	email: string
	comment: string
}

export type Application = {
	id: string
	serviceSlug: string
	serviceName: string
	userName: string
	phone: string
	email: string
	comment?: string
	createdAt: Date
	userId?: string
}
