<template>
  <div class="gallery-page">
    <router-link to="/" class="home-fab"><i class="bi bi-house-door-fill"></i></router-link>
    
    <h1 class="page-title">PHOTO GALLERY</h1>

    <section class="gallery-section">
      <h2 class="section-label"><i class="bi bi-person-bounding-box"></i> ME</h2>
      <div class="photo-grid">
        <div class="photo-card"><img src="/image/me.jpg" alt="Me"></div>
        <div class="photo-card"><img src="/image/mirror.jpg" alt="Mirror"></div>
        <div class="photo-card"><img src="/image/side.jpg" alt="Side"></div>
        <div class="photo-card"><img src="/image/download.jpg" alt="Hero"></div>
      </div>
    </section>

    <section class="gallery-section">
      <h2 class="section-label"><i class="bi bi-people-fill"></i> FRIENDS</h2>
      <div class="photo-grid">
        <div class="photo-card"><img src="/image/BBQ.jpg" alt="BBQ"></div>
        <div class="photo-card"><img src="/image/gala.jpg" alt="Gala"></div>
        <div class="photo-card"><img src="/image/okada.jpg" alt="Okada"></div>
        <div class="photo-card"><img src="/image/outing.jpg" alt="Outing"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-page { background-color: #0b1121; min-height: 100vh; padding: 40px; color: white; }
.home-fab { position: fixed; top: 20px; left: 20px; background: #06b6d4; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; text-decoration: none; z-index: 100; box-shadow: 0 0 15px rgba(6, 182, 212, 0.4); }
.page-title { text-align: center; letter-spacing: 5px; margin-bottom: 50px; font-weight: 800; color: white; }
.section-label { color: #06b6d4; font-size: 1rem; margin-bottom: 20px; display: flex; gap: 10px; align-items: center; text-transform: uppercase; font-weight: bold; }
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 60px; }
.photo-card { aspect-ratio: 1/1; background: #162031; border-radius: 15px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s ease; }
.photo-card:hover { transform: scale(1.03); border-color: #06b6d4; }
.photo-card img { width: 100%; height: 100%; object-fit: cover; }

/* Responsive fix for smaller screens */
@media (max-width: 900px) { .photo-grid { grid-template-columns: 1fr 1fr; } }
</style>