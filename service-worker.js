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
    "revision": "3520b01b976237fe5af8043b5f81aa23"
  },
  {
    "url": "article/index.html",
    "revision": "49e1673a3bd8d8c3ec20d2413c989223"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "b25f8c8440167848c697e8a907d386ce"
  },
  {
    "url": "assets/css/0.styles.8a00558e.css",
    "revision": "b2493729ccf5d8fc56d6c57f73cf8d21"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f17c6533.js",
    "revision": "84fe9cb781adf9d588d6e8f0a079a53e"
  },
  {
    "url": "assets/js/11.c21b3220.js",
    "revision": "1d8b793e9dbfaeb339dea457bbcef22f"
  },
  {
    "url": "assets/js/12.f6c8354e.js",
    "revision": "947aaf3a9c063448bc210e0e172e2d9c"
  },
  {
    "url": "assets/js/13.7a74434e.js",
    "revision": "1797714394bfca4b7ba6fb820bc946ea"
  },
  {
    "url": "assets/js/14.15fe4f83.js",
    "revision": "9d233fc0b3b6877e866247fff2e4ea42"
  },
  {
    "url": "assets/js/15.ba1d763f.js",
    "revision": "0f6db28b96198e4fff7401d955d77211"
  },
  {
    "url": "assets/js/16.b810aea0.js",
    "revision": "ed2bf9740063fbd5c4dafcf098621ea2"
  },
  {
    "url": "assets/js/17.0ae8cc96.js",
    "revision": "bb8aec6554ea7debc24c5c9b5bd8193a"
  },
  {
    "url": "assets/js/18.3def9f18.js",
    "revision": "3b44d01bd37e6687d6a00dbb65dd9ecd"
  },
  {
    "url": "assets/js/19.91c05d41.js",
    "revision": "82194b2de4510b11a8e291396d6b235f"
  },
  {
    "url": "assets/js/2.c53cd950.js",
    "revision": "9b9ca5242dd07b4af2b5cf1030839058"
  },
  {
    "url": "assets/js/20.e492def5.js",
    "revision": "1992c489771c1b99a146c405dbecde92"
  },
  {
    "url": "assets/js/21.1238a22a.js",
    "revision": "03fe1431fab7f911da855a967f4ab390"
  },
  {
    "url": "assets/js/3.67a666cf.js",
    "revision": "d39e9657c0844894481e34bf39901f61"
  },
  {
    "url": "assets/js/4.015adabb.js",
    "revision": "93cbf46ae20b9777ea1ad42602fc75fa"
  },
  {
    "url": "assets/js/5.01460981.js",
    "revision": "43665cd967fe6c27411e4cc2c6d7b938"
  },
  {
    "url": "assets/js/6.e5b061b6.js",
    "revision": "dcc220d82db171a8bb74dc5fd1f42082"
  },
  {
    "url": "assets/js/7.0924522a.js",
    "revision": "dc9d405abb44acc500f4dd2675e5301a"
  },
  {
    "url": "assets/js/8.f49867b4.js",
    "revision": "7d9e7f0fba2529333284d6e956e66e92"
  },
  {
    "url": "assets/js/9.0bc4ce9c.js",
    "revision": "3e4bdd35d47ef248629b0cb64c7a2234"
  },
  {
    "url": "assets/js/app.f24dff9b.js",
    "revision": "b268549fb2e48100c38520445133e251"
  },
  {
    "url": "en/article/index.html",
    "revision": "75dd2f433083d30a02c2e00c1af24d94"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "9b3de3bd871b1e6386eedbae44e06e09"
  },
  {
    "url": "en/index.html",
    "revision": "679e3794aedaff770022b8012aef2d82"
  },
  {
    "url": "en/interest.html",
    "revision": "eeacd9f86fb30f57d5faf6a39988595d"
  },
  {
    "url": "en/portfolio.html",
    "revision": "8ff08676afafb422987183818d1048b1"
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
    "revision": "15baf9c212031b0ef97e16f028408e30"
  },
  {
    "url": "interest.html",
    "revision": "83f7f95b2874ce6ac3c676674c3621a2"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "678151542fbe5bffe01eb4431c65050d"
  },
  {
    "url": "portfolio.html",
    "revision": "88f203916519a931eea18e04a3df4ef9"
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
