import localFont from 'next/font/local'
import { Providers } from './Providers'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
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
			<body className={`${ttNorms.className} flex flex-col min-h-screen`}>
				<Providers>
					<Header />
					<main className="flex-grow">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
