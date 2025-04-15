import MainLayout from '@/components/main-layout/MainLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
	return <MainLayout>{children}</MainLayout>
}
