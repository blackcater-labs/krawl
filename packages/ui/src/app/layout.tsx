import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ThemeToggle } from '@/components/ThemeToggle'

function RootLayout() {
  return (
    <>
      <ScrollArea className="h-screen w-screen">
        <main>
          <h1 className="m-4 text-primary">hello world</h1>
          <ThemeToggle />
          <Outlet />
        </main>
      </ScrollArea>
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </>
  )
}

export default RootLayout
