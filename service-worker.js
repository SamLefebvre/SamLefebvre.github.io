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
    "revision": "2181f8a980b0d78f54490b5bd9b73614"
  },
  {
    "url": "article/index.html",
    "revision": "24fc50b67cdd35f2af57bed4b0069fdd"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "64e132057333bd32681f27922add51a0"
  },
  {
    "url": "assets/css/0.styles.8884e604.css",
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
    "url": "assets/js/10.ddf64250.js",
    "revision": "16ef12a7b36ad5f19314c5fea6d90363"
  },
  {
    "url": "assets/js/11.b3b9751f.js",
    "revision": "3c88eee05e7a29bce5c188bd4c1af581"
  },
  {
    "url": "assets/js/12.606b3ef4.js",
    "revision": "fedbfbbc86d13a76c5bc6587a68ed1f7"
  },
  {
    "url": "assets/js/13.a6d8db77.js",
    "revision": "94bfaa8446e60535a5bb6e583273b17a"
  },
  {
    "url": "assets/js/14.c1931c57.js",
    "revision": "f068732129520dd494b804e0a433aa37"
  },
  {
    "url": "assets/js/15.7c251619.js",
    "revision": "304ac2fc42dcfeeb15774995d1086a1b"
  },
  {
    "url": "assets/js/16.e5a8c490.js",
    "revision": "da8e352d4ca6edb88fa2d34e74d8cf4c"
  },
  {
    "url": "assets/js/17.7ae15941.js",
    "revision": "fcd2b59f23844838fdf72faa468750c6"
  },
  {
    "url": "assets/js/18.8dba1ecc.js",
    "revision": "8c96c415dba7edc9f7e8d448d486ac05"
  },
  {
    "url": "assets/js/19.d3e71cce.js",
    "revision": "4505021d0fd2cd11e4dc8d5a457d9eed"
  },
  {
    "url": "assets/js/2.4126087f.js",
    "revision": "92c8ee08ef9c94f84c1048abdc823f72"
  },
  {
    "url": "assets/js/20.d561fbcf.js",
    "revision": "ed0d4975b19c3768e3cb5a411d104439"
  },
  {
    "url": "assets/js/3.039b2bb5.js",
    "revision": "0678909f34bfb25075da7299f26b7eb1"
  },
  {
    "url": "assets/js/4.9c81d16e.js",
    "revision": "04d5aed3e60ac3e4050973843ae22bde"
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
    "url": "assets/js/8.37ab7d27.js",
    "revision": "0e3b197ebe04a68346feada320c8b2a0"
  },
  {
    "url": "assets/js/9.a4ac1c59.js",
    "revision": "4cb6698cec85444813ff8f1b1fdbcde7"
  },
  {
    "url": "assets/js/app.be8070e1.js",
    "revision": "ceef7aa7ac1cd1bc2c0bb499c67198ab"
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
    "revision": "f17d465291cfe3807d863188c84d0265"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "b535ec8c3ca0daac4aa4edbb241f7bcc"
  },
  {
    "url": "en/index.html",
    "revision": "b00884179344bcf5306e530d996e529a"
  },
  {
    "url": "en/interest.html",
    "revision": "fe685fb023728864850b2ba0b095bd57"
  },
  {
    "url": "en/portfolio.html",
    "revision": "e8c090739626743105f516c4cdb986e9"
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
    "revision": "175d7ad81292a54480e4245cc95cfb1d"
  },
  {
    "url": "interest.html",
    "revision": "f979282ca1777b4459a0c7f0db1936ab"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio.html",
    "revision": "c8a7b4177a4c4246c855320ef16254c2"
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
