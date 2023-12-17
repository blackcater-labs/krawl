import type { Awaitable, Nullable } from './utils'

export interface ProxyPool {
  get(url: string): Awaitable<Nullable<Proxy>>
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
