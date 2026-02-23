<script setup>
import { ref, nextTick } from 'vue';

const isPlaying = ref(false);
const audioPlayer = ref(null);
const currentGenre = ref('pop');

const tracks = {
  pop: { 
    label: 'Pop', 
    title: 'Your Pop Song Title', 
    src: '/audio/pop.mp3',
    color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
  },
  rb: { 
    label: 'R&B', 
    title: 'Placeholder R&B Track', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
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
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>