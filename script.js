const CLIENT_ID = "lW8JbBYLzj0dWlAjACeltzB0HeSfjYO4Dlw46PvNibI",
  photo = document.querySelector(".photo"),
  p = document.querySelector(".p"),
  button = document.querySelector(".button");
span = document.querySelector(".span");
let count = 0;

const fetchPhotos = async () => {
  const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=1`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data[0].urls.regular);
  photoURL = data[0].urls.regular;
  photoName = data[0].user.name;
  photo.innerHTML = `<img src="${data[0].urls.regular}">`;
  p.append(photoName);
};

fetchPhotos();

button.addEventListener("click", () => {
  count++;
  span.innerHTML = count;
});
