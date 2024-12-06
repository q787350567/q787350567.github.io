document.addEventListener("DOMContentLoaded", async () => {
  const soundAuraButton = document.getElementById("soundAuraButton");
  const profileButton = document.getElementById("profileButton");
  const songList = document.getElementById("songList");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }
  const songs = [];

  // 使用封装的 axios 实例进行 GET 请求
  const res = await window.axiosInstance.get(
    `/artists/0TnOYISbd1XYRBk9myaseg/top-tracks`
  );

  const data = res.data;
  // 处理数据
  console.log(data, "data");
  const tracks = data.tracks;
  console.log(tracks, "tracks");
  // 取出tracks中，album属性中，images中的第一个

  tracks.forEach((track) => {
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

  soundAuraButton.addEventListener("click", () => {
    console.log("Sound Aura Mode button clicked.");
    window.location.href = "https://eliasw4444.github.io/p/page3.html";
  });

  // profileButton.addEventListener("click", () => {
  //   console.log("Profile button clicked.");
  // });

  // const songs = Array.from({ length: 20 }, (_, i) => ({
  //   title: `Song ${i + 1}`,
  //   artist: `Artist ${i + 1}`,
  //   album: `Album ${i + 1}`,
  //   duration: `${3 + (i % 2)}:00`,
  // }));

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
});
