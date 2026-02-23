<template>
    <div class="portfolio-container">

        <header class="main-header">
            <div class="header-content">
                <h1>JOSE MIRADOR</h1>
                <div class="badge-container">
                    <span class="badge-role">Future IT Professional</span>
                </div>
                <p>Cybersecurity Enthusiast & Developer</p>
            </div>
        </header>

        <div class="card card-gallery">
            <img src="./image/download.jpg" alt="Jose Mirador" class="gallery-img">
            <a href="gallery.html" class="gallery-overlay-full">
                <span>View Gallery</span>
            </a>
        </div>

        <div class="card card-about">
            <h2 class="about-title">ABOUT ME</h2>
            <p class="about-text">Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology, and hands-on electronics.</p>
            
            <div class="social-icons">
                <span><i class="bi bi-facebook"></i></span>
                <span><i class="bi bi-instagram"></i></span>
                <span><i class="bi bi-spotify"></i></span>
                <span><i class="bi bi-linkedin"></i></span>
                <span><i class="bi bi-github"></i></span>
            </div>

            <a href="profile.html" class="corner-arrow"><i class="bi bi-box-arrow-up-right"></i></a>
        </div>

        <div class="card card-course">
            <div class="card-title">
                <i class="bi bi-cpu-fill"></i> Course
            </div>
            <div class="card-content centered">
                <h3>BS Information Technology</h3>
            </div>
        </div>

        <div class="card card-goal">
            <div class="card-title">
                <i class="bi bi-rocket-takeoff-fill"></i> Goal
            </div>
            <div class="card-content">
                <p>To become a skilled IT professional and build a successful career.</p>
            </div>
        </div>

        <div class="card card-education">
            <div class="card-title">
                <i class="bi bi-trophy-fill"></i> Education & Achievement
            </div>
            <div class="card-content">
                <ul class="compact-list">
                    <li><strong>MCA Montessori School</strong> - Elementary (1-6)</li>
                    <li><strong>MCA Montessori School</strong> - JHS (7-8)</li>
                    <li><strong>APEC Pateros</strong> - JHS (9-10)</li>
                    <li><strong>APEC Pateros</strong> - SHS (Honors)</li>
                    <li><strong>Asia Pacific College</strong> - College</li>
                </ul>
            </div>
        </div>

        <div class="card card-experience">
            <div class="card-title">
                <i class="bi bi-code-slash"></i> Projects
            </div>
            <div class="card-content">
                <div class="skill-tag-container">
                    <span class="skill-tag">Voice AI</span>
                    <span class="skill-tag">Reservation System</span>
                </div>
            </div>
        </div>

        <div class="card card-hobbies">
            <div class="card-title">
                <i class="bi bi-controller"></i> Interests
            </div>
            <div class="card-content icons-row">
                <i class="bi bi-book" title="Reading"></i>
                <i class="bi bi-music-note-beamed" title="Music"></i>
                <i class="bi bi-joystick" title="Gaming"></i>
            </div>
        </div>

        <div class="card card-comments">
            <div class="card-title">
                <i class="bi bi-chat-left-text-fill"></i> Leave a Comment
            </div>
            <div class="card-content">
                <form class="comment-form" @submit.prevent="submitComment">
                    <input type="text" v-model="newName" placeholder="Name" required>
                    <textarea v-model="newMessage" placeholder="Write your message here..." rows="3" required></textarea>
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        </div>

        <footer class="custom-footer">
            &copy; 2026 Jose Mirador - APC WEBPROG | <a href="Resources.html" style="color: #00d4ff; text-decoration: none;">Resources</a>
        </footer>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const newName = ref('');
const newMessage = ref('');
const comments = ref([]);

const API_URL = 'http://localhost:5000/comments'; 

const fetchComments = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    comments.value = data;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

const submitComment = async () => {
  try {
    const payload = { name: newName.value, message: newMessage.value };
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      newName.value = '';      // Clear the name box
      newMessage.value = '';   // Clear the message box
      fetchComments();         // Refresh the list invisibly
      alert("Comment successfully posted!");
    }
  } catch (error) {
    console.error('Error posting comment:', error);
    alert("Failed to post comment. Check backend connection.");
  }
};

onMounted(() => {
  fetchComments();
});
</script>

<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #0b1121;
    color: #f1f5f9;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    height: 100vh;
    overflow: hidden;
}

.portfolio-container {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr 1fr auto;
    gap: 12px;
}

.card {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 16px;
    color: #f1f5f9;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card:hover {
    transform: translateY(-2px);
    border-color: #06b6d4;
    box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.4);
}

.main-header {
    grid-column: 1 / -1; 
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px; 
    border-radius: 16px;
}

