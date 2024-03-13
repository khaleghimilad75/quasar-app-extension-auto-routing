Quasar App Extension route-generator
===

\"Nuxt-like\" routing in Quasar projects
 | fixed backward slash 
 | forked from quasar-app-extension-auto-routing

# Install
```bash
quasar ext add route-generator
```
Quasar CLI will retrieve it from the NPM registry and install the extension to your project.

Lastly, dive into `src/router/routes.ts` and use the generated routes:

```ts
import generatedRoutes from './route-generator' // 🤿 Here

const routes = [
  ...generatedRoutes, // 🤿 And here
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
```
