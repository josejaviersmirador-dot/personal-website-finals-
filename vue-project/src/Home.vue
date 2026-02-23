<template>
  <div class="portfolio-container">
    <header class="main-header">
      <h1>JOSE MIRADOR</h1>
      <span class="badge">Future IT Professional</span>
      <p class="subtitle">Cybersecurity Enthusiast & Developer</p>
    </header>

    <div class="dashboard-layout">
      <div class="card hero-card">
        <img src="/image/download.jpg" alt="Jose Mirador" class="hero-img">
      </div>

      <div class="info-grid">
        <div class="card about-card">
          <div class="card-title">ABOUT ME</div>
          <p>Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology, and hands-on electronics.</p>
          <div class="social-icons">
            <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>
            <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
            <router-link to="/profile" class="expand-btn"><i class="bi bi-box-arrow-up-right"></i></router-link>
          </div>
        </div>

        <div class="card small-card">
          <div class="card-title"><i class="bi bi-cpu"></i> COURSE</div>
          <div class="center-content">BS Information Technology</div>
        </div>

        <div class="card small-card">
          <div class="card-title"><i class="bi bi-rocket-takeoff"></i> GOAL</div>
          <p class="small-text">To become a skilled IT professional and build a successful career.</p>
        </div>

        <div class="card edu-card">
          <div class="card-title"><i class="bi bi-trophy"></i> EDUCATION & ACHIEVEMENT</div>
          <ul class="timeline">
            <li>MCA Montessori School - <small>Elementary</small></li>
            <li>APEC Pateros - <small>JHS (Honors)</small></li>
            <li>Asia Pacific College - <small>College</small></li>
          </ul>
        </div>

        <div class="card proj-card">
          <div class="card-title"><i class="bi bi-code-slash"></i> PROJECTS</div>
          <div class="pill">Voice AI</div>
          <div class="pill">Reservation System</div>
        </div>

        <div class="card interest-card">
          <div class="card-title"><i class="bi bi-controller"></i> INTERESTS</div>
          <div class="interest-icons">
            <i class="bi bi-book"></i> <i class="bi bi-music-note-beamed"></i> <i class="bi bi-joystick"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="card comment-section">
      <div class="card-title"><i class="bi bi-chat-left-dots"></i> LEAVE A COMMENT</div>
      <div class="comment-form">
        <input type="text" placeholder="Name">
        <textarea placeholder="Write your message here..."></textarea>
        <button class="post-btn">Post Comment</button>
      </div>
    </div>

    <footer class="footer">
      © 2026 Jose Mirador - APC WEBPROG | <router-link to="/resources">Resources</router-link>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-container { padding: 20px; max-width: 1200px; margin: auto; }
.main-header { text-align: center; background: #111b2d; padding: 20px; border-radius: 12px; border: 1px solid #1e293b; margin-bottom: 20px; }
.badge { background: #06b6d4; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }

.dashboard-layout { display: grid; grid-template-columns: 350px 1fr; gap: 20px; margin-bottom: 20px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }

.card { background: #162031; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; }
.hero-card { padding: 0; overflow: hidden; height: 550px; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }

.card-title { color: #06b6d4; font-size: 0.75rem; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
.social-icons { display: flex; gap: 15px; font-size: 1.2rem; margin-top: 15px; }
.expand-btn { margin-left: auto; color: #475569; }

.timeline { list-style: none; padding-left: 15px; border-left: 1px solid #334155; font-size: 0.85rem; }
.timeline li { margin-bottom: 10px; position: relative; }
.timeline li::before { content: ""; position: absolute; left: -19px; top: 6px; width: 8px; height: 8px; background: #06b6d4; border-radius: 50%; box-shadow: 0 0 8px #06b6d4; }

.pill { background: #1e293b; border: 1px solid #334155; padding: 12px; border-radius: 25px; text-align: center; margin-bottom: 10px; font-size: 0.9rem; }
.interest-icons { display: flex; justify-content: space-around; font-size: 2.5rem; color: #334155; }

.comment-form { display: grid; gap: 10px; }
.comment-form input, .comment-form textarea { background: #0b1121; border: 1px solid #1e293b; color: white; padding: 12px; border-radius: 8px; }
.post-btn { background: #06b6d4; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer; align-self: flex-end; }
.footer { text-align: center; font-size: 0.75rem; color: #475569; margin-top: 20px; }
</style>