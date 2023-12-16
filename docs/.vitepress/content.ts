export interface Example {
  name: string
  path: string
  url: string
  icon?: string
  icons?: string[]
}

export const examples: Example[] = [
  {
    name: 'Hello World',
    path: 'examples/hello_world',
    url: '/examples/hello_world',
    icon: 'i-mdi:language-typescript dark:invert',
  },
]

export const pluginExamples: Example[] = [
  {
    name: 'Hello World',
    path: 'examples/plugin-hello_world',
    url: '/examples/plugin-hello_world',
    icon: 'i-mdi:language-typescript dark:invert',
  },
]
