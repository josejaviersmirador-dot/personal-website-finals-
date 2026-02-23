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
            <h2 class="card-title">ABOUT ME</h2>
            <p class="about-text">Hello! I'm JV, a second-year IT student at Asia Pacific College. I'm passionate about technology, and hands-on electronics.</p>
            
            <div class="bottom-row">
                <div class="social-icons">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-spotify"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-github"></i>
                </div>
                <router-link to="/profile.html" class="corner-arrow"><i class="bi bi-box-arrow-up-right"></i></router-link>
            </div>
        </div>

        <div class="card card-course">
            <div class="card-title-row">
                <i class="bi bi-cpu-fill"></i> COURSE
            </div>
            <div class="card-content centered">
                <h3 class="big-text">BS Information Technology</h3>
            </div>
        </div>

        <div class="card card-goal">
            <div class="card-title-row">
                <i class="bi bi-rocket-takeoff-fill"></i> GOAL
            </div>
            <div class="card-content centered">
                <p class="goal-text">To become a skilled IT professional and build a successful career.</p>
            </div>
        </div>

        <div class="card card-education">
            <div class="card-title-row">
                <i class="bi bi-trophy-fill"></i> EDUCATION & ACHIEVEMENT
            </div>
            <div class="card-content">
                <ul class="timeline-list">
                    <li><span class="dot"></span><strong>MCA Montessori School</strong> - Elementary (1-6)</li>
                    <li><span class="dot"></span><strong>MCA Montessori School</strong> - JHS (7-8)</li>
                    <li><span class="dot"></span><strong>APEC Pateros</strong> - JHS (9-10)</li>
                    <li><span class="dot"></span><strong>APEC Pateros</strong> - SHS (Honors)</li>
                    <li><span class="dot"></span><strong>Asia Pacific College</strong> - College</li>
                </ul>
            </div>
        </div>

        <div class="card card-projects">
            <div class="card-title-row">
                <i class="bi bi-code-slash"></i> PROJECTS
            </div>
            <div class="card-content centered">
                <div class="project-pill">Voice AI</div>
                <div class="project-pill">Reservation System</div>
            </div>
        </div>

        <div class="card card-interests">
            <div class="card-title-row">
                <i class="bi bi-controller"></i> INTERESTS
            </div>
            <div class="card-content icons-row">
                <i class="bi bi-book"></i>
                <i class="bi bi-music-note-beamed"></i>
                <i class="bi bi-joystick"></i>
            </div>
        </div>

        <div class="card card-comments">
            <div class="card-title-row">
                <i class="bi bi-chat-left-text-fill"></i> LEAVE A COMMENT
            </div>
            <form class="comment-grid">
                <input type="text" placeholder="Name" class="comment-input">
                <textarea placeholder="Write your message here..." class="comment-area"></textarea>
                <button type="submit" class="comment-btn">Post Comment</button>
            </form>
        </div>

        <footer class="custom-footer">
            &copy; 2026 Jose Mirador - APC WEBPROG | <router-link to="/Resources.html">Resources</router-link>
        </footer>

    </div>
</template>

<style>
/* Base Setup */
body {
    background-color: #0d1626; /* Darker navy from goal image */
    color: #f1f5f9;
    margin: 0;
    font-family: 'Inter', sans-serif;
    padding: 20px;
    height: 100vh;
    box-sizing: border-box;
}

.portfolio-container {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr 1fr 0.8fr auto;
    gap: 15px;
    height: 100%;
}

/* Glassmorphism Cards */
.card {
    background: #162031; /* Goal image card color */
    border: 1px solid #1e293b;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

/* Header */
.main-header {
    grid-column: 1 / -1;
    text-align: center;
    background: #111b2d;
    border-radius: 12px;
    padding: 15px;
    border: 1px solid #1e293b;
}

.main-header h1 { font-size: 2rem; margin: 0; letter-spacing: 2px; }
.badge-role { background: #06b6d4; color: white; padding: 2px 12px; border-radius: 20px; font-size: 0.7rem; }

/* Image Card */
.card-gallery { grid-row: 2 / 5; padding: 0; position: relative; }
.gallery-img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
.gallery-overlay-full { position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; color: white; text-decoration: none; }
.card-gallery:hover .gallery-overlay-full { opacity: 1; }

/* Titles */
.card-title, .card-title-row { color: #06b6d4; font-size: 0.75rem; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }

/* Content Styles */
.big-text { font-size: 1.5rem; text-align: center; margin: 0; }
.goal-text { font-size: 1.1rem; text-align: center; color: #94a3b8; }
.about-text { font-size: 0.9rem; line-height: 1.5; color: #cbd5e1; }

/* Timeline styling for Education */
.timeline-list { list-style: none; padding: 0; margin: 0; border-left: 1px solid #334155; }
.timeline-list li { padding-left: 15px; margin-bottom: 8px; font-size: 0.85rem; position: relative; }
.dot { position: absolute; left: -4px; top: 6px; width: 7px; height: 7px; background: #06b6d4; border-radius: 50%; box-shadow: 0 0 8px #06b6d4; }

/* Project Pills */
.project-pill { background: #1e293b; border: 1px solid #334155; padding: 10px; border-radius: 30px; margin-bottom: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8; }

/* Icons */
.social-icons { display: flex; gap: 12px; font-size: 1.2rem; }
.icons-row { display: flex; justify-content: space-around; font-size: 2rem; color: #334155; }
.bottom-row { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }

/* Comment Section */
.card-comments { grid-column: 2 / -1; }
.comment-grid { display: grid; grid-template-columns: 1fr 150px; grid-template-rows: auto auto; gap: 10px; height: 100%; }
.comment-input { background: #0d1626; border: 1px solid #1e293b; padding: 10px; border-radius: 8px; color: white; grid-column: 1 / -1; }
.comment-area { background: #0d1626; border: 1px solid #1e293b; padding: 10px; border-radius: 8px; color: white; resize: none; }
.comment-btn { background: #06b6d4; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }

.custom-footer { grid-column: 1 / -1; text-align: center; font-size: 0.65rem; color: #475569; padding-top: 5px; }
.custom-footer a { color: #06b6d4; text-decoration: none; }
</style>