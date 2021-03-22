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
    "revision": "4e2fbaa3807f9d71c004d62f84d9fc54"
  },
  {
    "url": "article/index.html",
    "revision": "0a938e09a40fff6a58af6b8c7cb144e4"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "763d7a96c0a15fe0e7d4ec39806b7610"
  },
  {
    "url": "article/radarChart.html",
    "revision": "ccad92d2c94ab7191b2604c4805e564f"
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
    "url": "assets/js/10.ef4101a7.js",
    "revision": "bc44e5c92c34dc3c600c60368c1e66c5"
  },
  {
    "url": "assets/js/11.3ccfc3be.js",
    "revision": "e7bbd05178413621f4f5a4cb25bb08da"
  },
  {
    "url": "assets/js/12.82657fed.js",
    "revision": "a5a8e05eb7480402ed6e487fc7e20d42"
  },
  {
    "url": "assets/js/13.80eddc15.js",
    "revision": "3e46ddbd344ed0aaf8ce15da03edf028"
  },
  {
    "url": "assets/js/14.6b1307a9.js",
    "revision": "dd4c24ecc8040d46b872c7bce151d3b6"
  },
  {
    "url": "assets/js/15.54533736.js",
    "revision": "28aab95fd2a6761d128c97a953ae0b45"
  },
  {
    "url": "assets/js/16.5dde4e0d.js",
    "revision": "315a8d3ef58b5ab12726fbe0db9ddc65"
  },
  {
    "url": "assets/js/17.645de045.js",
    "revision": "0e9637f2f4617cc3a315a5a03cb70659"
  },
  {
    "url": "assets/js/18.fe456af8.js",
    "revision": "2c2e3ca48bb817b5182fed5c8baeca84"
  },
  {
    "url": "assets/js/19.de6337f0.js",
    "revision": "9a854f3e79712fdf112426121c0d653e"
  },
  {
    "url": "assets/js/2.754fa779.js",
    "revision": "6d4b661136e2bcf9977f5c4e5a4f13ad"
  },
  {
    "url": "assets/js/20.6c39376a.js",
    "revision": "cda6cc43727a8c2a6401cb27f2f52147"
  },
  {
    "url": "assets/js/21.fb330f98.js",
    "revision": "84fb55851635b4737534809aa5b28a9c"
  },
  {
    "url": "assets/js/22.70ad0fc8.js",
    "revision": "1fff775a0c0596cae1b17d121dd565e2"
  },
  {
    "url": "assets/js/23.a913f7b5.js",
    "revision": "0c8f56c3f02c92f4cacfbea939ac0212"
  },
  {
    "url": "assets/js/24.55ddaaa5.js",
    "revision": "5194647c4af1ab767ddb69b6e6a4f72a"
  },
  {
    "url": "assets/js/25.e672bf5c.js",
    "revision": "16780188d681630b60b974e29d89831c"
  },
  {
    "url": "assets/js/3.c95ac2b6.js",
    "revision": "6d477c9c7b055ddaf2c504a5c975c79c"
  },
  {
    "url": "assets/js/4.605282d0.js",
    "revision": "353a90bf0ac1d4b109ec48c3c54cdcba"
  },
  {
    "url": "assets/js/5.47dc3acc.js",
    "revision": "e84c313fc8f768336ac9db68fb8edb69"
  },
  {
    "url": "assets/js/6.dfad8deb.js",
    "revision": "7c0b02b780c3364dee781ab44cb1ca4c"
  },
  {
    "url": "assets/js/7.87b033af.js",
    "revision": "ab7a6c9cb2f2e74e5878f5b013b8b02b"
  },
  {
    "url": "assets/js/8.a0203723.js",
    "revision": "019f98e3654bc25f813b22a92d809175"
  },
  {
    "url": "assets/js/9.a50f968a.js",
    "revision": "4c80d7eba29cc8357d538736074697ca"
  },
  {
    "url": "assets/js/app.496d063e.js",
    "revision": "6e88d95ec9681bd14f3f911f120c4713"
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
    "revision": "b995426040e81ff585537629752809c0"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "b9d96b37834812f61f1784b73744cbba"
  },
  {
    "url": "en/index.html",
    "revision": "fd84ae3cc31701b0825d17acf945e21d"
  },
  {
    "url": "en/interest.html",
    "revision": "e6e354bc9953095a620b51ca97d6226c"
  },
  {
    "url": "en/portfolio.html",
    "revision": "dddd10bc118d3bfe9138bbf73bcfd143"
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
    "revision": "bab651b206e8a066873d177f70f3cc93"
  },
  {
    "url": "interest.html",
    "revision": "85c757b6bfdaf302a71dc2420e53be5b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio/blender.html",
    "revision": "e8cc1eb26722ccaafe7ed66c56bb9a01"
  },
  {
    "url": "portfolio/index.html",
    "revision": "2cb7fe53278c4b2e4ebc0575a38603bf"
  },
  {
    "url": "portfolio/unity.html",
    "revision": "9e17b565dcf7fbe45f608bbb9a844575"
  },
  {
    "url": "portfolio/web.html",
    "revision": "617a6fc6bf50d81a9153bb208624a72d"
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
