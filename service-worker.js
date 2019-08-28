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
    "revision": "49765159307636e01c2b70117e5d22a6"
  },
  {
    "url": "article/index.html",
    "revision": "1941625c9c81ec8f55c9d46f2208ea1b"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "6d0909a14ef35316c97339e4d2a19bfc"
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
    "url": "assets/js/10.d952d9ae.js",
    "revision": "4c362e2308079a018be720f27721b1d2"
  },
  {
    "url": "assets/js/11.ab71df66.js",
    "revision": "16c7d782946af0499a1af86e2f3bcc0f"
  },
  {
    "url": "assets/js/12.978a1f96.js",
    "revision": "6e064399e6c591b85c717e733a5a3274"
  },
  {
    "url": "assets/js/13.6a9b6275.js",
    "revision": "c6cbc8a0058471681d3c21d3dd1a182c"
  },
  {
    "url": "assets/js/14.f3e17de6.js",
    "revision": "d4db9269d8f5e999ec667022e736751b"
  },
  {
    "url": "assets/js/15.c3b9fd04.js",
    "revision": "60028b8df587a60dfc964b8525dc6499"
  },
  {
    "url": "assets/js/16.43b6818e.js",
    "revision": "97fabe9dcdbe45ad876178fc679836a2"
  },
  {
    "url": "assets/js/17.83ea0135.js",
    "revision": "4415857b04f70b047231468aa3c506f7"
  },
  {
    "url": "assets/js/18.3980c7ce.js",
    "revision": "7d4ab234675d0a118df14f986d469565"
  },
  {
    "url": "assets/js/19.866a99ea.js",
    "revision": "136c5ba4b6804f2c69dbddf3dc0d6256"
  },
  {
    "url": "assets/js/2.81e81000.js",
    "revision": "d36804a592bc8496a56bd69342258a13"
  },
  {
    "url": "assets/js/20.f755e59a.js",
    "revision": "7e6a5645c291d01f7116460ca7c4b323"
  },
  {
    "url": "assets/js/21.f6a52187.js",
    "revision": "cdc11c7dd5cd2b00352114e7cc5915d6"
  },
  {
    "url": "assets/js/3.a81e052a.js",
    "revision": "56cf568a4dd16d401a091991e0e442b2"
  },
  {
    "url": "assets/js/4.eb6bfed1.js",
    "revision": "2aa7ee4b08e42a119ba1ee32939bb105"
  },
  {
    "url": "assets/js/5.0525ab1e.js",
    "revision": "4ae865267ed9a444beca4f2037a14bb1"
  },
  {
    "url": "assets/js/6.fefef4c1.js",
    "revision": "c33db60dfd97269ea690d58f99c44e29"
  },
  {
    "url": "assets/js/7.93795d2b.js",
    "revision": "e060e944005e66cdcb4f0ced8e65a9c9"
  },
  {
    "url": "assets/js/8.ee4b99f4.js",
    "revision": "1da5536060db3fe2df047caf11ca5e82"
  },
  {
    "url": "assets/js/9.5a1233a0.js",
    "revision": "b94fb7d2ea2330e370054f83afd0132e"
  },
  {
    "url": "assets/js/app.08abe75b.js",
    "revision": "6d85d0b508fcad5a408c3d55956aee1e"
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
    "revision": "5b0023dcd07463584aae2accf06b2e0c"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "81a8041ba7d448123138596f3539e234"
  },
  {
    "url": "en/index.html",
    "revision": "e0fe6988b4621935aeb28411a1fe2403"
  },
  {
    "url": "en/interest.html",
    "revision": "5f0f219e25cba81134017eb66905a31a"
  },
  {
    "url": "en/portfolio.html",
    "revision": "e7fc7eef1997e5b48b69dbf24d37f2dd"
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
    "revision": "5677347c85423af7e9f240ad54e8d2fd"
  },
  {
    "url": "interest.html",
    "revision": "2f94b919e4d4d1b34c05a6f15d11e4f6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "page2.html",
    "revision": "986d0b420cee28cab90fd08674bd6123"
  },
  {
    "url": "portfolio.html",
    "revision": "e95ffbdadac857fd06325d9c085541cb"
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
