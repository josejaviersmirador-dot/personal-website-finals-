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
            <a href="https://web.facebook.com/sirjosie/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/sirjosie/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            <a href="https://open.spotify.com/user/31mgjf4ea65lbj3y7m7peli3mdi4?si=6da12911a870432d" target="_blank" rel="noopener noreferrer"><i class="bi bi-spotify"></i></a>
            <a href="https://www.linkedin.com/in/jose-javier-mirador-52299a321/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/josejaviersmirador-dot" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
            
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
      <div class="card-title"><i class="bi bi-book"></i> TEXT BOOK</div>
      
      <div class="comment-form">
        <input v-model="guestName" type="text" placeholder="Name">
        <textarea v-model="guestMessage" placeholder="Write your message here..."></textarea>
        <button @click="postToBook" class="post-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Posting...' : 'Post to Book' }}
        </button>
      </div>

      <div class="messages-container">
        <div v-for="entry in entries" :key="entry.id" class="entry-card">
          <div class="entry-header">
            <span class="entry-name">{{ entry.name }}</span>
            <span class="entry-date">{{ formatDate(entry.created_at) }}</span>
          </div>
          <p class="entry-message">{{ entry.message }}</p>
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
import { supabase } from '../supabase';

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

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

onMounted(fetchEntries);
</script>

<style scoped>
.messages-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.entry-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #1e293b;
  padding: 15px;
  border-radius: 12px;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.entry-name {
  color: #06b6d4;
  font-weight: bold;
  font-size: 0.9rem;
}

.entry-date {
  color: #475569;
  font-size: 0.75rem;
}

.entry-message {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 992px) {
  .dashboard-layout {
    grid-template-columns: 1fr;
  }
  .hero-card {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>