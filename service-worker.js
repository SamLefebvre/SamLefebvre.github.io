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
    "revision": "bf53b04797d9da2949ca103cc9cbd17d"
  },
  {
    "url": "article/index.html",
    "revision": "d50cc492ff3198db85c26b419bcea1f1"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "432fb9e56b4d4c8eba8055a1333c68ec"
  },
  {
    "url": "assets/css/0.styles.151018a3.css",
    "revision": "c7e396fee60ec54d86153032c53e50be"
  },
  {
    "url": "assets/img/gti745_fritzing_diagram.79977991.png",
    "revision": "79977991ac5025edc618740f5c8d816a"
  },
  {
    "url": "assets/img/gti745_schema_circuitPlaygroundExpress.8eff1eaa.jpg",
    "revision": "8eff1eaa45dae06030145af09376eda8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/synthwave.3c1feb2d.jpg",
    "revision": "3c1feb2ddc605c33bdff1a4e94fd30ec"
  },
  {
    "url": "assets/img/web_synapsets_small.b1573955.jpg",
    "revision": "b1573955510649d17a2b95dadb798b22"
  },
  {
    "url": "assets/js/10.184fff40.js",
    "revision": "bea6d4ed3a83b8972bf8172544835936"
  },
  {
    "url": "assets/js/11.03b496ba.js",
    "revision": "4e51b555b8da32f278ffd98f2e99e7e4"
  },
  {
    "url": "assets/js/12.0b555996.js",
    "revision": "52bd8028c8c5956e4fca244bb7996e47"
  },
  {
    "url": "assets/js/13.b15ad28b.js",
    "revision": "ffad0e93cce8414c1c2d7fc98fac520c"
  },
  {
    "url": "assets/js/14.19bd8037.js",
    "revision": "6957ba7578292e4d50c8434216ee507e"
  },
  {
    "url": "assets/js/15.10ab7988.js",
    "revision": "9f577b84f4d726f3d81a2693ea3507dc"
  },
  {
    "url": "assets/js/16.13845b04.js",
    "revision": "8e29ca3d092eb6934a00bb0549030880"
  },
  {
    "url": "assets/js/17.f9bfb9a1.js",
    "revision": "f137af638e7b8b3b1e8a68bea3967734"
  },
  {
    "url": "assets/js/18.5d1b260a.js",
    "revision": "db345ccd7c13dccd118d74a3c40d47d1"
  },
  {
    "url": "assets/js/19.83ccc6b0.js",
    "revision": "50888557c960b0647683266216a08322"
  },
  {
    "url": "assets/js/2.1504e002.js",
    "revision": "6d02c422446fda9bc6ce1a58d6372d0b"
  },
  {
    "url": "assets/js/20.7933d963.js",
    "revision": "2418e70c6b699780fff8868a0c91b7ff"
  },
  {
    "url": "assets/js/21.f6a52187.js",
    "revision": "cdc11c7dd5cd2b00352114e7cc5915d6"
  },
  {
    "url": "assets/js/3.7293132f.js",
    "revision": "1fd4a2d054d1f894fcb3af5a9daeea50"
  },
  {
    "url": "assets/js/4.cabf0970.js",
    "revision": "579f75b159a4104645ccb50019968fc5"
  },
  {
    "url": "assets/js/5.8bd65f0b.js",
    "revision": "19db3e3cc1006bb1ef2291f73248d341"
  },
  {
    "url": "assets/js/6.a62646e8.js",
    "revision": "e29f3a3caf21275ff9a813b43bbbdcf4"
  },
  {
    "url": "assets/js/7.693287fe.js",
    "revision": "80b3b0a1d0e8622619c97151ca069be3"
  },
  {
    "url": "assets/js/8.fec63746.js",
    "revision": "389e8e4730dc0171d87c04a4e6eec28d"
  },
  {
    "url": "assets/js/9.be9a96ad.js",
    "revision": "7687a125b2d0819d267226a2c9f01fa3"
  },
  {
    "url": "assets/js/app.d406cfbb.js",
    "revision": "bfdc867fbcb5cf05675670c0cb3f3345"
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
    "revision": "ddab47f657f9a4d054d72314b848c56e"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "efbf4a721456b2809534a2aeaf3ef3ce"
  },
  {
    "url": "en/index.html",
    "revision": "a94c67bcdc0f55602a7cef86297023e0"
  },
  {
    "url": "en/interest.html",
    "revision": "f539d097c7115cb43b1344d723f9d8f8"
  },
  {
    "url": "en/portfolio.html",
    "revision": "00a64e130381248271690d7cfd852e13"
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
    "revision": "f5e2982d543365835b0af3b7e9a10222"
  },
  {
    "url": "interest.html",
    "revision": "f0c52256d00bb63ef14e8ac4ae9d53e3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "04fb6862b02bd8a91e5bb8303a3e18fb"
  },
  {
    "url": "portfolio.html",
    "revision": "3895dac0d65186c48ab20dddcc27ca23"
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
