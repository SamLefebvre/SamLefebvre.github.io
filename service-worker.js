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
    "revision": "30202489841f65e95f7174f4f385e46a"
  },
  {
    "url": "article/index.html",
    "revision": "508dc4b5ca58fd5721c3901b747cd0e9"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "948694201fc5853bc8f2d80ab47a5e62"
  },
  {
    "url": "assets/css/0.styles.f11cb21b.css",
    "revision": "4973ef79e371411b8e585a97489ee2a1"
  },
  {
    "url": "assets/img/expensify_dashboard.79ca61dd.jpg",
    "revision": "79ca61dd9b832a64f221bd70935f7339"
  },
  {
    "url": "assets/img/expensify_login.70d749b6.jpg",
    "revision": "70d749b651c99e964bb7a926af89c155"
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
    "url": "assets/img/image_aiMaze.f1b0f614.jpg",
    "revision": "f1b0f6141ed2f8d2da068038ede24d16"
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
    "url": "assets/img/web_synapsets.5c919d9b.jpg",
    "revision": "5c919d9b8eb6a3a8853de7dcef762c59"
  },
  {
    "url": "assets/js/10.cd3cdd43.js",
    "revision": "e7dd8115e06f295ed80553acfb8c715d"
  },
  {
    "url": "assets/js/11.465ba220.js",
    "revision": "4f09f4b3f23fd3510bdad71794312bf5"
  },
  {
    "url": "assets/js/12.1d917bf0.js",
    "revision": "73bea0fdcfe7cda4bb1f2654c8c03e62"
  },
  {
    "url": "assets/js/13.9a162335.js",
    "revision": "bfa1c9cf685fd776603e22cce8c134a0"
  },
  {
    "url": "assets/js/14.9ea5e238.js",
    "revision": "85101c5f2ef811b635e5938990a401f7"
  },
  {
    "url": "assets/js/15.82a2db5b.js",
    "revision": "d61c9ce109080b4c9cf569bd7c7cc014"
  },
  {
    "url": "assets/js/16.d9040c16.js",
    "revision": "33580732acc5226d9b649af6696b815b"
  },
  {
    "url": "assets/js/17.21c28415.js",
    "revision": "8bac7495693e3420b8731079802d30c5"
  },
  {
    "url": "assets/js/18.26a3b9e9.js",
    "revision": "2cf3b051ebcaebd49c594426fd4b270d"
  },
  {
    "url": "assets/js/19.67b1ac3d.js",
    "revision": "2c1e5213ec62101ae84e42fd4361a0ad"
  },
  {
    "url": "assets/js/2.b636994d.js",
    "revision": "35dcff1d23ce5d31240cd0778eccb4cb"
  },
  {
    "url": "assets/js/20.4db35c89.js",
    "revision": "c5f9ece88e347ebdf791c4b4b2db9178"
  },
  {
    "url": "assets/js/21.f6a52187.js",
    "revision": "cdc11c7dd5cd2b00352114e7cc5915d6"
  },
  {
    "url": "assets/js/3.8edf1b31.js",
    "revision": "8d2068352cc5d22cc2058e66b195f933"
  },
  {
    "url": "assets/js/4.6c3836f0.js",
    "revision": "27c3214f9581f7cf3ddcf4af59fa41f7"
  },
  {
    "url": "assets/js/5.9ed31b84.js",
    "revision": "6d6c48442005644dd33ca1987a8e712d"
  },
  {
    "url": "assets/js/6.71d45126.js",
    "revision": "0b66fa9ba93771e0da0507924f9e2248"
  },
  {
    "url": "assets/js/7.479af8fa.js",
    "revision": "e9357ffee472e40a30a4a980722627a7"
  },
  {
    "url": "assets/js/8.e42bb1b2.js",
    "revision": "fb5b0b026462e3d60e2814a4b882b324"
  },
  {
    "url": "assets/js/9.d2374690.js",
    "revision": "e4d67201f483f25c2791e1380b915914"
  },
  {
    "url": "assets/js/app.3089b49d.js",
    "revision": "901bfc9c1a88ecd5195a3aac9cff759d"
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
    "revision": "76728a69664465d93b7cc3d593764ca6"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "d758e3222087048336c1afde64fed800"
  },
  {
    "url": "en/index.html",
    "revision": "e97bad94c64bf0662be5fdc190126c7b"
  },
  {
    "url": "en/interest.html",
    "revision": "3b25fc8acc32a8c449db8d74d9f732d2"
  },
  {
    "url": "en/portfolio.html",
    "revision": "72850cc02ae120e2ac9f0fe353c54586"
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
    "revision": "8dfec41b767edf4dcd22576cf3d54020"
  },
  {
    "url": "interest.html",
    "revision": "959db6a462fbf4ac25b55302515875b7"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "d68e988323acaee27a22b5aca41ac220"
  },
  {
    "url": "portfolio.html",
    "revision": "fdf0ac8ba859d00b1d684f77eb72430f"
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
