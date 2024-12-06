const backButton = document.getElementById("backButton");
const soundAuraButton = document.getElementById("soundAuraButton");
backButton.addEventListener("click", () => {
  window.location.href = "https://eliasw4444.github.io/p/p2.html";
});

soundAuraButton.addEventListener("click", () => {
  console.log("Sound Aura Mode button clicked.");
  window.location.href = "https://eliasw4444.github.io/p/p4.html";
});
function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

document.addEventListener("DOMContentLoaded", async () => {
  const songs = [];

  // 使用封装的 axios 实例进行 GET 请求
  const res = await window.axiosInstance.get(`/me/player/recently-played`, {
    limit: 20,
  });

  const data = res.data;
  // 处理数据
  console.log(data, "data");
  const items = data.items;

  items.forEach((item) => {
    console.log(item, "item");
    const track = item.track;
    const firstImage = track.album.images[0].url;
    const title = track.album.name;
    const artists = track.album.artists[0].name;
    const date = track.album.release_date;

    let duration_ms = track.duration_ms;
    let duration = msToTime(duration_ms); // 使用转换函数

    songs.push({
      title: title,
      img: firstImage,
      artist: artists,
      date: date,
      duration,
    });
  });

  songs.forEach((song, index) => {
    const row = document.createElement("tr");
    row.classList.add("song-row");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td class="song-title">
              <img src="${song.img}" alt="Song Image">
              <div class="song-info">
                <div class="song-name">${song.title}</div>
                <div class="artist-name">${song.artist}</div>
              </div>
            </td>
            <td class="song-album">${song.date}</td>
            <td class="song-duration">${song.duration}</td>
          `;

    songList.appendChild(row);
  });
  console.log(songs, "songs");
});
