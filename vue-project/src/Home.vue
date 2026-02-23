<template>
  <div class="portfolio-container">
    <header class="main-header">
      <h1>JOSE MIRADOR</h1>
      <span class="badge">Future IT Professional</span>
      <p class="subtitle">Cybersecurity Enthusiast & Developer</p>
    </header>

    <div class="dashboard-layout">
      <router-link to="/gallery" class="hero-link">
        <div class="card hero-card">
          <img src="/image/download.jpg" alt="Jose Mirador" class="hero-img">
          <div class="overlay">
            <span>View Photo Gallery</span>
          </div>
        </div>
      </router-link>

      <div class="info-grid">
        <div class="card about-card">
          <div class="card-title">ABOUT ME</div>
          <p class="content-text">Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology, and hands-on electronics.</p>
          <div class="social-icons">
            <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>
            <i class="bi bi-spotify"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
            <router-link to="/profile" class="expand-btn">
              <i class="bi bi-box-arrow-up-right"></i>
            </router-link>
          </div>
        </div>

        <div class="card course-card">
          <div class="card-title"><i class="bi bi-cpu"></i> COURSE</div>
          <div class="center-content big-text">BS Information Technology</div>
        </div>

        <div class="card goal-card">
          <div class="card-title"><i class="bi bi-rocket-takeoff"></i> GOAL</div>
          <p class="content-text">To become a skilled IT professional and build a successful career.</p>
        </div>

        <div class="card edu-card">
          <div class="card-title"><i class="bi bi-trophy"></i> EDUCATION & ACHIEVEMENT</div>
          <ul class="timeline">
            <li>MCA Montessori School - <small>Elementary (1-6)</small></li>
            <li>MCA Montessori School - <small>JHS (7-8)</small></li>
            <li>APEC Pateros - <small>JHS (9-10)</small></li>
            <li>APEC Pateros - <small>SHS (Honors)</small></li>
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
.portfolio-container { 
  padding: 30px; 
  width: 100%; 
  min-height: 100vh; 
  box-sizing: border-box;
  background-color: #0b1121;
}

.main-header { 
  text-align: center; 
  background: #111b2d; 
  padding: 25px; 
  border-radius: 12px; 
  border: 1px solid #1e293b; 
  margin-bottom: 25px; 
}

.badge { 
  background: #06b6d4; 
  padding: 4px 12px; 
  border-radius: 20px; 
  font-size: 0.8rem; 
  font-weight: bold; 
}

.dashboard-layout { 
  display: grid; 
  grid-template-columns: 420px 1fr;
  margin-bottom: 25px; 
}

.info-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 20px; 
}

.card { 
  background: #162031; 
  border: 1px solid #1e293b; 
  border-radius: 16px; 
  padding: 25px; 
  color: #ffffff;
}

.card-title { 
  color: #06b6d4; 
  font-size: 0.75rem; 
  font-weight: bold; 
  margin-bottom: 20px; 
  display: flex; 
  align-items: center; 
  gap: 10px; 
}

.hero-card { 
  padding: 0; 
  overflow: hidden; 
  height: 100%; 
  min-height: 600px;
}

.hero-img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.timeline { 
  list-style: none; 
  padding-left: 15px; 
  border-left: 2px solid #06b6d4; 
}

.timeline li { 
  margin-bottom: 15px; 
  position: relative; 
}

.timeline li::before { 
  content: ""; 
  position: absolute; 
  left: -21px; 
  top: 6px; 
  width: 10px; 
  height: 10px; 
  background: #06b6d4; 
  border-radius: 50%; 
  box-shadow: 0 0 8px #06b6d4; 
}

.pill { 
  background: rgba(255,255,255,0.05); 
  border: 1px solid #334155; 
  padding: 15px; 
  border-radius: 30px; 
  text-align: center; 
  margin-bottom: 12px; 
}
.comment-section { 
  margin-top: 10px; 
}

.comment-form { 
  display: grid; 
  gap: 15px; 
}

.comment-form input, .comment-form textarea { 
  background: #0b1121; 
  border: 1px solid #1e293b; 
  color: white; 
  padding: 15px; 
  border-radius: 10px; 
}

.post-btn { 
  background: #06b6d4; 
  color: white; 
  border: none; 
  padding: 15px 35px; 
  border-radius: 10px; 
  font-weight: bold; 
  cursor: pointer; 
  justify-self: end; 
}

.footer { 
  text-align: center; 
  padding: 30px; 
  color: #475569; 
  font-size: 0.8rem; 
}
</style>