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
    "revision": "ebac43f6460a949ceaed21c5da0d2c32"
  },
  {
    "url": "article/index.html",
    "revision": "f717e66b2cfbc7f3417404e95a781b95"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "33efbba58b1419eac12e6f5e68126cbd"
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
    "url": "assets/js/10.0b31d6cd.js",
    "revision": "59497021c143019e36c84a5e75a8af4d"
  },
  {
    "url": "assets/js/11.35c3dd28.js",
    "revision": "ee0942712ba823c75299128ae8fde70c"
  },
  {
    "url": "assets/js/12.6ebb0912.js",
    "revision": "18f983e858abe6ca0491a6969e3056ec"
  },
  {
    "url": "assets/js/13.657655b5.js",
    "revision": "adc26c4609e0715e07b9abc69cb1d18a"
  },
  {
    "url": "assets/js/14.9e4fa9ec.js",
    "revision": "3f2ab8837786110c39af1bf47e6d9298"
  },
  {
    "url": "assets/js/15.b51028bf.js",
    "revision": "cd8190548d1730313a5d62e0968de549"
  },
  {
    "url": "assets/js/16.2b866172.js",
    "revision": "940a7eca554cc7da9471b33e348c1a18"
  },
  {
    "url": "assets/js/17.a0c664f3.js",
    "revision": "f1dfddcedd8594a3d82ff0f9adde8fe1"
  },
  {
    "url": "assets/js/18.4ecbe4ac.js",
    "revision": "95cb208ac94132615b1c560040b04eab"
  },
  {
    "url": "assets/js/19.ffcd6cc4.js",
    "revision": "f1474c909bd31704b14a1801cc6f3acd"
  },
  {
    "url": "assets/js/2.4126087f.js",
    "revision": "b035e752537ee4cc9142ae4994d4049e"
  },
  {
    "url": "assets/js/20.d561fbcf.js",
    "revision": "ed0d4975b19c3768e3cb5a411d104439"
  },
  {
    "url": "assets/js/3.1c4d6711.js",
    "revision": "1dc7bb9b59513afce1d8ab8c82054966"
  },
  {
    "url": "assets/js/4.d2fec08b.js",
    "revision": "b15f7dc532f67318c76ef8495c4fcea0"
  },
  {
    "url": "assets/js/5.a1185fcc.js",
    "revision": "9676be1f71bbe93c25839b4d3b1668f6"
  },
  {
    "url": "assets/js/6.5e514576.js",
    "revision": "f2cde98806615e4b02c8940edb2c095f"
  },
  {
    "url": "assets/js/7.875c9ab4.js",
    "revision": "2094808f3e2510dd259f587ecd94426c"
  },
  {
    "url": "assets/js/8.881d5ef1.js",
    "revision": "13b3260b6cf321e7ef40d3eb49d5c6d1"
  },
  {
    "url": "assets/js/9.45d183d2.js",
    "revision": "7907d0bcb9f8abfb3c362abf1bd327bb"
  },
  {
    "url": "assets/js/app.4309c7a8.js",
    "revision": "01e99700c306a4a0167296dc4a5f5750"
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
    "revision": "019453ff2c50a92682db327c93536fa4"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "428509246c9258281d783925934ffffc"
  },
  {
    "url": "en/index.html",
    "revision": "e10a14fbd9ce9b4796918212e6e39af0"
  },
  {
    "url": "en/interest.html",
    "revision": "e075d8813cbd0477653421e1c376423f"
  },
  {
    "url": "en/portfolio.html",
    "revision": "b23e014b82bf9948306fb2e1084f83bd"
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
    "revision": "736131e176a2304a1f940d5cb456bf34"
  },
  {
    "url": "interest.html",
    "revision": "7255cd25ff41c1546b5afa9cd42092d9"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio.html",
    "revision": "6a842d061ae6bcb9872c03f4add2c590"
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
