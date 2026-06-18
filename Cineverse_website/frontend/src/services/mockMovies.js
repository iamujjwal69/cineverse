// Movie database for CineVerse
// Posters use m.media-amazon.com (IMDb CDN) — no CORS/CSP issues

export const mockMovies = [
  {
    "id": "m1", "title": "Avengers: Endgame",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.8, "duration": 181, "releaseYear": 2019, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    "description": "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
    "id": "m2", "title": "Iron Man",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.6, "duration": 126, "releaseYear": 2008, "language": "English",
    "director": "Jon Favreau",
    "cast": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges",
    "description": "After being held captive, billionaire engineer Tony Stark creates a weaponized suit of armor to fight evil.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
  },
  {
    "id": "m3", "title": "Spider-Man: No Way Home",
    "genre": "Action", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.6, "duration": 148, "releaseYear": 2021, "language": "English",
    "director": "Jon Watts",
    "cast": "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
    "description": "With Spider-Man's identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds appear.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
  },
  {
    "id": "m4", "title": "Black Panther",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.4, "duration": 134, "releaseYear": 2018, "language": "English",
    "director": "Ryan Coogler",
    "cast": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
    "description": "T'Challa, heir to Wakanda, must step forward to lead his people into a new future.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"
  },
  {
    "id": "m5", "title": "Thor: Ragnarok",
    "genre": "Comedy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 130, "releaseYear": 2017, "language": "English",
    "director": "Taika Waititi",
    "cast": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Mark Ruffalo",
    "description": "Imprisoned on Sakaar, Thor must race to return to Asgard and stop Ragnarok.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxOTg5MjI@._V1_SX300.jpg"
  },
  {
    "id": "m6", "title": "Doctor Strange",
    "genre": "Fantasy", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.2, "duration": 115, "releaseYear": 2016, "language": "English",
    "director": "Scott Derrickson",
    "cast": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
    "description": "A brilliant neurosurgeon is drawn into the world of the mystic arts.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
  },
  {
    "id": "m7", "title": "Captain America: The Winter Soldier",
    "genre": "Action", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 136, "releaseYear": 2014, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Chris Evans, Samuel L. Jackson, Scarlett Johansson, Robert Redford",
    "description": "Steve Rogers teams with Black Widow to battle the mysterious Winter Soldier.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg"
  },
  {
    "id": "m8", "title": "Guardians of the Galaxy",
    "genre": "Sci-Fi", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.4, "duration": 121, "releaseYear": 2014, "language": "English",
    "director": "James Gunn",
    "cast": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "description": "A group of intergalactic criminals must pull together to stop a fanatical warrior.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxNTMx._V1_SX300.jpg"
  },
  {
    "id": "m9", "title": "Avengers: Infinity War",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.8, "duration": 149, "releaseYear": 2018, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "description": "The Avengers must sacrifice all to defeat the powerful Thanos.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
  },
  {
    "id": "m10", "title": "Deadpool",
    "genre": "Comedy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 108, "releaseYear": 2016, "language": "English",
    "director": "Tim Miller",
    "cast": "Ryan Reynolds, Morena Baccarin, T.J. Miller, Ed Skrein",
    "description": "A wisecracking mercenary gets accelerated healing powers and seeks revenge.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLTJhMTYtOTU1ZmQ1YzI0OWNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "m11", "title": "Captain America: Civil War",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.4, "duration": 147, "releaseYear": 2016, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan",
    "description": "Political involvement causes a rift between Captain America and Iron Man.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkxODE@._V1_SX300.jpg"
  },
  {
    "id": "m12", "title": "Spider-Man: Into the Spider-Verse",
    "genre": "Animation", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 117, "releaseYear": 2018, "language": "English",
    "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "cast": "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
    "description": "Teen Miles Morales becomes Spider-Man and joins five spider-powered individuals to stop a multiversal threat.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
  },
  {
    "id": "m13", "title": "Spider-Man: Across the Spider-Verse",
    "genre": "Animation", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 140, "releaseYear": 2023, "language": "English",
    "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    "cast": "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
    "description": "Miles Morales catapults across the Multiverse and must redefine what it means to be a hero.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMzEtYmM4Yy00NTY5LTgzYjEtNGFjMTM3YjI3NWFmXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
  },
  {
    "id": "m14", "title": "Shang-Chi and the Legend of the Ten Rings",
    "genre": "Action", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.2, "duration": 132, "releaseYear": 2021, "language": "English",
    "director": "Destin Daniel Cretton",
    "cast": "Simu Liu, Awkwafina, Tony Leung Chiu-wai, Ben Kingsley",
    "description": "Shang-Chi is forced to confront his past after being drawn into the Ten Rings organization.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlMS00NjgwLWZmNjMtYjViMWRkYjg1NzhhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "m15", "title": "Deadpool & Wolverine",
    "genre": "Action", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.6, "duration": 127, "releaseYear": 2024, "language": "English",
    "director": "Shawn Levy",
    "cast": "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
    "description": "Deadpool is recruited by the TVA and reluctantly teamed with Wolverine from another timeline.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGFiZmYxNGMtMjZhOS00MjhhLTg3Y2UtMTA3MTc3YzE3NWE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "m16", "title": "Doctor Strange in the Multiverse of Madness",
    "genre": "Fantasy", "subGenre": "Horror", "category": "Hollywood",
    "rating": 8.8, "duration": 126, "releaseYear": 2022, "language": "English",
    "director": "Sam Raimi",
    "cast": "Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong",
    "description": "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWM0ZDdiNzItNTc0Ny00MzQwLTg2NWQtM2Q4MDRjNTg1ZGUyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "m17", "title": "Logan",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 137, "releaseYear": 2017, "language": "English",
    "director": "James Mangold",
    "cast": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
    "description": "In a future where mutants are nearly extinct, a weary Logan cares for an ailing Professor X.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWQtYTU2ZjgwZTY2MjdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  },
  {
    "id": "m18", "title": "Iron Man 2",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 8.6, "duration": 124, "releaseYear": 2010, "language": "English",
    "director": "Jon Favreau",
    "cast": "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Mickey Rourke",
    "description": "Tony Stark must confront his declining health and a vengeful madman with ties to his father's legacy.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTMzODI3ODY@._V1_SX300.jpg"
  },
  {
    "id": "m19", "title": "The Avengers",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.6, "duration": 143, "releaseYear": 2012, "language": "English",
    "director": "Joss Whedon",
    "cast": "Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth",
    "description": "Earth's mightiest heroes must come together to stop Loki and his alien army.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGM2NTg1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "id": "m20", "title": "Guardians of the Galaxy Vol. 3",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 150, "releaseYear": 2023, "language": "English",
    "director": "James Gunn",
    "cast": "Chris Pratt, Chukwudi Iwuji, Bradley Cooper, Pom Klementieff",
    "description": "Peter Quill rallies his team to defend the universe and one of their own.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcyYy00NWZmLTg4YWUtZTdjYjI2ZjZhZGFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "m21", "title": "Thor: Love and Thunder",
    "genre": "Action", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 8.2, "duration": 118, "releaseYear": 2022, "language": "English",
    "director": "Taika Waititi",
    "cast": "Chris Hemsworth, Natalie Portman, Christian Bale, Tessa Thompson",
    "description": "Thor enlists help to fight Gorr the God Butcher, who intends to make gods extinct.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDk4ZjlkZGEtNzExOS00YzI0LWI4YzMtMDU1YzhkOTZlMGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "m22", "title": "Captain Marvel",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 8.4, "duration": 123, "releaseYear": 2019, "language": "English",
    "director": "Anna Boden, Ryan Fleck",
    "cast": "Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law",
    "description": "Carol Danvers becomes one of the universe's most powerful heroes.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTE4NTM1OTAxMDNeQTJeQWpwZ15BbWU4MDIyMTAxNTMx._V1_SX300.jpg"
  },
  {
    "id": "m23", "title": "Black Widow",
    "genre": "Action", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 8.6, "duration": 134, "releaseYear": 2021, "language": "English",
    "director": "Cate Shortland",
    "cast": "Scarlett Johansson, Florence Pugh, David Harbour, Rachel Weisz",
    "description": "Natasha Romanoff confronts a dangerous conspiracy with ties to her past.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI5N2MtNWZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "m24", "title": "X-Men: Days of Future Past",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 131, "releaseYear": 2014, "language": "English",
    "director": "Bryan Singer",
    "cast": "Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence",
    "description": "The X-Men send Wolverine to the past to change history and prevent doom for humans and mutants.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGYwOWQxODQtM2I4YS00NmM5LTllN2UtOTk1ZTMxNGE3ZGQ5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    "id": "m25", "title": "Ant-Man",
    "genre": "Comedy", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.0, "duration": 117, "releaseYear": 2015, "language": "English",
    "director": "Peyton Reed",
    "cast": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
    "description": "Armed with a super-suit that shrinks in scale but increases in strength, Scott Lang must pull off a heist.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"
  },
  {
    "id": "m26", "title": "Black Panther: Wakanda Forever",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.0, "duration": 161, "releaseYear": 2022, "language": "English",
    "director": "Ryan Coogler",
    "cast": "Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke",
    "description": "The people of Wakanda fight to protect their home as they mourn the death of King T'Challa.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  },
  {
    "id": "h1", "title": "Interstellar",
    "genre": "Sci-Fi", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.8, "duration": 169, "releaseYear": 2014, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Ellen Burstyn",
    "description": "A team of explorers travels through a wormhole to ensure humanity's survival.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "id": "h2", "title": "Inception",
    "genre": "Sci-Fi", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 148, "releaseYear": 2010, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "description": "A thief who steals secrets through dream-sharing technology is given the task of planting an idea.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    "id": "h3", "title": "The Dark Knight",
    "genre": "Action", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.8, "duration": 152, "releaseYear": 2008, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Christian Bale, Heath Ledger, Aaron Eckhart, Maggie Gyllenhaal",
    "description": "When the Joker wreaks havoc on Gotham, Batman faces the greatest test of his ability to fight injustice.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
  },
  {
    "id": "h4", "title": "Titanic",
    "genre": "Romance", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 194, "releaseYear": 1997, "language": "English",
    "director": "James Cameron",
    "cast": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the ill-fated Titanic.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "h5", "title": "Avatar",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 162, "releaseYear": 2009, "language": "English",
    "director": "James Cameron",
    "cast": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "description": "A paraplegic Marine on Pandora becomes torn between following orders and protecting the world he loves.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtOTViZmRiNWQ1ZDgxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
    "id": "h6", "title": "Jurassic Park",
    "genre": "Sci-Fi", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 127, "releaseYear": 1993, "language": "English",
    "director": "Steven Spielberg",
    "cast": "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
    "description": "A power failure causes cloned dinosaurs to run loose in a theme park.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
  },
  {
    "id": "h7", "title": "The Matrix",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.6, "duration": 136, "releaseYear": 1999, "language": "English",
    "director": "Lana Wachowski, Lilly Wachowski",
    "cast": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    "description": "Computer hacker Neo discovers the life he knows is an elaborate deception of an evil cyber-intelligence.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVlLTM5YTctZjEwM2QwZjI5ZTMzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "h8", "title": "Pulp Fiction",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 154, "releaseYear": 1994, "language": "English",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "description": "The lives of two mob hitmen, a boxer, and a gangster intertwine in four tales of violence and redemption.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id": "h9", "title": "Forrest Gump",
    "genre": "Drama", "subGenre": "Romance", "category": "Hollywood",
    "rating": 9.6, "duration": 142, "releaseYear": 1994, "language": "English",
    "director": "Robert Zemeckis",
    "cast": "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
    "description": "The history of the United States from the 1950s to 1970s unfolds from the perspective of an Alabama man with an IQ of 75.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "id": "h10", "title": "Gladiator",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 155, "releaseYear": 2000, "language": "English",
    "director": "Ridley Scott",
    "cast": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "h11", "title": "The Godfather",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.8, "duration": 175, "releaseYear": 1972, "language": "English",
    "director": "Francis Ford Coppola",
    "cast": "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
    "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id": "h12", "title": "Dune: Part One",
    "genre": "Sci-Fi", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.4, "duration": 155, "releaseYear": 2021, "language": "English",
    "director": "Denis Villeneuve",
    "cast": "Timothée Chalamet, Rebecca Ferguson, Zendaya, Oscar Isaac",
    "description": "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg2YzYtYTU2NjE5YzAzZTU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "h13", "title": "Oppenheimer",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 180, "releaseYear": 2023, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
    "description": "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
  },
  {
    "id": "h14", "title": "Barbie",
    "genre": "Comedy", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 8.4, "duration": 114, "releaseYear": 2023, "language": "English",
    "director": "Greta Gerwig",
    "cast": "Margot Robbie, Ryan Gosling, America Ferrera, Will Ferrell",
    "description": "Barbie and Ken discover the joys and perils of living among humans in the real world.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },
  {
    "id": "h15", "title": "The Lord of the Rings: The Fellowship of the Ring",
    "genre": "Fantasy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 178, "releaseYear": 2001, "language": "English",
    "director": "Peter Jackson",
    "cast": "Elijah Wood, Ian McKellen, Orlando Bloom, Viggo Mortensen",
    "description": "A meek Hobbit and eight companions set out to destroy the powerful One Ring.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    "id": "h16", "title": "Avatar: The Way of Water",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.2, "duration": 192, "releaseYear": 2022, "language": "English",
    "director": "James Cameron",
    "cast": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Kate Winslet",
    "description": "Jake Sully and his family must work with Neytiri and the Na'vi to protect their home.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
  },
  {
    "id": "h17", "title": "The Lord of the Rings: The Return of the King",
    "genre": "Fantasy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 201, "releaseYear": 2003, "language": "English",
    "director": "Peter Jackson",
    "cast": "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
    "description": "Aragorn leads the World of Men against Sauron to draw his gaze from Frodo and Sam approaching Mount Doom.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzA5ZDJhZWMtODU5NS00ODk2LTkwMDktZjgzODAxMjIzODFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id": "h18", "title": "Mad Max: Fury Road",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.4, "duration": 120, "releaseYear": 2015, "language": "English",
    "director": "George Miller",
    "cast": "Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz",
    "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler seeking her homeland.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "id": "h19", "title": "The Wolf of Wall Street",
    "genre": "Comedy", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.4, "duration": 180, "releaseYear": 2013, "language": "English",
    "director": "Martin Scorsese",
    "cast": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    "description": "Based on the true story of Jordan Belfort, from his rise as a wealthy stock-broker to his fall involving crime.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
  },
  {
    "id": "h20", "title": "Joker",
    "genre": "Thriller", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 122, "releaseYear": 2019, "language": "English",
    "director": "Todd Phillips",
    "cast": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    "description": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to his infamous alter-ego.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "h21", "title": "Parasite",
    "genre": "Thriller", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.8, "duration": 132, "releaseYear": 2019, "language": "Korean",
    "director": "Bong Joon Ho",
    "cast": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
    "description": "Greed and class discrimination threaten the symbiotic relationship between the wealthy Park family and destitute Kim clan.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  },
  {
    "id": "h22", "title": "Spirited Away",
    "genre": "Animation", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.8, "duration": 125, "releaseYear": 2001, "language": "Japanese",
    "director": "Hayao Miyazaki",
    "cast": "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
    "description": "A sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "id": "h23", "title": "The Lion King",
    "genre": "Animation", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 88, "releaseYear": 1994, "language": "English",
    "director": "Roger Allers, Rob Minkoff",
    "cast": "Matthew Broderick, Jeremy Irons, James Earl Jones, Whoopi Goldberg",
    "description": "Lion prince Simba and his father are targeted by his bitter uncle Scar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MWIwLWJmNjItZDhiMDg2NDU5MDg0XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
  },
  {
    "id": "h24", "title": "Toy Story 4",
    "genre": "Animation", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.0, "duration": 100, "releaseYear": 2019, "language": "English",
    "director": "Josh Cooley",
    "cast": "Tom Hanks, Tim Allen, Annie Potts, Tony Hale",
    "description": "When a new toy called Forky joins the gang, a road trip reveals how big the world can be for a toy.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg"
  },
  {
    "id": "h25", "title": "Fight Club",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 139, "releaseYear": 1999, "language": "English",
    "director": "David Fincher",
    "cast": "Brad Pitt, Edward Norton, Meat Loaf, Zach Grenier",
    "description": "An insomniac office worker and a soap maker form an underground fight club that evolves into much more.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
    "id": "h26", "title": "The Shawshank Redemption",
    "genre": "Drama", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.8, "duration": 142, "releaseYear": 1994, "language": "English",
    "director": "Frank Darabont",
    "cast": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "description": "Two convicts form a friendship, seeking consolation and eventual redemption through basic compassion.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NiZmLTg3MGItZjQwOWVlMzY0NWIwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
  },
  {
    "id": "h27", "title": "Dune: Part Two",
    "genre": "Sci-Fi", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.8, "duration": 166, "releaseYear": 2024, "language": "English",
    "director": "Denis Villeneuve",
    "cast": "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem",
    "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtOGY5ZDhhNWRhNDg1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  },
  {
    "id": "h28", "title": "Gladiator II",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 8.8, "duration": 148, "releaseYear": 2024, "language": "English",
    "director": "Ridley Scott",
    "cast": "Paul Mescal, Pedro Pascal, Denzel Washington, Connie Nielsen",
    "description": "Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors of Rome.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTRhNzMwOTItZDE3ZS00OGY0LWE4MTEtODk0NDk0NWY1OTJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "h29", "title": "Se7en",
    "genre": "Thriller", "subGenre": "Horror", "category": "Hollywood",
    "rating": 9.4, "duration": 127, "releaseYear": 1995, "language": "English",
    "director": "David Fincher",
    "cast": "Morgan Freeman, Brad Pitt, Kevin Spacey, Gwyneth Paltrow",
    "description": "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMy00OTk4LTg3NWUtNjVjYjgwMzdiZGM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "h30", "title": "The Silence of the Lambs",
    "genre": "Thriller", "subGenre": "Horror", "category": "Hollywood",
    "rating": 9.6, "duration": 118, "releaseYear": 1991, "language": "English",
    "director": "Jonathan Demme",
    "cast": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
    "description": "A young FBI cadet must receive help from an incarcerated cannibal killer to catch another serial killer.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "h31", "title": "The Conjuring",
    "genre": "Horror", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.2, "duration": 112, "releaseYear": 2013, "language": "English",
    "director": "James Wan",
    "cast": "Patrick Wilson, Vera Farmiga, Ron Livingston, Lili Taylor",
    "description": "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg"
  },
  {
    "id": "h32", "title": "Get Out",
    "genre": "Horror", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 104, "releaseYear": 2017, "language": "English",
    "director": "Jordan Peele",
    "cast": "Daniel Kaluuya, Allison Williams, Bradley Whitford, Catherine Keener",
    "description": "A young African-American visits his white girlfriend's parents, where his uneasiness reaches a boiling point.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc1MTI@._V1_SX300.jpg"
  },
  {
    "id": "h33", "title": "It",
    "genre": "Horror", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.0, "duration": 135, "releaseYear": 2017, "language": "English",
    "director": "Andy Muschietti",
    "cast": "Bill Skarsgård, Jaeden Martell, Finn Wolfhard, Sophia Lillis",
    "description": "A group of bullied kids band together to destroy a shape-shifting monster disguised as a clown.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg"
  },
  {
    "id": "h34", "title": "A Quiet Place",
    "genre": "Horror", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.2, "duration": 90, "releaseYear": 2018, "language": "English",
    "director": "John Krasinski",
    "cast": "Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe",
    "description": "A family struggles for survival in a world where monsters hunt by sound.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg"
  },
  {
    "id": "h35", "title": "Whiplash",
    "genre": "Drama", "subGenre": "Music", "category": "Hollywood",
    "rating": 9.6, "duration": 107, "releaseYear": 2014, "language": "English",
    "director": "Damien Chazelle",
    "cast": "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
    "description": "A promising young drummer enrolls at a music conservatory where his dreams of greatness are tested.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "id": "h36", "title": "La La Land",
    "genre": "Romance", "subGenre": "Musical", "category": "Hollywood",
    "rating": 9.4, "duration": 128, "releaseYear": 2016, "language": "English",
    "director": "Damien Chazelle",
    "cast": "Ryan Gosling, Emma Stone, Rosemarie DeWitt, J.K. Simmons",
    "description": "While navigating their careers in Los Angeles, a pianist and an actress fall in love.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg"
  },
  {
    "id": "h37", "title": "Knives Out",
    "genre": "Comedy", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 130, "releaseYear": 2019, "language": "English",
    "director": "Rian Johnson",
    "cast": "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis",
    "description": "A detective investigates the death of the patriarch of an eccentric family.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MDc@._V1_SX300.jpg"
  },
  {
    "id": "h38", "title": "Inside Out 2",
    "genre": "Animation", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.6, "duration": 96, "releaseYear": 2024, "language": "English",
    "director": "Kelsey Mann",
    "cast": "Amy Poehler, Maya Hawke, Kensington Tallman, Liza Lapira",
    "description": "Follow Riley in her teenage years as she encounters a whole new set of emotions.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjZhOTM5ZWMtMTRjMi00YjZlLWJhMjMtZTZhMjQ3YzNhMjIzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "id": "b1", "title": "Dangal",
    "genre": "Drama", "subGenre": "Action", "category": "Bollywood",
    "rating": 9.8, "duration": 161, "releaseYear": 2016, "language": "Hindi",
    "director": "Nitesh Tiwari",
    "cast": "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
    "description": "Former wrestler Mahavir Singh Phogat and his daughters struggle towards glory at the Commonwealth Games.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjY3NzEyMzQ2NV5BMl5BanBnXkFtZTgwNDA5NjU2OTE@._V1_SX300.jpg"
  },
  {
    "id": "b2", "title": "3 Idiots",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.8, "duration": 170, "releaseYear": 2009, "language": "Hindi",
    "director": "Rajkumar Hirani",
    "cast": "Aamir Khan, Madhavan, Sharman Joshi, Kareena Kapoor",
    "description": "Two friends recall memories of a college friend who inspired them to think differently.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmIzMS00NzFlLTlhOWQtODYyMDBkZDYzMDU2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "b3", "title": "Lagaan",
    "genre": "Drama", "subGenre": "Romance", "category": "Bollywood",
    "rating": 9.6, "duration": 224, "releaseYear": 2001, "language": "Hindi",
    "director": "Ashutosh Gowariker",
    "cast": "Aamir Khan, Raghuvir Yadav, Gracy Singh, Rachel Shelley",
    "description": "During the British Raj, a village accepts a cricket challenge to avoid paying high taxes.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWNiNWQ0MDYtNWQzMS00N2VhLTliMGItMDc4NzAyY2I1OTcwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "id": "b4", "title": "Sholay",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.8, "duration": 204, "releaseYear": 1975, "language": "Hindi",
    "director": "Ramesh Sippy",
    "cast": "Dharmendra, Sanjeev Kumar, Hema Malini, Amitabh Bachchan",
    "description": "A retired police officer enlists two outlaws to capture the notorious bandit Gabbar Singh.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODM4Mjc3MjYzMV5BMl5BanBnXkFtZTcwNDQ0MjUyMQ@@._V1_SX300.jpg"
  },
  {
    "id": "b5", "title": "Dilwale Dulhania Le Jayenge",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 189, "releaseYear": 1995, "language": "Hindi",
    "director": "Aditya Chopra",
    "cast": "Shah Rukh Khan, Kajol, Amrish Puri, Farida Jalal",
    "description": "Raj follows Simran to India to win her heart and her father's approval.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTNlNzc3MDMtZWVkMi00NzgzLWFkYTYtZTZmMGYzNjJkMzQ2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b6", "title": "Pathaan",
    "genre": "Action", "subGenre": "Thriller", "category": "Bollywood",
    "rating": 9.0, "duration": 146, "releaseYear": 2023, "language": "Hindi",
    "director": "Siddharth Anand",
    "cast": "Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia",
    "description": "An Indian agent stops a mercenary group from releasing a deadly virus across India.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTNkYjYzNTMtOGJkNy00MDZhLWI4YTUtNDgzNTY4NjcxYTJhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "b7", "title": "Jawan",
    "genre": "Action", "subGenre": "Thriller", "category": "Bollywood",
    "rating": 9.4, "duration": 168, "releaseYear": 2023, "language": "Hindi",
    "director": "Atlee",
    "cast": "Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Deepika Padukone",
    "description": "A high-octane action thriller about a man set to rectify the wrongs in society.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODFlMjljOTEtZWU4NS00YWZhLTliNjItM2Q3MWQxMWRmNTExXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "b8", "title": "PK",
    "genre": "Comedy", "subGenre": "Sci-Fi", "category": "Bollywood",
    "rating": 9.4, "duration": 153, "releaseYear": 2014, "language": "Hindi",
    "director": "Rajkumar Hirani",
    "cast": "Aamir Khan, Anushka Sharma, Sushant Singh Rajput, Sanjay Dutt",
    "description": "An alien on Earth loses his communication device and questions society's views on religion.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg"
  },
  {
    "id": "b9", "title": "Bajrangi Bhaijaan",
    "genre": "Drama", "subGenre": "Comedy", "category": "Bollywood",
    "rating": 9.6, "duration": 163, "releaseYear": 2015, "language": "Hindi",
    "director": "Kabir Khan",
    "cast": "Salman Khan, Harshaali Malhotra, Kareena Kapoor, Nawazuddin Siddiqui",
    "description": "An Indian man takes a young mute Pakistani girl back to her homeland.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzBkZTQ2ODYtMjI1MS00ZDgxLWIwZGQtMjI3ZDhlYjZiODE5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b10", "title": "Kabir Singh",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.8, "duration": 172, "releaseYear": 2019, "language": "Hindi",
    "director": "Sandeep Reddy Vanga",
    "cast": "Shahid Kapoor, Kiara Advani, Soham Majumdar, Arjan Bajwa",
    "description": "A short-tempered surgeon spirals into self-destruction after his love is forced to marry someone else.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzZlOTBkMDYtZDUzZS00ZGUxLWJmZjAtZTg1OGZhMjc1MGZmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b11", "title": "Uri: The Surgical Strike",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 138, "releaseYear": 2019, "language": "Hindi",
    "director": "Aditya Dhar",
    "cast": "Vicky Kaushal, Paresh Rawal, Yami Gautam, Mohit Raina",
    "description": "The film chronicles the surgical strike conducted by the Indian military against militants.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjYzNzI4MTMtNzQ5OS00NzkxLTliNTUtN2ExMGRjYjZhNWZiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },
  {
    "id": "b12", "title": "Brahmastra: Part One - Shiva",
    "genre": "Fantasy", "subGenre": "Action", "category": "Bollywood",
    "rating": 8.2, "duration": 167, "releaseYear": 2022, "language": "Hindi",
    "director": "Ayan Mukerji",
    "cast": "Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan, Nagarjuna Akkineni",
    "description": "Shiva discovers his connection to fire and the power to awaken the supernatural Brahmastra.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjgzYjdhZWYtMjZiYi00YzM5LTgwZmQtNGQ4ZGZkNzliMWUyXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "b13", "title": "Zindagi Na Milegi Dobara",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 155, "releaseYear": 2011, "language": "Hindi",
    "director": "Zoya Akhtar",
    "cast": "Hrithik Roshan, Farhan Akhtar, Abhay Deol, Katrina Kaif",
    "description": "Three friends decide to turn their fantasy vacation into reality after one of them gets engaged.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjA4MjczMjg4Nl5BMl5BanBnXkFtZTcwNzE4MDMzNQ@@._V1_SX300.jpg"
  },
  {
    "id": "b14", "title": "Yeh Jawaani Hai Deewani",
    "genre": "Romance", "subGenre": "Comedy", "category": "Bollywood",
    "rating": 9.4, "duration": 160, "releaseYear": 2013, "language": "Hindi",
    "director": "Ayan Mukerji",
    "cast": "Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur, Kalki Koechlin",
    "description": "Kabir and Naina bond during a trekking trip and meet again at a friend's wedding years later.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTkxOTY3NzYyMl5BMl5BanBnXkFtZTgwNzA1MTYzMDE@._V1_SX300.jpg"
  },
  {
    "id": "b15", "title": "Dil Chahta Hai",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 183, "releaseYear": 2001, "language": "Hindi",
    "director": "Farhan Akhtar",
    "cast": "Aamir Khan, Saif Ali Khan, Akshaye Khanna, Preity Zinta",
    "description": "Three inseparable childhood friends drift apart after each falls in love.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGIwNTc5MDEtMDllNy00YTgwLWIyOGUtOTk5MDkyMzZhMDJhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b16", "title": "Queen",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.4, "duration": 146, "releaseYear": 2013, "language": "Hindi",
    "director": "Vikas Bahl",
    "cast": "Kangana Ranaut, Rajkummar Rao, Lisa Haydon, Jeffrey Ho",
    "description": "A Delhi girl goes on her honeymoon to Paris and Amsterdam by herself after her fiance dumps her.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjkxODEwMjItODI5Yy00NmU5LTgwMzItNTNmYTNmOWQyN2U0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b17", "title": "Andhadhun",
    "genre": "Thriller", "subGenre": "Comedy", "category": "Bollywood",
    "rating": 9.6, "duration": 139, "releaseYear": 2018, "language": "Hindi",
    "director": "Sriram Raghavan",
    "cast": "Ayushmann Khurrana, Tabu, Radhika Apte, Anil Dhawan",
    "description": "A blind pianist must report a crime he should not have been able to see.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZWZhYzY3ZGItNGZkOS00ZmI2LThjNTUtMDNhNzQ3NzFmMjFhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b18", "title": "Stree",
    "genre": "Comedy", "subGenre": "Horror", "category": "Bollywood",
    "rating": 9.2, "duration": 128, "releaseYear": 2018, "language": "Hindi",
    "director": "Amar Kaushik",
    "cast": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi, Aparshakti Khurana",
    "description": "In the town of Chanderi, the menfolk live in fear of an evil spirit who abducts men.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzM3NTQ0NTgxOF5BMl5BanBnXkFtZTgwNDM4NjgwNTM@._V1_SX300.jpg"
  },
  {
    "id": "b19", "title": "Stree 2",
    "genre": "Comedy", "subGenre": "Horror", "category": "Bollywood",
    "rating": 9.4, "duration": 147, "releaseYear": 2024, "language": "Hindi",
    "director": "Amar Kaushik",
    "cast": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi, Abhishek Banerjee",
    "description": "The town of Chanderi faces a new headless terror. The townsfolk must call upon Stree once again.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYThhMGI5ZmEtYTM2Yi00MmY4LTkxMWItMmZmNTliZTc1MGU1XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "b20", "title": "Shershaah",
    "genre": "Drama", "subGenre": "Action", "category": "Bollywood",
    "rating": 9.6, "duration": 135, "releaseYear": 2021, "language": "Hindi",
    "director": "Vishnuvardhan",
    "cast": "Sidharth Malhotra, Kiara Advani, Shiv Panditt, Nikitin Dheer",
    "description": "The story of Kargil war hero Captain Vikram Batra, awarded the Param Vir Chakra.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWE4ODJmNjMtYjU5Mi00MzViLWJhMTMtN2Q1ZjBhNTAxM2YzXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
  },
  {
    "id": "b21", "title": "Animal",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.4, "duration": 201, "releaseYear": 2023, "language": "Hindi",
    "director": "Sandeep Reddy Vanga",
    "cast": "Ranbir Kapoor, Anil Kapoor, Bobby Deol, Rashmika Mandanna",
    "description": "A broken father-son bond triggers a path of blood and violence as the son seeks vengeance.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjNlZWZlZDAtNDJlYy00MzIyLWE0NTUtMmQ0MTRiYWZhMjU0XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "b22", "title": "Dunki",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.6, "duration": 161, "releaseYear": 2023, "language": "Hindi",
    "director": "Rajkumar Hirani",
    "cast": "Shah Rukh Khan, Taapsee Pannu, Boman Irani, Vicky Kaushal",
    "description": "Four friends from Punjab take an illegal route to reach England.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzU1MzEzMTcyMl5BMl5BanBnXkFtZTgwNzU3OTE2NTM@._V1_SX300.jpg"
  },
  {
    "id": "b23", "title": "Bajirao Mastani",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.2, "duration": 158, "releaseYear": 2015, "language": "Hindi",
    "director": "Sanjay Leela Bhansali",
    "cast": "Ranveer Singh, Deepika Padukone, Priyanka Chopra, Tanvi Azmi",
    "description": "An epic love story between the heroic Peshwa Bajirao and warrior princess Mastani.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODNlZjE5MDItZTg3Ni00NDE3LWI2MGItOGY2MDU5YWFhZjk2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "b24", "title": "Chak De! India",
    "genre": "Drama", "subGenre": "Sports", "category": "Bollywood",
    "rating": 9.8, "duration": 153, "releaseYear": 2007, "language": "Hindi",
    "director": "Shimit Amin",
    "cast": "Shah Rukh Khan, Vidya Malvade, Sagarika Ghatge, Shilpa Shukla",
    "description": "Kabir Khan coaches the Indian Women's National Hockey Team to a championship.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzY4MDk1NjEtMzVkOS00ZjE4LTkzYWUtNjY3NzdkOTIwM2QzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "s1", "title": "RRR",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 9.2, "duration": 187, "releaseYear": 2022, "language": "Telugu",
    "director": "S.S. Rajamouli",
    "cast": "Ram Charan, Jr. NTR, Alia Bhatt, Ajay Devgn",
    "description": "A fictitious story about two legendary revolutionaries fighting for their country in the 1920s.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtYWMzNy00MGNiLWJhNTMtYWI4MGY5ZTZlOWQ5XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
  },
  {
    "id": "s2", "title": "Baahubali: The Beginning",
    "genre": "Action", "subGenre": "Fantasy", "category": "South Indian",
    "rating": 9.0, "duration": 159, "releaseYear": 2015, "language": "Telugu",
    "director": "S.S. Rajamouli",
    "cast": "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia",
    "description": "An adventurous man becomes involved in a decadelong feud between two warring brothers.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWVlMjVkYjItZGRjMi00MTU0LWI1MzYtYjg4Y2Q1YzFiMTNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  },
  {
    "id": "s3", "title": "Baahubali 2: The Conclusion",
    "genre": "Action", "subGenre": "Fantasy", "category": "South Indian",
    "rating": 9.3, "duration": 167, "releaseYear": 2017, "language": "Telugu",
    "director": "S.S. Rajamouli",
    "cast": "Prabhas, Rana Daggubati, Anushka Shetty, Ramya Krishna",
    "description": "Shiva returns to avenge his father Bahubali's death against Bhallaladeva.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2E5YzNkODctZDZhNS00YTEzLTk5ZTMtYWJlZGQzYzVkNjY2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "id": "s4", "title": "K.G.F: Chapter 1",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.8, "duration": 156, "releaseYear": 2018, "language": "Kannada",
    "director": "Prashanth Neel",
    "cast": "Yash, Srinidhi Shetty, Ramachandra Raju",
    "description": "Rocky seeks power at the Kolar Gold Fields to fulfill a promise to his dying mother.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjEyZmQ3MDctM2VmMS00NGMzLWFjNTYtNzJmZDhlMDg3ZGQzXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_SX300.jpg"
  },
  {
    "id": "s5", "title": "K.G.F: Chapter 2",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 9.0, "duration": 168, "releaseYear": 2022, "language": "Kannada",
    "director": "Prashanth Neel",
    "cast": "Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty",
    "description": "Rocky's name strikes fear in the blood-soaked Kolar Gold Fields while the government calls him a threat.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjFjMTQyZDgtNDIzOC00ZWZlLTg2ZDMtNzc5ZDJiMzYxNDFhXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
  },
  {
    "id": "s6", "title": "Pushpa: The Rise",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 8.5, "duration": 179, "releaseYear": 2021, "language": "Telugu",
    "director": "Sukumar",
    "cast": "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
    "description": "Pushpa Raj rises to lead the red sandalwood smuggling syndicate.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjM5ZmQxNzctNjg1NS00NmQ0LWJmNDQtMGM1OWZiMGY1NjQ2XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg"
  },
  {
    "id": "s7", "title": "Kantara",
    "genre": "Fantasy", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.9, "duration": 149, "releaseYear": 2022, "language": "Kannada",
    "director": "Rishab Shetty",
    "cast": "Rishab Shetty, Sapthami Gowda, Kishore",
    "description": "A tribal man reluctantly inherits his ancestors' legacy to restore peace when greed leads to betrayal.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWQ5ZWQwNGEtOGE3ZC00ZDE1LWI2YjgtMjU4NTQ3ZGNhM2ZlXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
  },
  {
    "id": "s8", "title": "Jailer",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.4, "duration": 168, "releaseYear": 2023, "language": "Tamil",
    "director": "Nelson Dilipkumar",
    "cast": "Rajinikanth, Vinayakan, Ramya Krishnan, Mohanlal",
    "description": "A retired prison warden tracks down his son's killers, unleashing his dark past.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDI4YzY5NDYtZTRlYS00NjY5LWE5OTUtYTEzYWMyYjE4ZGRiXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s9", "title": "Vikram",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.7, "duration": 175, "releaseYear": 2022, "language": "Tamil",
    "director": "Lokesh Kanagaraj",
    "cast": "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil, Narain",
    "description": "A cop investigates murders by masked men while dealing with drug cartel conspiracies.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWU4ZTVjNmEtZWJiZC00ZTE1LTlhNjItN2U2NjE5YzAwOTE5XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s10", "title": "Leo",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.2, "duration": 164, "releaseYear": 2023, "language": "Tamil",
    "director": "Lokesh Kanagaraj",
    "cast": "Thalapathy Vijay, Sanjay Dutt, Trisha Krishnan",
    "description": "A mild-mannered cafe owner becomes the target of a drug cartel claiming he is a gangster's son.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTU2MjVjMGEtN2VjYy00ZTRmLTk5YzgtNDgwMmExMWVkZmZjXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s11", "title": "Ponniyin Selvan: Part I",
    "genre": "Drama", "subGenre": "Action", "category": "South Indian",
    "rating": 8.1, "duration": 167, "releaseYear": 2022, "language": "Tamil",
    "director": "Mani Ratnam",
    "cast": "Vikram, Aishwarya Rai Bachchan, Jayam Ravi, Karthi, Trisha",
    "description": "Vandiyathevan crosses the Chola land to deliver a message from the Crown Prince amid deadly conspiracies.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzg4NzEyMWUtOTY0Yi00ZWJhLTkyOWEtMmM1NTRmNGIwZjkxXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s12", "title": "Manjummel Boys",
    "genre": "Drama", "subGenre": "Thriller", "category": "South Indian",
    "rating": 9.1, "duration": 135, "releaseYear": 2024, "language": "Malayalam",
    "director": "Chidambaram",
    "cast": "Soubin Shahir, Sreenath Bhasi, Balu Varghese",
    "description": "A group of friends from Kerala attempt a daring rescue after one gets trapped in Guna Caves.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ3MTg0YjQtMTZmMy00MzQzLTliZTMtZTM5YTkxYzliMTZkXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s13", "title": "Kalki 2898 AD",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "South Indian",
    "rating": 8.6, "duration": 181, "releaseYear": 2024, "language": "Telugu",
    "director": "Nag Ashwin",
    "cast": "Prabhas, Amitabh Bachchan, Kamal Haasan, Deepika Padukone",
    "description": "A modern avatar of Vishnu is prophesied to protect forces of good in a post-apocalyptic world.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjQ1NWY5ZTYtZmM1ZC00NjQzLWIwZTAtZWE2ZTJiNzliZjFmXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s14", "title": "Pushpa 2: The Rule",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 8.8, "duration": 175, "releaseYear": 2024, "language": "Telugu",
    "director": "Sukumar",
    "cast": "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
    "description": "The clash continues between Pushpa Raj and SP Bhanwar Singh Shekhawat for the red sandalwood empire.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjk4ZTVlMTYtMzMzMC00OGFkLWJmN2YtODFiZWFlY2VhZjVjXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  },
  {
    "id": "s15", "title": "Sita Ramam",
    "genre": "Romance", "subGenre": "Drama", "category": "South Indian",
    "rating": 9.1, "duration": 163, "releaseYear": 2022, "language": "Telugu",
    "director": "Hanu Raghavapudi",
    "cast": "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna",
    "description": "An orphaned soldier's life changes after he receives a letter from a mysterious girl named Sita.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDFlZmRlZDUtNGU4Yy00ZjA5LWI4MTMtZDM3MTM0NTUwMzI2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
  },
  {
    "id": "s16", "title": "Major",
    "genre": "Drama", "subGenre": "Action", "category": "South Indian",
    "rating": 8.9, "duration": 150, "releaseYear": 2022, "language": "Telugu",
    "director": "Sashi Kiran Tikka",
    "cast": "Adivi Sesh, Sobhita Dhulipala, Saiee Manjrekar",
    "description": "Based on the life of Major Sandeep Unnikrishnan, martyred during the 2008 Mumbai attacks.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTFjNzllYWYtODNkNC00OTZlLTlmNDctMDU3YzI4NzgxZGRkXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
  }
];

// Helper to filter/search movies
export const queryMockMovies = (searchQuery = '', filters = {}) => {
  let list = [...mockMovies];

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    list = list.filter(m =>
      m.title.toLowerCase().includes(query) ||
      m.genre.toLowerCase().includes(query) ||
      (m.category && m.category.toLowerCase().includes(query)) ||
      m.cast.toLowerCase().includes(query) ||
      m.director.toLowerCase().includes(query)
    );
  }

  if (filters.genre) {
    list = list.filter(m => m.genre.toLowerCase() === filters.genre.toLowerCase());
  }

  if (filters.category) {
    list = list.filter(m => m.category.toLowerCase() === filters.category.toLowerCase());
  }

  if (filters.sortBy) {
    list.sort((a, b) => {
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'releaseYear') return b.releaseYear - a.releaseYear;
      return a.title.localeCompare(b.title);
    });
  }

  const page = filters.page || 0;
  const size = filters.size || 120;
  const start = page * size;
  const end = start + size;

  return {
    content: list.slice(start, end),
    totalElements: list.length,
    totalPages: Math.ceil(list.length / size),
    number: page
  };
};

export const getMockMovieById = (id) => {
  return mockMovies.find(m => m.id === id.toString() || m.id.toString() === id.toString());
};
