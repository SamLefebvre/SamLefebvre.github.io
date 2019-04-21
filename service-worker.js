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
    "revision": "823f5b8538031bc2e739c53adb90bca5"
  },
  {
    "url": "article/index.html",
    "revision": "f837a02ae63fa6a28684cb47ae3b5e95"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "98d85f16277b1d84917f936e4ba8284c"
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
    "url": "assets/js/19.2e2bb330.js",
    "revision": "1c90a7e8d4d3e3f6e107425cb6242f7d"
  },
  {
    "url": "assets/js/2.3d926da1.js",
    "revision": "2814bad70a885539b3204391e750f153"
  },
  {
    "url": "assets/js/20.a7d038d7.js",
    "revision": "74fe12f4666648ae23832cc13ad17688"
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
    "url": "assets/js/4.b662f219.js",
    "revision": "ea0e64f9f25a207d63133e5ac72b1ded"
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
    "url": "assets/js/app.e0f71a30.js",
    "revision": "76801ce1d16bd7dfffd135a8d058f13e"
  },
  {
    "url": "en/article/index.html",
    "revision": "49824acaf0dd2d4c50ae78d6436a7cee"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "013500fcdd79f54075411b87bb84cd6d"
  },
  {
    "url": "en/index.html",
    "revision": "7ee930ff468ddedb51f4b288b1de1552"
  },
  {
    "url": "en/interest.html",
    "revision": "87f0b0d4838eb97a4f2c4a2bcea36357"
  },
  {
    "url": "en/portfolio.html",
    "revision": "68858fea2f0723980d4dbe267ba6873b"
  },
  {
    "url": "index.html",
    "revision": "d3e344f6661f1ee9072847665b8ed81b"
  },
  {
    "url": "interest.html",
    "revision": "146b7487aaa532955741a448fc2f05fc"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "366648e43e4e35fbb6550f6f5bdb6c02"
  },
  {
    "url": "portfolio.html",
    "revision": "5aa9bb46a06f7a0bcab5577fcb765e42"
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
