<template>
  <div class="music-container">
    <header class="header">
      <router-link to="/" class="back-btn"><i class="bi bi-arrow-left"></i> Back to Home</router-link>
      <h2>VIBE CHECK</h2>
    </header>

    <div class="turntable-wrapper">
      <div :class="['vinyl-record', { playing: isPlaying }]" @click="togglePlay">
        <div class="record-grooves"></div>
        <div class="record-label">
          <div class="center-hole"></div>
        </div>
      </div>
      
      <div class="controls">
        <button @click="togglePlay" class="play-btn">
          <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
          {{ isPlaying ? 'Pause' : 'Play' }} Track
        </button>
      </div>

      <audio 
        ref="audioPlayer" 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        @ended="isPlaying = false"
      ></audio>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isPlaying = ref(false);
const audioPlayer = ref(null);

const togglePlay = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<style scoped>
.music-container {
  padding: 40px;
  min-height: 100vh;
  background-color: #0b1121;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
}

.header h2 {
  color: #06b6d4;
  letter-spacing: 2px;
}

.back-btn {
  color: #94a3b8;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;
}

.back-btn:hover {
  color: #06b6d4;
}

.turntable-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #162031;
  padding: 60px;
  border-radius: 20px;
  border: 1px solid #1e293b;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
}

.vinyl-record {
  width: 280px;
  height: 280px;
  background: #111;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.1);
  margin-bottom: 40px;
  cursor: pointer;
  position: relative;
}

.record-grooves {
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.05);
  background: repeating-radial-gradient(
    #111 0%, 
    #1a1a1a 2%, 
    #111 4%
  );
}

.record-label {
  width: 90px;
  height: 90px;
  background: #06b6d4;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  background-image: linear-gradient(135deg, #06b6d4 0%, #0369a1 100%);
}

.center-hole {
  width: 15px;
  height: 15px;
  background: #0b1121;
  border-radius: 50%;
}

.playing {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

.play-btn {
  background: transparent;
  color: #06b6d4;
  border: 2px solid #06b6d4;
  padding: 12px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.play-btn:hover {
  background: #06b6d4;
  color: #0b1121;
}
</style>