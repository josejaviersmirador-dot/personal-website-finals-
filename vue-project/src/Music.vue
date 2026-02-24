<template>
  <div class="music-container">
    <header class="header">
      <router-link to="/" class="back-btn"><i class="bi bi-arrow-left"></i> Back to Home</router-link>
      <h2>VIBE CHECK</h2>
    </header>

    <div class="genre-selector">
      <div class="custom-select-wrapper">
        <i class="bi bi-disc-fill spinning-icon" :class="{ 'playing-fast': isPlaying }"></i>
        <select 
          id="genre-dropdown" 
          class="sleek-select" 
          :value="currentGenre" 
          @change="selectGenre($event.target.value)"
        >
          <optgroup v-for="genre in ['Pop', 'R&B', 'Rock', 'Emo', 'Country', 'HipHop/Rap', 'OPM']" :key="genre" :label="genre.toUpperCase()">
            <option v-for="(track, key) in filterByGenre(genre)" :key="key" :value="key">
              {{ track.title }}
            </option>
          </optgroup>
        </select>
      </div>
    </div>

    <div v-if="tracks[currentGenre]" class="turntable-wrapper">
      <div class="now-playing">
        <h3>{{ tracks[currentGenre].label }} Vibe</h3>
        <p>{{ tracks[currentGenre].title }}</p>
      </div>

      <div :class="['vinyl-record', { playing: isPlaying }]" @click="togglePlay">
        <div class="record-grooves"></div>
        <div class="record-label" :style="{ background: tracks[currentGenre].color }">
          <div class="center-hole"></div>
        </div>
      </div>

      <div class="progress-container">
        <span class="time">{{ formatTime(currentTime) }}</span>
        <input 
          type="range" 
          class="progress-bar" 
          min="0" 
          :max="duration" 
          step="0.1" 
          v-model="currentTime" 
          @input="seekAudio"
        />
        <span class="time">{{ formatTime(duration) }}</span>
      </div>
      
      <div class="controls">
        <button @click="prevTrack" class="control-btn" title="Previous Track">
          <i class="bi bi-skip-backward-fill"></i>
        </button>
        
        <button @click="togglePlay" class="play-btn" title="Play/Pause">
          <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
        </button>

        <button @click="nextTrack" class="control-btn" title="Next Track">
          <i class="bi bi-skip-forward-fill"></i>
        </button>
      </div>

      <div class="volume-container">
        <i :class="isMuted || volume == 0 ? 'bi bi-volume-mute' : 'bi bi-volume-up'" @click="toggleMute" class="vol-icon"></i>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          v-model="volume" 
          @input="updateVolume" 
          class="volume-slider"
        />
      </div>

      <audio 
        ref="audioPlayer" 
        :src="tracks[currentGenre].src" 
        @ended="handleTrackEnd"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
      ></audio>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';

const isPlaying = ref(false);
const audioPlayer = ref(null);
const currentGenre = ref('pop1');
const volume = ref(0.7);
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);

