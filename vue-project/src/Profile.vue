<template>
  <div class="profile-page">
    <router-link to="/" class="fab-home"><i class="bi bi-house-door-fill"></i></router-link>
    <div class="profile-layout">
      <div class="profile-img-container">
        <img src="/image/side.jpg" alt="Jose" class="side-img">
      </div>
      <div class="info-container">
        <div class="info-bar"><i class="bi bi-person"></i> FULL NAME <span>Jose Javier S. Mirador</span></div>
        <div class="info-bar"><i class="bi bi-gift"></i> BIRTHDAY <span>February 11, 2006</span></div>
        <div class="info-bar"><i class="bi bi-calendar-event"></i> AGE <span>20</span></div>
        <div class="info-bar"><i class="bi bi-house"></i> HOME <span>Taguig City, Philippines</span></div>
        <div class="info-bar"><i class="bi bi-geo-alt"></i> HOMETOWN <span>Manila</span></div>
        
        <div class="social-bar">
          <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i> 
          <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
        </div>
        
        <div class="email-grid">
          <div class="email-box"><i class="bi bi-google"></i> jvjaviermirador@gmail.com</div>
          <div class="email-box"><i class="bi bi-envelope"></i> jsmirador@student.apc.edu.ph</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page { background: #0b1121; min-height: 100vh; display: flex; align-items: center; justify-content: center; color: white; padding: 20px; }
.fab-home { position: fixed; top: 20px; left: 20px; background: #06b6d4; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; }
.profile-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 30px; width: 100%; max-width: 1100px; }
.side-img { width: 100%; height: 600px; object-fit: cover; border-radius: 12px; }
.info-container { display: flex; flex-direction: column; gap: 12px; justify-content: center; }
.info-bar { background: #162031; padding: 15px 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #1e293b; font-size: 0.9rem; }
.info-bar i { color: #06b6d4; }
.social-bar { background: #162031; padding: 15px; border-radius: 8px; display: flex; justify-content: space-around; font-size: 1.2rem; border: 1px solid #1e293b; }
.email-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.email-box { background: #162031; padding: 12px; border-radius: 8px; font-size: 0.7rem; text-align: center; border: 1px solid #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; }
.email-box i { color: #06b6d4; }
</style>