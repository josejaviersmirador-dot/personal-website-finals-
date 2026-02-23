<template>
  <div class="gallery-page">
    <router-link to="/" class="fab-home"><i class="bi bi-house-door-fill"></i></router-link>
    <h1 class="page-title">PHOTO GALLERY</h1>

    <section>
      <div class="section-label"><i class="bi bi-person-bounding-box"></i> ME</div>
      <div class="grid">
        <div class="photo"><img src="/image/me1.jpg"></div>
        <div class="photo"><img src="/image/me2.jpg"></div>
        <div class="photo"><img src="/image/me3.jpg"></div>
        <div class="photo"><img src="/image/me4.jpg"></div>
      </div>
    </section>

    <section style="margin-top: 40px;">
      <div class="section-label"><i class="bi bi-people-fill"></i> FRIENDS</div>
      <div class="grid">
        <div class="photo"><img src="/image/f1.jpg"></div>
        <div class="photo"><img src="/image/f2.jpg"></div>
        <div class="photo"><img src="/image/f3.jpg"></div>
        <div class="photo"><img src="/image/f4.jpg"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-page { background: #0b1121; min-height: 100vh; padding: 40px; color: white; }
.fab-home { position: fixed; top: 20px; left: 20px; background: #06b6d4; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; z-index: 100; }
.page-title { text-align: center; letter-spacing: 5px; margin-bottom: 50px; }
.section-label { color: #06b6d4; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.photo { aspect-ratio: 1/1; background: #162031; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.photo img { width: 100%; height: 100%; object-fit: cover; }
</style>