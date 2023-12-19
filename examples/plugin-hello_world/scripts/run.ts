import { Engine } from '@krawl/core'
import UI from '@krawl/ui'
import HelloWorld from '../src/index'

const engine = new Engine({
  plugins: [
    UI(),
    HelloWorld(),
  ],
})

await engine.start()
