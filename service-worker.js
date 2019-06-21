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
    "revision": "3c966fd650b5b8bfdf37cd82a1768dc4"
  },
  {
    "url": "article/index.html",
    "revision": "cb39fdff0d36b23488467b100660b110"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "c3cedfab6e0a2e715cc9af42eec990f8"
  },
  {
    "url": "assets/css/0.styles.ab76f440.css",
    "revision": "83f899067dca1be4bad9517fb1df06d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7633696d.js",
    "revision": "23493b58eb9dd7d261ff6bae6d411153"
  },
  {
    "url": "assets/js/11.d3c0a41d.js",
    "revision": "98a330c8052b67305da817407e20f5cf"
  },
  {
    "url": "assets/js/12.9c09d156.js",
    "revision": "11fc45ce91d391803a494bcc3cf0c509"
  },
  {
    "url": "assets/js/13.76a7d8fa.js",
    "revision": "808af801851ef1984210128ccb7d36e8"
  },
  {
    "url": "assets/js/14.4d6370f9.js",
    "revision": "02985284eda1a13c33343b15657b2aad"
  },
  {
    "url": "assets/js/15.13c14474.js",
    "revision": "d6c1615cd03353fab1d34bace1398b1d"
  },
  {
    "url": "assets/js/16.d82dd9f0.js",
    "revision": "fcb33d3f65cce9bce446ee4b63d1e9bb"
  },
  {
    "url": "assets/js/17.4e99a51a.js",
    "revision": "520909eccee57cb54b21a55afc8cd055"
  },
  {
    "url": "assets/js/18.ebc76447.js",
    "revision": "bf4804af91ecc8a88e2b925c7683ad49"
  },
  {
    "url": "assets/js/19.57557a1c.js",
    "revision": "9a67391850e2e86b937314491b5ed72c"
  },
  {
    "url": "assets/js/2.5fd4da8f.js",
    "revision": "c27415be95d2fe02525b7ffdca30ac3a"
  },
  {
    "url": "assets/js/20.d726209d.js",
    "revision": "5c7d1ab054ac1a707dcc39700a5a6047"
  },
  {
    "url": "assets/js/21.f3eaa0f3.js",
    "revision": "bfebf7dd2bc94671a0c8c2b4698f0724"
  },
  {
    "url": "assets/js/3.b47b2c82.js",
    "revision": "9ca3a3a1cc9ad281b0a7cdd74c4b5e3e"
  },
  {
    "url": "assets/js/4.c8a8cf43.js",
    "revision": "11a28f90747ac8f5973787b8793c4d04"
  },
  {
    "url": "assets/js/5.b9f81159.js",
    "revision": "66ed86d7ecf907732d64b2346717ef21"
  },
  {
    "url": "assets/js/6.7c4bbf78.js",
    "revision": "17e5d0cd9c80fc82d0581f1d5d566e95"
  },
  {
    "url": "assets/js/7.06fecb20.js",
    "revision": "37749d7c24e965a533981c7275b0f37d"
  },
  {
    "url": "assets/js/8.e831342b.js",
    "revision": "3e5bb819ab9babb2fc264866c144e7d7"
  },
  {
    "url": "assets/js/9.030a0b45.js",
    "revision": "a3ea13d9e8071f2d110edbc805548857"
  },
  {
    "url": "assets/js/app.359cb10d.js",
    "revision": "543ac69821e54e45dc8c2183799d4f00"
  },
  {
    "url": "en/article/index.html",
    "revision": "871631c86e0c41503931e26a3f019df6"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "c278a043d50a098bb77e22711a8b5c02"
  },
  {
    "url": "en/index.html",
    "revision": "5d9ed4d0b41d109357fe4c6111033a3f"
  },
  {
    "url": "en/interest.html",
    "revision": "de85ac3ed951666b52feeb8f36f2656b"
  },
  {
    "url": "en/portfolio.html",
    "revision": "59c7aa69f0b87be63ec1ec3a7851e34b"
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
    "revision": "3ca8916b9a9776c95c5c02362507fc88"
  },
  {
    "url": "interest.html",
    "revision": "1efdc53bed59aaf395351d433dc3e3b3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "5609efb464530e82bd0bd487f1a9c7b0"
  },
  {
    "url": "portfolio.html",
    "revision": "f1ebe71e9bb1f589038a18f367d129d1"
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