.main-header h1 {
    font-weight: 800;
    font-size: 2.2rem;
    margin: 0 0 8px 0;
    letter-spacing: -1px;
    background: linear-gradient(to right, #fff, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.badge-role {
    background: rgba(6, 182, 212, 0.15);
    color:#06b6d4;
    padding: 4px 12px;
    border-radius: 30px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(6, 182, 212, 0.3);
    animation: badgePulse 2s infinite;
}

.main-header p {
    font-size: 1rem;
    color: #94a3b8;
    margin: 5px 0 0 0;
    letter-spacing: 0.5px;
}

.card-gallery {
    grid-column: span 1;
    grid-row: span 3; 
    padding: 0;
    border: none;
    position: relative;
    cursor: pointer;
}

.gallery-overlay-full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-decoration: none;
    z-index: 2;
}

.gallery-overlay-full span {
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 30px;
}

.card-gallery:hover .gallery-overlay-full {
    opacity: 1;
}

.card-title {
    font-size: 0.85rem;
    font-weight: 700; 
    margin-bottom: 12px;
    display: flex; 
    align-items: center; 
    gap: 10px;
    text-transform: uppercase; 
    letter-spacing: 1px;
    color: #06b6d4;
}

.about-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #06b6d4;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 12px 0;
    line-height: 1.2;
}

.about-text { 
    font-size: 1rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin-bottom: 25px; 
}

.card-content p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #f1f5f9;
}

.social-icons { display: flex; gap: 12px; margin-top: auto; }
.social-icons span {
    color: #f1f5f9; font-size: 1.5rem; display: flex; align-items: center;
    transition: all 0.3s ease; cursor: default;
}
.social-icons span:hover {
    color: #06b6d4; transform: translateY(-3px);
}
.corner-arrow {
    position: absolute; bottom: 15px; right: 15px;
    color: #f1f5f9; font-size: 1.5rem; opacity: 0.6; transition: 0.3s;
}
.corner-arrow:hover { opacity: 1; color: #06b6d4; }

.centered { text-align: center; }

.card-course .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.card-course h3 {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    color: #e2e8f0;
    line-height: 1.2;
}

.compact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #cbd5e1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    padding-left: 15px;
    margin-left: 5px;
}

.compact-list li { 
    margin-bottom: 0; 
    padding-left: 20px;
    border-left: 2px solid rgba(6, 182, 212, 0.3);
    transition: all 0.3s ease;
    position: relative;
}

.compact-list li::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 6px;
    width: 8px;
    height: 8px;
    background-color: #0b1121;
    border: 2px solid #94a3b8;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.compact-list li:hover::before {
    background-color: #06b6d4;
    border-color: #06b6d4;
    box-shadow: 0 0 8px #06b6d4;
}

.compact-list li:hover {
    border-left-color: #06b6d4;
    color: #f1f5f9;
}

.card-experience .card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.skill-tag-container { 
    display: flex; 
    flex-direction: column;
    gap: 15px; 
    width: 80%;
}

.skill-tag {
    display: block;
    text-align: center;
    font-size: 1.1rem;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    color: #94a3b8;
    transition: all 0.3s ease;
    cursor: default;
}

.skill-tag:hover {
    background: rgba(6, 182, 212, 0.2);
    border-color: #06b6d4;
    color: #06b6d4;
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
    transform: translateX(5px);
    cursor: pointer;
}

.card-goal .card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.card-goal p {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.5;
    font-weight: 500;
    color: #e2e8f0;
}

.card-hobbies {
    justify-content: flex-start;
    padding-top: 30px;
}

.card-hobbies .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}

.card-hobbies .icons-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
}

.card-hobbies i {
    font-size: 3.5rem;
    opacity: 0.8;
    transition: transform 0.3s ease;
    color: #94a3b8;
}

.card-hobbies i:hover {
    transform: scale(1.2);
    color: #00d4ff;
}

.custom-footer { grid-column: 1 / -1; text-align: center; padding-top: 5px; color:#94a3b8; font-size: 0.7rem; opacity: 0.5; }

@keyframes badgePulse {
    0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
    100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
}

.card-education {
    justify-content: flex-start;
    padding-top: 30px;
}

.card-comments {
    grid-column: 2 / -1;
    grid-row: span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.comment-form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    width: 100%;
}

.comment-form input {
    grid-column: 1 / -1;
    padding: 15px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #f1f5f9;
}

.comment-form textarea {
    grid-column: 1 / 2;
    padding: 15px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #f1f5f9;
    resize: none;
}

.comment-form button {
    grid-column: 2 / 3;
    padding: 0 30px;
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

@media (max-width: 900px) {
    body { height: auto; overflow: auto; }
    .portfolio-container { display: flex; flex-direction: column; }
}
</style>