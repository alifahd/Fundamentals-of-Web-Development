function Book(isbn, title, description, universities) {
  this.isbn = isbn;
  this.title = title;
  this.description = description;
  this.universities = universities;
  this.outputCard;
}

Book.prototype.outputCard = function(book){
    document.write("<div class=\"mdl-cell mdl-card mdl-shadow--2dp\"><div class=\"mdl-card__media\"><img src=" +book.isbn+ " title=" + book.title">");
        document.write("</div><div class=\"mdl-card__supporting-text\">");
           document.write("<p>" + book.description + "</p>");
            document.write("<h6>Adopters</h6>");
            document.write("<ul>" + uniLoop(book) + "</ul>");
        document.write("</div><div class=\"mdl-card__actions mdl-card--border\">");
            document.write("<a class=\"mdl-button\">READ MORE</a>");
        document.write("</div></div>");
}

function uniLoop(book){
  book.universities.forEach(function(uni) {
    document.write("<li>" + uni + "</li>");
  });
}

document.getElementById("books").innerHTML = books.forEach(Book.prototype.outputCard());
