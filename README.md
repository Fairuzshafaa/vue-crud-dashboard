# Vue CRUD Dashboard (Vue 3 + Vue CLI)

Frontend untuk halaman **Login** dan **Dashboard** mengikuti desain referensi.
Menggunakan **Vue 3**, **Vuex** untuk state, **vue-router** untuk routing, **mock data** (tanpa backend),
serta **design tokens (CSS variables)** agar tampilan konsisten tanpa hardcode.

## Tech Stack

- Vue 3 + Vue CLI (cli-service 5.x)
- Vuex 4 (state login, data dashboard)
- Vue Router 4 (routing + route guard)
- CSS variables untuk design tokens

## Menjalankan

````bash
vue create vue-crud-dashboard
cd vue-crud-dashboard
npm install -g @vue/cli
npm run serve
```for running this app
git clone https://github.com/Fairuzshafaa/vue-crud-dashboard.git
cd vue-crud-dashboard
npm install
npm run serve

Buka `http://localhost:8080`

## Build Production

```bash
npm run build
````

## Akun Uji (mock)

- **Email**: `karthi@gmmail.com`
- **Password**: `123456`

## Struktur

```
src/
  assets/ (tokens.css, base.css, avatar.jpg)
  components/ (Sidebar, StatCard, UsersTable)
  pages/ (Login, Dashboard)
  router/ (route + guard)
  store/ (Vuex modules: auth, dashboard)
  App.vue, main.js
```

## Catatan

- Route guard mencegah akses ke Dashboard jika belum login.
- Desain dapat disesuaikan lewat `src/assets/tokens.css`.

```

```
