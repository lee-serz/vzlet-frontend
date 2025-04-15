import type { PropsWithChildren } from 'react'

import { Header } from '../header/Header'

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="container">
			<Header />
			<div className="bg-[#1d232a] p-4">{children}</div>
		</div>
	)
}
