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
    "revision": "be3fdf0071037e34351a35c97645bac5"
  },
  {
    "url": "article/index.html",
    "revision": "f82774960e4637da54bc9b597fec3030"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "f33450b0f7aac3edbeb841f888064609"
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
    "url": "assets/js/10.cc18b150.js",
    "revision": "80d435802d6938d0830c84d53ff15c94"
  },
  {
    "url": "assets/js/11.83bcc1a5.js",
    "revision": "c54ccfaf8b332b0874858df5b340a4ce"
  },
  {
    "url": "assets/js/12.08565800.js",
    "revision": "f2045836bd3d2026f9463f7c0d01bb2f"
  },
  {
    "url": "assets/js/13.188d81b5.js",
    "revision": "8b6c3a4c9cd43da2e0d3de8f2053533a"
  },
  {
    "url": "assets/js/14.47961eab.js",
    "revision": "963a3137af5b83eb416f5aa2a7474040"
  },
  {
    "url": "assets/js/15.485449ba.js",
    "revision": "0b4b3ee237be34699bb3ce29ffabec74"
  },
  {
    "url": "assets/js/16.e639c7fd.js",
    "revision": "cd267da454dacf482cbae271a12a4de8"
  },
  {
    "url": "assets/js/17.a1ad4790.js",
    "revision": "7cf3f39851a5cee12989c308bf13565b"
  },
  {
    "url": "assets/js/18.de435332.js",
    "revision": "dec9385c14f26f79fc58c76466ede597"
  },
  {
    "url": "assets/js/19.0f82c18e.js",
    "revision": "1ed036f69663aaad350ff3cbe6ce982c"
  },
  {
    "url": "assets/js/2.3d926da1.js",
    "revision": "2814bad70a885539b3204391e750f153"
  },
  {
    "url": "assets/js/20.f8fff90c.js",
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
    "url": "assets/js/4.59122432.js",
    "revision": "26e347e49d30db2e9d73af2a2ef2774b"
  },
  {
    "url": "assets/js/5.ab3ceae1.js",
    "revision": "b3f1cf70afa9b8796ce1f9dc1841b107"
  },
  {
    "url": "assets/js/6.eb941da9.js",
    "revision": "6be80d77313a46e54f7746ff6f417dd1"
  },
  {
    "url": "assets/js/7.59979af3.js",
    "revision": "3ddd72f17d2d965fb005982741c0b547"
  },
  {
    "url": "assets/js/8.19218a51.js",
    "revision": "9504e82af0fe6b397d5f6fe0a86b926e"
  },
  {
    "url": "assets/js/9.ae5237f1.js",
    "revision": "136441b201b32181421781c5f78c7ced"
  },
  {
    "url": "assets/js/app.c884ca4d.js",
    "revision": "27acd9a80c23a53fe77a2705b0c57ea9"
  },
  {
    "url": "en/article/index.html",
    "revision": "593bae18e30000760af77b94a67d4b03"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "593ca1ff5ec68f816a16016c63a1a9ed"
  },
  {
    "url": "en/index.html",
    "revision": "45e2260bdc311db081b5571345b3291e"
  },
  {
    "url": "en/interest.html",
    "revision": "bad95a76d63a40d2e01a3822a4ae6ae1"
  },
  {
    "url": "en/portfolio.html",
    "revision": "6a45c0d19af99110f18abc0d697e68d1"
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
    "revision": "ee7d164626c43778b51d74e50a4b3e61"
  },
  {
    "url": "interest.html",
    "revision": "8e3772b65cebba5ec8498a756d73f738"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "df9463023be8114d347a0dc7888dd679"
  },
  {
    "url": "portfolio.html",
    "revision": "eea6e15149dd5fbe01aa80f216dd3e00"
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
