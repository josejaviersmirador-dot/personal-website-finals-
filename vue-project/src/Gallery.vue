<template>
  <div class="gallery-page">
    <router-link to="/" class="home-fab"><i class="bi bi-house-door-fill"></i></router-link>
    <h1 class="page-title">PHOTO GALLERY</h1>

    <section class="gallery-section">
      <h2 class="section-label"><i class="bi bi-person-bounding-box"></i> ME</h2>
      <div class="photo-grid">
        <div class="photo-card"><img src="/image/me.jpg" alt="Me"></div>
        <div class="photo-card"><img src="/image/mirror.jpg" alt="Me"></div>
        <div class="photo-card"><img src="/image/side.jpg" alt="Me"></div>
        <div class="photo-card"><img src="/image/download.jpg" alt="Me"></div>
      </div>
    </section>

    <section class="gallery-section">
      <h2 class="section-label"><i class="bi bi-people-fill"></i> FRIENDS</h2>
      <div class="photo-grid">
        <div class="photo-card"><img src="/image/BBQ.jpg" alt="Friends"></div>
        <div class="photo-card"><img src="/image/gala.jpg" alt="Friends"></div>
        <div class="photo-card"><img src="/image/okada.jpg" alt="Friends"></div>
        <div class="photo-card"><img src="/image/outing.jpg" alt="Friends"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-page { background-color: #0b1121; min-height: 100vh; padding: 40px; color: white; }
.home-fab { position: fixed; top: 20px; left: 20px; background: #06b6d4; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; text-decoration: none; z-index: 10; }
.page-title { text-align: center; letter-spacing: 4px; margin-bottom: 50px; font-weight: 800; }
.section-label { color: #06b6d4; font-size: 1rem; margin-bottom: 20px; display: flex; gap: 10px; align-items: center; text-transform: uppercase; }
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 60px; }
.photo-card { aspect-ratio: 1/1; background: #1e293b; border-radius: 15px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.photo-card img { width: 100%; height: 100%; object-fit: cover; }
</style>