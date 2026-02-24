<template>
  <router-view />
</template>

<style>
html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: 100%;
  background-color: #0b1121;
  color: white;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  touch-action: manipulation;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0b1121;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #06b6d4;
}

@media (max-width: 768px) {
  html, body {
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
}

@media (max-width: 480px) {
  html, body {
    font-size: 13px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
}
</style>