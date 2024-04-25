// My Solution

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
    return this.getOverview();
  }

  getOverview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
  }
}

let batman_begins = new Movie(
  "Batman Begins",
  "Christopher Nolan",
  "Action",
  "2008",
  "4.5/5"
)
console.log(batman_begins.getOverview());
console.log(batman_begins.overview);