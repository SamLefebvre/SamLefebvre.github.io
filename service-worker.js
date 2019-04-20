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
    "revision": "09b2f1cf2414d52e4837f32b9c7a2829"
  },
  {
    "url": "article/index.html",
    "revision": "a805e8ade81b12b0367aae80bd24844f"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "e31b9d1f02879d45951f539f8406b6d5"
  },
  {
    "url": "assets/css/0.styles.588dbf14.css",
    "revision": "961856c27a9342325f13ed0ec8b4bb04"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.216c089d.js",
    "revision": "80d435802d6938d0830c84d53ff15c94"
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
    "url": "assets/js/13.022c227a.js",
    "revision": "8b6c3a4c9cd43da2e0d3de8f2053533a"
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
    "url": "assets/js/4.1e06c3b7.js",
    "revision": "ea0e64f9f25a207d63133e5ac72b1ded"
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
    "url": "assets/js/8.8045b0ac.js",
    "revision": "9504e82af0fe6b397d5f6fe0a86b926e"
  },
  {
    "url": "assets/js/9.4a33bffc.js",
    "revision": "136441b201b32181421781c5f78c7ced"
  },
  {
    "url": "assets/js/app.2502de5a.js",
    "revision": "76b4c8aff69c6af4fc077bf78aa19112"
  },
  {
    "url": "en/article/index.html",
    "revision": "e2080f75fb7bb217393c7875a24794d5"
  },
  {
    "url": "en/article/markdownDemo.html",
    "revision": "d31f76ba6031d068cd53e9df5660c231"
  },
  {
    "url": "en/index.html",
    "revision": "29735a03f79bc41d00f3557fbbc18728"
  },
  {
    "url": "en/interest.html",
    "revision": "5b05be0d71224146fe2d8cebc5a42a9d"
  },
  {
    "url": "en/portfolio.html",
    "revision": "45e6125310bc0e7eb326bdd16d65780b"
  },
  {
    "url": "index.html",
    "revision": "040309210c6746b13c95bdac27ce7fab"
  },
  {
    "url": "interest.html",
    "revision": "34b1e9a294a8dfe5a9b1abf2dde67e57"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "f423249eeb2b73decc74bdae696f7c2b"
  },
  {
    "url": "portfolio.html",
    "revision": "b7f8ce44f7c01e99aaa812e1d7a35a90"
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
