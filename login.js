const redirectUri = "https://eliasw4444.github.io/p/";
const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "7fcfb8b43cfa49c395412083cf51bf27";
// const clientId = "da0bad7f97f941a89d7f8c60e5fcd326";

const scopesArray = [
  "user-modify-playback-state",
  "ugc-image-upload",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-top-read",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
];
const scopes = scopesArray.join(" ");
console.log(scopes, "scopes");

const loginUrl = `${authEndpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes}
&response_type=token
&scope=${scopes}
&show_dialog=true`;
