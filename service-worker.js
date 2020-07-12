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
    "revision": "686477f60341bc9618071c1a421cfb85"
  },
  {
    "url": "article/index.html",
    "revision": "f59f9931bd6e03707ba0b954325384cb"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "8c61e62b350d0dc4969e5b36bb435202"
  },
  {
    "url": "article/radarChart.html",
    "revision": "bb213547eeca6388314b42da34baebd6"
  },
  {
    "url": "assets/css/0.styles.24384e3b.css",
    "revision": "a78c31e4068eff94c0424409f0cc9c3c"
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
    "url": "assets/js/10.807279c9.js",
    "revision": "350a2aaa2b4c3885df37e9edb9df391e"
  },
  {
    "url": "assets/js/11.b92e46e8.js",
    "revision": "ab38bb024f3d26835ca844bb299f7637"
  },
  {
    "url": "assets/js/12.f6d4932e.js",
    "revision": "916ccef45b7017a5ebbf96791b31ac67"
  },
  {
    "url": "assets/js/13.89f90943.js",
    "revision": "7e9297ad1a424cc43b9583ca810cedab"
  },
  {
    "url": "assets/js/14.bd88a078.js",
    "revision": "b56c806f8721c7a5e72c6aab1bfe3352"
  },
  {
    "url": "assets/js/15.5b38c78f.js",
    "revision": "b0e73d095322fc1079083f4412c3a71f"
  },
  {
    "url": "assets/js/16.e0c6c1d4.js",
    "revision": "de3a003ce70dbe354ed1db536ef70b49"
  },
  {
    "url": "assets/js/17.21c69ed0.js",
    "revision": "272162f37f44f91da0ee5e0351e3b28e"
  },
  {
    "url": "assets/js/18.e71a77bf.js",
    "revision": "f18a0aa8de675e7a588e27d143ad049c"
  },
  {
    "url": "assets/js/19.18c4b7a7.js",
    "revision": "8f55b310eac069cede9fe09c978b254e"
  },
  {
    "url": "assets/js/2.a561d63a.js",
    "revision": "69d79f8a7c012362f5ab08bacfb0baec"
  },
  {
    "url": "assets/js/20.44492bd1.js",
    "revision": "0b0a4309f8d56ef6b45764dbb2a5539b"
  },
  {
    "url": "assets/js/3.4e402607.js",
    "revision": "b69864ae0111774d4f00d037470a897d"
  },
  {
    "url": "assets/js/4.0459348c.js",
    "revision": "bf986eb17942c9a5a5eb53c1cf9a9c26"
  },
  {
    "url": "assets/js/5.acdd9695.js",
    "revision": "290d9d8824301e3b8b0724fdfcc156d4"
  },
  {
    "url": "assets/js/6.d91ae8f8.js",
    "revision": "29c75f5be8fc7108ed0ba705cdec517e"
  },
  {
    "url": "assets/js/7.90471c1d.js",
    "revision": "5fd21dfe159a9db0542d6db64c2dc335"
  },
  {
    "url": "assets/js/8.fa5b5797.js",
    "revision": "0a26c596a29b3f6540969ae226bb6e79"
  },
  {
    "url": "assets/js/9.72077a4e.js",
    "revision": "82383924e691a5fb5e16e29ee72e1fa5"
  },
  {
    "url": "assets/js/app.5cb082ff.js",
    "revision": "37df877a2c72a5f710517d487b57361e"
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
    "revision": "b2164550073cb19928fa8619cc58bae3"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "e9c009041091c46c484a208575857704"
  },
  {
    "url": "en/index.html",
    "revision": "24d0e4052f2a518132061bcca4909c79"
  },
  {
    "url": "en/interest.html",
    "revision": "4739f2f231c258327449f4e5f791afb7"
  },
  {
    "url": "en/portfolio.html",
    "revision": "5693f39f9b60208f061c8809963d64fc"
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
    "revision": "daa98322182c3a26c45e4b9f427125af"
  },
  {
    "url": "interest.html",
    "revision": "6bea55e1b1cef1dc148404a1527b946e"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio.html",
    "revision": "8a60fae2b0822e3b3b8eadf6842cdc40"
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
