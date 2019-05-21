/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "27c38d67d7ce84f6132d131cd65af18a"
  },
  {
    "url": "article/index.html",
    "revision": "04b995741b3c178fdfa737ddf564df76"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "6379c54d24dd95aa8a4f6221b9e01fed"
  },
  {
    "url": "assets/css/0.styles.2ecc2b19.css",
    "revision": "bee379b63e34231287eab5c581e571b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1497b8bf.js",
    "revision": "23493b58eb9dd7d261ff6bae6d411153"
  },
  {
    "url": "assets/js/11.1d53aa86.js",
    "revision": "98a330c8052b67305da817407e20f5cf"
  },
  {
    "url": "assets/js/12.77d937af.js",
    "revision": "11fc45ce91d391803a494bcc3cf0c509"
  },
  {
    "url": "assets/js/13.54d74974.js",
    "revision": "808af801851ef1984210128ccb7d36e8"
  },
  {
    "url": "assets/js/14.dc6b4b24.js",
    "revision": "02985284eda1a13c33343b15657b2aad"
  },
  {
    "url": "assets/js/15.90089c64.js",
    "revision": "d6c1615cd03353fab1d34bace1398b1d"
  },
  {
    "url": "assets/js/16.fba9a633.js",
    "revision": "fcb33d3f65cce9bce446ee4b63d1e9bb"
  },
  {
    "url": "assets/js/17.21b0257b.js",
    "revision": "520909eccee57cb54b21a55afc8cd055"
  },
  {
    "url": "assets/js/18.50b857b6.js",
    "revision": "bf4804af91ecc8a88e2b925c7683ad49"
  },
  {
    "url": "assets/js/19.a19b1940.js",
    "revision": "9a67391850e2e86b937314491b5ed72c"
  },
  {
    "url": "assets/js/2.42199207.js",
    "revision": "9cbed04c6f056f9aabffb3ddfb94afc8"
  },
  {
    "url": "assets/js/20.20078e98.js",
    "revision": "5c7d1ab054ac1a707dcc39700a5a6047"
  },
  {
    "url": "assets/js/21.4684f1d6.js",
    "revision": "bfebf7dd2bc94671a0c8c2b4698f0724"
  },
  {
    "url": "assets/js/3.5a6165ea.js",
    "revision": "07198e9038284173d008961e7b1d5bc1"
  },
  {
    "url": "assets/js/4.1b754445.js",
    "revision": "11a28f90747ac8f5973787b8793c4d04"
  },
  {
    "url": "assets/js/5.ceeda096.js",
    "revision": "66ed86d7ecf907732d64b2346717ef21"
  },
  {
    "url": "assets/js/6.8455c128.js",
    "revision": "17e5d0cd9c80fc82d0581f1d5d566e95"
  },
  {
    "url": "assets/js/7.c46b7c96.js",
    "revision": "37749d7c24e965a533981c7275b0f37d"
  },
  {
    "url": "assets/js/8.d87168bb.js",
    "revision": "3e5bb819ab9babb2fc264866c144e7d7"
  },
  {
    "url": "assets/js/9.9e6af7c1.js",
    "revision": "30934c19dd8858aec65dc07754dc0b1b"
  },
  {
    "url": "assets/js/app.97eb3a70.js",
    "revision": "0d6812767c68c24ed334998e19b43ead"
  },
  {
    "url": "en/article/index.html",
    "revision": "f69f14e3f060162e9bfc49f06ffac062"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "56bdc574315d6d0e25cb2015a36b8dd8"
  },
  {
    "url": "en/index.html",
    "revision": "c4a311b7e5dbf531a9576fb9109f8c52"
  },
  {
    "url": "en/interest.html",
    "revision": "504683dbcfe22567e06ee79198c359c6"
  },
  {
    "url": "en/portfolio.html",
    "revision": "5cce6da877cdafa7b00297589de6c355"
  },
  {
    "url": "img/language.png",
    "revision": "b6c11fdca1fbabf4a2cfb1e40df5307b"
  },
  {
    "url": "img/language.svg",
    "revision": "c7d26e0c360381a13babe881aff89c63"
  },
  {
    "url": "index.html",
    "revision": "71a5f000eb1647e3cc27d73764b6b572"
  },
  {
    "url": "interest.html",
    "revision": "f3c2ae0a8558ac4925a106c1a5a4b324"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "672b172721920a8ba90b19219416c5a3"
  },
  {
    "url": "portfolio.html",
    "revision": "a85fd3a73bc180669275634072b52f81"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
