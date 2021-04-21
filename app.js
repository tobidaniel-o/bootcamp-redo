const genres = ["Horror", "Comedy", "Drama", "Action", "Suspense", "Documentary"]

const ulElement = document.querySelector('.movieGenres')

genres.forEach((genre) => {
  const newListItem = document.createElement('li')
  newListItem.textContent = genre
  ulElement.appendChild(newListItem)
})