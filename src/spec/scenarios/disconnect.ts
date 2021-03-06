import { clickOn } from '../util'
import { Browser } from 'webdriverio'

export async function disconnect(browser: Browser<void>) {
  const disconnectButton = await browser.$('//button/span[contains(text(),"Disconnect")]')
  await clickOn(disconnectButton, browser)
}
