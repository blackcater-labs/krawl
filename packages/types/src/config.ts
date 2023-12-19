import type { Plugin } from './plugin'

export interface UserConfig {
  /**
   * The root directory of the project.
   *
   * @default process.cwd()
   */
  root?: string

  /**
   * Plugins to be applied to the project.
   */
  plugins?: Plugin[]
}

export interface ResolvedConfig {}
