<template>
  <div class="resource-page">
    <h1>Resources & Credits</h1>
    <div class="content-box">
      <ul>
        <li>Vue.js Framework</li>
        <li>Bootstrap Icons</li>
        <li>Google Fonts</li>
      </ul>
      <router-link to="/" class="back-home">Return to Dashboard</router-link>
    </div>
  </div>
</template>

<style scoped>
.resource-page { 
  background-color: #0b1121; 
  min-height: 100vh; 
  color: white; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  padding: 20px;
}

.resource-page h1 {
  font-size: 2rem;
  color: #06b6d4;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 2px;
}

.content-box { 
  background: rgba(30, 41, 59, 0.7); 
  padding: 30px; 
  border-radius: 15px; 
  border: 1px solid #06b6d4;
  max-width: 500px;
  width: 100%;
}

.content-box ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.content-box li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 1rem;
}

.content-box li:last-child {
  border-bottom: none;
}

.content-box li:hover {
  color: #06b6d4;
}

.back-home { 
  margin-top: 20px; 
  display: block; 
  color: #06b6d4; 
  text-decoration: none;
  padding: 12px 24px;
  border: 1px solid #06b6d4;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;
  font-weight: 600;
}

.back-home:hover {
  background: #06b6d4;
  color: #0b1121;
}

@media (max-width: 768px) {
  .resource-page {
    padding: 15px;
  }

  .resource-page h1 {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }

  .content-box {
    padding: 20px;
  }

  .content-box li {
    padding: 10px 0;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .resource-page {
    padding: 10px;
  }

  .resource-page h1 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .content-box {
    padding: 15px;
    border-radius: 10px;
  }

  .content-box li {
    padding: 8px 0;
    font-size: 0.9rem;
  }

  .back-home {
    padding: 10px 16px;
    font-size: 0.9rem;
    border-radius: 6px;
  }
}
</style>