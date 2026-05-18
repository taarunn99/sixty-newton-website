/**
 * Self-cleaning service worker.
 *
 * Our site does NOT use a real service worker. This file exists purely to
 * neutralise any stale SW left behind by another project that previously ran
 * on the same origin (typical dev gotcha on localhost:3000).
 *
 * On install + activate, it unregisters itself and wipes every cache it can
 * see — leaving the browser with a clean slate for our app.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Delete every cache the SW can see (whatever stale project put them there).
      try {
        const names = await caches.keys();
        await Promise.all(names.map((n) => caches.delete(n)));
      } catch {
        /* no-op */
      }
      // Unregister this SW so the browser stops asking for /sw.js.
      try {
        await self.registration.unregister();
      } catch {
        /* no-op */
      }
      // Force every controlled client (open tab) to reload with the new (no-SW) state.
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        try { client.navigate(client.url); } catch { /* no-op */ }
      }
    })(),
  );
});

// Don't intercept anything — pass requests straight through to the network.
self.addEventListener("fetch", () => {});
