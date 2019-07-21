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
    "revision": "931595caa1261a67744a0bcea7b3ee14"
  },
  {
    "url": "article/index.html",
    "revision": "9676204ac5bc10e6aeeeb85bc815d6f3"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "f490696e22fb357f7025353a2e2eaf1a"
  },
  {
    "url": "assets/css/0.styles.f05d3fca.css",
    "revision": "2ac126aa9fec972558aae300ed6884de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a9b77a66.js",
    "revision": "23493b58eb9dd7d261ff6bae6d411153"
  },
  {
    "url": "assets/js/11.37c9dbd4.js",
    "revision": "98a330c8052b67305da817407e20f5cf"
  },
  {
    "url": "assets/js/12.1cfb0d93.js",
    "revision": "11fc45ce91d391803a494bcc3cf0c509"
  },
  {
    "url": "assets/js/13.3f3734df.js",
    "revision": "808af801851ef1984210128ccb7d36e8"
  },
  {
    "url": "assets/js/14.7b40c199.js",
    "revision": "02985284eda1a13c33343b15657b2aad"
  },
  {
    "url": "assets/js/15.b8483838.js",
    "revision": "d6c1615cd03353fab1d34bace1398b1d"
  },
  {
    "url": "assets/js/16.62c09fe2.js",
    "revision": "fcb33d3f65cce9bce446ee4b63d1e9bb"
  },
  {
    "url": "assets/js/17.362bad82.js",
    "revision": "520909eccee57cb54b21a55afc8cd055"
  },
  {
    "url": "assets/js/18.31f2d207.js",
    "revision": "bf4804af91ecc8a88e2b925c7683ad49"
  },
  {
    "url": "assets/js/19.b1b0c5d1.js",
    "revision": "9a67391850e2e86b937314491b5ed72c"
  },
  {
    "url": "assets/js/2.c251119d.js",
    "revision": "c27415be95d2fe02525b7ffdca30ac3a"
  },
  {
    "url": "assets/js/20.cac33b46.js",
    "revision": "5c7d1ab054ac1a707dcc39700a5a6047"
  },
  {
    "url": "assets/js/21.7ced75bc.js",
    "revision": "bfebf7dd2bc94671a0c8c2b4698f0724"
  },
  {
    "url": "assets/js/3.22116ded.js",
    "revision": "9ca3a3a1cc9ad281b0a7cdd74c4b5e3e"
  },
  {
    "url": "assets/js/4.e909e796.js",
    "revision": "11a28f90747ac8f5973787b8793c4d04"
  },
  {
    "url": "assets/js/5.6a3793f1.js",
    "revision": "66ed86d7ecf907732d64b2346717ef21"
  },
  {
    "url": "assets/js/6.59622ddc.js",
    "revision": "17e5d0cd9c80fc82d0581f1d5d566e95"
  },
  {
    "url": "assets/js/7.3a73c56d.js",
    "revision": "37749d7c24e965a533981c7275b0f37d"
  },
  {
    "url": "assets/js/8.c156c6c8.js",
    "revision": "3e5bb819ab9babb2fc264866c144e7d7"
  },
  {
    "url": "assets/js/9.99d94639.js",
    "revision": "a3ea13d9e8071f2d110edbc805548857"
  },
  {
    "url": "assets/js/app.fd8af387.js",
    "revision": "41a20f17d147d942b6daad4818725ed1"
  },
  {
    "url": "en/article/index.html",
    "revision": "4ee7bfb9927966a00056f8b3614bb30a"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "634980450bf6a51310054b476900fe1a"
  },
  {
    "url": "en/index.html",
    "revision": "46c183608b47b5289187d8ec236a24a9"
  },
  {
    "url": "en/interest.html",
    "revision": "72df56f10e41a4d191f69ae3293c96f9"
  },
  {
    "url": "en/portfolio.html",
    "revision": "52449428e3a297210d952ca81bfb5533"
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
    "revision": "f8e9ee9792b84bd7511ee187e226b68c"
  },
  {
    "url": "interest.html",
    "revision": "1df782720b83484292a1b987109263b7"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "6465872e99151d054b0578404d131d0c"
  },
  {
    "url": "portfolio.html",
    "revision": "d501d83a3b09e1ae9f02689e0a35b620"
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
