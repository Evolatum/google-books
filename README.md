# [(Sketchy) Books](https://sketchy-google-books.herokuapp.com/)

This app allows users to search for books through the Google Books API.

The landing page automatically searches for "harry potter" until a specific search parameter is given. 

![Search](https://evolatum.github.io/Portfolio/assets/images/sketchy%20books%20search.PNG)

Each of the results has a button to view the book directly in Google Books, and a button to save the book to the page's database.

![Result](https://evolatum.github.io/Portfolio/assets/images/sketchy%20books%20result.PNG)

The navbar links to the landing page, the search page which displays the same information, and the saved page.

![Navbar](https://evolatum.github.io/Portfolio/assets/images/sketchy%20books%20navbar.PNG)

The saved page displays the books previously saved when searched, and in the same manner links to the Google Books page for this book, and a button to remove the book from the database of saved books.

![Saved](https://evolatum.github.io/Portfolio/assets/images/sketchy%20books%20saved.PNG)

The application was developed using React, styled using Bootstrap based on the design used in Balsamiq, and has a back-end database linked by Mongoose for MongoDB where the books are saved.
