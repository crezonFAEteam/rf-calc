/* 쎄이기타 앱 설치용 — 인터넷이 되면 늘 새 판(네트워크 먼저), 안 되면 마지막으로 받은 판 */
const C='saygita-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  const q=e.request,u=new URL(q.url);
  if(q.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(q).then(r=>{if(r.ok){const c=r.clone();caches.open(C).then(x=>x.put(q,c)).catch(()=>{})}return r})
    .catch(()=>caches.match(q,{ignoreSearch:true}).then(r=>r||caches.match('./',{ignoreSearch:true}))));
});
