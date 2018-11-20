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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4097f77d0e07b152d11123329aee5afb"
  },
  {
    "url": "assets/css/0.styles.567ab0ff.css",
    "revision": "abe2a0d1f77101fa528f38d1538b5a29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.334ea831.js",
    "revision": "bacb69c25f9dbca6ddca92a6685cf38e"
  },
  {
    "url": "assets/js/11.5d1ccb39.js",
    "revision": "6fef180967e0e522312b44536b4e4181"
  },
  {
    "url": "assets/js/12.3889a167.js",
    "revision": "9047bd13d89fd5f281221a5ed993081f"
  },
  {
    "url": "assets/js/13.8b676fda.js",
    "revision": "64b37ed6e8398064d80fe674b12607f4"
  },
  {
    "url": "assets/js/2.699d525e.js",
    "revision": "054c3464374d916b1ad258abb398cdfc"
  },
  {
    "url": "assets/js/3.78256823.js",
    "revision": "c7626fedf270055e36d178a28883c77d"
  },
  {
    "url": "assets/js/4.736b8518.js",
    "revision": "d83489ef5e448a65bf0481dbd5efb691"
  },
  {
    "url": "assets/js/5.6d81e739.js",
    "revision": "c297af91f44caa0f2e0cc78ba2311075"
  },
  {
    "url": "assets/js/6.453fede1.js",
    "revision": "14db9cdb8618e7b02612e2994d75726d"
  },
  {
    "url": "assets/js/7.8dcd91db.js",
    "revision": "a1050295fd3f8e48c1b0de63bd1ce5cd"
  },
  {
    "url": "assets/js/8.b6113d27.js",
    "revision": "8e1287ba1b9478afc3afe2d248cde094"
  },
  {
    "url": "assets/js/9.187293bd.js",
    "revision": "d2638b1fc156721f7c9f34a302a59846"
  },
  {
    "url": "assets/js/app.08611d20.js",
    "revision": "4a99e43628b5d8216ffcf18e9f9a676c"
  },
  {
    "url": "hero.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "8612063486ec233b14b61c641797b3c5"
  },
  {
    "url": "logo.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "project/index.html",
    "revision": "6f6782f2b4c408072a4d9a8784369f9a"
  },
  {
    "url": "specification/cancel.html",
    "revision": "92be26a72f6e8d00ded0f5bd40f2cba2"
  },
  {
    "url": "specification/change.html",
    "revision": "f70debc3fe7857403eee96866f7b3aa1"
  },
  {
    "url": "specification/index.html",
    "revision": "1e64bef76d4845a475e692327b2afc39"
  },
  {
    "url": "specification/menu.html",
    "revision": "cec40818fe2f9cb26fde586c9ced429c"
  },
  {
    "url": "specification/others.html",
    "revision": "94c5d64d1f076bd83baa1fc6b2d1060b"
  },
  {
    "url": "specification/reservation.html",
    "revision": "b27dcf2104e50efc43bf3d42eaf72920"
  },
  {
    "url": "specification/settings.html",
    "revision": "f0e39e44b3458ffe1b41f7692c3b9857"
  },
  {
    "url": "specification/stop.html",
    "revision": "31b845d4025b0a38f85b02cbea7df3e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
