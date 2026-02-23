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
.resource-page { background-color: #0b1121; height: 100vh; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.content-box { background: rgba(30, 41, 59, 0.7); padding: 30px; border-radius: 15px; border: 1px solid #06b6d4; }
.back-home { margin-top: 20px; display: block; color: #06b6d4; text-decoration: none; }
</style>