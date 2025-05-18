import localFont from 'next/font/local'
import { Providers } from './Providers'
import './globals.css'
const ttNorms = localFont({
	src: [
		{
			path: '../../public/assets/fonts/TTNorms/TTNorms-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/assets/fonts/TTNorms/TTNorms-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/assets/fonts/TTNorms/TTNorms-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../../public/assets/fonts/TTNorms/TTNorms-ExtraBold.woff2',
			weight: '800',
			style: 'normal'
		}
	],
	variable: '--font-tt-norms'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${ttNorms.variable}`}>
			<body className={ttNorms.className}>
				<Providers>
					<main className="flex h-full flex-col justify-between">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	)
}
