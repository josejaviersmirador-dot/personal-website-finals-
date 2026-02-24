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
          
          <div class="social-links">
            <a href="https://web.facebook.com/sirjosie/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sirjosie/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://open.spotify.com/user/31mgjf4ea65lbj3y7m7peli3mdi4?si=6da12911a870432d" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-spotify"></i>
            </a>
            <a href="https://www.linkedin.com/in/jose-javier-mirador-52299a321/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/josejaviersmirador-dot" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github"></i>
            </a>
            
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
            <i class="bi bi-book"></i> 
            <router-link to="/music" class="music-link" title="Play some tunes!">
              <i class="bi bi-music-note-beamed"></i>
            </router-link>
            <i class="bi bi-joystick"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="card comment-section">
      <div class="card-title"><i class="bi bi-book"></i> GUEST BOOK</div>
      <div class="comment-form">
        <input v-model="guestName" type="text" placeholder="Name">
        <textarea v-model="guestMessage" placeholder="Write your message here..."></textarea>
        <button @click="postToBook" class="post-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Posting...' : 'Post' }}
        </button>
      </div>

      <div class="messages-list" style="margin-top: 25px; display: flex; flex-direction: column; gap: 15px;">
        <div v-for="entry in entries" :key="entry.id" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; border: 1px solid #1e293b;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <strong style="color: #06b6d4;">{{ entry.name }}</strong>
            <small style="color: #475569;">{{ new Date(entry.created_at).toLocaleDateString() }}</small>
          </div>
          <p style="margin: 0; color: #cbd5e1; font-size: 0.9rem;">{{ entry.message }}</p>
        </div>
        
        <div v-if="entries.length === 0" style="text-align: center; color: #475569; padding: 20px;">
          No messages yet. Be the first to post!
        </div>
      </div>
    </div>

    <footer class="footer">
      © 2026 Jose Mirador - APC WEBPROG | <router-link to="/resources">Resources</router-link>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from './supabase';

const entries = ref([]);
const guestName = ref('');
const guestMessage = ref('');
const isSubmitting = ref(false);

const fetchEntries = async () => {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (!error) {
    entries.value = data;
  }
};

const postToBook = async () => {
  if (!guestName.value || !guestMessage.value) return;
  
  isSubmitting.value = true;
  const { error } = await supabase
    .from('guestbook')
    .insert([{ name: guestName.value, message: guestMessage.value }]);

  if (!error) {
    guestName.value = '';
    guestMessage.value = '';
    await fetchEntries();
  }
  isSubmitting.value = false;
};

onMounted(fetchEntries);
</script>

<style scoped>
.portfolio-container { 
  padding: 40px; 
  width: 100%; 
  min-height: 100vh; 
  margin: 0; 
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
  grid-template-columns: 450px 1fr; 
  gap: 30px; 
  width: 100%; 
  margin-bottom: 20px; 
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
  padding: 30px; 
  color: #f8fafc;
}

.card-title { 
  color: #06b6d4; 
  font-size: 0.85rem; 
  font-weight: bold; 
  margin-bottom: 20px; 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  text-transform: uppercase;
}

.hero-card { 
  padding: 0; 
  overflow: hidden; 
  height: 100%; 
  min-height: 600px; 
  position: relative; 
  border-radius: 16px; 
  cursor: pointer; 
}

.hero-img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.overlay {
  position: absolute; 
  inset: 0; 
  background: rgba(6, 182, 212, 0.4); 
  display: flex; 
  align-items: center; 
  justify-content: center;
  opacity: 0; 
  transition: opacity 0.3s ease;
}

.hero-card:hover .overlay { 
  opacity: 1; 
}

.overlay span { 
  background: #06b6d4; 
  color: white; 
  padding: 12px 24px; 
  border-radius: 30px; 
  font-weight: bold; 
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.timeline { 
  list-style: none; 
  padding-left: 15px; 
  border-left: 2px solid #06b6d4; 
}

.timeline li { 
  margin-bottom: 15px; 
  position: relative; 
  font-size: 0.9rem;
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
  color: #f8fafc;
}

.social-links {
  display: flex;
  gap: 25px;
  margin-top: 25px;
  font-size: 1.8rem;
  align-items: center;
}

.social-links a {
  color: #f8fafc;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  transition: color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.social-links a i {
  pointer-events: none; 
}

.social-links a:hover,
.expand-btn:hover i {
  color: #06b6d4;
  transform: scale(1.15);
}

.interest-icons { 
  display: flex; 
  gap: 35px;
  font-size: 2.5rem; 
  justify-content: center; 
  margin-top: 30px; 
  color: #cbd5e1;
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
  font-family: inherit;
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
  transition: background 0.3s ease;
}

.post-btn:hover {
  background: #0891b2;
}

.footer { 
  text-align: center; 
  padding: 30px; 
  color: #475569; 
  font-size: 0.8rem; 
}

.music-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  cursor: pointer;
}

.music-link:hover {
  color: #06b6d4;
  transform: scale(1.15);
}

@media (max-width: 992px) {
  .dashboard-layout {
    grid-template-columns: 1fr;
  }
}
</style>