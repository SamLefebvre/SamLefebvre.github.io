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
    "revision": "e237c1e78a575d995bea5be04afd9f51"
  },
  {
    "url": "article/index.html",
    "revision": "b94835faf00e3b3ec0c242b59ea88c6c"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "5fd9c653f1e4953ab3a6d4f9aebe7d20"
  },
  {
    "url": "assets/css/0.styles.242293a3.css",
    "revision": "b15af8b3a5ed8aa0f5b9c2a7de42c2f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.63ba32e3.js",
    "revision": "0fb316ac5846ae7e07ffc628ae67b708"
  },
  {
    "url": "assets/js/11.66167ee6.js",
    "revision": "c54ccfaf8b332b0874858df5b340a4ce"
  },
  {
    "url": "assets/js/12.6d5755e1.js",
    "revision": "8f32fb2ab1793b66e06d23823a8628d5"
  },
  {
    "url": "assets/js/13.b95826b4.js",
    "revision": "ac65213e046ebcf780c7edbb72b16fd7"
  },
  {
    "url": "assets/js/14.8cffd758.js",
    "revision": "963a3137af5b83eb416f5aa2a7474040"
  },
  {
    "url": "assets/js/15.99ab3100.js",
    "revision": "c48279fed66e7e5062a8e1bb6e5872e8"
  },
  {
    "url": "assets/js/16.160b4872.js",
    "revision": "cd267da454dacf482cbae271a12a4de8"
  },
  {
    "url": "assets/js/17.c28f0a81.js",
    "revision": "7cf3f39851a5cee12989c308bf13565b"
  },
  {
    "url": "assets/js/18.bb9eed54.js",
    "revision": "dec9385c14f26f79fc58c76466ede597"
  },
  {
    "url": "assets/js/19.40ead5f2.js",
    "revision": "1ed036f69663aaad350ff3cbe6ce982c"
  },
  {
    "url": "assets/js/2.d6b036aa.js",
    "revision": "2814bad70a885539b3204391e750f153"
  },
  {
    "url": "assets/js/20.ddaf230d.js",
    "revision": "9c9d68efa4c6a4a1d81e20be81b9a9b0"
  },
  {
    "url": "assets/js/21.1238a22a.js",
    "revision": "03fe1431fab7f911da855a967f4ab390"
  },
  {
    "url": "assets/js/3.bff93082.js",
    "revision": "5e98f6ea16965254525f18c2e55361ef"
  },
  {
    "url": "assets/js/4.ac5a277e.js",
    "revision": "205eda35124af5bf0ddb20447a44bab9"
  },
  {
    "url": "assets/js/5.afa7b0bc.js",
    "revision": "b3f1cf70afa9b8796ce1f9dc1841b107"
  },
  {
    "url": "assets/js/6.eb941da9.js",
    "revision": "6be80d77313a46e54f7746ff6f417dd1"
  },
  {
    "url": "assets/js/7.22f12769.js",
    "revision": "3ddd72f17d2d965fb005982741c0b547"
  },
  {
    "url": "assets/js/8.9c8643e6.js",
    "revision": "d548b986a539d99d860669d2648f2480"
  },
  {
    "url": "assets/js/9.4a33bffc.js",
    "revision": "136441b201b32181421781c5f78c7ced"
  },
  {
    "url": "assets/js/app.10a89712.js",
    "revision": "9ab14c3fde446650e0f4a12323a6d38f"
  },
  {
    "url": "en/article/index.html",
    "revision": "76aaf01324852b9316bb7aab29ead491"
  },
  {
    "url": "en/article/markdownDemo.html",
    "revision": "7fbf23792a79ca6b260a0ddb4b690a59"
  },
  {
    "url": "en/index.html",
    "revision": "95d09e17f7a40d053dc0fcb86940eb4e"
  },
  {
    "url": "en/interest.html",
    "revision": "6725401f9ed9b9ad9f16ae039a762d09"
  },
  {
    "url": "en/portfolio.html",
    "revision": "2787d745f61982ceb219b0996051c97b"
  },
  {
    "url": "index.html",
    "revision": "e33d5472ee2fd8a685cec8f046b0a4f9"
  },
  {
    "url": "interest.html",
    "revision": "83f0e4cee8db6431af8574ff07e29d1f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "e9d35b996a7163c62343869ce6811038"
  },
  {
    "url": "portfolio.html",
    "revision": "f3a472d303dd27a560e40ed65db149fa"
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
