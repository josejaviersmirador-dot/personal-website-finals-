<template>
  <div class="portfolio-container">
    <header class="main-header">
      <h1>JOSE MIRADOR</h1>
      <span class="badge">Future IT Professional</span>
      <p class="subtitle">Cybersecurity Enthusiast & Developer</p>
    </header>

    <div class="main-layout">
      <div class="card hero-image-card">
        <img src="/image/download.jpg" alt="Jose Mirador" class="hero-img">
        <router-link to="/gallery" class="overlay">View Gallery</router-link>
      </div>

      <div class="content-grid">
        <div class="card about-card">
          <div class="title"><i class="bi bi-person"></i> ABOUT ME</div>
          <p>Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology and hands-on electronics.</p>
          <div class="socials">
            <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>
            <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
            <router-link to="/profile" class="profile-link"><i class="bi bi-box-arrow-up-right"></i></router-link>
          </div>
        </div>

        <div class="card small-card">
          <div class="title"><i class="bi bi-cpu"></i> COURSE</div>
          <div class="center-val">BS Information Technology</div>
        </div>

        <div class="card small-card">
          <div class="title"><i class="bi bi-rocket-takeoff"></i> GOAL</div>
          <p class="small-p">To become a skilled IT professional and build a successful career.</p>
        </div>

        <div class="card edu-card">
          <div class="title"><i class="bi bi-trophy"></i> EDUCATION & ACHIEVEMENT</div>
          <ul class="timeline">
            <li>MCA Montessori School - <small>Elementary (1-6)</small></li>
            <li>MCA Montessori School - <small>JHS (7-8)</small></li>
            <li>APEC Pateros - <small>JHS (9-10)</small></li>
            <li>APEC Pateros - <small>SHS (Honors)</small></li>
            <li>Asia Pacific College - <small>College</small></li>
          </ul>
        </div>
      </div>
    </div>

    <footer class="footer">
      © 2026 Jose Mirador - APC WEBPROG | <router-link to="/resources">Resources</router-link>
    </footer>
  </div>
</template>

<style scoped>
/* Keeping styles brief to fit; match with your previous dark theme */
.portfolio-container { background-color: #0b1121; min-height: 100vh; padding: 20px; color: white; }
.main-header { text-align: center; margin-bottom: 20px; border-bottom: 1px solid #1e293b; padding-bottom: 20px; }
.badge { background: #06b6d4; padding: 2px 10px; border-radius: 15px; font-size: 0.7rem; }
.main-layout { display: grid; grid-template-columns: 320px 1fr; gap: 20px; }
.card { background: #162031; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; }
.hero-image-card { padding: 0; overflow: hidden; height: 500px; position: relative; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; color: white; text-decoration: none; }
.hero-image-card:hover .overlay { opacity: 1; }
.content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.title { color: #06b6d4; font-size: 0.7rem; font-weight: bold; margin-bottom: 10px; }
.timeline { list-style: none; padding-left: 15px; border-left: 1px solid #334155; font-size: 0.8rem; }
.timeline li { margin-bottom: 8px; position: relative; }
.timeline li::before { content: ""; position: absolute; left: -19px; top: 5px; width: 7px; height: 7px; background: #06b6d4; border-radius: 50%; }
.footer { text-align: center; margin-top: 30px; font-size: 0.8rem; color: #475569; }
</style>