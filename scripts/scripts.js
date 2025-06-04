const tracks = [
  { file: "MSSUN.mp3", name: "01-Dear Future Mrs Me" },
  { file: "MRS ME.mp3", name: "02-Dear Future Mrs me PT.2" },
  { file: "RUNAWAY.mp3", name: "03-Runaway" },
  { file: "risha-1.mp3", name: "04-Risha" },
  { file: "ITS OKAY.mp3", name: "05-Its Okay" },
  { file: "im streesed.mp3", name: "06-I'M Stressed" },
  { file: "FUTI.mp3", name: "07-Don't Call me" },
  { file: "LOFI.mp3", name: "08-Juh like you" },
  { file: "one on one.mp3", name: "09-ONE OF ONE" },
  { file: "ms bluee.mp3", name: "10-Blue" },
  { file: "swerve12.mp3", name: "11-SWERVE" },
  { file: "BLISS2.mp3", name: "12-I.L.Y" },
  { file: "thank god-1.mp3", name: "13-Golden" },
  { file: "its all for you.mp3", name: "14-It's all for you" },
  { file: "any other way.mp3", name: "15.Right here" },
  { file: "Chris brown_23-1.mp3", name: "16-Shadows" },
  { file: "FIGHT FOR YOU.mp3", name: "17-Fight for you" },
  { file: "Unconditional.mp3", name: "18-Unconditional" },
  { file: "the heart-1.mp3", name: "19-The Heart" },
  { file: "PLAN.mp3", name: "20-Hallelujah" },
  { file: "popp2.mp3", name: "21-Pretty brown eyes" }
];

const audio = document.getElementById("audio");
const trackList = document.getElementById("trackList");
const nowPlaying = document.getElementById("nowPlaying");
const playPauseBtn = document.getElementById("playPauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentTrack = 0;

function loadTrack(index) {
  const track = tracks[index];
  audio.src = `sounds/${track.file}`;
  nowPlaying.textContent = `Now Playing: ${track.name}`;
  audio.play();
}

tracks.forEach((track, index) => {
  const li = document.createElement("li");
  li.textContent = track.name;
  li.addEventListener("click", () => {
    currentTrack = index;
    loadTrack(currentTrack);
  });
  trackList.appendChild(li);
});

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
});

prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
});
