<template>
  <div class="page-container">
    <h1>Project Gallery</h1>
    <div class="gallery-grid">
      <div class="placeholder-box">Image Placeholder</div>
      <div class="placeholder-box">Image Placeholder</div>
    </div>
    <router-link to="/" class="back-link">← Back to Home</router-link>
  </div>
</template>

<style scoped>
.page-container { padding: 50px; color: white; text-align: center; }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
.placeholder-box { background: rgba(255,255,255,0.1); height: 200px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
.back-link { color: #06b6d4; text-decoration: none; }
</style>