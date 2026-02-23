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
        <router-link to="/gallery.html" class="overlay">View Gallery</router-link>
      </div>

      <div class="content-grid">
        <div class="card about-card">
          <div class="title"><i class="bi bi-person"></i> ABOUT ME</div>
          <p>Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology, and hands-on electronics.</p>
          <div class="socials">
            <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>
            <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i>
            <i class="bi bi-github"></i>
            <router-link to="/profile.html" class="profile-link"><i class="bi bi-box-arrow-up-right"></i></router-link>
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

        <div class="card proj-card">
          <div class="title"><i class="bi bi-code-slash"></i> PROJECTS</div>
          <div class="pill">Voice AI</div>
          <div class="pill">Reservation System</div>
        </div>

        <div class="card interest-card">
          <div class="title"><i class="bi bi-controller"></i> INTERESTS</div>
          <div class="interest-icons">
            <i class="bi bi-book"></i> <i class="bi bi-music-note-beamed"></i> <i class="bi bi-joystick"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="card comment-section">
      <div class="title"><i class="bi bi-chat-left-dots"></i> LEAVE A COMMENT</div>
      <div class="comment-form">
        <input type="text" placeholder="Name">
        <textarea placeholder="Write your message here..."></textarea>
        <button class="post-btn">Post Comment</button>
      </div>
    </div>

    <footer class="footer">
      © 2026 Jose Mirador - APC WEBPROG | <router-link to="/Resources.html">Resources</router-link>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-container { background-color: #0b1121; min-height: 100vh; padding: 20px; color: white; font-family: sans-serif; }
.main-header { text-align: center; margin-bottom: 20px; background: #111b2d; padding: 15px; border-radius: 12px; border: 1px solid #1e293b; }
.badge { background: #06b6d4; padding: 2px 10px; border-radius: 15px; font-size: 0.7rem; }
.main-layout { display: grid; grid-template-columns: 300px 1fr; gap: 15px; margin-bottom: 15px; }
.card { background: #162031; border: 1px solid #1e293b; border-radius: 12px; padding: 15px; position: relative; }
.hero-image-card { padding: 0; overflow: hidden; height: 500px; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; color: white; text-decoration: none; }
.hero-image-card:hover .overlay { opacity: 1; }
.content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.title { color: #06b6d4; font-size: 0.7rem; font-weight: bold; margin-bottom: 10px; }
.center-val { font-size: 1.4rem; font-weight: bold; text-align: center; margin-top: 20px; }
.socials { display: flex; gap: 10px; font-size: 1.2rem; margin-top: 15px; }
.profile-link { margin-left: auto; color: #475569; }
.timeline { list-style: none; padding-left: 15px; border-left: 1px solid #334155; font-size: 0.8rem; }
.timeline li { margin-bottom: 8px; position: relative; }
.timeline li::before { content: ""; position: absolute; left: -19px; top: 5px; width: 7px; height: 7px; background: #06b6d4; border-radius: 50%; box-shadow: 0 0 5px #06b6d4; }
.pill { background: #1e293b; border: 1px solid #334155; padding: 10px; border-radius: 20px; text-align: center; margin-bottom: 10px; font-size: 0.8rem; }
.interest-icons { display: flex; justify-content: space-around; font-size: 2rem; color: #334155; margin-top: 10px; }
.comment-form { display: grid; grid-template-columns: 1fr auto; gap: 10px; }
.comment-form input { grid-column: 1 / -1; background: #0b1121; border: 1px solid #1e293b; color: white; padding: 10px; border-radius: 8px; }
.comment-form textarea { background: #0b1121; border: 1px solid #1e293b; color: white; padding: 10px; border-radius: 8px; height: 80px; }
.post-btn { background: #06b6d4; color: white; border: none; padding: 0 20px; border-radius: 8px; font-weight: bold; }
.footer { text-align: center; font-size: 0.7rem; color: #475569; margin-top: 10px; }
</style>