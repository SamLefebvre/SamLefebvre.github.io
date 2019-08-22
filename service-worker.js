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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa4c9bfcc39e788f4c5654c10747ab02"
  },
  {
    "url": "article/index.html",
    "revision": "41685f8ad9cb4068f349dc8906814c7f"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "e018b55f7d3884c95e25c25d7b29bf5e"
  },
  {
    "url": "assets/css/0.styles.5717340a.css",
    "revision": "2ac126aa9fec972558aae300ed6884de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e940510c.js",
    "revision": "4dd50dcfbbbf7f09bde4e02198293f30"
  },
  {
    "url": "assets/js/11.f7c96c52.js",
    "revision": "00981ff50cd626f490bbddc3a494eaad"
  },
  {
    "url": "assets/js/12.2f9d6473.js",
    "revision": "b5ae3c33fb84d3587bb806a29dec9c90"
  },
  {
    "url": "assets/js/13.59b9bd3c.js",
    "revision": "b52423c196e7916c8d4ed918301cf1cb"
  },
  {
    "url": "assets/js/14.65844038.js",
    "revision": "fc74557c52d4af2a9b1860f0f4d6f00e"
  },
  {
    "url": "assets/js/15.8eb5e5ab.js",
    "revision": "11aabf3d083772d60e50c1b4d24d873d"
  },
  {
    "url": "assets/js/16.816157c0.js",
    "revision": "858b9b8fd3b7a7ae21365f9fa2ca7849"
  },
  {
    "url": "assets/js/17.d0ee8806.js",
    "revision": "6913df53bf823d356fa2f5542d024698"
  },
  {
    "url": "assets/js/18.e3c6d798.js",
    "revision": "3a73b6f199661577fc7e7f600b0882d7"
  },
  {
    "url": "assets/js/19.a73beb37.js",
    "revision": "e2b0a9d3c7901a8d144b309cb19e719c"
  },
  {
    "url": "assets/js/2.8cd47fbb.js",
    "revision": "32ef67f2ddad9a2e42aba15c6bfe184c"
  },
  {
    "url": "assets/js/20.4e5b8b88.js",
    "revision": "77dc179facc05ac30bbdb88b8f5cd894"
  },
  {
    "url": "assets/js/21.f6a52187.js",
    "revision": "cdc11c7dd5cd2b00352114e7cc5915d6"
  },
  {
    "url": "assets/js/3.0dae8b60.js",
    "revision": "19bc3aefd162e01975f8081c729bf39f"
  },
  {
    "url": "assets/js/4.96212832.js",
    "revision": "bb6c2cccfbab369429b9c742d18df7d6"
  },
  {
    "url": "assets/js/5.31ea66e4.js",
    "revision": "f29baa7d09fb12d90d73eb38c9622816"
  },
  {
    "url": "assets/js/6.57bfa7cf.js",
    "revision": "4471818f9d22c1c9f4f89d4127703458"
  },
  {
    "url": "assets/js/7.0108d453.js",
    "revision": "f762cfa854e217b59bb5587174587648"
  },
  {
    "url": "assets/js/8.ddd83661.js",
    "revision": "de1a6c81e174126f3c5ffc88c1c48967"
  },
  {
    "url": "assets/js/9.49077ae1.js",
    "revision": "4027658f6467ec4f342b1e263112c347"
  },
  {
    "url": "assets/js/app.0fefa864.js",
    "revision": "17a42a27663aa8ab49bb334e18878b1b"
  },
  {
    "url": "demo_unity_80s_WebGL/Build/UnityLoader.js",
    "revision": "3998187b7e8feaa618a93b293c0e6812"
  },
  {
    "url": "demo_unity_80s_WebGL/index.html",
    "revision": "c05b1a4f36f04cfa83d426005bc786f7"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/fullscreen.png",
    "revision": "f698ed7e8838ae7fef68b1423b6a3bc8"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/progressEmpty.Dark.png",
    "revision": "59cf8c9349b0be3828ea6ab0b7b7d126"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/progressEmpty.Light.png",
    "revision": "28df3e3bc879a2cffaaf78e371980f33"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/progressFull.Dark.png",
    "revision": "c74f81d50322b06afa5f20a1447a17ba"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/progressFull.Light.png",
    "revision": "d030ba7511bc275365f856d2af200e58"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/progressLogo.Dark.png",
    "revision": "cc0d7c1db16b413eb67aed0f10c3e99d"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/progressLogo.Light.png",
    "revision": "e608e32fb2102e953b6cae6f97f38286"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/style.css",
    "revision": "f174b271049153b3e9c4e483098e25d4"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/UnityProgress.js",
    "revision": "8560a078de48bb4ede068cbdd48a4938"
  },
  {
    "url": "demo_unity_80s_WebGL/TemplateData/webgl-logo.png",
    "revision": "8c9889fd3f9272b942d4868a9c1b094c"
  },
  {
    "url": "en/article/index.html",
    "revision": "2723e0b69ce813c6713337a075c9d7fd"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "6957564d3d8b85a363fc9a67575b3286"
  },
  {
    "url": "en/index.html",
    "revision": "f5c4cb4bd421275eadaf32ced524ee27"
  },
  {
    "url": "en/interest.html",
    "revision": "e72893f9f651d042adbd94132e7beff2"
  },
  {
    "url": "en/portfolio.html",
    "revision": "f81c447120eab29124e58bfe90978052"
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
    "revision": "a0d64ef7ae16ab5763c9e17b136bbdda"
  },
  {
    "url": "interest.html",
    "revision": "9ecd2b5ba908c895c56445182a4950e0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "aca337a06bfb56e3bb5941e173e91a68"
  },
  {
    "url": "portfolio.html",
    "revision": "865cb08fbae976fe9f70a582dae2dee5"
  }
].concat(self.__precacheManifest || []);
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
