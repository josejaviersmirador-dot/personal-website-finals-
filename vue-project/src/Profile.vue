<template>
  <div class="profile-page">
    <router-link to="/" class="home-fab"><i class="bi bi-house-door-fill"></i></router-link>
    
    <div class="profile-container">
      <div class="profile-sidebar">
        <img src="/image/okada.jpg" alt="Profile" class="main-portrait">
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
.profile-page { 
  background: #0b1121; 
  min-height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 20px; 
}

.home-fab { 
  position: fixed; 
  top: 20px; 
  left: 20px; 
  background: #06b6d4; 
  color: white; 
  width: 45px; 
  height: 45px; 
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  text-decoration: none; 
  z-index: 100;
  transition: transform 0.3s ease;
}

.home-fab:hover {
  transform: scale(1.1);
}

.profile-container { 
  display: grid; 
  grid-template-columns: 1fr 1.5fr; 
  gap: 40px; 
  max-width: 1000px; 
  width: 100%; 
}

.main-portrait { 
  width: 100%; 
  height: auto; 
  aspect-ratio: 3 / 4;
  object-fit: cover; 
  border-radius: 20px; 
  border: 1px solid #1e293b; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.profile-details { 
  display: flex; 
  flex-direction: column; 
  gap: 15px; 
  justify-content: center; 
}

.info-bar { 
  background: #162031; 
  padding: 18px 25px; 
  border-radius: 12px; 
  border: 1px solid #1e293b; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  transition: all 0.3s ease;
}

.info-bar:hover {
  background: #1e2d3d;
  border-color: #06b6d4;
}

.label { 
  color: #06b6d4; 
  font-size: 0.8rem; 
  font-weight: bold; 
  display: flex; 
  gap: 10px; 
  align-items: center; 
}

.value { 
  color: white; 
  font-weight: 500; 
}

.social-row { 
  background: #162031; 
  padding: 15px; 
  border-radius: 12px; 
  border: 1px solid #1e293b; 
  display: flex; 
  justify-content: space-around; 
  font-size: 1.5rem; 
  color: #475569; 
  flex-wrap: wrap;
  gap: 10px;
}

.social-row i {
  transition: color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.social-row i:hover {
  color: #06b6d4;
  transform: scale(1.2);
}

.email-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 10px; 
}

.email-box { 
  background: #162031; 
  padding: 12px; 
  border-radius: 10px; 
  border: 1px solid #1e293b; 
  font-size: 0.7rem; 
  color: white; 
  text-align: center; 
  transition: all 0.3s ease;
}

.email-box:hover {
  background: #1e2d3d;
  border-color: #06b6d4;
}

@media (max-width: 1024px) {
  .profile-container {
    gap: 30px;
  }

  .info-bar {
    padding: 15px 20px;
  }

  .label {
    font-size: 0.75rem;
  }

  .value {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .profile-page {
    padding: 15px;
  }

  .profile-container {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .home-fab {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .main-portrait {
    aspect-ratio: 3 / 4;
    border-radius: 15px;
  }

  .info-bar {
    padding: 15px;
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .label {
    font-size: 0.7rem;
  }

  .value {
    width: 100%;
    text-align: right;
  }

  .social-row {
    padding: 12px;
    font-size: 1.2rem;
    gap: 8px;
  }

  .email-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .email-box {
    padding: 10px;
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .profile-page {
    padding: 10px;
  }

  .profile-container {
    gap: 15px;
  }

  .home-fab {
    width: 38px;
    height: 38px;
    top: 15px;
    left: 15px;
    font-size: 1rem;
  }

  .main-portrait {
    aspect-ratio: 1 / 1;
    border-radius: 12px;
  }

  .info-bar {
    padding: 12px;
    font-size: 0.8rem;
  }

  .label {
    font-size: 0.65rem;
  }

  .label i {
    font-size: 0.8rem;
  }

  .value {
    font-size: 0.85rem;
  }

  .social-row {
    font-size: 1rem;
    padding: 10px;
  }

  .email-box {
    padding: 8px;
    font-size: 0.6rem;
    border-radius: 8px;
  }

  .email-box i {
    margin-bottom: 3px;
  }
}
</style>