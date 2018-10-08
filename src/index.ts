import * as puppeteer from 'puppeteer';
import { Observable, Subscription, timer } from 'rxjs';

const link = 'http://bit.ly/2N9xokm';

async function addPageview() {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto(link);
  console.log(`Navigated to ${link}`);
  await browser.close();
}

const intervol = 15000;
const intervolTimer: Observable<number> = timer(0, intervol);
const intervolTimerSubscription: Subscription = intervolTimer.subscribe(addPageview);
