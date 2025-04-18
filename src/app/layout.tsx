import { Fira_Mono } from 'next/font/google'

import './globals.css'
import { Providers } from './Providers'

const inter = Fira_Mono({ subsets: ['cyrillic', 'latin'], weight: '400' })

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<main className="flex h-full flex-col justify-between">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	)
}
