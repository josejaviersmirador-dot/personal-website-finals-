<template>
  <div class="profile-page">
    <router-link to="/" class="home-fab"><i class="bi bi-house-door-fill"></i></router-link>
    
    <div class="profile-container">
      <div class="profile-sidebar">
        <img src="/image/side.jpg" alt="Profile" class="main-portrait">
      </div>

      <div class="profile-details">
        <div class="info-bar">
          <span class="label"><i class="bi bi-person"></i> FULL NAME</span>
          <span class="value">Jose Javier S. Mirador</span>
        </div>
        <div class="info-bar">
          <span class="label"><i class="bi bi-gift"></i> BIRTHDAY</span>
          <span class="value">February 11, 2006</span>
        </div>
        <div class="info-bar">
          <span class="label"><i class="bi bi-calendar-check"></i> AGE</span>
          <span class="value">20</span>
        </div>
        <div class="info-bar">
          <span class="label"><i class="bi bi-house"></i> HOME</span>
          <span class="value">Taguig City, Philippines</span>
        </div>
        <div class="info-bar">
          <span class="label"><i class="bi bi-geo-alt"></i> HOMETOWN</span>
          <span class="value">Manila</span>
        </div>

        <div class="social-row">
          <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>
          <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
        </div>

        <div class="email-grid">
          <div class="email-box"><i class="bi bi-google"></i> jvjaviermirador@gmail.com</div>
          <div class="email-box"><i class="bi bi-envelope-at"></i> jsmirador@student.apc.edu.ph</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page { background: #0b1121; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
.home-fab { position: fixed; top: 20px; left: 20px; background: #06b6d4; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; }

.profile-container { display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; max-width: 1000px; width: 100%; }

.main-portrait { width: 100%; height: 600px; object-fit: cover; border-radius: 20px; border: 1px solid #1e293b; }

.profile-details { display: flex; flex-direction: column; gap: 15px; justify-content: center; }

.info-bar { background: #162031; padding: 18px 25px; border-radius: 12px; border: 1px solid #1e293b; display: flex; justify-content: space-between; align-items: center; }
.label { color: #06b6d4; font-size: 0.8rem; font-weight: bold; display: flex; gap: 10px; align-items: center; }
.value { color: white; font-weight: 500; }

.social-row { background: #162031; padding: 15px; border-radius: 12px; border: 1px solid #1e293b; display: flex; justify-content: space-around; font-size: 1.5rem; color: #475569; }

.email-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.email-box { background: #162031; padding: 12px; border-radius: 10px; border: 1px solid #1e293b; font-size: 0.7rem; color: white; text-align: center; }
</style>