const url = window.location.search;
const urlParams = new URLSearchParams(url);
const auth_token = urlParams.get("auth");
const usersButton = document.querySelector(".user-button");
const artistsButton = document.querySelector(".artist-button");
const songButton = document.querySelector(".song-button");
const usernameButton = document.querySelector(".username-button");
const userameInput = document.querySelector(".username-input");
const testButton = document.querySelector(".test-button");

usersButton.addEventListener("click", () => {
  axios.get(`http://localhost:3000/users/${auth_token}`).then((res) => {
    console.log(res.data);
  });
});
artistsButton.addEventListener("click", () => {
  axios.get(`http://localhost:3000/artists/${auth_token}`).then((res) => {
    console.log(res.data);
  });
});
songButton.addEventListener("click", () => {
  axios.get(`http://localhost:3000/songs/${auth_token}`).then((res) => {
    console.log(res.data);
  });
});
usernameButton.addEventListener("click", () => {
  const username = userameInput.value;
  userameInput.value = "enter username";
  axios
    .get(`http://localhost:3000/get_username/${auth_token}/${username}`)
    .then((res) => {
      console.log(res.data);
    });
});
testButton.addEventListener("click", () => {
  const username = userameInput.value;
  userameInput.value = "enter username";
  axios
    .get(`http://localhost:3000/test/${auth_token}/${username}`)
    .then((res) => {
      console.log(res.data);
    });
});
