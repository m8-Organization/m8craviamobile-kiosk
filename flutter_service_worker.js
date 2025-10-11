'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f431950603b146298476ea9ef89f3e71",
"assets/AssetManifest.bin.json": "15b9956fbc2e28905fa5a1941af98586",
"assets/AssetManifest.json": "c9680727ea67f41a536161dfc4433835",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "a1007cb176b5b6fbfa37f5a662bb0818",
"assets/assets/fonts/OleoScriptSwashCaps-Regular.ttf": "cedd93aff0900036032396ae5ba6fee2",
"assets/assets/fonts/ReemKufi-Regular.ttf": "c71ba9425dce6fbf6b4545af10d6b472",
"assets/assets/fonts/Rubik.ttf": "afc324d8b8ab76eb8dd2f42bcb1aff4e",
"assets/assets/icons/add_on.svg": "5b7b03ef2f5e99b4a79c70640ffa71bc",
"assets/assets/icons/all.png": "c245975b2c0b5c86b97cd42465910c2d",
"assets/assets/icons/backarrow.svg": "9bc0ab92df6f73dcb02d08f6f9f80180",
"assets/assets/icons/banner1.png": "99da2ea5f5b62453a04f0237d88b34e9",
"assets/assets/icons/bgimg.png": "c2897ac3255c2479ee8b44cd35f8f1ac",
"assets/assets/icons/burger.png": "027d55208ccdbf7a958d05bdeb1e2a76",
"assets/assets/icons/burger4.png": "f067f14d2caafdff04c9817c1c59df30",
"assets/assets/icons/Burger5.png": "c8a0cfc180701a03f48865a73f56d6ea",
"assets/assets/icons/burger6.png": "e2f2132a03ee2b15bb6131763812d43c",
"assets/assets/icons/cancel.svg": "2a00eac2ec60bb8401dacda4970f15f8",
"assets/assets/icons/combobadge.png": "b5df9bd6ac971155224687971bdfdac5",
"assets/assets/icons/cross.svg": "ca7d7a2a2ed8d9c36998a6f0db206fb6",
"assets/assets/icons/dinein.svg": "89f1bcd5f6e9f20a74b4007f1bffb4d7",
"assets/assets/icons/Ellipse%252011.svg": "59259a58beddf029d086f40ec274f267",
"assets/assets/icons/emoji.svg": "d56e515cec46eda6854d4156b005dfa5",
"assets/assets/icons/emoji1.png": "8150594cb7db6aec29f58ba9f5377cdd",
"assets/assets/icons/logo1.svg": "51d6dfec30470584787a3880371264cb",
"assets/assets/icons/logo2.png": "5d84886b23b96fc665f537c9ee0544d8",
"assets/assets/icons/logo5.png": "ddf06e4348bccb718da18ef9f9d7dae3",
"assets/assets/icons/logout.svg": "63384637eb44f02fb26ad23b609c9092",
"assets/assets/icons/lottie1.json": "5cc9515563136bdecafbbaf92d193172",
"assets/assets/icons/lottie2.json": "3c4f7ab166e471afe1463273c8821907",
"assets/assets/icons/lottie3.json": "8c944fa750e12da9c5a2bdb458f08ed1",
"assets/assets/icons/M8%2520cravia%2520logo%2520final%25203.svg": "51d6dfec30470584787a3880371264cb",
"assets/assets/icons/offer1.png": "8c03c7ba5f372f40c5d6671272bfcf63",
"assets/assets/icons/onboard1.png": "9a01bbe213e5abe850890142c15b80b3",
"assets/assets/icons/onboard2.png": "f2ebaebdd295256449bb9108f08d4028",
"assets/assets/icons/onboard3.png": "63a0c03b10c033cfb78ce2addcd75898",
"assets/assets/icons/onboard4.png": "50441b020ccf3f6e04835c37f6da1b1a",
"assets/assets/icons/onboard7.png": "bdb05c30713826225457710bb0fa6aac",
"assets/assets/icons/payment.png": "7d61c77636434008d6f93e933a308fe9",
"assets/assets/icons/qrcode.png": "8eaab4272c3c174320515043d03c3cb9",
"assets/assets/icons/receipt.png": "565bcc0a1021436090adcac9c86ef087",
"assets/assets/icons/spoon.svg": "9f56d312bbccf42a1992a13bb976ad4b",
"assets/assets/icons/success.json": "9247fd57b76a9a01c42d514d1a5df630",
"assets/assets/icons/success.svg": "bed577dd959dcc967e9b3db204397ea0",
"assets/assets/icons/take.svg": "7f1e93f10c622bbf9ee6c625af9e25f2",
"assets/assets/icons/takeaway.svg": "3beb3a8f053fe161f6a4711f19e91cc2",
"assets/assets/icons/tick_icon.svg": "282c7c28467f1eea28731d8a5f06ccd6",
"assets/assets/icons/time.svg": "2da8dbcf6a4e118426191bea43f596f2",
"assets/FontManifest.json": "88ccc5b8aa45bc63f4004ba8ee7f8df5",
"assets/fonts/MaterialIcons-Regular.otf": "2ce21698cb23611828b2c75e03d2dbda",
"assets/NOTICES": "69ca64b05180e5e10614a47da4d42b15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "16ddffe0be869c393c3d21bd56a05263",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d0ec97c92df8431c5f3a2d5eda4fb0db",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b4a8affdcf502da7c21871388bd0117",
"/": "7b4a8affdcf502da7c21871388bd0117",
"main.dart.js": "ba0bd798ce5a2c905eb91e8ba55f97f3",
"manifest.json": "4853a8b081138af042599da5ea1d8bc9",
"version.json": "5b566adffbdad3a795b45a2b94c4b45c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
