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
    "revision": "04e35b89f52cd59726f3212ef31564db"
  },
  {
    "url": "article/index.html",
    "revision": "7b2cb7ac8120b9add17cf7463bb44300"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "1fc9d6d8dfdceb179224e7ef88f568ef"
  },
  {
    "url": "assets/css/0.styles.49fade83.css",
    "revision": "67a13ca10ea3644d9a599b44e1e92d05"
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
    "url": "assets/js/10.3b859803.js",
    "revision": "b3af53876cefcb040b4f48f67375e5d9"
  },
  {
    "url": "assets/js/11.dd9e9752.js",
    "revision": "4ec07e8b773cb351fb0ad2e00c59e0d0"
  },
  {
    "url": "assets/js/12.33d30e70.js",
    "revision": "da0888ecfcc667100edee16c56fe4bf1"
  },
  {
    "url": "assets/js/13.ae97bb09.js",
    "revision": "f5da6a0e439b00cb3f7d258ff24a764a"
  },
  {
    "url": "assets/js/14.df1c0bcf.js",
    "revision": "077920e208fb44f7454ab8b96c6325bf"
  },
  {
    "url": "assets/js/15.4b34e6bf.js",
    "revision": "667b846a1f392b330bb1282eea99d70a"
  },
  {
    "url": "assets/js/16.a1e0bb46.js",
    "revision": "0cab141929dceefcc05eb58e808e7490"
  },
  {
    "url": "assets/js/17.13b0455b.js",
    "revision": "91e2b7ec83af6f34ebf5bf37e09c39ad"
  },
  {
    "url": "assets/js/18.fc09b4df.js",
    "revision": "9180b4be63bc29cdf6a40d55d0d91d9b"
  },
  {
    "url": "assets/js/19.09c72ff6.js",
    "revision": "324ab18c1818effaf61c870c95a64a6a"
  },
  {
    "url": "assets/js/2.cce4cafd.js",
    "revision": "966dc88b6e1e85e1b45eecdaa49c0b61"
  },
  {
    "url": "assets/js/20.35da5834.js",
    "revision": "b3c0cdf814a889ebe160db3fd3427fd8"
  },
  {
    "url": "assets/js/3.4760ee2e.js",
    "revision": "c240c5c3cf5fbef7ea2d54c305ad5bf7"
  },
  {
    "url": "assets/js/4.f85ed813.js",
    "revision": "5fa801a7a64c8a78ce6f2b343879c7bb"
  },
  {
    "url": "assets/js/5.11baea9b.js",
    "revision": "7f8216ec8117b47dd20cca942c4d82a7"
  },
  {
    "url": "assets/js/6.540fcc41.js",
    "revision": "20bd932b0f9cca810480a9e7fa71b3db"
  },
  {
    "url": "assets/js/7.32499d20.js",
    "revision": "615daeb2f553e10d1353c07858c31f3e"
  },
  {
    "url": "assets/js/8.a478d8d3.js",
    "revision": "6813d3b9daa6bc2e8043edb56b352f1b"
  },
  {
    "url": "assets/js/9.54a105be.js",
    "revision": "b6eeaefe5838a702394dd5649d7a7f3c"
  },
  {
    "url": "assets/js/app.e072e216.js",
    "revision": "936a4e799af6115b76da421e51719796"
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
    "revision": "fcc0f8c8a454294d59507727be70089c"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "9b6f20743e486fd6eb635358ec96f753"
  },
  {
    "url": "en/index.html",
    "revision": "ed43955194b1e3341e601795dcfbfc0b"
  },
  {
    "url": "en/interest.html",
    "revision": "173fd8bab19484606124bb69a126db81"
  },
  {
    "url": "en/portfolio.html",
    "revision": "edd2bd1cc0e5fc922478613c8ea11f31"
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
    "revision": "8c577ce3d0233d9ff8fdbd6185a21a11"
  },
  {
    "url": "interest.html",
    "revision": "a1791afdf0bdc67206c2755a076fe3c9"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio.html",
    "revision": "511448a879f9ed1ef35147326aed59b4"
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
