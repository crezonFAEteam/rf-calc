/* CRiPL 서비스 워커 — 앱 설치용. 아무것도 저장하지 않는다. 페이지는 열 때마다 캐시 없이 최신을 받는다 (GitHub Pages 10분 캐시 무시) */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  var r = e.request;
  if(r.mode === 'navigate' || /\/prices\.bin$/.test(new URL(r.url).pathname)){
    e.respondWith(fetch(r, {cache: 'no-store'}).catch(function(){ return fetch(r); }));
  }
});
