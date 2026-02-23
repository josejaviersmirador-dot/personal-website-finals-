<template>
  <div class="profile-page">
    <router-link to="/" class="home-fab"><i class="bi bi-house-door-fill"></i></router-link>
    
    <div class="profile-layout">
      <div class="profile-image-side">
        <img src="/image/download.jpg" alt="Jose Mirador">
      </div>
      
      <div class="profile-info-side">
        <div class="info-row">
          <span class="icon"><i class="bi bi-person-fill"></i></span>
          <span class="label">FULL NAME</span>
          <span class="value">Jose Javier S. Mirador</span>
        </div>
        <div class="info-row">
          <span class="icon"><i class="bi bi-gift-fill"></i></span>
          <span class="label">BIRTHDAY</span>
          <span class="value">February 11, 2006</span>
        </div>
        <div class="info-row">
          <span class="icon"><i class="bi bi-info-circle-fill"></i></span>
          <span class="label">AGE</span>
          <span class="value">20</span>
        </div>
        <div class="info-row">
          <span class="icon"><i class="bi bi-house-fill"></i></span>
          <span class="label">HOME</span>
          <span class="value">Taguig City, Philippines</span>
        </div>
        
        <div class="social-bar">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-spotify"></i>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-github"></i>
        </div>

        <div class="contact-chips">
          <div class="chip"><i class="bi bi-google"></i> jvjaviersmirador@gmail.com</div>
          <div class="chip"><i class="bi bi-envelope-fill"></i> jsmirador@student.apc.edu.ph</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page { background-color: #0b1121; height: 100vh; overflow: hidden; display: flex; }
.home-fab { position: fixed; top: 20px; left: 20px; background: #06b6d4; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 10; text-decoration: none;}
.profile-layout { display: grid; grid-template-columns: 1fr 1.5fr; width: 100%; }
.profile-image-side img { width: 100%; height: 100vh; object-fit: cover; }
.profile-info-side { padding: 60px; display: flex; flex-direction: column; justify-content: center; gap: 15px; }
.info-row { background: #161e2e; padding: 15px 25px; border-radius: 10px; display: flex; align-items: center; color: #94a3b8; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.05); }
.info-row .icon { color: #06b6d4; margin-right: 15px; }
.info-row .label { flex-grow: 1; font-weight: bold; }
.info-row .value { color: white; }
.social-bar { background: #161e2e; padding: 15px; border-radius: 10px; display: flex; justify-content: space-around; color: white; font-size: 1.2rem; margin-top: 10px; }
.contact-chips { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
.chip { background: #161e2e; padding: 12px; border-radius: 10px; color: #06b6d4; font-size: 0.7rem; display: flex; align-items: center; gap: 8px; }
</style>