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
    "revision": "00d7956168bad841b29b4ce9c544f267"
  },
  {
    "url": "article/index.html",
    "revision": "ed3962e1423c80f06a2cf7a4e8d98257"
  },
  {
    "url": "article/markdownDemo.html",
    "revision": "5d31a050ce073d7a090c1fc5002eadb6"
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
    "url": "assets/img/heartbeat_pirate_scifi_red_cube.3abe16a3.png",
    "revision": "3abe16a37623762ed5fbba1543ba1aa8"
  },
  {
    "url": "assets/img/hyperRacing_Arena.d5d53a55.jpg",
    "revision": "d5d53a55bac55a456931ef941265c355"
  },
  {
    "url": "assets/img/hyperRacing_car.cd026d03.png",
    "revision": "cd026d031041d0708e6fcbb9597e3dfe"
  },
  {
    "url": "assets/img/image_aiMaze.f1b0f614.jpg",
    "revision": "f1b0f6141ed2f8d2da068038ede24d16"
  },
  {
    "url": "assets/img/lastdruid_shadow_sun_in_tree.0bff4da9.jpg",
    "revision": "0bff4da9b7e1c3f8852cd69996411807"
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
    "url": "assets/js/10.b2f60f8a.js",
    "revision": "0c0115c64631d17f0a54e69674e2f6fd"
  },
  {
    "url": "assets/js/11.93e67896.js",
    "revision": "9d8833f2ed23ffe7af88fdc2b63e6237"
  },
  {
    "url": "assets/js/12.a942a2d6.js",
    "revision": "32f53620cd0af36dd9c5b6ac82a9cf1b"
  },
  {
    "url": "assets/js/13.63952513.js",
    "revision": "26fafa2d31faa90920df3e51c0dfa4a0"
  },
  {
    "url": "assets/js/14.a9cbc09c.js",
    "revision": "43bffcee8b47ab7126f7b2ef048ddb1d"
  },
  {
    "url": "assets/js/15.36e5bc28.js",
    "revision": "bc041561e408ef30b868ed1108bb43a4"
  },
  {
    "url": "assets/js/16.b4dc59d5.js",
    "revision": "70b2e0327564c21d9d14f57eb063c519"
  },
  {
    "url": "assets/js/17.787d58e3.js",
    "revision": "afb2b4200cb224902e209da207365756"
  },
  {
    "url": "assets/js/18.8c98dd95.js",
    "revision": "c6f9dba998687951d6f650ab50f07ae4"
  },
  {
    "url": "assets/js/19.34310692.js",
    "revision": "536fad85de0559c3eae1408ebb9e9b25"
  },
  {
    "url": "assets/js/2.e0d1afa3.js",
    "revision": "cacc9f348e5cbc591503a5cf77a9ffe2"
  },
  {
    "url": "assets/js/20.35da5834.js",
    "revision": "b3c0cdf814a889ebe160db3fd3427fd8"
  },
  {
    "url": "assets/js/3.78153e54.js",
    "revision": "321261f201c0311c939877a092a9980c"
  },
  {
    "url": "assets/js/4.28cda93e.js",
    "revision": "bbf1b5e30dce5702e232b198a9a2c857"
  },
  {
    "url": "assets/js/5.31471659.js",
    "revision": "91f355f4ba04d0175009b76e1646d3d4"
  },
  {
    "url": "assets/js/6.97a25a9b.js",
    "revision": "3fef1e6b2ede30d9c11e6b53bc43febc"
  },
  {
    "url": "assets/js/7.8872ee6a.js",
    "revision": "eee89b2dacebc11f62e417d8abdfe783"
  },
  {
    "url": "assets/js/8.4c4f2df0.js",
    "revision": "ca713a92b1b3c08d7e9cf8bd1e31af99"
  },
  {
    "url": "assets/js/9.30c067a6.js",
    "revision": "aee0cea0bba6474c2c676ab5c7a20f21"
  },
  {
    "url": "assets/js/app.b4ec5e22.js",
    "revision": "fea8c0cc1279e25c726f783153648385"
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
    "revision": "1ea2e85f2ed342a49fa096df3bfd4317"
  },
  {
    "url": "en/article/secure-access-with-ssh-keys.html",
    "revision": "a535c57557aff8f89a05587e8c011795"
  },
  {
    "url": "en/index.html",
    "revision": "14faef761a448f7f5a141678ed353025"
  },
  {
    "url": "en/interest.html",
    "revision": "d643e97d6443a5e37ff74cd3020a7ae8"
  },
  {
    "url": "en/portfolio.html",
    "revision": "be5d7906bcf762c86d24e124b9056c54"
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
    "revision": "932dfeafcb039e715d783a2f70706a56"
  },
  {
    "url": "interest.html",
    "revision": "92106d2fcd1dffb721aa10fe57237c1f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "portfolio.html",
    "revision": "7a913d7e4865ad99da40f0f20e5a527f"
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
