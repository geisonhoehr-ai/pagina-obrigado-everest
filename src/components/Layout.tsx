import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Outlet />
    </main>
  )
}
