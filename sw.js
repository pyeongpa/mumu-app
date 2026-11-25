const CACHE = 'mumu-shell-8d2ad8eb285d';
const SHELL = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-maskable.png', '/icons/apple-touch-icon.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => {event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mumu-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Only the public static app shell is cached. Never cache API or private user data.
self.addEventListener('fetch',event=>{
 const r=event.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==self.location.origin)return;
 if(r.mode==='navigate'&&(u.pathname==='/'||u.pathname==='/index.html')){
   event.respondWith(fetch(r,{cache:'no-cache'}).catch(()=>caches.match('/')));return;
 }
 if(SHELL.includes(u.pathname)&&u.pathname!=='/'){
   event.respondWith(fetch(r).catch(()=>caches.match(u.pathname)));return;
 }
});
