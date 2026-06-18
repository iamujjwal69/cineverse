// Movie database for CineVerse — all posters use TMDB image CDN for reliability
// Base URL: https://image.tmdb.org/t/p/w500<poster_path>

export const mockMovies = [
  {
    "id": "m1",
    "title": "Avengers: Endgame",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.8, "duration": 181, "releaseYear": 2019, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    "description": "After the devastating events of Avengers: Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos' actions and restore balance.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
  },
  {
    "id": "m2",
    "title": "Iron Man",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.6, "duration": 126, "releaseYear": 2008, "language": "English",
    "director": "Jon Favreau",
    "cast": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges",
    "description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBF8l6nOQi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cyecB7godJ6kNHGONFjUyVN9OX5.jpg"
  },
  {
    "id": "m3",
    "title": "Spider-Man: No Way Home",
    "genre": "Action", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.6, "duration": 148, "releaseYear": 2021, "language": "English",
    "director": "Jon Watts",
    "cast": "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
    "description": "With Spider-Man's identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
  },
  {
    "id": "m4",
    "title": "Black Panther",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.4, "duration": 134, "releaseYear": 2018, "language": "English",
    "director": "Ryan Coogler",
    "cast": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
    "description": "T'Challa, heir to the hidden kingdom of Wakanda, must step forward to lead his people into a new future.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg"
  },
  {
    "id": "m5",
    "title": "Thor: Ragnarok",
    "genre": "Comedy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 130, "releaseYear": 2017, "language": "English",
    "director": "Taika Waititi",
    "cast": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Mark Ruffalo",
    "description": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg"
  },
  {
    "id": "m6",
    "title": "Doctor Strange",
    "genre": "Fantasy", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.2, "duration": 115, "releaseYear": 2016, "language": "English",
    "director": "Scott Derrickson",
    "cast": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
    "description": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/uGBVqwZ7oDU36Go2HdWtNeDTMCo.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jthDEAf5SKGJWdYHuVQlJgKFkvo.jpg"
  },
  {
    "id": "m7",
    "title": "Captain America: The Winter Soldier",
    "genre": "Action", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 136, "releaseYear": 2014, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Chris Evans, Samuel L. Jackson, Scarlett Johansson, Robert Redford",
    "description": "Steve Rogers teams up with Black Widow to battle a new threat from history: an assassin known as the Winter Soldier.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/5TQ6JGLiBNdPmk3NnNnYBpT9nKp.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/z4OSTbZoalPoKPlU4hIJQPzOPNi.jpg"
  },
  {
    "id": "m8",
    "title": "Guardians of the Galaxy",
    "genre": "Sci-Fi", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.4, "duration": 121, "releaseYear": 2014, "language": "English",
    "director": "James Gunn",
    "cast": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "description": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg"
  },
  {
    "id": "m9",
    "title": "Avengers: Infinity War",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.8, "duration": 149, "releaseYear": 2018, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "description": "The Avengers and their allies must be willing to sacrifice all to defeat the powerful Thanos.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lmZFxXgJE3vgrciwuDib0N9CfwD.jpg"
  },
  {
    "id": "m10",
    "title": "Deadpool",
    "genre": "Comedy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 108, "releaseYear": 2016, "language": "English",
    "director": "Tim Miller",
    "cast": "Ryan Reynolds, Morena Baccarin, T.J. Miller, Ed Skrein",
    "description": "A wisecracking mercenary undergoes a rogue experiment that leaves him with accelerated healing powers.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg"
  },
  {
    "id": "m11",
    "title": "Captain America: Civil War",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.4, "duration": 147, "releaseYear": 2016, "language": "English",
    "director": "Anthony Russo, Joe Russo",
    "cast": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan",
    "description": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/rAGiXaUfDiyBljQEwucbVAoNJOJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/m5O3SZvQ6EgD5XXXLPIP67ckB4H.jpg"
  },
  {
    "id": "m12",
    "title": "Spider-Man: Into the Spider-Verse",
    "genre": "Animation", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 117, "releaseYear": 2018, "language": "English",
    "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "cast": "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
    "description": "Teen Miles Morales becomes Spider-Man and must join five spider-powered individuals to stop a threat for all realities.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9xeEGUZjgiKlI69jwIOi0hjKUIk.jpg"
  },
  {
    "id": "m13",
    "title": "Spider-Man: Across the Spider-Verse",
    "genre": "Animation", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 140, "releaseYear": 2023, "language": "English",
    "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    "cast": "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
    "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"
  },
  {
    "id": "m14",
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "genre": "Action", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.2, "duration": 132, "releaseYear": 2021, "language": "English",
    "director": "Destin Daniel Cretton",
    "cast": "Simu Liu, Awkwafina, Tony Leung Chiu-wai, Ben Kingsley",
    "description": "Shang-Chi is forced to confront his past after being drawn into the Ten Rings organization.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cinER0ESG0eJ49kXlExM0MEWGxW.jpg"
  },
  {
    "id": "m15",
    "title": "Deadpool & Wolverine",
    "genre": "Action", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.6, "duration": 127, "releaseYear": 2024, "language": "English",
    "director": "Shawn Levy",
    "cast": "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
    "description": "Deadpool is recruited by the TVA and teamed up with a reluctant Wolverine from another timeline.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
  },
  {
    "id": "m16",
    "title": "Doctor Strange in the Multiverse of Madness",
    "genre": "Fantasy", "subGenre": "Horror", "category": "Hollywood",
    "rating": 8.8, "duration": 126, "releaseYear": 2022, "language": "English",
    "director": "Sam Raimi",
    "cast": "Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong",
    "description": "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglV9bOK4WHes.jpg"
  },
  {
    "id": "m17",
    "title": "Logan",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 137, "releaseYear": 2017, "language": "English",
    "director": "James Mangold",
    "cast": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
    "description": "In a future where mutants are nearly extinct, a weary Logan cares for an ailing Professor X.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/x5uBuA7rwZZsFHNTLGQCTmCfQ03.jpg"
  },
  {
    "id": "m18",
    "title": "Iron Man 2",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 8.6, "duration": 124, "releaseYear": 2010, "language": "English",
    "director": "Jon Favreau",
    "cast": "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Mickey Rourke",
    "description": "With the world aware of his identity as Iron Man, Tony Stark must confront both his declining health and a vengeful madman.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN33GmxqCd0kkXJN.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6tcT1wBEtBGPjzMmGbEFiMxpMGD.jpg"
  },
  {
    "id": "m19",
    "title": "The Avengers",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.6, "duration": 143, "releaseYear": 2012, "language": "English",
    "director": "Joss Whedon",
    "cast": "Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth",
    "description": "Earth's mightiest heroes must come together to stop the mischievous Loki and his alien army.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kwBpWUNHkpHDyJlLx2SUQ9DQRXO.jpg"
  },
  {
    "id": "m20",
    "title": "Guardians of the Galaxy Vol. 3",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 150, "releaseYear": 2023, "language": "English",
    "director": "James Gunn",
    "cast": "Chris Pratt, Chukwudi Iwuji, Bradley Cooper, Pom Klementieff",
    "description": "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg"
  },
  {
    "id": "m21",
    "title": "Thor: Love and Thunder",
    "genre": "Action", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 8.2, "duration": 118, "releaseYear": 2022, "language": "English",
    "director": "Taika Waititi",
    "cast": "Chris Hemsworth, Natalie Portman, Christian Bale, Tessa Thompson",
    "description": "Thor enlists help to fight Gorr the God Butcher, who intends to make gods extinct.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9dKLWyqlnuLhGSDRRfDpFuITqvx.jpg"
  },
  {
    "id": "m22",
    "title": "Captain Marvel",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 8.4, "duration": 123, "releaseYear": 2019, "language": "English",
    "director": "Anna Boden, Ryan Fleck",
    "cast": "Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law",
    "description": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in a galactic war.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg"
  },
  {
    "id": "m23",
    "title": "Black Widow",
    "genre": "Action", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 8.6, "duration": 134, "releaseYear": 2021, "language": "English",
    "director": "Cate Shortland",
    "cast": "Scarlett Johansson, Florence Pugh, David Harbour, Rachel Weisz",
    "description": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jMEKEN1qqLzzHEQSDLJwbw1gMMs.jpg"
  },
  {
    "id": "m24",
    "title": "X-Men: Days of Future Past",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 131, "releaseYear": 2014, "language": "English",
    "director": "Bryan Singer",
    "cast": "Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence",
    "description": "The X-Men send Wolverine to the past to change history and prevent doom for both humans and mutants.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/az2kmXCOBUfICBkPWVoUFyBLbzQ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ankz3oMFGD41bHMWLTbT73bMlYv.jpg"
  },
  {
    "id": "m25",
    "title": "Ant-Man",
    "genre": "Comedy", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.0, "duration": 117, "releaseYear": 2015, "language": "English",
    "director": "Peyton Reed",
    "cast": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
    "description": "Armed with a super-suit that shrinks in scale but increases in strength, Scott Lang must help Dr. Hank Pym plan a heist.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/tVFONkBF30uj9HBCt5O4aHMoiDG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dW1d5nZ2Ix3rJPH5gQBpBYIbZSj.jpg"
  },
  {
    "id": "m26",
    "title": "Black Panther: Wakanda Forever",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.0, "duration": 161, "releaseYear": 2022, "language": "English",
    "director": "Ryan Coogler",
    "cast": "Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke",
    "description": "The people of Wakanda fight to protect their home as they mourn the death of King T'Challa.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/sv1xJUazXoQuIDtiiz8746Ep396.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"
  },
  {
    "id": "h1",
    "title": "Interstellar",
    "genre": "Sci-Fi", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.8, "duration": 169, "releaseYear": 2014, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Ellen Burstyn",
    "description": "A team of explorers travels through a wormhole in space to ensure humanity's survival.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg"
  },
  {
    "id": "h2",
    "title": "Inception",
    "genre": "Sci-Fi", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 148, "releaseYear": 2010, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "description": "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg"
  },
  {
    "id": "h3",
    "title": "The Dark Knight",
    "genre": "Action", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.8, "duration": 152, "releaseYear": 2008, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Christian Bale, Heath Ledger, Aaron Eckhart, Maggie Gyllenhaal",
    "description": "When the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg"
  },
  {
    "id": "h4",
    "title": "Titanic",
    "genre": "Romance", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 194, "releaseYear": 1997, "language": "English",
    "director": "James Cameron",
    "cast": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
  },
  {
    "id": "h5",
    "title": "Avatar",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.4, "duration": 162, "releaseYear": 2009, "language": "English",
    "director": "James Cameron",
    "cast": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "description": "A paraplegic Marine dispatched to Pandora becomes torn between following orders and protecting the world he loves.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/AmR3JfHSjss2Coh4aRPDlhiJczx.jpg"
  },
  {
    "id": "h6",
    "title": "Jurassic Park",
    "genre": "Sci-Fi", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 127, "releaseYear": 1993, "language": "English",
    "director": "Steven Spielberg",
    "cast": "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
    "description": "A pragmatic paleontologist is tasked with protecting a couple of kids after a power failure causes cloned dinosaurs to run loose.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lOEjfxYpfVRHlrEZs7hPwdLWwUg.jpg"
  },
  {
    "id": "h7",
    "title": "The Matrix",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.6, "duration": 136, "releaseYear": 1999, "language": "English",
    "director": "Lana Wachowski, Lilly Wachowski",
    "cast": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    "description": "Computer hacker Neo discovers the shocking truth — the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ncEsesgOJDNrTUED89hYbA117eo.jpg"
  },
  {
    "id": "h8",
    "title": "Pulp Fiction",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 154, "releaseYear": 1994, "language": "English",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "description": "The lives of two mob hitmen, a boxer, and a gangster intertwine in four tales of violence and redemption.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg"
  },
  {
    "id": "h9",
    "title": "Forrest Gump",
    "genre": "Drama", "subGenre": "Romance", "category": "Hollywood",
    "rating": 9.6, "duration": 142, "releaseYear": 1994, "language": "English",
    "director": "Robert Zemeckis",
    "cast": "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
    "description": "The history of the United States from the 1950s to 1970s unfolds from the perspective of an Alabama man with an IQ of 75.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qdIMHd4sEfJSckfVJfKQvisL02a.jpg"
  },
  {
    "id": "h10",
    "title": "Gladiator",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 155, "releaseYear": 2000, "language": "English",
    "director": "Ridley Scott",
    "cast": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6WxhEvFsauuR4IL68LFDqe6DLVG.jpg"
  },
  {
    "id": "h11",
    "title": "The Godfather",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.8, "duration": 175, "releaseYear": 1972, "language": "English",
    "director": "Francis Ford Coppola",
    "cast": "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
    "description": "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLeMMovrAwSP.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
  },
  {
    "id": "h12",
    "title": "Dune: Part One",
    "genre": "Sci-Fi", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.4, "duration": 155, "releaseYear": 2021, "language": "English",
    "director": "Denis Villeneuve",
    "cast": "Timothée Chalamet, Rebecca Ferguson, Zendaya, Oscar Isaac",
    "description": "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/d5NXSklpcvkfNoq2SWYou74FSTW.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/iopYFB1b6Bh7FWZh3onQhph1CZs.jpg"
  },
  {
    "id": "h13",
    "title": "Oppenheimer",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 180, "releaseYear": 2023, "language": "English",
    "director": "Christopher Nolan",
    "cast": "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
    "description": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg"
  },
  {
    "id": "h14",
    "title": "Barbie",
    "genre": "Comedy", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 8.4, "duration": 114, "releaseYear": 2023, "language": "English",
    "director": "Greta Gerwig",
    "cast": "Margot Robbie, Ryan Gosling, America Ferrera, Will Ferrell",
    "description": "Barbie and Ken go to the real world and discover the joys and perils of living among humans.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/iuFNMS8vlbSYi6JKcgQbvKvaAdS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nHf61UzkfFno5X1ofIhugCPus2R.jpg"
  },
  {
    "id": "h15",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "genre": "Fantasy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 178, "releaseYear": 2001, "language": "English",
    "director": "Peter Jackson",
    "cast": "Elijah Wood, Ian McKellen, Orlando Bloom, Viggo Mortensen",
    "description": "A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/pIgHo6xWmzR1GkzJNLbDqKEUCF4.jpg"
  },
  {
    "id": "h16",
    "title": "Avatar: The Way of Water",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.2, "duration": 192, "releaseYear": 2022, "language": "English",
    "director": "James Cameron",
    "cast": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Kate Winslet",
    "description": "Jake Sully and his family must work with Neytiri and the Na'vi to protect their home from a returning threat.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/evaFLqtswezLosllRZtJNMkhXnX.jpg"
  },
  {
    "id": "h17",
    "title": "The Lord of the Rings: The Return of the King",
    "genre": "Fantasy", "subGenre": "Action", "category": "Hollywood",
    "rating": 9.8, "duration": 201, "releaseYear": 2003, "language": "English",
    "director": "Peter Jackson",
    "cast": "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
    "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg"
  },
  {
    "id": "h18",
    "title": "Mad Max: Fury Road",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.4, "duration": 120, "releaseYear": 2015, "language": "English",
    "director": "George Miller",
    "cast": "Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz",
    "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/phszHPFnhGCDiiM4XNwSMwf3e9v.jpg"
  },
  {
    "id": "h19",
    "title": "The Wolf of Wall Street",
    "genre": "Comedy", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.4, "duration": 180, "releaseYear": 2013, "language": "English",
    "director": "Martin Scorsese",
    "cast": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    "description": "Based on the true story of Jordan Belfort, from his rise as a wealthy stock-broker to his fall involving crime and corruption.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzWd4se.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ugNBDotFTuMWxgMDJGplMeXPyLv.jpg"
  },
  {
    "id": "h20",
    "title": "Joker",
    "genre": "Thriller", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 122, "releaseYear": 2019, "language": "English",
    "director": "Todd Phillips",
    "cast": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    "description": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to his infamous alter-ego.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1bJkPs3KxBh.jpg"
  },
  {
    "id": "h21",
    "title": "Parasite",
    "genre": "Thriller", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.8, "duration": 132, "releaseYear": 2019, "language": "Korean",
    "director": "Bong Joon Ho",
    "cast": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
    "description": "Greed and class discrimination threaten the symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg"
  },
  {
    "id": "h22",
    "title": "Spirited Away",
    "genre": "Animation", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.8, "duration": 125, "releaseYear": 2001, "language": "Japanese",
    "director": "Hayao Miyazaki",
    "cast": "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
    "description": "A sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits where humans are changed into beasts.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/Ab8mkyvkOhOiJxlYWKoPsHu0bcj.jpg"
  },
  {
    "id": "h23",
    "title": "The Lion King",
    "genre": "Animation", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.6, "duration": 88, "releaseYear": 1994, "language": "English",
    "director": "Roger Allers, Rob Minkoff",
    "cast": "Matthew Broderick, Jeremy Irons, James Earl Jones, Whoopi Goldberg",
    "description": "Lion prince Simba and his father are targeted by his bitter uncle Scar, who wants to ascend the throne himself.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/sKCr78MXSuA3CTH1UrmxNa3VWZE.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wXsQvli6tWqja51pYxXNG1LFIGV.jpg"
  },
  {
    "id": "h24",
    "title": "Toy Story 4",
    "genre": "Animation", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.0, "duration": 100, "releaseYear": 2019, "language": "English",
    "director": "Josh Cooley",
    "cast": "Tom Hanks, Tim Allen, Annie Potts, Tony Hale",
    "description": "When a new toy called Forky joins Woody and the gang, a road trip reveals how big the world can be for a toy.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jnFDfJSzpxkhXGOnuXYnREVHMqe.jpg"
  },
  {
    "id": "h25",
    "title": "Fight Club",
    "genre": "Drama", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.6, "duration": 139, "releaseYear": 1999, "language": "English",
    "director": "David Fincher",
    "cast": "Brad Pitt, Edward Norton, Meat Loaf, Zach Grenier",
    "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
  },
  {
    "id": "h26",
    "title": "The Shawshank Redemption",
    "genre": "Drama", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.8, "duration": 142, "releaseYear": 1994, "language": "English",
    "director": "Frank Darabont",
    "cast": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "description": "Two convicts form a friendship, seeking consolation and eventual redemption through basic compassion.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
  },
  {
    "id": "h27",
    "title": "Dune: Part Two",
    "genre": "Sci-Fi", "subGenre": "Fantasy", "category": "Hollywood",
    "rating": 9.8, "duration": 166, "releaseYear": 2024, "language": "English",
    "director": "Denis Villeneuve",
    "cast": "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem",
    "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
  },
  {
    "id": "h28",
    "title": "Gladiator II",
    "genre": "Action", "subGenre": "Drama", "category": "Hollywood",
    "rating": 8.8, "duration": 148, "releaseYear": 2024, "language": "English",
    "director": "Ridley Scott",
    "cast": "Paul Mescal, Pedro Pascal, Denzel Washington, Connie Nielsen",
    "description": "Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who lead Rome.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tkPk3TFzSAOuU4V9HBK5F6L6nNI.jpg"
  },
  {
    "id": "h29",
    "title": "Se7en",
    "genre": "Thriller", "subGenre": "Horror", "category": "Hollywood",
    "rating": 9.4, "duration": 127, "releaseYear": 1995, "language": "English",
    "director": "David Fincher",
    "cast": "Morgan Freeman, Brad Pitt, Kevin Spacey, Gwyneth Paltrow",
    "description": "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ba90s7hy2t3zJJNnCaM5YVcqGSH.jpg"
  },
  {
    "id": "h30",
    "title": "The Silence of the Lambs",
    "genre": "Thriller", "subGenre": "Horror", "category": "Hollywood",
    "rating": 9.6, "duration": 118, "releaseYear": 1991, "language": "English",
    "director": "Jonathan Demme",
    "cast": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
    "description": "A young FBI cadet must receive the help of an incarcerated cannibal killer to help catch another serial killer.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg"
  },
  {
    "id": "h31",
    "title": "The Conjuring",
    "genre": "Horror", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.2, "duration": 112, "releaseYear": 2013, "language": "English",
    "director": "James Wan",
    "cast": "Patrick Wilson, Vera Farmiga, Ron Livingston, Lili Taylor",
    "description": "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their farmhouse.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nE3WDiCmDFIkCOumGTCsEEzSoLE.jpg"
  },
  {
    "id": "h32",
    "title": "Get Out",
    "genre": "Horror", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 104, "releaseYear": 2017, "language": "English",
    "director": "Jordan Peele",
    "cast": "Daniel Kaluuya, Allison Williams, Bradley Whitford, Catherine Keener",
    "description": "A young African-American visits his white girlfriend's parents, where his uneasiness eventually reaches a boiling point.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mvSkmMjMJdRYPaVJSCvpMPmHQ7R.jpg"
  },
  {
    "id": "h33",
    "title": "It",
    "genre": "Horror", "subGenre": "Drama", "category": "Hollywood",
    "rating": 9.0, "duration": 135, "releaseYear": 2017, "language": "English",
    "director": "Andy Muschietti",
    "cast": "Bill Skarsgård, Jaeden Martell, Finn Wolfhard, Sophia Lillis",
    "description": "A group of bullied kids band together to destroy a shape-shifting monster that disguises itself as a clown.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GkVlo914eBp.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nbRP0Lz6dKgpBRQtNVlD1SXV0PW.jpg"
  },
  {
    "id": "h34",
    "title": "A Quiet Place",
    "genre": "Horror", "subGenre": "Sci-Fi", "category": "Hollywood",
    "rating": 9.2, "duration": 90, "releaseYear": 2018, "language": "English",
    "director": "John Krasinski",
    "cast": "Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe",
    "description": "A family struggles for survival in a world where most humans have been killed by noise-sensitive monsters.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/roYyPiQSMRkdtJaRSdMRv4ZVboc.jpg"
  },
  {
    "id": "h35",
    "title": "Whiplash",
    "genre": "Drama", "subGenre": "Music", "category": "Hollywood",
    "rating": 9.6, "duration": 107, "releaseYear": 2014, "language": "English",
    "director": "Damien Chazelle",
    "cast": "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
    "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are tested.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg"
  },
  {
    "id": "h36",
    "title": "La La Land",
    "genre": "Romance", "subGenre": "Musical", "category": "Hollywood",
    "rating": 9.4, "duration": 128, "releaseYear": 2016, "language": "English",
    "director": "Damien Chazelle",
    "cast": "Ryan Gosling, Emma Stone, Rosemarie DeWitt, J.K. Simmons",
    "description": "While navigating their careers in Los Angeles, a pianist and an actress fall in love.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nadTlnTE9bDf4COnQHGnqeAQkzv.jpg"
  },
  {
    "id": "h37",
    "title": "Knives Out",
    "genre": "Comedy", "subGenre": "Thriller", "category": "Hollywood",
    "rating": 9.4, "duration": 130, "releaseYear": 2019, "language": "English",
    "director": "Rian Johnson",
    "cast": "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis",
    "description": "A detective investigates the death of the patriarch of an eccentric, combative family.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/pThyQovXQrws2OmKFBB2JsCSxXH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1gVIkQzVobYvBsEIqcJjZ2TXy7p.jpg"
  },
  {
    "id": "h38",
    "title": "Inside Out 2",
    "genre": "Animation", "subGenre": "Comedy", "category": "Hollywood",
    "rating": 9.6, "duration": 96, "releaseYear": 2024, "language": "English",
    "director": "Kelsey Mann",
    "cast": "Amy Poehler, Maya Hawke, Kensington Tallman, Liza Lapira",
    "description": "Follow Riley in her teenage years as she encounters a whole new set of emotions.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
  },
  {
    "id": "b1",
    "title": "Dangal",
    "genre": "Drama", "subGenre": "Action", "category": "Bollywood",
    "rating": 9.8, "duration": 161, "releaseYear": 2016, "language": "Hindi",
    "director": "Nitesh Tiwari",
    "cast": "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
    "description": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9eXzFMp7rlUNAFqfH7WA9XlrHFB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"
  },
  {
    "id": "b2",
    "title": "3 Idiots",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.8, "duration": 170, "releaseYear": 2009, "language": "Hindi",
    "director": "Rajkumar Hirani",
    "cast": "Aamir Khan, Madhavan, Sharman Joshi, Kareena Kapoor",
    "description": "Two friends revisit their college days and recall memories of a friend who inspired them to think differently.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1LRLLWGvs5U2NnukNTflq2jJoS3.jpg"
  },
  {
    "id": "b3",
    "title": "Lagaan",
    "genre": "Drama", "subGenre": "Romance", "category": "Bollywood",
    "rating": 9.6, "duration": 224, "releaseYear": 2001, "language": "Hindi",
    "director": "Ashutosh Gowariker",
    "cast": "Aamir Khan, Raghuvir Yadav, Gracy Singh, Rachel Shelley",
    "description": "During the British Raj, a village accepts a challenge to play cricket to avoid paying high taxes.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/y34bKtQaFJD4G9SH6bfLLsIHUC9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7kBc2MRDh8GJYB4OvjhZFR7j7IC.jpg"
  },
  {
    "id": "b4",
    "title": "Sholay",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.8, "duration": 204, "releaseYear": 1975, "language": "Hindi",
    "director": "Ramesh Sippy",
    "cast": "Dharmendra, Sanjeev Kumar, Hema Malini, Amitabh Bachchan",
    "description": "After his family is murdered by a notorious bandit, a retired police officer enlists the help of two outlaws.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7X1AtwEKfIBvnpOmXLsH4tEsBxK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tHisFPblm2yd7DsPl8wHoaYRghr.jpg"
  },
  {
    "id": "b5",
    "title": "Dilwale Dulhania Le Jayenge",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 189, "releaseYear": 1995, "language": "Hindi",
    "director": "Aditya Chopra",
    "cast": "Shah Rukh Khan, Kajol, Amrish Puri, Farida Jalal",
    "description": "When Raj meets Simran in Europe, he follows her to India to win her heart and her father's approval.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/kJlVb7knIMZHnSnYsjuHl6GVT8U.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4P0LsA9VNAMFBbEzk5DkHnFHsrE.jpg"
  },
  {
    "id": "b6",
    "title": "Pathaan",
    "genre": "Action", "subGenre": "Thriller", "category": "Bollywood",
    "rating": 9.0, "duration": 146, "releaseYear": 2023, "language": "Hindi",
    "director": "Siddharth Anand",
    "cast": "Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia",
    "description": "An Indian agent stops a mercenary group from releasing a deadly virus across India.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/gWIE7BapLVbqAMGjBMVFMB74Yy3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hIfmbLTzJpTPXCFkEhM6XGG4C16.jpg"
  },
  {
    "id": "b7",
    "title": "Jawan",
    "genre": "Action", "subGenre": "Thriller", "category": "Bollywood",
    "rating": 9.4, "duration": 168, "releaseYear": 2023, "language": "Hindi",
    "director": "Atlee",
    "cast": "Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Deepika Padukone",
    "description": "A high-octane action thriller outlining the emotional journey of a man set to rectify the wrongs in society.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/cZtNfSzwVpkThkRjJoVXB9uxJIw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/w5UBWJvOLHrCULAqjkGfNEzNl3g.jpg"
  },
  {
    "id": "b8",
    "title": "PK",
    "genre": "Comedy", "subGenre": "Sci-Fi", "category": "Bollywood",
    "rating": 9.4, "duration": 153, "releaseYear": 2014, "language": "Hindi",
    "director": "Rajkumar Hirani",
    "cast": "Aamir Khan, Anushka Sharma, Sushant Singh Rajput, Sanjay Dutt",
    "description": "An alien on Earth loses the only device he can use to communicate with his spaceship.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/iuq4HKMkN4TwlPAMNHOvPZivQsb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lVqcOlsmfEKdmzLDUe6XSZG1CUT.jpg"
  },
  {
    "id": "b9",
    "title": "Bajrangi Bhaijaan",
    "genre": "Drama", "subGenre": "Comedy", "category": "Bollywood",
    "rating": 9.6, "duration": 163, "releaseYear": 2015, "language": "Hindi",
    "director": "Kabir Khan",
    "cast": "Salman Khan, Harshaali Malhotra, Kareena Kapoor, Nawazuddin Siddiqui",
    "description": "An Indian man with a magnanimous heart takes a young mute Pakistani girl back to her homeland.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/cBm3MiBL6WcLsAqOqZVWKS47M62.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1JUHKj3q5ACieLkXCi7eDoP4sXF.jpg"
  },
  {
    "id": "b10",
    "title": "Kabir Singh",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.8, "duration": 172, "releaseYear": 2019, "language": "Hindi",
    "director": "Sandeep Reddy Vanga",
    "cast": "Shahid Kapoor, Kiara Advani, Soham Majumdar, Arjan Bajwa",
    "description": "A short-tempered house surgeon goes into a self-destructive spiral after the love of his life is forced to marry someone else.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/ozNlRPLcYm3OkQD2iZ0gV1dV7tO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rXATdM1Ss2nU1g63gRPkQdxmTbC.jpg"
  },
  {
    "id": "b11",
    "title": "Uri: The Surgical Strike",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 138, "releaseYear": 2019, "language": "Hindi",
    "director": "Aditya Dhar",
    "cast": "Vicky Kaushal, Paresh Rawal, Yami Gautam, Mohit Raina",
    "description": "The film chronicles the events of the surgical strike conducted by the Indian military against suspected militants.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7JgjRE7HJVlU1yBDvF4WFoT3iWi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uq4YxMNRzSnO2iBPdqHzjQGBLhz.jpg"
  },
  {
    "id": "b12",
    "title": "Brahmastra: Part One - Shiva",
    "genre": "Fantasy", "subGenre": "Action", "category": "Bollywood",
    "rating": 8.2, "duration": 167, "releaseYear": 2022, "language": "Hindi",
    "director": "Ayan Mukerji",
    "cast": "Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan, Nagarjuna Akkineni",
    "description": "Shiva, a young DJ, discovers he has a strange connection to fire and the power to awaken the supernatural Brahmastra.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/nFCmh4n5SnEHmjCL0iDPWaOZ3Ww.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7GLlJRF1WkPBlbPjDlkN3m2ABNN.jpg"
  },
  {
    "id": "b13",
    "title": "Zindagi Na Milegi Dobara",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 155, "releaseYear": 2011, "language": "Hindi",
    "director": "Zoya Akhtar",
    "cast": "Hrithik Roshan, Farhan Akhtar, Abhay Deol, Katrina Kaif",
    "description": "Three friends decide to turn their fantasy vacation into reality after one of them gets engaged.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/6CpXwEyQyaSGq1pBfgAbHaGGCIb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zHGsWGvp0DQS8yLe5CYuNXnZHnV.jpg"
  },
  {
    "id": "b14",
    "title": "Yeh Jawaani Hai Deewani",
    "genre": "Romance", "subGenre": "Comedy", "category": "Bollywood",
    "rating": 9.4, "duration": 160, "releaseYear": 2013, "language": "Hindi",
    "director": "Ayan Mukerji",
    "cast": "Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur, Kalki Koechlin",
    "description": "Kabir and Naina bond during a trekking trip; they cross paths again years later at a friend's wedding.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/8NHvv8VXYBakfJFSj2jTbmjLvhL.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tRf2QBtlBxMC7oBkNoxIaawFRcB.jpg"
  },
  {
    "id": "b15",
    "title": "Dil Chahta Hai",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 183, "releaseYear": 2001, "language": "Hindi",
    "director": "Farhan Akhtar",
    "cast": "Aamir Khan, Saif Ali Khan, Akshaye Khanna, Preity Zinta",
    "description": "Three inseparable childhood friends are just out of college until they each fall in love.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/3SeMGFpqpNAWvSL2yFtOjLvKLOX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dXLkLhBfksBbhbAGG5nj1lcEPUQ.jpg"
  },
  {
    "id": "b16",
    "title": "Queen",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.4, "duration": 146, "releaseYear": 2013, "language": "Hindi",
    "director": "Vikas Bahl",
    "cast": "Kangana Ranaut, Rajkummar Rao, Lisa Haydon, Jeffrey Ho",
    "description": "A Delhi girl goes on her honeymoon to Paris and Amsterdam by herself after her fiance dumps her.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9NMvYx5i2YxTHEYSXkCfW0HWMWZ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tIp2SbNXFq4vSlrgUdI0ZIXLJDo.jpg"
  },
  {
    "id": "b17",
    "title": "Barfi!",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 151, "releaseYear": 2012, "language": "Hindi",
    "director": "Anurag Basu",
    "cast": "Ranbir Kapoor, Priyanka Chopra, Ileana D'Cruz, Saurabh Shukla",
    "description": "Three young people learn that love can neither be defined nor contained by society's definition of normal.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/gEDGf4hg4LU9TKJfIjPf5AeGtSw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tAEgWTWtxfkQhqzuNNRQFW2HDAD.jpg"
  },
  {
    "id": "b18",
    "title": "My Name Is Khan",
    "genre": "Drama", "subGenre": "Romance", "category": "Bollywood",
    "rating": 9.6, "duration": 165, "releaseYear": 2010, "language": "Hindi",
    "director": "Karan Johar",
    "cast": "Shah Rukh Khan, Kajol, Katie A. Keane, Kenton Duty",
    "description": "An Indian Muslim man with Asperger's syndrome undertakes a journey across the United States to meet the President.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/lbKgtgO2eaVfJH2GWYFGgZSMmYf.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hJJe6zBnUVubwPfMqVEIDgJuYBW.jpg"
  },
  {
    "id": "b19",
    "title": "Drishyam",
    "genre": "Thriller", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.6, "duration": 163, "releaseYear": 2015, "language": "Hindi",
    "director": "Nishikant Kamat",
    "cast": "Ajay Devgn, Tabu, Shriya Saran, Rajat Kapoor",
    "description": "A man takes desperate measures to save his family from the dark side of the law after an accidental crime.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/5jRDCpVQIYbOD8CJ22ZtMXJRmfc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oVo2S2YEFuP4T0h6bSQLjy3mQEZ.jpg"
  },
  {
    "id": "b20",
    "title": "Drishyam 2",
    "genre": "Thriller", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.4, "duration": 140, "releaseYear": 2022, "language": "Hindi",
    "director": "Abhishek Pathak",
    "cast": "Ajay Devgn, Tabu, Akshaye Khanna, Shriya Saran",
    "description": "Will Vijay Salgaonkar be able to protect his family this time? A gripping tale of investigation and survival.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/fG1R0aTJ42qdAMqLwH78bFGBWOI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5y0E6J5qxPBPAZ3EMGr3wnVtMSj.jpg"
  },
  {
    "id": "b21",
    "title": "Gangs of Wasseypur",
    "genre": "Action", "subGenre": "Thriller", "category": "Bollywood",
    "rating": 9.6, "duration": 321, "releaseYear": 2012, "language": "Hindi",
    "director": "Anurag Kashyap",
    "cast": "Manoj Bajpayee, Richa Chadha, Nawazuddin Siddiqui, Tigmanshu Dhulia",
    "description": "A clash between Sultan and Shahid Khan ignites a deadly blood feud spanning three generations.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/lBBiSBeLQEaFWm2J0X5X0oRrSl9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6F9RyqQxiTJHsVHbFgMl0sWVmXB.jpg"
  },
  {
    "id": "b22",
    "title": "Andhadhun",
    "genre": "Thriller", "subGenre": "Comedy", "category": "Bollywood",
    "rating": 9.6, "duration": 139, "releaseYear": 2018, "language": "Hindi",
    "director": "Sriram Raghavan",
    "cast": "Ayushmann Khurrana, Tabu, Radhika Apte, Anil Dhawan",
    "description": "A series of mysterious events change the life of a blind pianist who must report a crime he should not have seen.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9mvmVNPHJwUgBogjPyYSGhLGOxC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bLRkGBHklv7Hv8NKXL9rX0BfJGd.jpg"
  },
  {
    "id": "b23",
    "title": "Stree",
    "genre": "Comedy", "subGenre": "Horror", "category": "Bollywood",
    "rating": 9.2, "duration": 128, "releaseYear": 2018, "language": "Hindi",
    "director": "Amar Kaushik",
    "cast": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi, Aparshakti Khurana",
    "description": "In the small town of Chanderi, the menfolk live in fear of an evil spirit named Stree who abducts men.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/tnX8gVCGHhHxkrHPQgkBgVyRJAn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kfVdEMGJdmNQVDkQjHXbdxvnFcG.jpg"
  },
  {
    "id": "b24",
    "title": "Stree 2",
    "genre": "Comedy", "subGenre": "Horror", "category": "Bollywood",
    "rating": 9.4, "duration": 147, "releaseYear": 2024, "language": "Hindi",
    "director": "Amar Kaushik",
    "cast": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi, Abhishek Banerjee",
    "description": "The town of Chanderi faces a new headless terror named Sarkata. The townsfolk must call upon Stree once again.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/cGOPbv9wgrNBgB3wFMntMqGCqbs.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bFO9Dau4G0vqbHjH8yOZMdWfBtI.jpg"
  },
  {
    "id": "b25",
    "title": "Shershaah",
    "genre": "Drama", "subGenre": "Action", "category": "Bollywood",
    "rating": 9.6, "duration": 135, "releaseYear": 2021, "language": "Hindi",
    "director": "Vishnuvardhan",
    "cast": "Sidharth Malhotra, Kiara Advani, Shiv Panditt, Nikitin Dheer",
    "description": "The story of Kargil war hero Captain Vikram Batra, awarded the Param Vir Chakra.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/eDAw7O5kMBqR0LBXPIDM4nCvMzx.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hJJe6zBnUVubwPfMqVEIDgJuYBW.jpg"
  },
  {
    "id": "b26",
    "title": "Tanhaji: The Unsung Warrior",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.2, "duration": 135, "releaseYear": 2020, "language": "Hindi",
    "director": "Om Raut",
    "cast": "Ajay Devgn, Saif Ali Khan, Sharad Kelkar, Kajol",
    "description": "Maratha military leader Tanhaji Malusare battles a fierce Rajput commander to recapture the strategic Kondhana fort.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/dpYF3xdxbIbHJSGHwDmx0EJ9K0J.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/gnz1M3wfPWDvKZfXqolSwQHPnNF.jpg"
  },
  {
    "id": "b27",
    "title": "War",
    "genre": "Action", "subGenre": "Thriller", "category": "Bollywood",
    "rating": 8.4, "duration": 154, "releaseYear": 2019, "language": "Hindi",
    "director": "Siddharth Anand",
    "cast": "Hrithik Roshan, Tiger Shroff, Vaani Kapoor, Ashutosh Rana",
    "description": "An Indian soldier is assigned to eliminate his former mentor, who has gone rogue.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/y9Fgs0YECF8M8MWXpP9bvCGORXbL.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/a5i7fUHEyFvK7AkgFEXhRGIPkh3.jpg"
  },
  {
    "id": "b28",
    "title": "Dunki",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.6, "duration": 161, "releaseYear": 2023, "language": "Hindi",
    "director": "Rajkumar Hirani",
    "cast": "Shah Rukh Khan, Taapsee Pannu, Boman Irani, Vicky Kaushal",
    "description": "Four friends from Punjab share a common dream to go to England and take an illegal route to get there.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9ByFDhC2GkJLl3V0oevKVLlCLLe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1Kzk57SWdPXMMgVCNLNKiKHIVlz.jpg"
  },
  {
    "id": "b29",
    "title": "Animal",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.4, "duration": 201, "releaseYear": 2023, "language": "Hindi",
    "director": "Sandeep Reddy Vanga",
    "cast": "Ranbir Kapoor, Anil Kapoor, Bobby Deol, Rashmika Mandanna",
    "description": "A broken father-son bond triggers a path of blood and violence as the son seeks vengeance.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/jafgNqczNcxBs5pBjMoAhOQJsaA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bEBqSb2mzZV6jU5UfCexiSJpJr4.jpg"
  },
  {
    "id": "b30",
    "title": "Fighter",
    "genre": "Action", "subGenre": "Drama", "category": "Bollywood",
    "rating": 8.6, "duration": 166, "releaseYear": 2024, "language": "Hindi",
    "director": "Siddharth Anand",
    "cast": "Hrithik Roshan, Deepika Padukone, Anil Kapoor, Karan Singh Grover",
    "description": "Top IAF aviators come together to form Air Dragons, showcasing their camaraderie and battles.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/uMgRKvOgXsRmN3Evw3mJLK0xqJl.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kCGlIMHnOm8JPXQoaAKIW89iM0W.jpg"
  },
  {
    "id": "b31",
    "title": "Bajirao Mastani",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.2, "duration": 158, "releaseYear": 2015, "language": "Hindi",
    "director": "Sanjay Leela Bhansali",
    "cast": "Ranveer Singh, Deepika Padukone, Priyanka Chopra, Tanvi Azmi",
    "description": "An epic love story between the heroic Peshwa Bajirao and his second wife, the warrior princess Mastani.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/h1m8i9eVNqxVEVBpNEJFHl5LgA1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6ZnNYMb8MfkFSXSHLhfVGg8CGOL.jpg"
  },
  {
    "id": "b32",
    "title": "Padmaavat",
    "genre": "Drama", "subGenre": "Romance", "category": "Bollywood",
    "rating": 9.0, "duration": 164, "releaseYear": 2018, "language": "Hindi",
    "director": "Sanjay Leela Bhansali",
    "cast": "Deepika Padukone, Ranveer Singh, Shahid Kapoor, Aditi Rao Hydari",
    "description": "Queen Padmavati is married to a noble king until a tyrannical Sultan lays siege to capture her.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/1lzpMzLAXbpJQHFWsXXhTNMWqAw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6bCcTr4l1t5EFxL3hNxPYt47x2V.jpg"
  },
  {
    "id": "b33",
    "title": "Devdas",
    "genre": "Romance", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.4, "duration": 185, "releaseYear": 2002, "language": "Hindi",
    "director": "Sanjay Leela Bhansali",
    "cast": "Shah Rukh Khan, Madhuri Dixit, Aishwarya Rai Bachchan, Jackie Shroff",
    "description": "After his family prohibits him from marrying his true love, Devdas Mukherjee's life spirals into vice.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/zFkFe9baSbv56EUP84APZB3OgMT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4P0LsA9VNAMFBbEzk5DkHnFHsrE.jpg"
  },
  {
    "id": "b34",
    "title": "Chennai Express",
    "genre": "Comedy", "subGenre": "Action", "category": "Bollywood",
    "rating": 8.8, "duration": 141, "releaseYear": 2013, "language": "Hindi",
    "director": "Rohit Shetty",
    "cast": "Shah Rukh Khan, Deepika Padukone, Nikitin Dheer, Sathyaraj",
    "description": "A man boarding a train to fulfill his grandfather's last wish finds himself helping a runaway bride.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/dP9fBCCFdYAFLHbHCpkGOtOqFd5.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wFiKAHJFvBnLyM1WEjWFOb34l1l.jpg"
  },
  {
    "id": "b35",
    "title": "Chak De! India",
    "genre": "Drama", "subGenre": "Sports", "category": "Bollywood",
    "rating": 9.8, "duration": 153, "releaseYear": 2007, "language": "Hindi",
    "director": "Shimit Amin",
    "cast": "Shah Rukh Khan, Vidya Malvade, Sagarika Ghatge, Shilpa Shukla",
    "description": "Kabir Khan, a former hockey player, coaches the Indian Women's National Hockey Team to a championship.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/jCpwnqFZIj8nw5kMWqM2gWMtR0Z.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bGLTSfFkzVLxuYRNobpnEhJNjcB.jpg"
  },
  {
    "id": "b36",
    "title": "Swades",
    "genre": "Drama", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.8, "duration": 189, "releaseYear": 2004, "language": "Hindi",
    "director": "Ashutosh Gowariker",
    "cast": "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
    "description": "A successful Indian NASA scientist returns to an Indian village and discovers his true roots.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/3iFBQPNjHibR8OqCRn4Q37DY7Zt.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4P0LsA9VNAMFBbEzk5DkHnFHsrE.jpg"
  },
  {
    "id": "b37",
    "title": "Hera Pheri",
    "genre": "Comedy", "subGenre": "Drama", "category": "Bollywood",
    "rating": 9.8, "duration": 138, "releaseYear": 2000, "language": "Hindi",
    "director": "Priyadarshan",
    "cast": "Akshay Kumar, Sunil Shetty, Paresh Rawal, Tabu",
    "description": "Three unemployed men find themselves in a hilarious situation when they receive a wrong telephone call from a kidnapper.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9ZgZRLjJCygCnXgT8QBiH9QBKFX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tHisFPblm2yd7DsPl8wHoaYRghr.jpg"
  },
  {
    "id": "b38",
    "title": "Bhool Bhulaiyaa",
    "genre": "Comedy", "subGenre": "Horror", "category": "Bollywood",
    "rating": 9.6, "duration": 159, "releaseYear": 2007, "language": "Hindi",
    "director": "Priyadarshan",
    "cast": "Akshay Kumar, Vidya Balan, Shiney Ahuja, Ameesha Patel",
    "description": "An eccentric psychiatrist is called to help solve the mystery of a haunted palace.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/2YjJGPjIBIZ1NdYINzKYjOHCH0u.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bGLTSfFkzVLxuYRNobpnEhJNjcB.jpg"
  },

  {
    "id": "s1",
    "title": "RRR",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 9.2, "duration": 187, "releaseYear": 2022, "language": "Telugu",
    "director": "S.S. Rajamouli",
    "cast": "Ram Charan, Jr. NTR, Alia Bhatt, Ajay Devgn",
    "description": "A fictitious story about two legendary revolutionaries and their journey before they started fighting for their country in 1920s.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/nEeh6sMoqVHRfNMrTsENaBgGZOB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  },
  {
    "id": "s2",
    "title": "Baahubali: The Beginning",
    "genre": "Action", "subGenre": "Fantasy", "category": "South Indian",
    "rating": 9.0, "duration": 159, "releaseYear": 2015, "language": "Telugu",
    "director": "S.S. Rajamouli",
    "cast": "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia",
    "description": "An adventurous man becomes involved in a decadelong feud between two warring brothers at the core of a kingdom.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/dVSfRGLMNiMbGh3CyNFM7l9dWAs.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8r5fVMKNKf9smTMRGLKHF4x9pRG.jpg"
  },
  {
    "id": "s3",
    "title": "Baahubali 2: The Conclusion",
    "genre": "Action", "subGenre": "Fantasy", "category": "South Indian",
    "rating": 9.3, "duration": 167, "releaseYear": 2017, "language": "Telugu",
    "director": "S.S. Rajamouli",
    "cast": "Prabhas, Rana Daggubati, Anushka Shetty, Ramya Krishna",
    "description": "Shiva, the son of Bahubali, returns to avenge his father's death against Bhallaladeva.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/aTOBrXNkDOw7i1J4Pq13bOdCxK4.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2yumB6eo7RCGM4MN4mllIAjy3pW.jpg"
  },
  {
    "id": "s4",
    "title": "K.G.F: Chapter 1",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.8, "duration": 156, "releaseYear": 2018, "language": "Kannada",
    "director": "Prashanth Neel",
    "cast": "Yash, Srinidhi Shetty, Ramachandra Raju",
    "description": "Rocky, a young man, seeks power and wealth in order to fulfill a promise to his dying mother at the Kolar Gold Fields.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/iOmWMRJqXYMUQGSXlMdPHiQGsLe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/g3xP3J0h2h6VMpjpB2mCQVVCLrt.jpg"
  },
  {
    "id": "s5",
    "title": "K.G.F: Chapter 2",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 9.0, "duration": 168, "releaseYear": 2022, "language": "Kannada",
    "director": "Prashanth Neel",
    "cast": "Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty",
    "description": "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes while the government sees him as a threat.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/FhOGFPE3y4dCDtDqHxlNDy3XKTK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8fewbpRVmqBcYjMApqxAaIWL1wS.jpg"
  },
  {
    "id": "s6",
    "title": "Pushpa: The Rise",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 8.5, "duration": 179, "releaseYear": 2021, "language": "Telugu",
    "director": "Sukumar",
    "cast": "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
    "description": "Pushpa Raj, a coolie, rises to lead the red sandalwood smuggling syndicate in the Seshachalam forests.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/kw3BWAWXHbzFfurJPCJCQFElKaO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wcNSJh0AaVoPlHXdD5FX1s3RFoa.jpg"
  },
  {
    "id": "s7",
    "title": "Kantara",
    "genre": "Fantasy", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.9, "duration": 149, "releaseYear": 2022, "language": "Kannada",
    "director": "Rishab Shetty",
    "cast": "Rishab Shetty, Sapthami Gowda, Kishore",
    "description": "A young tribal man reluctantly inherits his ancestors' legacy to restore peace in his village when greed leads to betrayal.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/i5JLBdXjkFZKiSRIGX9O1RMusSI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kO2Xq0V3z4KatXnIe4ckVTzIhSn.jpg"
  },
  {
    "id": "s8",
    "title": "Jailer",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.4, "duration": 168, "releaseYear": 2023, "language": "Tamil",
    "director": "Nelson Dilipkumar",
    "cast": "Rajinikanth, Vinayakan, Ramya Krishnan, Mohanlal",
    "description": "A retired prison warden tracks down his son's killers, unleashing his dark past in the process.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/tUGkxMCdUbOMORlHCJXBWHifqeh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8r5fVMKNKf9smTMRGLKHF4x9pRG.jpg"
  },
  {
    "id": "s9",
    "title": "Vikram",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.7, "duration": 175, "releaseYear": 2022, "language": "Tamil",
    "director": "Lokesh Kanagaraj",
    "cast": "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil, Narain",
    "description": "A cop investigates a series of murders by masked men while dealing with drug cartel conspiracies.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7bWxAsNPv9CXHOhZbJQCl0Dn9LT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  },
  {
    "id": "s10",
    "title": "Leo",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.2, "duration": 164, "releaseYear": 2023, "language": "Tamil",
    "director": "Lokesh Kanagaraj",
    "cast": "Thalapathy Vijay, Sanjay Dutt, Trisha Krishnan",
    "description": "A mild-mannered cafe owner becomes the target of a drug cartel claiming he is the son of a powerful gangster.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/5PeaBF0JE3FYU7ygBiDntKSzBJz.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  },
  {
    "id": "s11",
    "title": "Ponniyin Selvan: Part I",
    "genre": "Drama", "subGenre": "Action", "category": "South Indian",
    "rating": 8.1, "duration": 167, "releaseYear": 2022, "language": "Tamil",
    "director": "Mani Ratnam",
    "cast": "Vikram, Aishwarya Rai Bachchan, Jayam Ravi, Karthi, Trisha",
    "description": "Vandiyathevan crosses the Chola land to deliver a message from the Crown Prince amid deadly conspiracies.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/4YpDFWmHdl8yCQMR6DPRgfLJvjG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oH35GUsFNjAZC0mMI8DTyMFoFfM.jpg"
  },
  {
    "id": "s12",
    "title": "Ponniyin Selvan: Part II",
    "genre": "Drama", "subGenre": "Action", "category": "South Indian",
    "rating": 8.3, "duration": 164, "releaseYear": 2023, "language": "Tamil",
    "director": "Mani Ratnam",
    "cast": "Vikram, Aishwarya Rai Bachchan, Jayam Ravi, Karthi, Trisha",
    "description": "Arulmozhi Varman continues his journey to ascend the Chola throne while Nandini's vengeance looms large.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/8V0vxjYhVDiQBQvvxvFl63WzD98.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oH35GUsFNjAZC0mMI8DTyMFoFfM.jpg"
  },
  {
    "id": "s13",
    "title": "Minnal Murali",
    "genre": "Action", "subGenre": "Sci-Fi", "category": "South Indian",
    "rating": 8.5, "duration": 158, "releaseYear": 2021, "language": "Malayalam",
    "director": "Basil Joseph",
    "cast": "Tovino Thomas, Guru Somasundaram, Femina George",
    "description": "A tailor gains superpowers after being struck by lightning and must protect his village from a dark force.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/k0DfbIqnWCq3UlHN2VqKUxMmT9r.jpg"
  },
  {
    "id": "s14",
    "title": "Lucifer",
    "genre": "Thriller", "subGenre": "Drama", "category": "South Indian",
    "rating": 8.4, "duration": 175, "releaseYear": 2019, "language": "Malayalam",
    "director": "Prithviraj Sukumaran",
    "cast": "Mohanlal, Vivek Oberoi, Manju Warrier, Tovino Thomas",
    "description": "A political godfather dies, leaving a vacuum of power. A mysterious man named Stephen steps into the fray.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/8FoZ0FLi0Mv8CqmPRpOHMu9rRZc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nE3WDiCmDFIkCOumGTCsEEzSoLE.jpg"
  },
  {
    "id": "s15",
    "title": "Manjummel Boys",
    "genre": "Drama", "subGenre": "Thriller", "category": "South Indian",
    "rating": 9.1, "duration": 135, "releaseYear": 2024, "language": "Malayalam",
    "director": "Chidambaram",
    "cast": "Soubin Shahir, Sreenath Bhasi, Balu Varghese",
    "description": "A group of friends from Kerala get trapped inside the deep Guna Caves, prompting a daring rescue attempt.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/5GOmCqNFxJJfP7oTQI85M8iGZRX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kO2Xq0V3z4KatXnIe4ckVTzIhSn.jpg"
  },
  {
    "id": "s16",
    "title": "Aavesham",
    "genre": "Comedy", "subGenre": "Action", "category": "South Indian",
    "rating": 8.9, "duration": 158, "releaseYear": 2024, "language": "Malayalam",
    "director": "Jithu Madhavan",
    "cast": "Fahadh Faasil, Sajin Gopu, Mansoor Ali Khan",
    "description": "Three college students in Bangalore befriend a quirky local gangster named Ranga to seek revenge on their seniors.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/3RbRnH7wIaETuVJpbA5xJY6vn9P.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/k0DfbIqnWCq3UlHN2VqKUxMmT9r.jpg"
  },
  {
    "id": "s17",
    "title": "Kalki 2898 AD",
    "genre": "Sci-Fi", "subGenre": "Action", "category": "South Indian",
    "rating": 8.6, "duration": 181, "releaseYear": 2024, "language": "Telugu",
    "director": "Nag Ashwin",
    "cast": "Prabhas, Amitabh Bachchan, Kamal Haasan, Deepika Padukone",
    "description": "A modern avatar of Vishnu is prophesied to descend to Earth to protect forces of good in a post-apocalyptic world.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/bFli2IJ9DEWxqgWpRYSzEHBjRfS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"
  },
  {
    "id": "s18",
    "title": "HanuMan",
    "genre": "Action", "subGenre": "Fantasy", "category": "South Indian",
    "rating": 8.7, "duration": 158, "releaseYear": 2024, "language": "Telugu",
    "director": "Prasanth Varma",
    "cast": "Teja Sajja, Amritha Aiyer, Varalaxmi Sarathkumar",
    "description": "An underdog gets the power of Lord Hanuman and fights a greedy villain who wants to rule the world.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7ZSmLRfxVFwVfuISSyLlDhVxjqN.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  },
  {
    "id": "s19",
    "title": "Premalu",
    "genre": "Romance", "subGenre": "Comedy", "category": "South Indian",
    "rating": 8.4, "duration": 156, "releaseYear": 2024, "language": "Malayalam",
    "director": "Girish A.D.",
    "cast": "Naslen K. Gafoor, Mamitha Baiju, Althaf Salim",
    "description": "A hilarious romantic comedy about a young man in Hyderabad who tries to win a girl's heart through misadventures.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/k9KAmXqcP9re9XoMrWLYJfmGzfD.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/k0DfbIqnWCq3UlHN2VqKUxMmT9r.jpg"
  },
  {
    "id": "s20",
    "title": "Master",
    "genre": "Action", "subGenre": "Thriller", "category": "South Indian",
    "rating": 8.1, "duration": 179, "releaseYear": 2021, "language": "Tamil",
    "director": "Lokesh Kanagaraj",
    "cast": "Thalapathy Vijay, Vijay Sethupathi, Malavika Mohanan",
    "description": "An alcoholic professor sent to a juvenile school clashes with a ruthless gangster who uses children for crime.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/1KYFhRZj1p6aSNNj7KbqPYpxT5I.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  },
  {
    "id": "s21",
    "title": "Salaar: Part 1 - Ceasefire",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 8.0, "duration": 175, "releaseYear": 2023, "language": "Telugu",
    "director": "Prashanth Neel",
    "cast": "Prabhas, Prithviraj Sukumaran, Shruti Haasan",
    "description": "Two childhood friends in the lawless city-state of Khansaar become deadly rivals in a battle for power.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/3bj3AZVPYQFRKXbhpTh86fEGJcM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8r5fVMKNKf9smTMRGLKHF4x9pRG.jpg"
  },
  {
    "id": "s22",
    "title": "Drishyam (Malayalam)",
    "genre": "Thriller", "subGenre": "Drama", "category": "South Indian",
    "rating": 9.3, "duration": 160, "releaseYear": 2013, "language": "Malayalam",
    "director": "Jeethu Joseph",
    "cast": "Mohanlal, Meena, Ansiba Hassan",
    "description": "A cable TV operator goes to extreme lengths to protect his family from police investigation after an accidental crime.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/5jRDCpVQIYbOD8CJ22ZtMXJRmfc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oVo2S2YEFuP4T0h6bSQLjy3mQEZ.jpg"
  },
  {
    "id": "s23",
    "title": "Sita Ramam",
    "genre": "Romance", "subGenre": "Drama", "category": "South Indian",
    "rating": 9.1, "duration": 163, "releaseYear": 2022, "language": "Telugu",
    "director": "Hanu Raghavapudi",
    "cast": "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna",
    "description": "An orphaned soldier's life changes after he receives a letter from a girl named Sita. He sets out to find her.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/eXFNv2wVnuKFKp3rj1V0MuWIYPN.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oH35GUsFNjAZC0mMI8DTyMFoFfM.jpg"
  },
  {
    "id": "s24",
    "title": "Pushpa 2: The Rule",
    "genre": "Action", "subGenre": "Drama", "category": "South Indian",
    "rating": 8.8, "duration": 175, "releaseYear": 2024, "language": "Telugu",
    "director": "Sukumar",
    "cast": "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
    "description": "The clash continues between Pushpa Raj, now the undisputed smuggling ruler, and SP Bhanwar Singh Shekhawat.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/sFT5HzBnHiXDWMVFcKqeHDHyDpA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wcNSJh0AaVoPlHXdD5FX1s3RFoa.jpg"
  },
  {
    "id": "s25",
    "title": "Major",
    "genre": "Drama", "subGenre": "Action", "category": "South Indian",
    "rating": 8.9, "duration": 150, "releaseYear": 2022, "language": "Telugu",
    "director": "Sashi Kiran Tikka",
    "cast": "Adivi Sesh, Sobhita Dhulipala, Saiee Manjrekar",
    "description": "Based on the life of Major Sandeep Unnikrishnan, who was martyred during the 2008 Mumbai terror attacks.",
    "posterUrl": "https://image.tmdb.org/t/p/w500/56MQN6StVsNcEPUAaRPqiTpk3gI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
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
