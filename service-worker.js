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
    "revision": "b4f90afa5c6c1cbd257925f52cd93852"
  },
  {
    "url": "article/index.html",
    "revision": "d75f8bcfbb6fb7e76efe827a4a1cbc0d"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "f57501f89f6528c4ae879d3b8572e657"
  },
  {
    "url": "article/radarChart.html",
    "revision": "3dc9123f6803dba217446283e4d7230b"
  },
  {
    "url": "assets/css/0.styles.42a07084.css",
    "revision": "1bb44f3a7c3053b06fb81edc75ff06e0"
  },
  {
    "url": "assets/img/donut-small.1a22029a.jpg",
    "revision": "1a22029ab2364ad4e9aa88be956bc17d"
  },
  {
    "url": "assets/img/donut.0200e3cd.jpg",
    "revision": "0200e3cd306ec9f3e5753224ed9549a8"
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
    "url": "assets/img/gti745_unity_sound_matrix-small.ca228cc7.jpg",
    "revision": "ca228cc791e2e868e01e78bb86ddeeb6"
  },
  {
    "url": "assets/img/heartbeat_pirate_scifi_demo-small.a6d1dea8.jpg",
    "revision": "a6d1dea83d5abf57e31ccb3422c9c681"
  },
  {
    "url": "assets/img/heartbeat_pirate_scifi_ennemies-small.b9ed9547.jpg",
    "revision": "b9ed954723644b250799adf73efe27da"
  },
  {
    "url": "assets/img/heartbeat_pirate_scifi_explosion-small.0a679b94.jpg",
    "revision": "0a679b94aab305fa55b095300c5a6093"
  },
  {
    "url": "assets/img/heartbeat_pirate_scifi_red_cube-small.c34fd623.jpg",
    "revision": "c34fd6234b30f7cbc64eae78dab4b48e"
  },
  {
    "url": "assets/img/heartbeat_pirate_scifi_red_cube.3abe16a3.png",
    "revision": "3abe16a37623762ed5fbba1543ba1aa8"
  },
  {
    "url": "assets/img/hyperRacing_Arena-small.54fee0fe.jpg",
    "revision": "54fee0fe2621ff082a02001493dde17a"
  },
  {
    "url": "assets/img/hyperRacing_Arena.d5d53a55.jpg",
    "revision": "d5d53a55bac55a456931ef941265c355"
  },
  {
    "url": "assets/img/hyperRacing_car-small.d1c2eece.jpg",
    "revision": "d1c2eece940f1c8636f9972083403ed5"
  },
  {
    "url": "assets/img/hyperRacing_car.cd026d03.png",
    "revision": "cd026d031041d0708e6fcbb9597e3dfe"
  },
  {
    "url": "assets/img/image_aiMaze-small.5a9bf1d3.jpg",
    "revision": "5a9bf1d37416ef73c5cdb5ba73969a43"
  },
  {
    "url": "assets/img/image_aiMaze.f1b0f614.jpg",
    "revision": "f1b0f6141ed2f8d2da068038ede24d16"
  },
  {
    "url": "assets/img/lastdruid_shadow_sun_in_tree-small.d847bcc4.jpg",
    "revision": "d847bcc40bfc62354e60e8ec7d634883"
  },
  {
    "url": "assets/img/lastdruid_shadow_sun_in_tree.0bff4da9.jpg",
    "revision": "0bff4da9b7e1c3f8852cd69996411807"
  },
  {
    "url": "assets/img/old_Cabin_woods-small.49d2505f.jpg",
    "revision": "49d2505f9a2e98599cf59cc942103fe2"
  },
  {
    "url": "assets/img/old_Cabin_woods.77b65507.jpg",
    "revision": "77b65507dabd2376261b4daddfff47bf"
  },
  {
    "url": "assets/img/radarChart_final.3b1a0c72.png",
    "revision": "3b1a0c722f5d3324fc2fae2a4ce40cc0"
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
    "url": "assets/js/10.add00345.js",
    "revision": "d2d71bcdceb7bd2f5eb226c21657c5d7"
  },
  {
    "url": "assets/js/11.17e3f6e4.js",
    "revision": "fd5594e3ee931507d1d87108a06a78b3"
  },
  {
    "url": "assets/js/12.3a5b0c9b.js",
    "revision": "6dbd0911960512a128102d7318205412"
  },
  {
    "url": "assets/js/13.b114b9ad.js",
    "revision": "0030919bcae45e352b45c2fe06eeb725"
  },
  {
    "url": "assets/js/14.ffe8d791.js",
    "revision": "adcd65e25c40968e4d5e35c22b7be044"
  },
  {
    "url": "assets/js/15.0fdf8232.js",
    "revision": "2ef62a380d0a7b30c9b90861b1a54a15"
  },
  {
    "url": "assets/js/16.e18d7c96.js",
    "revision": "a9e60cefa11a88939ec85e120f49cff9"
  },
  {
    "url": "assets/js/17.a13f6eeb.js",
    "revision": "6fd714e79bd1cdb3459b033ed0e70be5"
  },
  {
    "url": "assets/js/18.edbc8eee.js",
    "revision": "66d16d0f94e823806f16561aa48fbf5f"
  },
  {
    "url": "assets/js/19.6ae4e548.js",
    "revision": "66960df140903e88ab627c426f417eb4"
  },
  {
    "url": "assets/js/2.a5cea50b.js",
    "revision": "5d5dc37e9b071456a461004796a1fae9"
  },
  {
    "url": "assets/js/20.73094b7a.js",
    "revision": "f20adc7cff8b45820369749839d0c001"
  },
  {
    "url": "assets/js/21.0bee4820.js",
    "revision": "28790e4b33d6e920797252757b90414b"
  },
  {
    "url": "assets/js/22.5f19fb72.js",
    "revision": "e024b73a11b25f922e6f9b6efeaf8c24"
  },
  {
    "url": "assets/js/23.da51ad39.js",
    "revision": "24e5f3b8d9b7d8798c0ff6ede0a9424f"
  },
  {
    "url": "assets/js/24.357038a7.js",
    "revision": "ec36b14b2da17230e94845defc524ac8"
  },
  {
    "url": "assets/js/25.554d3581.js",
    "revision": "e2e42a870c85e622167aeb0152c8e66a"
  },
  {
    "url": "assets/js/3.498ae447.js",
    "revision": "42e37370e6478e9a9d7ce7e0fc15f8eb"
  },
  {
    "url": "assets/js/4.29cb6fb4.js",
    "revision": "2dfdee033da16046f415d8ce22a98715"
  },
  {
    "url": "assets/js/5.791643eb.js",
    "revision": "a791527433dfc35e7feb28058690b312"
  },
  {
    "url": "assets/js/6.e2ad4c1c.js",
    "revision": "bc42ccda6fa911bc0ffbe73728a92440"
  },
  {
    "url": "assets/js/7.f7491fed.js",
    "revision": "37d87a00a1bf1e5d4ff94f6100a1d716"
  },
  {
    "url": "assets/js/8.5537c2ab.js",
    "revision": "c8aa817d87ed6da6a1bb20275d6cfee5"
  },
  {
    "url": "assets/js/9.ba77b2d3.js",
    "revision": "007ed85e0f8893ed4c77d6eae07fa553"
  },
  {
    "url": "assets/js/app.3999ab98.js",
    "revision": "2985f2526fbfdddb6eb749a568b373aa"
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
    "revision": "2ee7efdb1cfa792d2663f59457b94df2"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "0a4a83538f2293b5a6caee36e5788873"
  },
  {
    "url": "en/index.html",
    "revision": "3a38e8f55173de42d87ef49c52f94343"
  },
  {
    "url": "en/interest.html",
    "revision": "13c7a99e59b1263e33ea2ff0a210ce55"
  },
  {
    "url": "en/portfolio.html",
    "revision": "ca854d38d5d9e23397b7a6bbf11f980b"
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
    "url": "img/synapsETS/light_pulse_detect.png",
    "revision": "759f45cf6782d14083a46870c38f4fe0"
  },
  {
    "url": "index.html",
    "revision": "41e34d559b09769f5cf422538b869f5d"
  },
  {
    "url": "interest.html",
    "revision": "7d9ba7477ff6bd1d58035a324afe525c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio/blender.html",
    "revision": "dc84c0097b3876a2aece3ee97e7cc988"
  },
  {
    "url": "portfolio/index.html",
    "revision": "3df33dfca3cf139ab230043e8382660f"
  },
  {
    "url": "portfolio/unity.html",
    "revision": "d3742dec9ffff45901176f4a19e51ab2"
  },
  {
    "url": "portfolio/web.html",
    "revision": "25903d0d0e4a080664912cb16e79fda9"
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
