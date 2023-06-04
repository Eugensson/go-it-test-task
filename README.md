#"Tweet Cards App"

---

###About

The "Tweet Cards App" application has been developed in accordance with the
technical requirements of GoIT company's training course, covering the following
directions: HTML, CSS, JS, React.

The application consists of two pages: Home and Tweets.

**Routing (using React Router)**: The application implements the following
routes. If the user enters a non-existent route, they are redirected to the Home
page. On the Tweets page, there is a Back button that leads to the main Home
page.

Home page: This is the welcome page of the application.

Tweets page: Upon accessing the Tweets page, three tweets are rendered.

**The backend part** is implemented using Mockapi, where a user with the
following fields has been created: id, user, tweets, followers, avatar.

```
[
 {
  "user": "Ethel Beer III",
  "tweets": 33,
  "followers": 10,
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg",
  "id": "1"
 }
 ]

```

Each tweet has two states (persisted after page refresh): Follow and Following.
When the Follow (Following) button is clicked, the state of the tweet is toggled
to its opposite: the button label and color are changed, and the total number of
followers is increased or decreased.

**Pagination**: Initially, three tweets are displayed, and the rest are loaded
when the Load More button is clicked.

**Filtering**: Filtering is implemented through a Dropdown with 3 options: show
all tweets, show tweets with the Follow state, show tweets with the Following
state.

---

###Installation and usage

- Clone the repository: `git clone < repository-url >`
- Change directory: `cd < project-folder >`
- Install the dependencies: `npm install`
- Start project: `npm start`

---

###Structure

- **src**: contains the source code of App
- **components**: contains reusable components
- **pages**: contains pages of App: Home and Tweets
- **index.css**
- **index.js**

---

###Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature
requests, please open an issue or submit a pull request.

---

###License

This project is licensed under the
[MIT-LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
