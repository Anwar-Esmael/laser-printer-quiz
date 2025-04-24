const CACHE_NAME = "laser-printer-quiz-cache-v1";
const urlsToCache = [
  "./",                // الصفحة الرئيسية
  "./index.html",      // الملف الأساسي
  "./style.css",       // التنسيق
  "./script.js",       // سكريبت
  "./manifest.json",   // تعريف التطبيق
  "./icon-192.png",    // الأيقونة الصغيرة
  "./icon-512.png"     // الأيقونة الكبيرة
];

// حدث التثبيت: تخزين الملفات في الكاش (Cache Storage)
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("فتح الكاش وتمت إضافة الملفات");
      return cache.addAll(urlsToCache);
    })
  );
});

// حدث الجلب (Fetch): استرجاع الملفات المخبأة أو طلب جديد
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request); // أولوية للكاش ثم الإنترنت
    })
  );
});

// حدث التفعيل: حذف الكاش القديم إذا تغيرت النسخة
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(name) {
          if (name !== CACHE_NAME) {
            console.log("حذف الكاش القديم:", name);
            return caches.delete(name);
          }
        })
      );
    })
  );
});
