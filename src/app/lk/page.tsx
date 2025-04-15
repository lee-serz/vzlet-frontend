import { protectPage } from '@/utils/server/protect-page'

async function DashboardPage() {
	await protectPage()
	return <h1>Главная (нужна авторизация здесь и на последующих роутах)</h1>
}

export default DashboardPage