// FIXED: Added leading slashes to all local paths
const tracks = {
  pop1: { label: 'Pop', title: 'Birds of a feather', src: '/audio/pop1.mp3', color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' },
  pop2: { label: 'Pop', title: 'Shape of You', src: '/audio/pop2.mp3', color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' },
  pop3: { label: 'Pop', title: 'Lowkey', src: '/audio/pop3.mp3', color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' },
  pop4: { label: 'Pop', title: 'Roses', src: '/audio/pop4.mp3', color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' },
  pop5: { label: 'Pop', title: 'Blinding lights', src: '/audio/pop5.mp3', color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' },
  rb1: { label: 'R&B', title: "Nothing's Gonna Change My Love For You", src: '/audio/rb1.mp3', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  rb2: { label: 'R&B', title: "If Ever You're In My Arms Again", src: '/audio/rb2.mp3', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  rb3: { label: 'R&B', title: "All My Life", src: '/audio/rb3.mp3', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  rb4: { label: 'R&B', title: "On Bended Knee", src: '/audio/rb4.mp3', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  rb5: { label: 'R&B', title: "Don't Know What to Say", src: '/audio/rb5.mp3', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  rock1: { label: 'Rock', title: 'Home', src: '/audio/rock1.mp3', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
  rock2: { label: 'Rock', title: 'Dont stop me now', src: '/audio/rock2.mp3', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
  rock3: { label: 'Rock', title: 'Photograph', src: '/audio/rock3.mp3', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
  rock4: { label: 'Rock', title: 'One Last Breath', src: '/audio/rock4.mp3', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
  rock5: { label: 'Rock', title: 'Boulevard Of Broken Dreams', src: '/audio/rock5.mp3', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
  emo1: { 
    label: 'Emo', 
    title: 'Face down', 
    src: '/audio/emo1.mp3', 
    color: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)' 
  },
  emo2: { 
    label: 'Emo', 
    title: 'sugar, we\'re goin down', 
    src: '/audio/emo2.mp3', 
    color: 'linear-gradient(135deg, #1a1a1a 0%, #434343 100%)' 
  },
  emo3: { 
    label: 'Emo', 
    title: 'Perfect', 
    src: '/audio/emo3.mp3', 
    color: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' 
  },
  emo4: { 
    label: 'Emo', 
    title: 'Jetlag', 
    src: '/audio/emo4.mp3', 
    color: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' 
  },
  emo5: { 
    label: 'Emo', 
    title: 'Tonight', 
    src: '/audio/emo5.mp3', 
    color: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' 
  },
  country: { label: 'Country', title: 'Placeholder Country Track', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  hiphop: { label: 'HipHop/Rap', title: 'Placeholder Rap Track', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  opm: { label: 'OPM', title: 'Placeholder OPM Track', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', color: 'linear-gradient(135deg, #06b6d4 0%, #0369a1 100%)' }
};

const trackKeys = Object.keys(tracks);

const filterByGenre = (genreName) => {
  return Object.keys(tracks).filter(key => tracks[key].label === genreName).reduce((obj, key) => {
    obj[key] = tracks[key];
    return obj;
  }, {});
};

const onTimeUpdate = () => {
  if (audioPlayer.value) currentTime.value = audioPlayer.value.currentTime;
};

const onLoadedMetadata = () => {
  if (audioPlayer.value) duration.value = audioPlayer.value.duration;
};

const seekAudio = () => {
  if (audioPlayer.value) audioPlayer.value.currentTime = currentTime.value;
};

const formatTime = (time) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const updateVolume = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value;
    isMuted.value = volume.value === 0;
  }
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (audioPlayer.value) audioPlayer.value.muted = isMuted.value;
};

const selectGenre = async (key, forcePlay = false) => {
  if (currentGenre.value === key) return;
  const wasPlaying = isPlaying.value;
  if (isPlaying.value && audioPlayer.value) audioPlayer.value.pause();
  
  isPlaying.value = false;
  currentGenre.value = key;
  
  await nextTick();
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value;
    if (forcePlay || wasPlaying) {
      audioPlayer.value.play();
      isPlaying.value = true;
    }
  }
};

const prevTrack = () => {
  const currentIndex = trackKeys.indexOf(currentGenre.value);
  const prevIndex = (currentIndex - 1 + trackKeys.length) % trackKeys.length;
  selectGenre(trackKeys[prevIndex], true);
};

const nextTrack = () => {
  const currentIndex = trackKeys.indexOf(currentGenre.value);
  const nextIndex = (currentIndex + 1) % trackKeys.length;
  selectGenre(trackKeys[nextIndex], true);
};

const handleTrackEnd = () => nextTrack();

const togglePlay = () => {
  if (!audioPlayer.value) return;
  if (isPlaying.value) audioPlayer.value.pause();
  else audioPlayer.value.play();
  isPlaying.value = !isPlaying.value;
};

onMounted(() => {
  if (audioPlayer.value) audioPlayer.value.volume = volume.value;
});
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
  margin-bottom: 30px; 
}

.header h2 { 
  color: #06b6d4; 
  letter-spacing: 2px; 
  font-size: 1.8rem;
}

.back-btn { 
  color: #94a3b8; 
  text-decoration: none; 
  font-size: 1.1rem; 
  display: flex; 
  align-items: center; 
  gap: 8px; 
  transition: color 0.3s ease;
  padding: 8px 16px;
  border-radius: 8px;
}

.back-btn:hover { 
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
}

.genre-selector { 
  margin-bottom: 40px; 
  width: 100%; 
  max-width: 400px; 
  display: flex; 
  justify-content: center; 
}

.custom-select-wrapper {
  position: relative; 
  display: flex; 
  align-items: center; 
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px; 
  padding: 5px 25px; 
  width: 100%; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.spinning-icon { 
  color: #06b6d4; 
  margin-right: 15px; 
  font-size: 1.2rem; 
}

.playing-fast { 
  animation: spin 2s linear infinite; 
}

.sleek-select {
  appearance: none; 
  background: transparent; 
  border: none; 
  color: #f8fafc; 
  width: 100%;
  padding: 12px 0; 
  font-size: 1rem; 
  font-weight: 600; 
  cursor: pointer; 
  outline: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat; 
  background-position: right center; 
  background-size: 14px;
  padding-right: 25px;
}

optgroup { 
  background: #162031; 
  color: #94a3b8; 
  padding: 10px; 
}

option { 
  background: #162031; 
  color: white; 
  padding: 12px; 
}

.turntable-wrapper {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  background: #162031;
  padding: 40px; 
  border-radius: 20px; 
  border: 1px solid #1e293b;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4); 
  width: 100%; 
  max-width: 500px;
}

.now-playing { 
  text-align: center; 
  margin-bottom: 20px; 
}

.now-playing h3 { 
  color: #06b6d4; 
  text-transform: uppercase; 
  font-size: 0.9rem; 
  margin-bottom: 5px; 
}

.now-playing p { 
  color: #f8fafc; 
  font-size: 1.2rem; 
  font-weight: bold; 
  margin: 0; 
  word-break: break-word;
}

.vinyl-record {
  width: 220px; 
  height: 220px; 
  background: #111; 
  border-radius: 50%;
  display: flex; 
  justify-content: center; 
  align-items: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.8); 
  margin-bottom: 25px; 
  cursor: pointer; 
  position: relative;
}

.record-grooves {
  position: absolute; 
  width: 90%; 
  height: 90%; 
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.05);
  background: repeating-radial-gradient(#111 0%, #1a1a1a 2%, #111 4%);
}

.record-label { 
  width: 70px; 
  height: 70px; 
  border-radius: 50%; 
  z-index: 2; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.center-hole { 
  width: 12px; 
  height: 12px; 
  background: #0b1121; 
  border-radius: 50%; 
}

.playing { 
  animation: spin 3s linear infinite; 
}

@keyframes spin { 
  100% { transform: rotate(360deg); } 
}

.progress-container { 
  width: 100%; 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  margin-bottom: 20px; 
}

.time { 
  font-size: 0.75rem; 
  color: #94a3b8; 
  min-width: 35px; 
}

.progress-bar { 
  flex: 1; 
  accent-color: #06b6d4; 
  height: 4px; 
  cursor: pointer; 
}

.controls { 
  display: flex; 
  align-items: center; 
  gap: 25px; 
  margin-bottom: 20px; 
}

.control-btn { 
  background: transparent; 
  color: #94a3b8; 
  border: none; 
  font-size: 1.8rem; 
  cursor: pointer; 
  transition: all 0.3s ease;
  padding: 5px;
}

.control-btn:hover { 
  color: #f8fafc; 
  transform: scale(1.1); 
}

.play-btn {
  background: #06b6d4; 
  color: #0b1121; 
  border: none; 
  width: 55px; 
  height: 55px;
  border-radius: 50%; 
  font-size: 2rem; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  cursor: pointer; 
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
  transition: all 0.3s ease;
}

.play-btn:hover {
  background: #0891b2;
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
}

.volume-container {
  width: 100%;
  max-width: 180px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 30px;
}

.vol-icon { 
  color: #06b6d4; 
  font-size: 1.1rem; 
  cursor: pointer;
  transition: color 0.3s ease;
}

.vol-icon:hover {
  color: #0891b2;
}

.volume-slider { 
  flex: 1; 
  accent-color: #06b6d4; 
  height: 4px; 
  cursor: pointer; 
}

@media (max-width: 768px) {
  .music-container {
    padding: 20px;
  }

  .header {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }

  .header h2 {
    font-size: 1.4rem;
  }

  .back-btn {
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }

  .genre-selector {
    margin-bottom: 30px;
    max-width: 100%;
  }

  .custom-select-wrapper {
    padding: 8px 15px;
  }

  .spinning-icon {
    margin-right: 10px;
    font-size: 1rem;
  }

  .sleek-select {
    font-size: 0.9rem;
  }

  .turntable-wrapper {
    padding: 30px 20px;
    max-width: 100%;
    border-radius: 15px;
  }

  .vinyl-record {
    width: 180px;
    height: 180px;
  }

  .record-label {
    width: 55px;
    height: 55px;
  }

  .now-playing h3 {
    font-size: 0.8rem;
  }

  .now-playing p {
    font-size: 1rem;
  }

  .controls {
    gap: 20px;
  }

  .control-btn {
    font-size: 1.4rem;
  }

  .play-btn {
    width: 48px;
    height: 48px;
    font-size: 1.6rem;
  }

  .volume-container {
    max-width: 90%;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .music-container {
    padding: 15px;
  }

  .header {
    flex-direction: column;
    gap: 10px;
  }

  .header h2 {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  .back-btn {
    font-size: 0.8rem;
    padding: 6px 10px;
  }

  .genre-selector {
    margin-bottom: 25px;
  }

  .custom-select-wrapper {
    padding: 6px 12px;
  }

  .spinning-icon {
    margin-right: 8px;
    font-size: 0.9rem;
  }

  .sleek-select {
    font-size: 0.85rem;
  }

  .turntable-wrapper {
    padding: 20px 15px;
  }

  .vinyl-record {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

  .record-label {
    width: 45px;
    height: 45px;
  }

  .center-hole {
    width: 10px;
    height: 10px;
  }

  .now-playing h3 {
    font-size: 0.7rem;
  }

  .now-playing p {
    font-size: 0.9rem;
  }

  .progress-container {
    gap: 8px;
    margin-bottom: 15px;
  }

  .time {
    font-size: 0.65rem;
    min-width: 30px;
  }

  .controls {
    gap: 15px;
    margin-bottom: 15px;
  }

  .control-btn {
    font-size: 1.2rem;
  }

  .play-btn {
    width: 42px;
    height: 42px;
    font-size: 1.3rem;
  }

  .volume-container {
    max-width: 85%;
    gap: 6px;
    padding: 8px;
  }

  .vol-icon {
    font-size: 0.95rem;
  }
}
</style>