const genres = ["Horror", "Comedy", "Drama", "Action", "Suspense", "Documentary"]

const ulElement = document.querySelector('.movieGenres')

genres.forEach((genre) => {
  const newListItem = document.createElement('li')
  newListItem.textContent = genre
  ulElement.append(newListItem)
})

axios({
  method: "GET",
  url: "http://api.site.com/api",
  responseType: "json",
  params: {
    param1: "value",
  },
}).then(function (res) {
  console.log(res);
});

