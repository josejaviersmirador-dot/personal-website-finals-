<template>
  <div class="dashboard">
    <header class="header">
      <h1>JOSE MIRADOR</h1>
      <div class="badge">Future IT Professional</div>
    </header>

    <div class="main-content">
      <div class="hero-card">
        <img src="/image/download.jpg" alt="Jose">
      </div>

      <div class="info-grid">
        <div class="card about">
          <h3>ABOUT ME</h3>
          <p>Hello! I'm JV, a second-year IT student...</p>
        </div>
        <div class="card course">
          <h3>COURSE</h3>
          <p>BS Information Technology</p>
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* This creates the 2-column layout from your goal image */
.main-content {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Hero image takes 1 part, Grid takes 2 parts */
  gap: 20px;
  padding: 20px;
}

.hero-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.card {
  background: rgba(22, 32, 49, 0.8); /* Dark blue transparency */
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 20px;
}
</style>