// My Solution
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability = function() {
    let availability = "In Stock";
    
    if(this.numCopies == 0) {
      availability = "Out of Stock";
    }
    else if(this.numCopies < 10){
      availability = "Low Stock"
    }

    return availability;
  }

  sell = function(numSold = 1) {
    this.numCopies = ((this.numCopies - numSold) > 0) ? this.numCopies - numSold : 0;
  }

  restock = function(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

let dune = new Book("Dune", "Frank Herbert", "23923-23882393", 5);
const log = () => console.log(dune);
const stockCheck = () => console.log("Availability:", dune.availability);

log();
dune.sell();
log();
dune.restock();
log();
stockCheck();
dune.sell(10);
stockCheck();
log();