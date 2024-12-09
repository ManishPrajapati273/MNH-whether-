// Clock Update
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateString;

  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById('day').textContent = dayName;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Weather Fetching
async function fetchWeather() {
  try {
    const response = await fetch("https://wttr.in/Jhansi?format=%t|%C");
    if (!response.ok) throw new Error("Unable to fetch weather data!");

    const weatherData = await response.text();
    const [temperature, condition] = weatherData.split("|");

    document.getElementById("temperature").innerText = temperature;
    document.getElementById("weather").innerText = `Weather: ${condition}`;
  } catch (error) {
    document.getElementById("weather").innerText = "Error: " + error.message;
  }
}

fetchWeather(); // Fetch on page load

// Time-Based Background and Sounds
function setBackgroundAndSoundBasedOnTime() {
  const hour = new Date().getHours();
  const body = document.body;
  
  const timeInfo = document.getElementById('time-info');

  body.className = ""; // Reset classes
  // Time-Based Background and Sounds
function setBackgroundAndSoundBasedOnTime() {
  const hour = new Date().getHours();
  const body = document.body;
  const timeInfo = document.getElementById('time-info');
  const bgMusic = document.getElementById('bgMusic');
  const soundEffect = document.getElementById('soundEffect');

  body.className = ""; // Reset classes

  if (hour >= 3 && hour < 12) { // From 3 AM to before 12 PM
    body.classList.add("morning");
    timeInfo.textContent = "Good Morning!!";
    bgMusic.src = "morning-music.mp3";
    soundEffect.src = "morning-sound.mp3";
  } else if (hour >= 12 && hour < 15) { // From 12 PM to before 3 PM
    body.classList.add("afternoon");
    timeInfo.textContent = "Good Afternoon! ";
    bgMusic.src = "afternoon-music.mp3";
    soundEffect.src = "afternoon-sound.mp3";
  } else if (hour >= 15 && hour < 20) { // From 3 PM to before 8 PM
    body.classList.add("evening");
    timeInfo.textContent = "Good Evening! Relax!";
    bgMusic.src = "evening-music.mp3";
    soundEffect.src = "evening-sound.mp3";
  } else { // After 8 PM
    body.classList.add("night");
    timeInfo.textContent = "Good Night! Sweet dreams!";
    bgMusic.src = "night-music.mp3";
    soundEffect.src = "night-sound.mp3";
  }

  soundEffect.play(); // Play sound effect once
}

setBackgroundAndSoundBasedOnTime();
setInterval(setBackgroundAndSoundBasedOnTime, 60000); // Update every minute

  soundEffect.play(); // Play sound effect once
}

setBackgroundAndSoundBasedOnTime();
setInterval(setBackgroundAndSoundBasedOnTime, 60000); // Update every minute

function updateClock() {
    const now = new Date();

    // Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

    // Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;

    // Day
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('day').textContent = dayName;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to avoid delay

// Function to get current hour
function getCurrentTime() {
    const now = new Date();
    return now.getHours();
}


