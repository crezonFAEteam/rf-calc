/* CRiPL 서비스 워커 — 앱 설치용. 아무것도 저장하지 않는다 (항상 최신 페이지) */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
