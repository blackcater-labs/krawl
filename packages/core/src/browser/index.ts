import type { PuppeteerNode } from 'puppeteer'
import type { PuppeteerExtra } from 'puppeteer-extra'
import type { BrowserConfig } from './types'

const DEFAULT_ARGS = [
  '--enable-features=NetworkService,NetworkServiceInProcess',
  //   '--disable-background-networking',
  //   '--disable-background-timer-throttling',
  '--disable-client-side-phishing-detection',
  '--disable-default-apps',
  //   '--disable-extensions',
  '--disable-hang-monitor',
  '--disable-prompt-on-repost',
  '--disable-breakpad',
  '--disable-sync',
  '--disable-domain-reliability',
  '--disable-renderer-backgrounding',
  '--disable-infobars',
  '--disable-translate',
  '--disable-features=site-per-process,TranslateUI',
  '--metrics-recording-only',
  '--no-first-run',
  '--safebrowsing-disable-auto-update',
  '--mute-audio',
  '--autoplay-policy=no-user-gesture-required',
  '--disable-ipc-flooding-protection',
  '--disable-backgrounding-occluded-windows',
//   '--window-size=1920,1080',
]

function uniqArgs(args: string[]): string[] {
  const map = new Map<string, string>()
  for (const arg of args) {
    const [key, value] = arg.split('=')
    map.set(key, value)
  }

  return [...map.entries()].map(([key, value]) => value ? `${key}=${value}` : key)
}

export async function createBrowser(config: BrowserConfig) {
  let puppeteer: PuppeteerNode | PuppeteerExtra
  if (config.enableAdblock || config.enableStealth) {
    puppeteer = (await import('puppeteer-extra')).default
    if (config.enableAdblock) {
      const AdblockerPlugin = (await import('puppeteer-extra-plugin-adblocker')).default
      puppeteer.use(AdblockerPlugin({ interceptResolutionPriority: 0 }))
    }
    if (config.enableStealth) {
      const StealthPlugin = (await import('puppeteer-extra-plugin-stealth')).default
      puppeteer.use(StealthPlugin())
    }
  }
  else {
    puppeteer = (await import('puppeteer')).default
  }

  const args = uniqArgs([
    ...(config.defaultArgs ?? DEFAULT_ARGS),
    `--window-size=${config.defaultWindowSize[0]},${config.defaultWindowSize[1]}`,
    ...config.args,
  ])

  return puppeteer.launch({
    headless: config.headless ? 'new' : false,
    executablePath: config.executablePath,
    args,
    defaultViewport: { width: config.defaultWindowSize[0], height: config.defaultWindowSize[1] },
    userDataDir: config.userDataDir,
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: !!config.defaultArgs,
  })
}
