<template>
  <div class="music-container">
    <header class="header">
      <router-link to="/" class="back-btn"><i class="bi bi-arrow-left"></i> Back to Home</router-link>
      <h2>VIBE CHECK</h2>
    </header>

    <div class="genre-selector">
      <label for="genre-dropdown"><i class="bi bi-music-note-list"></i> Select Genre:</label>
      <select 
        id="genre-dropdown" 
        class="custom-select" 
        :value="currentGenre" 
        @change="selectGenre($event.target.value)"
      >
        <option v-for="(track, key) in tracks" :key="key" :value="key">
          {{ track.label }} - {{ track.title }}
        </option>
      </select>
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

      <audio 
        ref="audioPlayer" 
        :src="tracks[currentGenre].src" 
        @ended="handleTrackEnd"
      ></audio>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const isPlaying = ref(false);
const audioPlayer = ref(null);
const currentGenre = ref('pop1');

const tracks = {
  pop1: { 
    label: 'Pop', 
    title: 'Birds of a feather', 
    src: '/audio/pop1.mp3',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
  },
  pop2: { 
    label: 'Pop', 
    title: 'Shape of You', 
    src: '/audio/pop2.mp3',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
  },
  pop3: { 
    label: 'Pop', 
    title: 'Lowkey', 
    src: '/audio/pop3.mp3',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
  },
  pop4: { 
    label: 'Pop', 
    title: 'Roses', 
    src: '/audio/pop4.mp3',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
  },
  pop5: { 
    label: 'Pop', 
    title: 'Blinding lights', 
    src: '/audio/pop5.mp3',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
  },
  rb1: { 
    label: 'R&B', 
    title: 'R&B Track 1', 
    src: '/audio/rb1.mp3',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  rb2: { 
    label: 'R&B', 
    title: 'R&B Track 2', 
    src: '/audio/rb2.mp3',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  rb3: { 
    label: 'R&B', 
    title: 'R&B Track 3', 
    src: '/audio/rb3.mp3',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  rb4: { 
    label: 'R&B', 
    title: 'R&B Track 4', 
    src: '/audio/rb4.mp3',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  rb5: { 
    label: 'R&B', 
    title: 'R&B Track 5', 
    src: '/audio/rb5.mp3',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  rock: { 
    label: 'Rock', 
    title: 'Placeholder Rock Track', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    color: 'linear-gradient(135deg, #434343 0%, #000000 100%)'
  },
  emo: { 
    label: 'Emo', 
    title: 'Placeholder Emo Track', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    color: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)'
  },
  country: { 
    label: 'Country', 
    title: 'Placeholder Country Track', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
  },
  hiphop: { 
    label: 'HipHop/Rap', 
    title: 'Placeholder Rap Track', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  opm: { 
    label: 'OPM', 
    title: 'Placeholder OPM Track', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    color: 'linear-gradient(135deg, #06b6d4 0%, #0369a1 100%)'
  }
};

const trackKeys = Object.keys(tracks);

const selectGenre = async (key, forcePlay = false) => {
  if (currentGenre.value === key) return;
  const wasPlaying = isPlaying.value;

  if (isPlaying.value && audioPlayer.value) {
    audioPlayer.value.pause();
  }
  
  isPlaying.value = false;
  currentGenre.value = key;
  
  await nextTick();

  if ((forcePlay || wasPlaying) && audioPlayer.value) {
    audioPlayer.value.play();
    isPlaying.value = true;
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

const handleTrackEnd = () => {
  nextTrack();
};

const togglePlay = () => {
  if (!audioPlayer.value) return;
  
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<style scoped>
/* Keeping your styles exactly the same as they were perfect */
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

.genre-selector {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  background: #162031;
  padding: 15px 25px;
  border-radius: 12px;
  border: 1px solid #1e293b;
}

.genre-selector label {
  color: #94a3b8;
  font-weight: bold;
  font-size: 1.1rem;
}

.custom-select {
  background: #0b1121;
  color: #06b6d4;
  border: 1px solid #334155;
  padding: 10px 40px 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 15px;
  transition: border-color 0.3s ease;
}

.custom-select:focus, .custom-select:hover {
  border-color: #06b6d4;
}

.turntable-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #162031;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #1e293b;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  width: 100%;
  max-width: 500px;
}

.now-playing {
  text-align: center;
  margin-bottom: 30px;
}

.now-playing h3 {
  color: #06b6d4;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.now-playing p {
  color: #f8fafc;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
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
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  transition: background 0.5s ease;
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

.controls {
  display: flex;
  align-items: center;
  gap: 30px;
}

.control-btn {
  background: transparent;
  color: #94a3b8;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
}

.control-btn:hover {
  color: #f8fafc;
  transform: scale(1.1);
}

.play-btn {
  background: #06b6d4;
  color: #0b1121;
  border: none;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
}

.play-btn:hover {
  background: #0891b2;
  transform: scale(1.05);
}

.play-btn i.bi-play-fill {
  margin-left: 5px; 
}
</style>