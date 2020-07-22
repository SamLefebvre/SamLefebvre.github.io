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
    "revision": "3fadbeec5f58a10dc6d26fcdb639aaf5"
  },
  {
    "url": "article/index.html",
    "revision": "efd8a17304dd8aed03592e63b0c84015"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "3a02efee2023438ff550a0f7aa983d89"
  },
  {
    "url": "article/radarChart.html",
    "revision": "d429e338c3dbe0348ae3b903a7d26769"
  },
  {
    "url": "assets/css/0.styles.b898e757.css",
    "revision": "a0f1c014847de94fcb2cecd3e133eece"
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
    "url": "assets/js/10.404b0a93.js",
    "revision": "9ad101570a4979d65538325373b7ef05"
  },
  {
    "url": "assets/js/11.ac6a9963.js",
    "revision": "47141301e975f4b78111418d417ad49f"
  },
  {
    "url": "assets/js/12.37a43e0b.js",
    "revision": "79c507a33daa9fe0c962bdf7d5854a83"
  },
  {
    "url": "assets/js/13.5cc917f9.js",
    "revision": "1f674eb55b2db6b303a2f4d364579804"
  },
  {
    "url": "assets/js/14.58b33c31.js",
    "revision": "e4682ead875f6554b101b34ca9b2ecbd"
  },
  {
    "url": "assets/js/15.c015dc93.js",
    "revision": "2ff5adb67e8e16c995759c381dfb3ba4"
  },
  {
    "url": "assets/js/16.c4493db2.js",
    "revision": "bbcd06b174332713bec98d7e693e68b5"
  },
  {
    "url": "assets/js/17.f1a3189c.js",
    "revision": "55fc3260eac729d9ce6c853f0332132e"
  },
  {
    "url": "assets/js/18.45ca88a5.js",
    "revision": "f1700ee2bb57a9f68d9b42e5e90ac9cb"
  },
  {
    "url": "assets/js/19.7b7125a8.js",
    "revision": "87bacd44ff8d6d629c2125caaf2a8083"
  },
  {
    "url": "assets/js/2.b22c20a4.js",
    "revision": "ee8237a283bac14364735261e1df4985"
  },
  {
    "url": "assets/js/20.c1df59c8.js",
    "revision": "94f6aa87626614226ed9d96c9d88b2f8"
  },
  {
    "url": "assets/js/21.54f83adf.js",
    "revision": "ab5274c26829b3af94b1548eb6fb9da6"
  },
  {
    "url": "assets/js/22.ec7ed7ff.js",
    "revision": "7301211545de41552a4518dd58bea862"
  },
  {
    "url": "assets/js/23.3a493d01.js",
    "revision": "39b35778ea8ac5ded6c495ea1854caeb"
  },
  {
    "url": "assets/js/3.f993b2e0.js",
    "revision": "38a5162a70edacb39dc40ef4cd99d546"
  },
  {
    "url": "assets/js/4.749a4728.js",
    "revision": "8b6581ad08bfab932e44209fc09a7abf"
  },
  {
    "url": "assets/js/5.59332b59.js",
    "revision": "7f6b2f79d5120bf6ba258ce7f69f4114"
  },
  {
    "url": "assets/js/6.5e74117e.js",
    "revision": "d8eeab2630dee285953134d0d1d8e1de"
  },
  {
    "url": "assets/js/7.58f01655.js",
    "revision": "8b6962effdd5993ff79161c8ed5bcd82"
  },
  {
    "url": "assets/js/8.eaac45a3.js",
    "revision": "11eb3e7d0dcad881ffb51a95e6519c33"
  },
  {
    "url": "assets/js/9.c16dfc30.js",
    "revision": "b733be7866f2fe017647c8301886dd73"
  },
  {
    "url": "assets/js/app.123cf958.js",
    "revision": "497606f588d5eeafa2cbda15d07248b0"
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
    "revision": "1c37e1a71e76aefe13ed5a80800ef70e"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "6955960be5e66631560bec53d9f0cd71"
  },
  {
    "url": "en/index.html",
    "revision": "337a7ee549d34662c29d30ad9f82c0b5"
  },
  {
    "url": "en/interest.html",
    "revision": "83ae2858ef2d9e2d0156d14aa8914613"
  },
  {
    "url": "en/portfolio.html",
    "revision": "73185d187a3259c4ee96961cdf0cbd50"
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
    "revision": "85112c257bc4dd25fccaf6a3b07ae1da"
  },
  {
    "url": "interest.html",
    "revision": "9e32916379faa652a12b2ae1bab33986"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio/blender.html",
    "revision": "5135a53404e26563143ccfa5043fc8c1"
  },
  {
    "url": "portfolio/index.html",
    "revision": "2bc619683c7c2473be0bbe1bc902d12c"
  },
  {
    "url": "portfolio/unity.html",
    "revision": "bb961e08c252953c654b0e0c5552ea1e"
  },
  {
    "url": "portfolio/web.html",
    "revision": "a4db747b93e2c6e56ddbd1cf9ec54dea"
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
