import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['node/index'],
  outDir: 'dist/',
  clean: false,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
