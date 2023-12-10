import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Atom as IconAtom, Braces as IconBraces, Bug as IconBug, Cable as IconCable, Database as IconDatabase, Loader2 as IconLoader2, Package as IconPackage, Play as IconPlay, Power as IconPower, TerminalSquare as IconTerminalSquare } from 'lucide-react'

import { Outlet } from '@tanstack/react-router'
import { Header } from './_components/Header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

function RootLayout() {
  return (
    <>
      <ScrollArea className="h-screen w-screen">
        <Header />
        <main className="container mt-[54px]">
          {/* Play */}
          <Button className="" variant="ghost">
            <IconPlay className="mr-2 h-4 w-4" />
            Start
          </Button>
          {/* Power */}
          <Button className="" variant="ghost">
            <IconPower className="mr-2 h-4 w-4" />
            Stop
          </Button>
          {/* Loader */}
          <Button className="" variant="ghost">
            <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
            Loader
          </Button>
          {/* Storage */}
          <Button className="" variant="ghost">
            <IconDatabase className="mr-2 h-4 w-4" />
            Storage
          </Button>
          {/* Config */}
          <Button className="" variant="ghost">
            <IconBraces className="mr-2 h-4 w-4" />
            Config
          </Button>
          {/* Plugins */}
          <Button className="" variant="ghost">
            <IconPackage className="mr-2 h-4 w-4" />
            Plugins
          </Button>
          {/* Graph */}
          <Button className="" variant="ghost">
            <IconAtom className="mr-2 h-4 w-4" />
            Graph
          </Button>
          {/* Log */}
          <Button className="" variant="ghost">
            <IconTerminalSquare className="mr-2 h-4 w-4" />
            Log
          </Button>
          {/* Audit */}
          <Button className="" variant="ghost">
            <IconBug className="mr-2 h-4 w-4" />
            Audit
          </Button>
          {/* Progess */}
          <Button className="" variant="ghost">
            <IconCable className="mr-2 h-4 w-4" />
            Progress
          </Button>
          <Outlet />
        </main>
      </ScrollArea>
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </>
  )
}

export default RootLayout
