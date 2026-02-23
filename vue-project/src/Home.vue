<template>
  <div class="portfolio-container">
    <header class="main-header">
      <h1>JOSE MIRADOR</h1>
      <div class="badge-role">Future IT Professional</div>
      <p class="subtitle">Cybersecurity Enthusiast & Developer</p>
    </header>

    <div class="dashboard-grid">
      <div class="card card-photo">
        <img src="/image/download.jpg" alt="Jose Mirador" class="main-img">
        <router-link to="/gallery.html" class="overlay">VIEW GALLERY</router-link>
      </div>

      <div class="card card-about">
        <div class="title-row"><i class="bi bi-person-fill"></i> ABOUT ME</div>
        <p>Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology, and hands-on electronics.</p>
        <div class="social-footer">
          <div class="icons">
            <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>
            <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
          </div>
          <router-link to="/profile.html" class="arrow-link"><i class="bi bi-box-arrow-up-right"></i></router-link>
        </div>
      </div>

      <div class="card card-course">
        <div class="title-row"><i class="bi bi-cpu-fill"></i> COURSE</div>
        <h2 class="centered-text">BS Information Technology</h2>
      </div>

      <div class="card card-goal">
        <div class="title-row"><i class="bi bi-rocket-takeoff-fill"></i> GOAL</div>
        <p class="goal-text">To become a skilled IT professional and build a successful career.</p>
      </div>

      <div class="card card-edu">
        <div class="title-row"><i class="bi bi-trophy-fill"></i> EDUCATION & ACHIEVEMENT</div>
        <ul class="timeline">
          <li>MCA Montessori School - <small>Elementary (1-6)</small></li>
          <li>MCA Montessori School - <small>JHS (7-8)</small></li>
          <li>APEC Pateros - <small>JHS (9-10)</small></li>
          <li>APEC Pateros - <small>SHS (Honors)</small></li>
          <li>Asia Pacific College - <small>College</small></li>
        </ul>
      </div>

      <div class="card card-proj">
        <div class="title-row"><i class="bi bi-code-slash"></i> PROJECTS</div>
        <div class="pill">Voice AI</div>
        <div class="pill">Reservation System</div>
      </div>

      <div class="card card-ints">
        <div class="title-row"><i class="bi bi-controller"></i> INTERESTS</div>
        <div class="interest-icons">
          <i class="bi bi-book"></i> <i class="bi bi-music-note-beamed"></i> <i class="bi bi-joystick"></i>
        </div>
      </div>

      <div class="card card-comment">
        <div class="title-row"><i class="bi bi-chat-left-text-fill"></i> LEAVE A COMMENT</div>
        <div class="comment-grid">
          <input type="text" placeholder="Name" class="c-input">
          <textarea placeholder="Write your message here..." class="c-area"></textarea>
          <button class="post-btn">Post Comment</button>
        </div>
      </div>
    </div>

    <footer class="main-footer">
      &copy; 2026 Jose Mirador - APC WEBPROG | <router-link to="/Resources.html">Resources</router-link>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-container { background: #0b1121; min-height: 100vh; padding: 20px; color: white; font-family: sans-serif; }
.main-header { text-align: center; margin-bottom: 20px; }
.badge-role { background: #06b6d4; display: inline-block; padding: 2px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; }
.dashboard-grid { display: grid; grid-template-columns: 280px 1fr 1fr 1fr; grid-template-rows: auto auto auto; gap: 15px; }
.card { background: #162031; border: 1px solid #1e293b; border-radius: 12px; padding: 15px; position: relative; }
.card-photo { grid-row: span 2; padding: 0; overflow: hidden; }
.main-img { width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; color: white; text-decoration: none; font-weight: bold; }
.card-photo:hover .overlay { opacity: 1; }
.title-row { color: #06b6d4; font-size: 0.7rem; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; }
.centered-text { text-align: center; margin-top: 20px; }
.timeline { list-style: none; padding-left: 15px; border-left: 1px solid #334155; font-size: 0.8rem; }
.timeline li { margin-bottom: 8px; position: relative; }
.timeline li::before { content: ""; position: absolute; left: -19px; top: 5px; width: 7px; height: 7px; background: #06b6d4; border-radius: 50%; box-shadow: 0 0 5px #06b6d4; }
.pill { background: #1e293b; border: 1px solid #334155; padding: 10px; border-radius: 30px; text-align: center; margin-bottom: 10px; color: #94a3b8; font-size: 0.8rem; }
.interest-icons { display: flex; justify-content: space-around; font-size: 2rem; color: #334155; margin-top: 15px; }
.card-comment { grid-column: span 3; }
.comment-grid { display: grid; grid-template-columns: 1fr 150px; gap: 10px; }
.c-input { grid-column: span 2; background: #0b1121; border: 1px solid #1e293b; color: white; padding: 10px; border-radius: 8px; }
.c-area { background: #0b1121; border: 1px solid #1e293b; color: white; padding: 10px; border-radius: 8px; height: 60px; }
.post-btn { background: #06b6d4; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
.main-footer { text-align: center; margin-top: 20px; font-size: 0.7rem; color: #475569; }
</style>