import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import DashboardClient from './DashboardClient'

export const metadata = {
  title: 'Dashboard - GrepLabs',
  description: 'Your GrepLabs dashboard'
}

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return <DashboardClient user={session.user} />
}
