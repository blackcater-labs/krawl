# Why Krawl?

## Motivations

A few months ago I bought a NAS device. Then I started to keep resources on it.

You can find many tools to manage your resources, for example movie、photo、music and so on. If you want to get beautiful UI, you should attach metadata to your resources.

Most powerful tools can crawl metadata automatically. If you want to crawl metadata from a new site, you should wait for the author to add this new feature. In most cases, this will never happen.

Then crawling metadata from a site is boring and repetitive. Most frameworks on the Internet are a bit "low level". You should pay more attention to the details of crawling, such as how to handle the exception, how to retry, how to save and clean up the result and so on.

Krawl is a high-level framework. You can focus on the logic of crawling, and Krawl will help you with the details. We also provide a lot of useful tools to give you a better experience.

## How is Krawl different from X?

## Crawlee

Crawlee is a powerful framework, it support both headless browser mode and http-based mode, so you can use it to crawl any website.

Crawlee also provide a lot of useful tools to help you to crawl. But you should try to deal with result and tidy them by yourself.

Krawl is inspired by Crawlee. Krawl <strong>only support headless browser mode</strong> for universal development experience. But we provide a lot of useful tools to bring to you a better use and develop experiences. You can pay more attention to the logic of crawling, and Krawl will help you to deal with others.

### Scrapy

Scrapy is developed by Python. It's a http-based framework. So it's not easy to crawl a CSR website. And it's a little of "low level" also.
