import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/extension'],
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
