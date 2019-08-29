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
    "revision": "45fb66c79002afa8727fe8bacce9ca8b"
  },
  {
    "url": "article/index.html",
    "revision": "6223915b4e2f8900d1175d1045992c08"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "396491d3011dfd6c682dacad01f45b5a"
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
    "url": "assets/img/old_Cabin_woods.77b65507.jpg",
    "revision": "77b65507dabd2376261b4daddfff47bf"
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
    "url": "assets/js/10.6a7568fc.js",
    "revision": "bfc3d7ea074227ceaede5c9865980ef5"
  },
  {
    "url": "assets/js/11.852a11f8.js",
    "revision": "4d25a0a81053c483ed196ac3076ff28d"
  },
  {
    "url": "assets/js/12.978a1f96.js",
    "revision": "6e064399e6c591b85c717e733a5a3274"
  },
  {
    "url": "assets/js/13.63213c39.js",
    "revision": "46364527a51d5a4be682e1072614c34e"
  },
  {
    "url": "assets/js/14.9ea3ee43.js",
    "revision": "23c4920f3e097cd4fd560928f852069d"
  },
  {
    "url": "assets/js/15.6ef58f15.js",
    "revision": "06c7215d6dbb99a852e54cfe57537987"
  },
  {
    "url": "assets/js/16.d9040c16.js",
    "revision": "33580732acc5226d9b649af6696b815b"
  },
  {
    "url": "assets/js/17.5149ca11.js",
    "revision": "2dfa0bfed0c657a27cea099555e77ac0"
  },
  {
    "url": "assets/js/18.2efeabcd.js",
    "revision": "2fb63ad098a04292d6a9419051906af0"
  },
  {
    "url": "assets/js/19.ffcd6cc4.js",
    "revision": "f1474c909bd31704b14a1801cc6f3acd"
  },
  {
    "url": "assets/js/2.f545e85c.js",
    "revision": "517f61ebb256880badf0f30424daa1dc"
  },
  {
    "url": "assets/js/20.d561fbcf.js",
    "revision": "ed0d4975b19c3768e3cb5a411d104439"
  },
  {
    "url": "assets/js/3.ba6b0da9.js",
    "revision": "d9541aa8a2a95060d161b01b0a12626b"
  },
  {
    "url": "assets/js/4.54f873c0.js",
    "revision": "4344f635480bd846f9141fc621426823"
  },
  {
    "url": "assets/js/5.5f84c7b2.js",
    "revision": "ad1f51f90021340438fec4add95335f0"
  },
  {
    "url": "assets/js/6.2421366a.js",
    "revision": "0d2f9aba02b7f2476e4451ef96cf5460"
  },
  {
    "url": "assets/js/7.2b144307.js",
    "revision": "1eebd88e3c365d63225543c9e92c458a"
  },
  {
    "url": "assets/js/8.e42bb1b2.js",
    "revision": "fb5b0b026462e3d60e2814a4b882b324"
  },
  {
    "url": "assets/js/9.f3266de6.js",
    "revision": "4d84f96bca36485179896b380590081b"
  },
  {
    "url": "assets/js/app.6ce705e4.js",
    "revision": "40247cfbd4ec2fbe261c381a1b34e2a3"
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
    "revision": "6cbdd9b75b3edbbc96f0c990b84b6917"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "afcf803eaed48470044bd273e3f59907"
  },
  {
    "url": "en/index.html",
    "revision": "53acbc0f7872849845847a5960422860"
  },
  {
    "url": "en/interest.html",
    "revision": "d8a92cbe1bfbeba503f9d9dc5a02f89a"
  },
  {
    "url": "en/portfolio.html",
    "revision": "42c488b3001dc7e6cc1461c50d15cd3c"
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
    "revision": "20c9aa5007f012afe55125e8edc87aad"
  },
  {
    "url": "interest.html",
    "revision": "6aaccf2cbffc9b712624875856e7359b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio.html",
    "revision": "d2986c2cad104170ea148a765fbd2294"
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
