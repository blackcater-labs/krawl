export type Awaitable<T> = T | PromiseLike<T>
export type Optional<T> = T | undefined
export type Nullable<T> = T | null | undefined

export interface EngineOptions {
  /**
   * The root directory of the project.
   *
   * @default process.cwd()
   */
  root?: string

  /**
   * Setting proxy for special url.
   */
  proxy?: ProxyOptions
}

export type ProxyUrl = string
export interface ProxyObject {
  protocol: 'http' | 'https' | 'socks' | 'socks4' | 'socks5'
  host: string
  port: number
  username?: string
  password?: string
}
export type Proxy = ProxyUrl | ProxyObject
export type ProxyGetter = (url: string) => Awaitable<Nullable<Proxy>>
export type ProxyOptions = Proxy | Proxy[] | Record<string, Proxy> | ProxyGetter
