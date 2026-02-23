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
            <img src="/image/download.jpg" alt="Jose Mirador" class="gallery-img">
            <router-link to="/gallery.html" class="gallery-overlay-full">
                <span>View Gallery</span>
            </router-link>
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

            <router-link to="/profile.html" class="corner-arrow"><i class="bi bi-box-arrow-up-right"></i></router-link>
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
            </div> <div class="card-content">
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

        <footer class="custom-footer">
            &copy; 2026 Jose Mirador - APC WEBPROG | <router-link to="/Resources.html" style="color: #00d4ff; text-decoration: none;">Resources</router-link>
        </footer>

    </div>
</template>

<script setup>
// Script is empty for now
</script>

<style>
/* Your existing CSS (I've kept it as is) */
body { font-family: sans-serif; background-color: #0b1121; color: #f1f5f9; margin: 0; height: 100vh; overflow: hidden; padding: 10px; }
.portfolio-container { display: grid; height: 100%; grid-template-columns: repeat(4, 1fr); grid-template-rows: auto 1fr 1fr auto; gap: 12px; }
.card { background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; justify-content: center; position: relative; }
.main-header { grid-column: 1 / -1; background: rgba(6, 182, 212, 0.1); border-radius: 16px; text-align: center; padding: 10px; }
.card-gallery { grid-column: span 1; grid-row: span 3; padding: 0; }
.gallery-img { width: 100%; height: 100%; object-fit: cover; border-radius: 16px; }
.gallery-overlay-full { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; text-decoration: none; color: white; }
.card-gallery:hover .gallery-overlay-full { opacity: 1; }
.card-title { color: #06b6d4; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; }
.compact-list { list-style: none; padding-left: 10px; border-left: 2px solid #06b6d4; }
.social-icons { display: flex; gap: 10px; margin-top: 10px; font-size: 1.2rem; }
.custom-footer { grid-column: 1 / -1; text-align: center; font-size: 0.8rem; opacity: 0.6; }
</style>