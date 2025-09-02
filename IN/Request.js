const songInput = document.getElementById("songInput");
const playlist = document.getElementById("playlist");
const audioPlayer = document.getElementById("audioPlayer");
const currentSong = document.getElementById("currentSong");
const cdContainer = document.querySelector(".cd-container");

let songs = [];
let currentIndex = -1;

// Upload songs
songInput.addEventListener("change", (event) => {
  const files = Array.from(event.target.files);

  files.forEach((file) => {
    songs.push(file);

    const li = document.createElement("li");
    li.innerHTML = `<span>${file.name}</span> <i class="fas fa-play"></i>`;
    li.addEventListener("click", () => {
      playSong(songs.indexOf(file));
    });
    playlist.appendChild(li);
  });
});

// Play song
function playSong(index) {
  if (index >= 0 && index < songs.length) {
    const file = songs[index];
    const url = URL.createObjectURL(file);

    audioPlayer.src = url;
    audioPlayer.play();

    currentSong.textContent = "Now Playing: " + file.name;
    currentIndex = index;

    cdContainer.classList.add("playing");
  }
}

// Pause/Resume CD animation on play/pause
audioPlayer.addEventListener("play", () => {
  cdContainer.classList.add("playing");
});
audioPlayer.addEventListener("pause", () => {
  cdContainer.classList.remove("playing");
});
