import { Moon as IconMoon, Sun as IconSun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()

  if (!resolvedTheme)
    return null

  if (resolvedTheme === 'dark') {
    return (
      <Button className={className} variant="ghost" size="icon" onClick={() => setTheme('light')}>
        <IconSun />
      </Button>
    )
  }

  else {
    return (
      <Button className={className} variant="ghost" size="icon" onClick={() => setTheme('dark')}>
        <IconMoon />
      </Button>
    )
  }
}
