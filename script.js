const STORAGE_KEY = "soundclash_champions_v1";
const TOURNAMENT_PROGRESS_KEY = "soundclash_tournament_progress_v1";
let currentMode = "general";

const tracks = [
  {
  title: "Bump, Bump, Bump",
  artist: "B2K e P. Diddy",
  embed: "https://open.spotify.com/embed/track/75lRRdjplzfpmBjNzMPyjR",
  mode: "international"
},{
  title: "Without Me",
  artist: "Eminem",
  embed: "https://open.spotify.com/embed/track/7lQ8MOhq6IN2w8EYcFNSUk",
  mode: "international"
},
{
  title: "Mockingbird",
  artist: "Eminem",
  embed: "https://open.spotify.com/embed/track/561jH07mF1jHuk7KlaeF0s",
  mode: "international"
},
{
  title: "The Real Slim Shady",
  artist: "Eminem",
  embed: "https://open.spotify.com/embed/track/3yfqSUWxFvZELEM4PmlwIR",
  mode: "international"
},
{
  title: "Stan",
  artist: "Eminem e Dido",
  embed: "https://open.spotify.com/embed/track/3UmaczJpikHgJFyBTAJVoz",
  mode: "international"
},
{
  title: "Love The Way You Lie",
  artist: "Eminem e Rihanna",
  embed: "https://open.spotify.com/embed/track/15JINEqzVMv3SvJTAXAKED",
  mode: "international"
},
{
  title: "Till I Collapse",
  artist: "Eminem",
  embed: "https://open.spotify.com/embed/track/6yr8GiTHWvFfi4o6Q5ebdT",
  mode: "international"
},
{
  title: "Stronger",
  artist: "Kanye West",
  embed: "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf",
  mode: "international"
},
{
  title: "Heartless",
  artist: "Kanye West",
  embed: "https://open.spotify.com/embed/track/4EWCNWgDS8707fNSZ1oaA5",
  mode: "international"
},
{
  title: "Flashing Lights",
  artist: "Kanye West",
  embed: "https://open.spotify.com/embed/track/5TRPicyLGbAF2LGBFbHGvO",
  mode: "international"
},
{
  title: "Praise God",
  artist: "Kanye West",
  embed: "https://open.spotify.com/embed/track/0WSEq9Ko4kFPt8yo3ICd6T",
  mode: "international"
},
{
  title: "Started From The Bottom",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/3dgQqOiQ9fCKVhNOedd2lf",
  mode: "international"
},
{
  title: "Passionfruit",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/5mCPDVBb16L4XQwDdbRUpz",
  mode: "international"
},
{
  title: "Hold On, We're Going Home",
  artist: "Drake e Majid Jordan",
  embed: "https://open.spotify.com/embed/track/6jdOi5U5LBzQrc4c1VT983",
  mode: "international"
},
{
  title: "Nice For What",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/3CA9pLiwRIGtUBiMjbZmRw",
  mode: "international"
},
{
  title: "Nonstop",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/0TlLq3lA83rQOYtrqBqSct",
  mode: "international"
},
{
  title: "SAD!",
  artist: "XXXTENTACION",
  embed: "https://open.spotify.com/embed/track/3ee8Jmje8o58CHK66QrVC2",
  mode: "international"
},
{
  title: "Moonlight",
  artist: "XXXTENTACION",
  embed: "https://open.spotify.com/embed/track/0JP9xo3adEtGSdUEISiszL",
  mode: "international"
},
{
  title: "Lucid Dreams",
  artist: "Juice WRLD",
  embed: "https://open.spotify.com/embed/track/285pBltuF7vW8TeWk8hdRR",
  mode: "international"
},
{
  title: "All Girls Are The Same",
  artist: "Juice WRLD",
  embed: "https://open.spotify.com/embed/track/4VXIryQMWpIdGgYR4TrjT1",
  mode: "international"
},
{
  title: "Robbery",
  artist: "Juice WRLD",
  embed: "https://open.spotify.com/embed/track/6Hj9jySrnFppAI0sEMCZpJ",
  mode: "international"
},
{
  title: "Suge",
  artist: "DaBaby",
  embed: "https://open.spotify.com/embed/track/2gwkD6igEhQbDQegRCcdoB",
  mode: "international"
},
{
  title: "Rockstar",
  artist: "DaBaby e Roddy Ricch",
  embed: "https://open.spotify.com/embed/track/7ytR5pFWmSjzHJIeQkgog4",
  mode: "international"
},
{
  title: "Going Bad",
  artist: "Meek Mill e Drake",
  embed: "https://open.spotify.com/embed/track/2IRZnDFmlqMuOrYOLnZZyc",
  mode: "international"
},
 {
  title: "90210",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/51EC3I1nQXpec4gDk0mQyP",
  mode: "international"
},
{
  title: "Butterfly Effect",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/51rXHuKN8Loc4sUlKPODgH",
  mode: "international"
},
{
  title: "Mask Off",
  artist: "Future",
  embed: "https://open.spotify.com/embed/track/0VgkVdmE4gld66l8iyGjgx",
  mode: "international"
},
{
  title: "March Madness",
  artist: "Future",
  embed: "https://open.spotify.com/embed/track/3WcC6NH9J77xPEvj1SOL7z",
  mode: "international"
},
{
  title: "Jumpman",
  artist: "Drake e Future",
  embed: "https://open.spotify.com/embed/track/27GmP9AWRs744SzKcpJsTZ",
  mode: "international"
},
{
  title: "Bad and Boujee",
  artist: "Migos e Lil Uzi Vert",
  embed: "https://open.spotify.com/embed/track/4Km5HrUvYTaSUfiSGPJeQR",
  mode: "international"
},
{
  title: "T-Shirt",
  artist: "Migos",
  embed: "https://open.spotify.com/embed/track/1rkfJLgTlB6XYNjgZ0sVaK",
  mode: "international"
},
{
  title: "Walk It Talk It",
  artist: "Migos e Drake",
  embed: "https://open.spotify.com/embed/track/6n4U3TlzUGhdSFbUUhTvLP",
  mode: "international"
},
{
  title: "Magnolia",
  artist: "Playboi Carti",
  embed: "https://open.spotify.com/embed/track/1e1JKLEDKP7hEQzJfNAgPl",
  mode: "international"
},
{
  title: "Shoota",
  artist: "Playboi Carti e Lil Uzi Vert",
  embed: "https://open.spotify.com/embed/track/2BJSMvOGABRxokHKB0OI8i",
  mode: "international"
},
{
  title: "Miss The Rage",
  artist: "Trippie Redd e Playboi Carti",
  embed: "https://open.spotify.com/embed/track/5n4FTCMefvyKUjeWumdaWv",
  mode: "international"
},
{
  title: "No Guidance",
  artist: "Chris Brown e Drake",
  embed: "https://open.spotify.com/embed/track/6XHVuErjQ4XNm6nDPVCxVX",
  mode: "international"
},
{
  title: "Loyal",
  artist: "Chris Brown e Lil Wayne e Tyga",
  embed: "https://open.spotify.com/embed/track/5BrTUo0xP1wKXLJWUaGFtk",
  mode: "international"
},
{
  title: "Forever",
  artist: "Chris Brown",
  embed: "https://open.spotify.com/embed/track/3NZJlJemX3mzjf56MqC5ML",
  mode: "international"
},
{
  title: "Yeah!",
  artist: "Usher, Lil Jon e Ludacris",
  embed: "https://open.spotify.com/embed/track/5rb9QrpfcKFHM1EUbSIurX",
  mode: "international"
},
{
  title: "DJ Got Us Fallin' In Love",
  artist: "Usher e Pitbull",
  embed: "https://open.spotify.com/embed/track/4356Typ82hUiFAynbLYbPn",
  mode: "international"
},
{
  title: "OMG",
  artist: "Usher e will.i.am",
  embed: "https://open.spotify.com/embed/track/1bM50INir8voAkVoKuvEUI",
  mode: "international"
},
{
  title: "Timber",
  artist: "Pitbull e Ke$ha",
  embed: "https://open.spotify.com/embed/track/3cHyrEgdyYRjgJKSOiOtcS",
  mode: "international"
},
{
  title: "Hotel Room Service",
  artist: "Pitbull",
  embed: "https://open.spotify.com/embed/track/6Rb0ptOEjBjPPQUlQtQGbL",
  mode: "international"
},
{
  title: "International Love",
  artist: "Pitbull e Chris Brown",
  embed: "https://open.spotify.com/embed/track/62zFEHfAYl5kdHYOivj4BC",
  mode: "international"
},
{
  title: "Give It To Me",
  artist: "Timbaland, Nelly Furtado e Justin Timberlake",
  embed: "https://open.spotify.com/embed/track/0wbDgMuAoy7O7pL3a69uZx",
  mode: "international"
},
{
  title: "SexyBack",
  artist: "Justin Timberlake",
  embed: "https://open.spotify.com/embed/track/0O45fw2L5vsWpdsOdXwNAR",
  mode: "international"
},
{
  title: "Cry Me A River",
  artist: "Justin Timberlake",
  embed: "https://open.spotify.com/embed/track/7Lf7oSEVdzZqTA0kEDSlS5",
  mode: "international"
},
{
  title: "Can't Stop The Feeling!",
  artist: "Justin Timberlake",
  embed: "https://open.spotify.com/embed/track/6JV2JOEocMgcZxYSZelKcc",
  mode: "international"
},
{
  title: "Apologize",
  artist: "Timbaland e OneRepublic",
  embed: "https://open.spotify.com/embed/track/6ucR4KfvsBFWCMVFDvyKKl",
  mode: "international"
},
{
  title: "Secrets",
  artist: "OneRepublic",
  embed: "https://open.spotify.com/embed/track/1NhPKVLsHhFUHIOZ32QnS2",
  mode: "international"
},
{
  title: "Good Life",
  artist: "OneRepublic",
  embed: "https://open.spotify.com/embed/track/6OtCIsQZ64Vs1EbzztvAv4",
  mode: "international"
},
{
  title: "Stereo Hearts",
  artist: "Gym Class Heroes e Adam Levine",
  embed: "https://open.spotify.com/embed/track/0qOnSQQF0yzuPWsXrQ9paz",
  mode: "international"
},
{
  title: "Moves Like Jagger",
  artist: "Maroon 5 e Christina Aguilera",
  embed: "https://open.spotify.com/embed/track/1r299qCKBLgUS9XJ9m1kEx",
  mode: "international"
},
{
  title: "Animals",
  artist: "Maroon 5",
  embed: "https://open.spotify.com/embed/track/3h4T9Bg8OVSUYa6danHeH5",
  mode: "international"
},
{
  title: "Memories",
  artist: "Maroon 5",
  embed: "https://open.spotify.com/embed/track/2b8fOow8UzyDFAE27YhOZM",
  mode: "international"
},
{
  title: "Titanium",
  artist: "David Guetta e Sia",
  embed: "https://open.spotify.com/embed/track/0lHAMNU8RGiIObScrsRgmP",
  mode: "international"
},
{
  title: "Without You",
  artist: "David Guetta e Usher",
  embed: "https://open.spotify.com/embed/track/3UN6cIn3VIyg0z1LCuFSum",
  mode: "international"
},
{
  title: "Where Them Girls At",
  artist: "David Guetta, Flo Rida e Nicki Minaj",
  embed: "https://open.spotify.com/embed/track/7ks6AZmFcm3Y6PGGxGSmlB",
  mode: "international"
},
{
  title: "Lean On",
  artist: "Major Lazer e DJ Snake",
  embed: "https://open.spotify.com/embed/track/1Lim1Py7xBgbAkAys3AGAG",
  mode: "international"
},
{
  title: "Cold Water",
  artist: "Major Lazer e Justin Bieber",
  embed: "https://open.spotify.com/embed/track/6DNtNfH8hXkqOX1sjqmI7p",
  mode: "international"
},
{
  title: "Light It Up",
  artist: "Major Lazer",
  embed: "https://open.spotify.com/embed/track/1pjvlYOMIg1NhGQbM6iwrY",
  mode: "international"
},
{
  title: "Turn Down For What",
  artist: "DJ Snake e Lil Jon",
  embed: "https://open.spotify.com/embed/track/67awxiNHNyjMXhVgsHuIrs",
  mode: "international"
},
{
  title: "Taki Taki",
  artist: "DJ Snake, Selena Gomez, Ozuna e Cardi B",
  embed: "https://open.spotify.com/embed/track/4w8niZpiMy6qz1mntFA5uM",
  mode: "international"
},
{
  title: "Let Me Love You",
  artist: "DJ Snake e Justin Bieber",
  embed: "https://open.spotify.com/embed/track/4pdPtRcBmOSQDlJ3Fk945m",
  mode: "international"
},
{
  title: "Animals",
  artist: "Martin Garrix",
  embed: "https://open.spotify.com/embed/track/0A9mHc7oYUoCECqByV8cQR",
  mode: "international"
},
{
  title: "Scared To Be Lonely",
  artist: "Martin Garrix e Dua Lipa",
  embed: "https://open.spotify.com/embed/track/3ebXMykcMXOcLeJ9xZ17XH",
  mode: "international"
},
{
  title: "In The Name Of Love",
  artist: "Martin Garrix e Bebe Rexha",
  embed: "https://open.spotify.com/embed/track/23L5CiUhw2jV1OIMwthR3S",
  mode: "international"
},
{
  title: "Faded",
  artist: "Alan Walker",
  embed: "https://open.spotify.com/embed/track/698ItKASDavgwZ3WjaWjtz",
  mode: "international"
},
{
  title: "Alone",
  artist: "Alan Walker",
  embed: "https://open.spotify.com/embed/track/3MEYFivt6bilQ9q9mFWZ4g",
  mode: "international"
},
{
  title: "Sing Me To Sleep",
  artist: "Alan Walker",
  embed: "https://open.spotify.com/embed/track/2Fjz5ZC5BvFdCqcnTZ3ilH",
  mode: "international"
},
{
  title: "Sorry",
  artist: "Justin Bieber",
  embed: "https://open.spotify.com/embed/track/09CtPGIpYB4BrO8qb1RGsF",
  mode: "international"
},
{
  title: "What Do You Mean?",
  artist: "Justin Bieber",
  embed: "https://open.spotify.com/embed/track/4B0JvthVoAAuygILe3n4Bs",
  mode: "international"
},
{
  title: "Baby",
  artist: "Justin Bieber e Ludacris",
  embed: "https://open.spotify.com/embed/track/6epn3r7S14KUqlReYr77hA",
  mode: "international"
},
{
  title: "Beauty And A Beat",
  artist: "Justin Bieber e Nicki Minaj",
  embed: "https://open.spotify.com/embed/track/190jyVPHYjAqEaOGmMzdyk",
  mode: "international"
},
{
  title: "Starships",
  artist: "Nicki Minaj",
  embed: "https://open.spotify.com/embed/track/2EBCVPNAG46nbgs6jXPGvv",
  mode: "international"
},
{
  title: "Super Bass",
  artist: "Nicki Minaj",
  embed: "https://open.spotify.com/embed/track/3hlksXnvbKogFdPbpO9vel",
  mode: "international"
},
{
  title: "Anaconda",
  artist: "Nicki Minaj",
  embed: "https://open.spotify.com/embed/track/5eqiMMbaeUZ32Q7sS00H35",
  mode: "international"
},
{
  title: "Black Beatles",
  artist: "Rae Sremmurd e Gucci Mane",
  embed: "https://open.spotify.com/embed/track/6fujklziTHa8uoM5OQSfIo",
  mode: "international"
},
{
  title: "No Type",
  artist: "Rae Sremmurd",
  embed: "https://open.spotify.com/embed/track/4scpF6J5uMBvoh6sFB7EL1",
  mode: "international"
},
{
  title: "No Flex Zone",
  artist: "Rae Sremmurd",
  embed: "https://open.spotify.com/embed/track/2L8cFPItBljPNJgPjTnuIf",
  mode: "international"
},
{
  title: "Trap Queen",
  artist: "Fetty Wap",
  embed: "https://open.spotify.com/embed/track/2d8JP84HNLKhmd6IYOoupQ",
  mode: "international"
},
{
  title: "679",
  artist: "Fetty Wap e Remy Boyz",
  embed: "https://open.spotify.com/embed/track/5NQbUaeTEOGdD6hHcre0dZ",
  mode: "international"
},
{
  title: "Again",
  artist: "Noah Cyrus e XXXTENTACION",
  embed: "https://open.spotify.com/embed/track/2S2od3hT7ceytw7d1pTRuE",
  mode: "international"
},
{
  title: "Panda",
  artist: "Desiigner",
  embed: "https://open.spotify.com/embed/track/5OOkp4U9P9oL23maHFHL1h",
  mode: "international"
},
{
  title: "Broccoli",
  artist: "DRAM e Lil Yachty",
  embed: "https://open.spotify.com/embed/track/7yyRTcZmCiyzzJlNzGC9Ol",
  mode: "international"
},
{
  title: "iSpy",
  artist: "KYLE e Lil Yachty",
  embed: "https://open.spotify.com/embed/track/2EEeOnHehOozLq4aS0n6SL",
  mode: "international"
},
{
  title: "Redbone",
  artist: "Childish Gambino",
  embed: "https://open.spotify.com/embed/track/0wXuerDYiBnERgIpbb3JBR",
  mode: "international"
},
{
  title: "3005",
  artist: "Childish Gambino",
  embed: "https://open.spotify.com/embed/track/2X6b7zLdIxCejd6GqVcQ9M",
  mode: "international"
},
{
  title: "Sweatpants",
  artist: "Childish Gambino",
  embed: "https://open.spotify.com/embed/track/4NvXTrOSsVlCw0bFe3lKY9",
  mode: "international"
},
{
  title: "Pursuit Of Happiness",
  artist: "Kid Cudi",
  embed: "https://open.spotify.com/embed/track/5PX4uS1LqlWEPL69phPVQQ",
  mode: "international"
},
{
  title: "Day 'N' Nite",
  artist: "Kid Cudi",
  embed: "https://open.spotify.com/embed/track/5FEXPoPnzueFJQCPRIrC3c",
  mode: "international"
},
{
  title: "Memories",
  artist: "David Guetta e Kid Cudi",
  embed: "https://open.spotify.com/embed/track/7fLzbEOBOae9lUnOwr7Tse",
  mode: "international"
},
{
  title: "Pumped Up Kicks",
  artist: "Foster The People",
  embed: "https://open.spotify.com/embed/track/7w87IxuO7BDcJ3YUqCyMTT",
  mode: "international"
},
{
  title: "Sit Next To Me",
  artist: "Foster The People",
  embed: "https://open.spotify.com/embed/track/4BdGO1CaObRD4La9l5Zanz",
  mode: "international"
},
{
  title: "Somebody That I Used To Know",
  artist: "Gotye e Kimbra",
  embed: "https://open.spotify.com/embed/track/4wCmqSrbyCgxEXROQE6vtV",
  mode: "international"
},
{
  title: "Some Nights",
  artist: "fun.",
  embed: "https://open.spotify.com/embed/track/67WTwafOMgegV6ABnBQxcE",
  mode: "international"
},
{
  title: "We Are Young",
  artist: "fun. e Janelle Monáe",
  embed: "https://open.spotify.com/embed/track/5rgy6ghBq1eRApCkeUdJXf",
  mode: "international"
},
{
  title: "Shut Up And Dance",
  artist: "WALK THE MOON",
  embed: "https://open.spotify.com/embed/track/4kbj5MwxO1bq9wjT5g9HaA",
  mode: "international"
},
{
  title: "Cake By The Ocean",
  artist: "DNCE",
  embed: "https://open.spotify.com/embed/track/76hfruVvmfQbw0eYn1nmeC",
  mode: "international"
},
{
  title: "Cool",
  artist: "Dua Lipa",
  embed: "https://open.spotify.com/embed/track/2nMOodYNHBAQ3Kc1QNimZU",
  mode: "international"
},
{
  title: "Physical",
  artist: "Dua Lipa",
  embed: "https://open.spotify.com/embed/track/3AzjcOeAmA57TIOr9zF1ZW",
  mode: "international"
},
{
  title: "One Kiss",
  artist: "Calvin Harris e Dua Lipa",
  embed: "https://open.spotify.com/embed/track/7ef4DlsgrMEH11cDZd32M6",
  mode: "international"
},
{
  title: "The Hills",
  artist: "The Weeknd",
  embed: "https://open.spotify.com/embed/track/25khomWgBVamSdKw7hzm3l",
  mode: "international"
},
{
  title: "Chandelier",
  artist: "Sia",
  embed: "https://open.spotify.com/embed/track/4VrWlk8IQxevMvERoX08iC",
  mode: "international"
},
{
  title: "Elastic Heart",
  artist: "Sia",
  embed: "https://open.spotify.com/embed/track/6kwAbEjseqBob48jCus7Sz",
  mode: "international"
},
{
  title: "Royals",
  artist: "Lorde",
  embed: "https://open.spotify.com/embed/track/4SDWMFvYJKtK1QPhIOeZhd",
  mode: "international"
},
{
  title: "Team",
  artist: "Lorde",
  embed: "https://open.spotify.com/embed/track/3G6hD9B2ZHOsgf4WfNu7X1",
  mode: "international"
},
{
  title: "Green Light",
  artist: "Lorde",
  embed: "https://open.spotify.com/embed/track/6ie2Bw3xLj2JcGowOlcMhb",
  mode: "international"
},
{
  title: "Habits (Stay High)",
  artist: "Tove Lo",
  embed: "https://open.spotify.com/embed/track/14OxJlLdcHNpgsm4DRwDOB",
  mode: "international"
},
  {
  title: "It Was A Good Day",
  artist: "Ice Cube",
  embed: "https://open.spotify.com/embed/track/2qOm7ukLyHUXWyR4ZWLwxA",
  mode: "international"
},
{
  title: "You Know How We Do It",
  artist: "Ice Cube",
  embed: "https://open.spotify.com/embed/track/67ncYmW29pNJJY2yXuLPwT",
  mode: "international"
},
{
  title: "Life Is Good",
  artist: "Future e Drake",
  embed: "https://open.spotify.com/embed/track/5yY9lUy8nbvjM1Uyo1Uqoc",
  mode: "international"
},
{
  title: "Cold",
  artist: "Nemzzz",
  embed: "https://open.spotify.com/embed/track/7cwWqQLzXpkalO7EPINC0H",
  mode: "international"
},
{
  title: "All My Life",
  artist: "Lil Durk e J. Cole",
  embed: "https://open.spotify.com/embed/track/6HgWWaMu31KdOpEG5l28BG",
  mode: "international"
},
{
  title: "MY EYES",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/4kjI1gwQZRKNDkw1nI475M",
  mode: "international"
},
{
  title: "Many Men (Wish Death)",
  artist: "50 Cent",
  embed: "https://open.spotify.com/embed/track/5STdMlrBf6pqWiNE7WqxSi",
  mode: "international"
},
{
  title: "Shotta Flow",
  artist: "NLE Choppa, Blueface",
  embed: "https://open.spotify.com/embed/track/0dMmAvh8LRm7GTXht4bMlP",
  mode: "international"
},
{
  title: "Superman",
  artist: "Eminem",
  embed: "https://open.spotify.com/embed/track/4woTEX1wYOTGDqNXuavlRC",
  mode: "international"
},
{
  title: "Hotline Bling",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/6nmz4imkDcmtwMjocAzFSx",
  mode: "international"
},
{
  title: "21 Questions",
  artist: "50 Cent e Nate Dogg",
  embed: "https://open.spotify.com/embed/track/70FCugJxa7XW04Np6iYJdI",
  mode: "international"
},
{
  title: "No Role Modelz",
  artist: "J. Cole",
  embed: "https://open.spotify.com/embed/track/68Dni7IE4VyPkTOH9mRWHr",
  mode: "international"
},
{
  title: "XO TOUR Llif3",
  artist: "Lil Uzi Vert",
  embed: "https://open.spotify.com/embed/track/7GX5flRQZVHRAGd6B4TmDO",
  mode: "international"
},
{
  title: "HUMBLE.",
  artist: "Kendrick Lamar",
  embed: "https://open.spotify.com/embed/track/7KXjTSCq5nL1LoYtL7XAwS",
  mode: "international"
},
{
  title: "Love Me",
  artist: "Lil Wayne, Drake e Future",
  embed: "https://open.spotify.com/embed/track/28sawWzfucjbahooUtyrZx",
  mode: "international"
},
{
  title: "Swimming Pools (Drank)",
  artist: "Kendrick Lamar",
  embed: "https://open.spotify.com/embed/track/6REbwUNlppTfcnV4d4ZoZi",
  mode: "international"
},
{
  title: "Dreamers",
  artist: "Savoir Adore",
  embed: "https://open.spotify.com/embed/track/2BZfNi8kEhMY4jVkCRe2IM",
  mode: "international"
},
{
  title: "Honey",
  artist: "J-Killz The Prince",
  embed: "https://open.spotify.com/embed/track/0jw1CqdedlsLRIESZolO8B",
  mode: "international"
},
{
  title: "Espresso",
  artist: "Sabrina Carpenter",
  embed: "https://open.spotify.com/embed/track/2qSkIjg1o9h3YT9RAgYN75",
  mode: "international"
},
{
  title: "Be My Baby",
  artist: "The Ronettes",
  embed: "https://open.spotify.com/embed/track/2G2YzndIA6jeWFPBXhUjh5",
  mode: "international"
},
  {
  title: "Evidências",
  artist: "Chitãozinho & Xororó",
  embed: "https://open.spotify.com/embed/track/1X95pCQG939KCbJL6yVQgw",
  mode: "brazil"
},
{
  title: "Cheia de Manias",
  artist: "Raça Negra",
  embed: "https://open.spotify.com/embed/track/1wtLEFD3kYHydIrPoB1TPj",
  mode: "brazil"
},
{
  title: "Mina do Condomínio",
  artist: "Seu Jorge",
  embed: "https://open.spotify.com/embed/track/3QA7VF91ehKfoYEDa5wcJb",
  mode: "brazil"
},
{
  title: "Burguesinha",
  artist: "Seu Jorge",
  embed: "https://open.spotify.com/embed/track/35Wfw6eyw39YpOp2lRH11c",
  mode: "brazil"
},
{
  title: "Do Seu Lado",
  artist: "Jota Quest",
  embed: "https://open.spotify.com/embed/track/30Q8BodSWrBwQifVwh2caQ",
  mode: "brazil"
},
{
  title: "Fácil",
  artist: "Jota Quest",
  embed: "https://open.spotify.com/embed/track/5rhijzoJmc7ZdnEgBS58Wh",
  mode: "brazil"
},
{
  title: "Dias Atrás",
  artist: "CPM 22",
  embed: "https://open.spotify.com/embed/track/7hjAhjnMzpMT9vU54w0LYF",
  mode: "brazil"
},
{
  title: "Natasha",
  artist: "Capital Inicial",
  embed: "https://open.spotify.com/embed/track/7KdRrzenHoirvrvp6KHZxh",
  mode: "brazil"
},
{
  title: "Primeiros Erros",
  artist: "Capital Inicial",
  embed: "https://open.spotify.com/embed/track/4oZr3pfUrZtjJzxr0UIPb9",
  mode: "brazil"
},
{
  title: "Pais e Filhos",
  artist: "Legião Urbana",
  embed: "https://open.spotify.com/embed/track/46s6p0tsgRBfzWriIg3w9o",
  mode: "brazil"
},
{
  title: "Que País É Este",
  artist: "Legião Urbana",
  embed: "https://open.spotify.com/embed/track/1bqRtNOcT1QiV1j87IoATA",
  mode: "brazil"
},
{
  title: "Lanterna dos Afogados",
  artist: "Os Paralamas do Sucesso",
  embed: "https://open.spotify.com/embed/track/3uezVXXzZZUCjqPRC9JA6u",
  mode: "brazil"
},
{
  title: "Meu Erro",
  artist: "Os Paralamas do Sucesso",
  embed: "https://open.spotify.com/embed/track/7pn5QXr2LTeGsgHyCaJxDo",
  mode: "brazil"
},
{
  title: "Que Nem Maré",
  artist: "Jorge Vercillo",
  embed: "https://open.spotify.com/embed/track/5F4SvW0GTQVlTUMstJEOyG",
  mode: "brazil"
},
{
  title: "Monalisa",
  artist: "Jorge Vercillo",
  embed: "https://open.spotify.com/embed/track/35lcN4HxxsiwIq6ILSKVSh",
  mode: "brazil"
},
{
  title: "Amor I Love You",
  artist: "Marisa Monte",
  embed: "https://open.spotify.com/embed/track/5nwT95l5rMdQPaydjGh32q",
  mode: "brazil"
},
{
  title: "Ainda Bem",
  artist: "Marisa Monte",
  embed: "https://open.spotify.com/embed/track/43BCxznTSBLcXzu4lJ8KW5",
  mode: "brazil"
},
{
  title: "Velha Infância",
  artist: "Tribalistas",
  embed: "https://open.spotify.com/embed/track/1mSxbLW7fKABfeY4lGpg0E",
  mode: "brazil"
},
{
  title: "Já Sei Namorar",
  artist: "Tribalistas",
  embed: "https://open.spotify.com/embed/track/352FuGmGJClPjojSYjNrXG",
  mode: "brazil"
},
{
  title: "Olhos Coloridos",
  artist: "Sandra de Sá",
  embed: "https://open.spotify.com/embed/track/45XopGhwYSgooiewaZNsSd",
  mode: "brazil"
},
{
  title: "Não Deixe o Samba Morrer",
  artist: "Alcione",
  embed: "https://open.spotify.com/embed/track/5iq4NDi4fznJJRLL1rXNE4",
  mode: "brazil"
},
{
  title: "Você Me Vira a Cabeça",
  artist: "Alcione",
  embed: "https://open.spotify.com/embed/track/4RGRfGjhTxsCkLaHFF90Bq",
  mode: "brazil"
},
{
  title: "Meu Ébano",
  artist: "Alcione",
  embed: "https://open.spotify.com/embed/track/0nmEuK27DMGbYmSdh6NtKB",
  mode: "brazil"
},
{
  title: "Não Existe Amor em SP",
  artist: "Criolo",
  embed: "https://open.spotify.com/embed/track/0rnFlWFOfTRmVQVm28DK09",
  mode: "brazil"
},
{
  title: "Subirusdoistiozin",
  artist: "Criolo",
  embed: "https://open.spotify.com/embed/track/71afMnTecSlbLgUMn71WJm",
  mode: "brazil"
},
{
  title: "Boa Esperança",
  artist: "Emicida",
  embed: "https://open.spotify.com/embed/track/2v3FdNAsIe9rh62DOb4ZIz",
  mode: "brazil"
},
{
  title: "Levanta e Anda",
  artist: "Emicida e Rael",
  embed: "https://open.spotify.com/embed/track/0JSux25Te5HYMSr2D64d02",
  mode: "brazil"
},
{
  title: "Hoje Cedo",
  artist: "Emicida e Pitty",
  embed: "https://open.spotify.com/embed/track/2C9LPYpH9YUgROQDHfRXrU",
  mode: "brazil"
},
{
  title: "Mundo de Ilusões",
  artist: "Maneva",
  embed: "https://open.spotify.com/embed/track/75qBK3SkWqKHym9PxHgD53",
  mode: "brazil"
},
{
  title: "Pisando Descalço",
  artist: "Maneva",
  embed: "https://open.spotify.com/embed/track/4wsQ8QosIoFCIeLuGUPtDW",
  mode: "brazil"
},
{
  title: "SET DJ YURI PEDRADA - TRAVA CHIP",
  artist: "DJ Yuri Pedrada, MC Meno K, MC GDL, MC Jvila, Nilo, Mc Negao Original, MC Paiva, MC Livinho, Mc Ryan SP",
  embed: "https://open.spotify.com/embed/track/65O1EyYSg0Leyf0li6Vzah",
  mode: "brazil"
},
{
  title: "Desenho de Deus",
  artist: "Armandinho",
  embed: "https://open.spotify.com/embed/track/4G17iavwP0xVguOKlwzL0f",
  mode: "brazil"
},
{
  title: "Coração Radiante",
  artist: "Grupo Revelação",
  embed: "https://open.spotify.com/embed/track/1PWpeF2KQQzBjqkJPMqvpJ",
  mode: "brazil"
},
{
  title: "Tá Escrito",
  artist: "Grupo Revelação",
  embed: "https://open.spotify.com/embed/track/0rOQyLZJ9oASgtdoDZgrmK",
  mode: "brazil"
},
{
  title: "Deixa Acontecer",
  artist: "Grupo Revelação",
  embed: "https://open.spotify.com/embed/track/50mawjudhEofTcUIpRmGXr",
  mode: "brazil"
},
{
  title: "Diga Sim pra Mim",
  artist: "Desejo de Menina",
  embed: "https://open.spotify.com/embed/track/74QtGMeYncf3wP6fhg00zb",
  mode: "brazil"
},
{
  title: "Mágica",
  artist: "Calcinha Preta",
  embed: "https://open.spotify.com/embed/track/7AaW6x9Ld7c9JqBuyw6vzB",
  mode: "brazil"
},
{
  title: "Praieiro",
  artist: "Jammil e Uma Noites",
  embed: "https://open.spotify.com/embed/track/20ochCcJRvg7DeruwxvwN4",
  mode: "brazil"
},
{
  title: "Colorir Papel",
  artist: "Jammil e Uma Noites",
  embed: "https://open.spotify.com/embed/track/2Q2fW2yb1bc2UEfkiLQnnh",
  mode: "brazil"
},
{
  title: "Lucidez",
  artist: "Fundo de Quintal",
  embed: "https://open.spotify.com/embed/track/4QifTadpQAdY4039WuojvG",
  mode: "brazil"
},
{
  title: "Ainda Gosto de Você",
  artist: "Sorriso Maroto",
  embed: "https://open.spotify.com/embed/track/6SNYpGHWqeB6IJ2Fm7KmvY",
  mode: "brazil"
},
{
  title: "Futuro Prometido",
  artist: "Sorriso Maroto",
  embed: "https://open.spotify.com/embed/track/1Cn42z1q8r9hGECUFHBzQo",
  mode: "brazil"
},
{
  title: "Assim Você Mata o Papai",
  artist: "Sorriso Maroto",
  embed: "https://open.spotify.com/embed/track/03UlQzmQHLb3fnvfhipq0B",
  mode: "brazil"
}, 
{
  title: "Trem Bala",
  artist: "Ana Vilela",
  embed: "https://open.spotify.com/embed/track/05QeyKGAn4TZrv41tMiD1A",
  mode: "brazil"
},
{
  title: "Você Partiu Meu Coração",
  artist: "Nego do Borel, Wesley Safadão e Anitta",
  embed: "https://open.spotify.com/embed/track/0u8aj0c4IxeVSLTUuuq9V5",
  mode: "brazil"
},
{
  title: "Olha a Explosão",
  artist: "MC Kevinho",
  embed: "https://open.spotify.com/embed/track/6Q4foUefrAyCt8VxJFML56",
  mode: "brazil"
},
{
  title: "Bum Bum Tam Tam",
  artist: "MC Fioti",
  embed: "https://open.spotify.com/embed/track/7KBfjlQ85Fqs2MCCvXSW0c",
  mode: "brazil"
},
{
  title: "Tudo OK",
  artist: "Thiaguinho MT e Mila",
  embed: "https://open.spotify.com/embed/track/4HUZBG98TYbxSR9V1V2DWS",
  mode: "brazil"
},
  {
  title: "Blinding Lights",
  artist: "The Weeknd",
  embed: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b",
  mode: "international"
},
{
  title: "Stairway to Heaven",
  artist: "Led Zeppelin",
  embed: "https://open.spotify.com/embed/track/5CQ30WqJwcep0pYcV4AMNc",
  mode: "international"
},
{
  title: "Dreams",
  artist: "Fleetwood Mac",
  embed: "https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz",
  mode: "international"
},
{
  title: "Sweet Dreams (Are Made of This)",
  artist: "Eurythmics",
  embed: "https://open.spotify.com/embed/track/1TfqLAPs4K3s2rJMoCokcS",
  mode: "international"
},
{
  title: "Take My Breath",
  artist: "The Weeknd",
  embed: "https://open.spotify.com/embed/track/2vgUijXOTRMnWXDtvgMp2b",
  mode: "international"
},
{
  title: "Dilemma",
  artist: "Nelly e Kelly Rowland",
  embed: "https://open.spotify.com/embed/track/0ARK753YaiJbpLUk7z5yIM",
  mode: "international"
},
{
  title: "Hips Don't Lie",
  artist: "Shakira e Wyclef Jean",
  embed: "https://open.spotify.com/embed/track/3ZFTkvIE7kyPt6Nu3PEa7V",
  mode: "international"
},
{
  title: "Whenever, Wherever",
  artist: "Shakira",
  embed: "https://open.spotify.com/embed/track/2lnzGkdtDj5mtlcOW2yRtG",
  mode: "international"
},
{
  title: "Waka Waka (This Time for Africa)",
  artist: "Shakira",
  embed: "https://open.spotify.com/embed/track/6bNB5gxFX6Q87DbQWb8OWZ",
  mode: "international"
},
{
  title: "She Will Be Loved",
  artist: "Maroon 5",
  embed: "https://open.spotify.com/embed/track/7sapKrjDij2fpDVj0GxP66",
  mode: "international"
},
{
  title: "All of Me",
  artist: "John Legend",
  embed: "https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a",
  mode: "international"
},
{
  title: "This Love",
  artist: "Maroon 5",
  embed: "https://open.spotify.com/embed/track/6ECp64rv50XVz93WvxXMGF",
  mode: "international"
},
{
  title: "Payphone",
  artist: "Maroon 5 e Wiz Khalifa",
  embed: "https://open.spotify.com/embed/track/1XGmzt0PVuFgQYYnV2It7A",
  mode: "international"
},
{
  title: "Sugar",
  artist: "Maroon 5",
  embed: "https://open.spotify.com/embed/track/5d6Mjuu2uCGRPYpFjGpCX5",
  mode: "international"
},
{
  title: "Maps",
  artist: "Maroon 5",
  embed: "https://open.spotify.com/embed/track/4gbVRS8gloEluzf0GzDOFc",
  mode: "international"
},
{
  title: "Vampire",
  artist: "Olivia Rodrigo",
  embed: "https://open.spotify.com/embed/track/1kuGVB7EU95pJObxwvfwKS",
  mode: "international"
},
{
  title: "Deja Vu",
  artist: "Olivia Rodrigo",
  embed: "https://open.spotify.com/embed/track/61KpQadow081I2AsbeLcsb",
  mode: "international"
},
{
  title: "Traitor",
  artist: "Olivia Rodrigo",
  embed: "https://open.spotify.com/embed/track/5CZ40GBx1sQ9agT82CLQCT",
  mode: "international"
},
{
  title: "Unwritten",
  artist: "Natasha Bedingfield",
  embed: "https://open.spotify.com/embed/track/3U5JVgI2x4rDyHGObzJfNf",
  mode: "international"
},
{
  title: "Pocketful of Sunshine",
  artist: "Natasha Bedingfield",
  embed: "https://open.spotify.com/embed/track/1uigwk5hNV84zRd5YQQRTk",
  mode: "international"
},
{
  title: "I Kissed a Girl",
  artist: "Katy Perry",
  embed: "https://open.spotify.com/embed/track/1pXrR5Y9OgcIV2JEAl2lCB",
  mode: "international"
},
{
  title: "Hot N Cold",
  artist: "Katy Perry",
  embed: "https://open.spotify.com/embed/track/1TEjSXPdAakDotj2Wji3PU",
  mode: "international"
},
{
  title: "E.T.",
  artist: "Katy Perry e Kanye West",
  embed: "https://open.spotify.com/embed/track/36ux3YuUsGTWPT8fXclS45",
  mode: "international"
},
{
  title: "Wide Awake",
  artist: "Katy Perry",
  embed: "https://open.spotify.com/embed/track/5JLv62qFIS1DR3zGEcApRt",
  mode: "international"
},
{
  title: "Someone Like You",
  artist: "Adele",
  embed: "https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB",
  mode: "international"
},
{
  title: "Set Fire to the Rain",
  artist: "Adele",
  embed: "https://open.spotify.com/embed/track/73CMRj62VK8nUS4ezD2wvi",
  mode: "international"
},
{
  title: "Rumour Has It",
  artist: "Adele",
  embed: "https://open.spotify.com/embed/track/2A73XBDBQgmdXO8VsXPWIs",
  mode: "international"
},
{
  title: "We Found Love",
  artist: "Rihanna e Calvin Harris",
  embed: "https://open.spotify.com/embed/track/6qn9YLKt13AGvpq9jfO8py",
  mode: "international"
},
{
  title: "Only Girl (In The World)",
  artist: "Rihanna",
  embed: "https://open.spotify.com/embed/track/0AH6WMe3OlAlUb5miXt2FQ",
  mode: "international"
},
{
  title: "Disturbia",
  artist: "Rihanna",
  embed: "https://open.spotify.com/embed/track/2VOomzT6VavJOGBeySqaMc",
  mode: "international"
},
{
  title: "S&M",
  artist: "Rihanna",
  embed: "https://open.spotify.com/embed/track/0C4ejWmOTMv8vuYj85mf8m",
  mode: "international"
},
{
  title: "When I Was Your Man",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/0nJW01T7XtvILxQgC5J7Wh",
  mode: "international"
},
{
  title: "Marry You",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/6SKwQghsR8AISlxhcwyA9R",
  mode: "international"
},
{
  title: "Talking to the Moon",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/161DnLWsx1i3u1JT05lzqU",
  mode: "international"
},
{
  title: "Finesse",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/5XMkENs3GfeRza8MfVAhjK",
  mode: "international"
},
{
  title: "Photograph",
  artist: "Ed Sheeran",
  embed: "https://open.spotify.com/embed/track/6fxVffaTuwjgEk5h9QyRjy",
  mode: "international"
},
{
  title: "Castle on the Hill",
  artist: "Ed Sheeran",
  embed: "https://open.spotify.com/embed/track/6PCUP3dWmTjcTtXY02oFdT",
  mode: "international"
},
{
  title: "Galway Girl",
  artist: "Ed Sheeran",
  embed: "https://open.spotify.com/embed/track/0afhq8XCExXpqazXczTSve",
  mode: "international"
},
{
  title: "Breaking the Habit",
  artist: "Linkin Park",
  embed: "https://open.spotify.com/embed/track/6n8TMVyFKoUmDc4apxceRD",
  mode: "international"
},
{
  title: "New Divide",
  artist: "Linkin Park",
  embed: "https://open.spotify.com/embed/track/5wmkQbOUTLjnDsdLeNgtO3",
  mode: "international"
},
{
  title: "Burn",
  artist: "Ellie Goulding",
  embed: "https://open.spotify.com/embed/track/2GgxS8bUT5G25QJTsfSv0R",
  mode: "international"
},
{
  title: "Lights",
  artist: "Ellie Goulding",
  embed: "https://open.spotify.com/embed/track/0LRCcpSgeozipxPpRg5wzx",
  mode: "international"
},
{
  title: "On Top of the World",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/213x4gsFDm04hSqIUkg88w",
  mode: "international"
},
{
  title: "Whatever It Takes",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/6Qn5zhYkTa37e91HC1D7lb",
  mode: "international"
},
{
  title: "Bones",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/0HqZX76SFLDz2aW8aiqi7G",
  mode: "international"
},
{
  title: "Oops!...I Did It Again",
  artist: "Britney Spears",
  embed: "https://open.spotify.com/embed/track/6naxalmIoLFWR0siv8dnQQ",
  mode: "international"
},
  {
  title: "Ebony Eyes",
  artist: "Rick James",
  embed: "https://open.spotify.com/embed/track/71JkyCi11ETSz58jhgg2YE",
  mode: "international"
},
{
    title: "God Is",
    artist: "Kanye West",
    embed: "https://open.spotify.com/embed/track/6xRWoYwfwIKnT8bQGzKbxR",
    mode: "international"
},
  {
    title: "One Dance ft. Wizkid & Kyla",
    artist: "Drake",
    embed: "https://open.spotify.com/embed/track/1zi7xx7UVEFkmKfv06H8x0",
    mode: "international"
},
  {
    title: "Seu Astral (Ao Vivo)",
    artist: "Jorge & Mateus",
    embed: "https://open.spotify.com/embed/track/2TE9rkhJYDctxgzak0AnSb",
    mode: "brazil"
  },
  {
    title: "Move",
    artist: "Keinemusik",
    embed: "https://open.spotify.com/embed/track/1BJJbSX6muJVF2AK7uH1x4",
    mode: "international"
},
  {
    title: "Cardigan",
    artist: "Taylor Swift",
    embed: "https://open.spotify.com/embed/track/4R2kfaDFhslZEMJqAFNpdd",
    mode: "international"
},
  {
    title: "Lindo Balão Azul",
    artist: "Moraes Moreira, Baby Consuelo, Ricardo Graça Mello, Bebel e Aretha",
    embed: "https://open.spotify.com/embed/track/5x8aaVV1gNm7PxOZZtM38H",
    mode: "brazil"
  },
  {
    title: "YMCA",
    artist: "Village People",
    embed: "https://open.spotify.com/embed/track/3ypMsqUwfNFMiooMLVHfkp",
    mode: "international"
},
  {
    title: "The Final Countdown",
    artist: "Europe",
    embed: "https://open.spotify.com/embed/track/3MrRksHupTVEQ7YbA0FsZK",
    mode: "international"
},
  {
    title: "I'm Still Standing",
    artist: "Elton John",
    embed: "https://open.spotify.com/embed/track/1jDJFeK9x3OZboIAHsY9k2",
    mode: "international"
},
  {
    title: "SPIT IN MY FACE!",
    artist: "ThxSoMch",
    embed: "https://open.spotify.com/embed/track/1N8TTK1Uoy7UvQNUazfUt5",
    mode: "international"
},
  {
    title: "Axel F",
    artist: "Crazy Frog",
    embed: "https://open.spotify.com/embed/track/0Bo5fjMtTfCD8vHGebivqc",
    mode: "international"
},
  {
    title: "Gangnam Style",
    artist: "PSY",
    embed: "https://open.spotify.com/embed/track/03UrZgTINDqvnUMbbIMhql",
    mode: "international"
},
  {
    title: "Heads Will Roll (A-Trak Remix)",
    artist: "Yeah Yeah Yeahs",
    embed: "https://open.spotify.com/embed/track/5bs8OXiOt4BPF2FAnRFP1u",
    mode: "international"
},
  {
    title: "Play Hard (feat. Ne-Yo & Akon)",
    artist: "David Guetta",
    embed: "https://open.spotify.com/embed/track/5YPMEOJ58kfl56VHxTgwx3",
    mode: "international"
},
  {
    title: "Gasolina",
    artist: "Daddy Yankee",
    embed: "https://open.spotify.com/embed/track/5YoITs1m0q8UOQ4AW7N5ga",
    mode: "international"
},
  {
    title: "HAY LUPITA",
    artist: "Lomiiel",
    embed: "https://open.spotify.com/embed/track/5jFA0f4ZDGLbQP4nxzL8D4",
    mode: "international"
},
  {
    title: "Y Que Fue?",
    artist: "Don Miguelo",
    embed: "https://open.spotify.com/embed/track/5UcVIU1tsbN7ZsOSpR8AFD",
    mode: "international"
},
  {
    title: "See You Again (part. Charlie Puth)",
    artist: "Wiz Khalifa",
    embed: "https://open.spotify.com/embed/track/2JzZzZUQj3Qff7wapcbKjc",
    mode: "international"
},
  {
    title: "Replay",
    artist: "Iyaz",
    embed: "https://open.spotify.com/embed/track/4E5P1XyAFtrjpiIxkydly4",
    mode: "international"
},
  {
    title: "Am I Wrong",
    artist: "Nico & Vinz",
    embed: "https://open.spotify.com/embed/track/1fidCEsYlaVE3pHwKCvpFZ",
    mode: "international"
},
  {
    title: "Beautiful Girls",
    artist: "Sean Kingston",
    embed: "https://open.spotify.com/embed/track/1hGy2eLcmC8eKx7qr1tOqx",
    mode: "international"
},
  {
    title: "Promiscuous (part. Timbaland)",
    artist: "Nelly Furtado",
    embed: "https://open.spotify.com/embed/track/2gam98EZKrF9XuOkU13ApN",
    mode: "international"
},
  {
    title: "Mirrors",
    artist: "Justin Timberlake",
    embed: "https://open.spotify.com/embed/track/4rHZZAmHpZrA3iH5zx8frV",
    mode: "international"
},
  {
    title: "Say My Name",
    artist: "Destiny's Child",
    embed: "https://open.spotify.com/embed/track/7H6ev70Weq6DdpZyyTmUXk",
    mode: "international"
},
{
    title: "Give Me Everything (part. Ne-Yo, Afrojack e Nayer)",
    artist: "Pitbull",
    embed: "https://open.spotify.com/embed/track/4QNpBfC0zvjKqPJcyqBy9W",
    mode: "international"
},
  {
    title: "Diamonds",
    artist: "Rihanna",
    embed: "https://open.spotify.com/embed/track/6O20JhBJPePEkBdrB5sqRx",
    mode: "international"
},
  {
    title: "Summer",
    artist: "Calvin Harris",
    embed: "https://open.spotify.com/embed/track/6YUTL4dYpB9xZO5qExPf05",
    mode: "international"
},
{
    title: "Good Feeling",
    artist: "Flo Rida",
    embed: "https://open.spotify.com/embed/track/3NcO4jGK1Opb5ea0mYLpxb",
    mode: "international"
},
{
    title: "The Lazy Song",
    artist: "Bruno Mars",
    embed: "https://open.spotify.com/embed/track/386RUes7n1uM1yfzgeUuwp",
    mode: "international"
  },
  {
    title: "Rude",
    artist: "MAGIC!",
    embed: "https://open.spotify.com/embed/track/6RtPijgfPKROxEzTHNRiDp",
    mode: "international"
},
  {
    title: "Call Me Maybe",
    artist: "Carly Rae Jepsen",
    embed: "https://open.spotify.com/embed/track/20I6sIOMTCkB6w7ryavxtO",
    mode: "international"
},
  {
    title: "What Makes You Beautiful",
    artist: "One Direction",
    embed: "https://open.spotify.com/embed/track/4cluDES4hQEUhmXj6TXkSo",
    mode: "international"
},
{
  title: "Don't Matter",
  artist: "Akon",
  embed: "https://open.spotify.com/embed/track/6Rf0WOY4eBHPKRu4tiMQ5c",
  mode: "international"
},
  {
    title: "Right Round (part. Ke$ha)",
    artist: "Flo Rida",
    embed: "https://open.spotify.com/embed/track/3GpbwCm3YxiWDvy29Uo3vP",
    mode: "international"
},
{
    title: "One Time",
    artist: "Justin Bieber",
    embed: "https://open.spotify.com/embed/track/6eDApnV9Jdb1nYahOlbbUh",
    mode: "international"
},
{
  title: "My Humps",
  artist: "The Black Eyed Peas",
  embed: "https://open.spotify.com/embed/track/20jYtEun4dUdYZ9foaOC48",
  mode: "international"
},
{
  title: "Kiss Me Thru The Phone",
  artist: "Soulja Boy Tell'em e Sammie",
  embed: "https://open.spotify.com/embed/track/2q4rjDy9WhaN3o9MvDbO21",
  mode: "international"
},
{
  title: "Say It Right",
  artist: "Nelly Furtado",
  embed: "https://open.spotify.com/embed/track/2aI21FnmY7TJVKeMaoQZ0t",
  mode: "international"
},
{
  title: "My Boo",
  artist: "USHER",
  embed: "https://open.spotify.com/embed/track/68vgtRHr7iZHpzGpon6Jlo",
  mode: "international"
},
{
  title: "Smack That",
  artist: "Akon",
  embed: "https://open.spotify.com/embed/track/1pcOACWV5tnKt3bhvtLP82",
  mode: "international"
},
{
  title: "Hit Em Up",
  artist: "2Pac",
  embed: "https://open.spotify.com/embed/track/2tF2gNW1JDXYW8IYUkpaYX",
  mode: "international"
},
{
  title: "P.I.M.P.",
  artist: "50 Cent",
  embed: "https://open.spotify.com/embed/track/3G0yz3DZn3lfraledmBCT0",
  mode: "international"
},
{
  title: "Low",
  artist: "Flo Rida",
  embed: "https://open.spotify.com/embed/track/0CAfXk7DXMnon4gLudAp7J",
  mode: "international"
},
{
  title: "Not Like Us",
  artist: "Kendrick Lamar",
  embed: "https://open.spotify.com/embed/track/6AI3ezQ4o3HUoP6Dhudph3",
  mode: "international"
},
{
  title: "tv off",
  artist: "Kendrick Lamar",
  embed: "https://open.spotify.com/embed/track/0aB0v4027ukVziUGwVGYpG",
  mode: "international"
},
{
  title: "Bank Account",
  artist: "21 Savage",
  embed: "https://open.spotify.com/embed/track/5eqK0tbzUPo2SoeZsov04s",
  mode: "international"
},
{
  title: "Work",
  artist: "Rihanna e Drake",
  embed: "https://open.spotify.com/embed/track/72TFWvU3wUYdUuxejTTIzt",
  mode: "international"
},
{
  title: "In My Feelings",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/2G7V7zsVDxg1yRsu7Ew9RJ",
  mode: "international"
},
{
  title: "Better Now",
  artist: "Post Malone",
  embed: "https://open.spotify.com/embed/track/7dt6x5M1jzdTEt8oCbisTK",
  mode: "international"
},
{
  title: "FE!N",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/42VsgItocQwOQC3XWZ8JNA",
  mode: "international"
},
{
  title: "20 Min",
  artist: "Lil Uzi Vert",
  embed: "https://open.spotify.com/embed/track/0uxSUdBrJy9Un0EYoBowng",
  mode: "international"
},
{
  title: "This Is America",
  artist: "Childish Gambino",
  embed: "https://open.spotify.com/embed/track/0b9oOr2ZgvyQu88wzixux9",
  mode: "international"
},
{
  title: "Thrift Shop",
  artist: "Macklemore & Ryan Lewis",
  embed: "https://open.spotify.com/embed/track/1CmUZGtH29Kx36C1Hleqlz",
  mode: "international"
},
{
  title: "Chill Bill",
  artist: "Rob $tone, J. Davi$ e Spooks",
  embed: "https://open.spotify.com/embed/track/5uDASfU19gDxSjW8cnCaBp",
  mode: "international"
},
{
  title: "See You Again",
  artist: "Tyler, The Creator e Kali Uchis",
  embed: "https://open.spotify.com/embed/track/7KA4W4McWYRpgf0fWsJZWB",
  mode: "international"
},
{
  title: "Murder on My Mind",
  artist: "YNW Melly",
  embed: "https://open.spotify.com/embed/track/7eBqSVxrzQZtK2mmgRG6lC",
  mode: "international"
},
{
  title: "The Box",
  artist: "Roddy Ricch",
  embed: "https://open.spotify.com/embed/track/0nbXyq5TXYPCO7pr3N8S4I",
  mode: "international"
},
{
  title: "24K Magic",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/6b8Be6ljOzmkOmFslEb23P",
  mode: "international"
},
{
  title: "SICKO MODE",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/2xLMifQCjDGFmkHkpNLD9h",
  mode: "international"
},
{
  title: "Ransom",
  artist: "Lil Tecca",
  embed: "https://open.spotify.com/embed/track/1lOe9qE0vR9zwWQAOk6CoO",
  mode: "international"
},
{
  title: "Feel So Close",
  artist: "Calvin Harris",
  embed: "https://open.spotify.com/embed/track/1gihuPhrLraKYrJMAEONyc",
  mode: "international"
},
{
  title: "I Gotta Feeling",
  artist: "The Black Eyed Peas",
  embed: "https://open.spotify.com/embed/track/4kLLWz7srcuLKA7Et40PQR",
  mode: "international"
},
{
  title: "Club Can't Handle Me",
  artist: "Flo Rida e David Guetta",
  embed: "https://open.spotify.com/embed/track/6ebkx7Q5tTxrCxKq4GYj0Y",
  mode: "international"
},
  {
    title: "SET DO JAPA NK 2.0",
    artist: "DJ Japa NK, MC Ryan SP, MC Meno K, Mc IG, MC LUUKY, Mc Jacaré, MC Rodrigo do CN, MC GH do 7, Mc Lele JP, MC Jvila e Oruam",
    embed: "https://open.spotify.com/embed/track/1JZDwJgE9VSC0V2GR66z63",
    mode: "brazil"
  },
  {
    title: "Será",
    artist: "Legião Urbano",
    embed: "https://open.spotify.com/embed/track/7hkQhMFq4EOTYwX3I7cgmA",
    mode: "brazil"
  },
  {
    title: "Retrato de um Playboy (Part II)",
    artist: "Gabriel O Pensador",
    embed: "https://open.spotify.com/embed/track/3u4wX6aBX6GwGNPUnKlnQa",
    mode: "brazil"
  },
  {
    title: "Cachimbo da Paz (part. Lulu Santos)",
    artist: "Gabriel O Pensador",
    embed: "https://open.spotify.com/embed/track/7E1duSMvHGUcYRgwrMZOUf",
    mode: "brazil"
  },
  {
    title: "Mega Funk Retro Apague a Luz",
    artist: "DJ Lukinha Mix",
    embed: "https://open.spotify.com/embed/track/3eIIfHsuZGBfFxXWN8qPTj",
    mode: "brazil"
  },
  {
    title: "Mimosa 2000",
    artist: "Furacão 2000 e Nyasia",
    embed: "https://open.spotify.com/embed/track/79bWkyd08EFDO0ZZuu7IRT",
    mode: "brazil"
  },
  {
    title: "MTG NA IMAGINAÇÃO",
    artist: "DJ Topo e Mc Livinho",
    embed: "https://open.spotify.com/embed/track/4jUZymsR3lkia9wkP0o9cX",
    mode: "brazil"
  },
  {
    title: "Aquarela Luz",
    artist: "Dada Yute, Matuê e Rael",
    embed: "  https://open.spotify.com/embed/track/5XTShiHeVnUbzSVNRRFvfV",
    mode: "brazil"
  },
  {
    title: "Automotivo Fenomenal",
    artist: "Mc Gw, Mc Vuk Vuk e Dj Novato",
    embed: "https://open.spotify.com/embed/track/6xCFDuTRxGdpNtZ2K14ig3",
    mode: "brazil"
  },
  {
    title: "Senta em Mim Xerecão",
    artist: "Mc Magrinho",
    embed: "https://open.spotify.com/embed/track/0Y2CUllnYmwSPTKipZ5ddn",
    mode: "brazil"
  },
  {
    title: "A Bomba",
    artist: "Braga Boys",
    embed: "https://open.spotify.com/embed/track/1syj5noYd0GUqHflMH6zda",
    mode: "brazil"
  },
  {
    title: "Balacubaco",
    artist: "Parangolé",
    embed: "https://open.spotify.com/embed/track/3bq2X23gJxuckrM9WD0lQS",
    mode: "brazil"
  },
  {
    title: "Liga Da Justiça (Mulher Maravilha)",
    artist: "Levanóiz",
    embed: "https://open.spotify.com/embed/track/5WliTzLN1oOqURqcj0P7QZ",
    mode: "brazil"
  },
  {
    title: "Vidrado em Você",
    artist: "Dj Guuga e Mc Livinho",
    embed: "https://open.spotify.com/embed/track/1HJU78CRk4vxvjE5Cs1BCt",
    mode: "brazil"
  },
  {
    title: "Medley Muído de Vaquejada",
    artist: "felipe amorim, Xand Avião, Zé Vaqueiro e Talita Mel",
    embed: "https://open.spotify.com/embed/track/7pzD7EudQxP4EhT5UeQjc7",
    mode: "brazil"
  },
  {
    title: "Fraquinha",
    artist: "O Kannalha",
    embed: "https://open.spotify.com/embed/track/7fQvNeYw99wpPTi0Yzs3o7",
    mode: "brazil"
  },
  {
    title: "Garupa 2",
    artist: "Mcs Nando and Luanzinho",
    embed: "https://open.spotify.com/embed/track/4f0YpKAxEnlmfGSmrKVdHn",
    mode: "brazil"
  },
  {
    title: "Rap Do Silva",
    artist: "Bob Rum e DJ Marlboro",
    embed: "https://open.spotify.com/embed/track/0fXOs5kxjG7QHtow1BeY6H",
    mode: "brazil"
  },
  {
    title: "São Paulo",
    artist: "Mc Daleste",
    embed: "https://open.spotify.com/embed/track/6ecZbOFr2YoSHBWIqVRNoo",
    mode: "brazil"
  },
  {
    title: "Nunca vendeu maconha",
    artist: "Mc Daleste",
    embed: "https://open.spotify.com/embed/track/5f4f4VapEEM9vr3mbXxj2F",
    mode: "brazil"
  },
  {
    title: "Ai Se Eu Te Pego",
    artist: "Michel Teló",
    embed: "https://open.spotify.com/embed/track/0INaMqjJJe1BZpnWuCxDzt",
    mode: "brazil"
  },
  {
    title: "Tua Ex É uma Delícia",
    artist: "Anderson Neiff",
    embed: "https://open.spotify.com/embed/track/77ktPgR21JTA59L1R7NQn9",
    mode: "brazil"
  },
  {
    title: "Me Namora",
    artist: "Edu Ribeiro",
    embed: "https://open.spotify.com/embed/track/2u5Jzgg0h3XgXwKSv7W5NK",
    mode: "brazil"
  },
  {
    title: "Sonhar",
    artist: "MC Gui",
    embed: "https://open.spotify.com/embed/track/3dQ0WPEYoeJkL9ChiFRSx6",
    mode: "brazil"
  },
  {
    title: "Amor e Fé (Acústico)",
    artist: "Hungria",
    embed: "https://open.spotify.com/embed/track/5ra6CI0pEzqjxPEZeBz0d7",
    mode: "brazil"
  },
  {
    title: "V de Vilão",
    artist: "Matuê",
    embed: "https://open.spotify.com/embed/track/7pMfMzfYSTbNxj5lJEbQIp",
    mode: "brazil"
  },
  {
    title: "Abbot - Visão de Futuro",
    artist: "Valhalla Records",
    embed: "https://open.spotify.com/embed/track/2RjvQychgHPcxpghmP2p9s",
    mode: "brazil"
  },
  {
    title: "Matuê - Isso é Sério",
    artist: "Brandão85 e Matuê",
    embed: "https://open.spotify.com/embed/track/3Sa2gVQioE31DcG4nKNDqD",
    mode: "brazil"
  },
  {
    title: "Mantém o Pique",
    artist: "Neckklace, Ryu, The Runner e Salve Crazy",
    embed: "https://open.spotify.com/embed/track/4Fd1cs4q4oA95DmqiPSXhO",
    mode: "brazil"
  },
  {
    title: "Sei Lá (Papatracks #7)",
    artist: "Choji e Lil Gabi",
    embed: "https://open.spotify.com/embed/track/4vi7Pd3Zr7EuEiHQ91hP1f",
    mode: "brazil"
  },
  {
    title: "Haja Amor",
    artist: "Luiz Caldas",
    embed: "https://open.spotify.com/embed/track/07aDFrAVLD02sKGzlZby46",
    mode: "brazil"
  },
  {
    title: "Festa no Apê (Dragostea Din Tei) (Radio Version)",
    artist: "Latino",
    embed: "https://open.spotify.com/embed/track/1pfcCB2wjEZwi9MoexalcM",
    mode: "brazil"
  },
  {
    title: "Uni, Duni, Tê",
    artist: "Trem Da Alegria E The Fevers",
    embed: "https://open.spotify.com/embed/track/5wn2ux0180ZBKhwHaiUoeG",
    mode: "brazil"
  },
  {
    title: "Tente Outra Vez",
    artist: "Raul Seixas",
    embed: "https://open.spotify.com/embed/track/6YXOsfhu4fDWcHV14tcF3x",
    mode: "brazil"
  },
  {
    title: "1406",
    artist: "Mamonas Assassinas",
    embed: "https://open.spotify.com/embed/track/0TXRO7qVCw0UOSkCPxWvUM",
    mode: "brazil"
  },
  {
    title: "O Descobridor Dos Sete Mares",
    artist: "Tim Maia",
    embed: "https://open.spotify.com/embed/track/6wpDQGn3Gl0j9Wt6D6mYvQ",
    mode: "brazil"
  },
  {
    title: "Superfantastico (Super Fantastico) (part. Djavan)",
    artist: "A Turma Do Balão Mágico",
    embed: "https://open.spotify.com/embed/track/6DyZkdhsIpSqamQRHxDnpO",
    mode: "brazil"
  },
  {
    title: "Exagerado",
    artist: "Cazuza",
    embed: "https://open.spotify.com/embed/track/4d0DpU7Odiv0ztvX2GxJlk",
    mode: "brazil"
  },
  {
    title: "Menina Veneno",
    artist: "Ritchie",
    embed: "https://open.spotify.com/embed/track/6qlb3j0zGqEe6uWJpQZGxP",
    mode: "brazil"
  },
  {
    title: "Whisky a Go-Go",
    artist: "Roupa Nova",
    embed: "https://open.spotify.com/embed/track/2BnJUYbPtL3yauZKmay0ko",
    mode: "brazil"
  },
  {
    title: "He-Man",
    artist: "Trem Da Alegria",
    embed: "https://open.spotify.com/embed/track/6RjZL1N5mSKmbfCIVakSSM",
    mode: "brazil"
  },
  {
    title: "Vira-Vira",
    artist: "Mamonas Assassinas",
    embed: "https://open.spotify.com/embed/track/2XGRcNVv7uJozHCRLl7SG8",
    mode: "brazil"
  },
  {
    title: "Pelados Em Santos",
    artist: "Mamonas Assassinas",
    embed: "https://open.spotify.com/embed/track/2iJpjciYl8vfQbb543b5Pb",
    mode: "brazil"
  },
  {
    title: "Marolento",
    artist: "Puterrier, Borges, Mainstreet, Heavy Baile, Leo Justi e Pedro Bala",
    embed: "https://open.spotify.com/embed/track/6qylu0VNKUfKiVi88WL3Ci",
    mode: "brazil"
  },
  {
    title: "Baile de Favela",
    artist: "Mc João e DJ R7",
    embed: "https://open.spotify.com/embed/track/5nwkZfrwFGehnwYA1Z664w",
    mode: "brazil"
  },
  {
    title: "Putaria 2000",
    artist: "Puterrier",
    embed: "https://open.spotify.com/embed/track/5Qjz1w6gyWje58AK2u0IMV",
    mode: "brazil"
  },
  {
    title: "MONTAGEM ANOS 2000 (part. Mc Tigrão e Mc Barbie)",
    artist: "DJ Arana, MC Maneirinho e MC Luan",
    embed: "https://open.spotify.com/embed/track/1O9I2QajEqi6IcmFyWgRfq",
    mode: "brazil"
  },
  {
    title: "Eu So Comi Ela uma Vez",
    artist: "Dj VN Maestro e MC G DS",
    embed: "https://open.spotify.com/embed/track/7eoRm37Ta1jvGMiMRfOQoa",
    mode: "brazil"
  },
  {
    title: "Luxúria (part. Matuê)",
    artist: "Xamã, Neo Beats e Bagua Records",
    embed: "https://open.spotify.com/embed/track/5kuUOpHZlZjL8b7HXkxRsm",
    mode: "brazil"
  },
  {
    title: "Um Pedido",
    artist: "Hungria",
    embed: "https://open.spotify.com/embed/track/3CgZi8DMUftJHK6WL2gKc1",
    mode: "brazil"
  },
  {
    title: "Hylander (part. Somynem.grin)",
    artist: "Abbot",
    embed: "https://open.spotify.com/embed/track/3sOcmmmWB7dqyziUVLXpTi",
    mode: "brazil"
  },
  {
    title: "ME POSTOU NO DAILY - FESTA DO BIG G",
    artist: "MC GP, Mc Lele JP, DJ DAVI DOGDOG e DJ Andrabeat",
    embed: "https://open.spotify.com/embed/track/4ATO632UaFTJltxCbfBpHI",
    mode: "brazil"
  },
  {
    title: "Eternos Alunos (part. MC HARIEL e MC DON JUAN)",
    artist: "MC PH",
    embed: "https://open.spotify.com/embed/track/6CDIbxHbmlFVxe3mFNMlkp",
    mode: "brazil"
  },
  {
    title: "22 Meu Vulgo (part. Ajaxx, Gigant e Goldgrain)",
    artist: "Oruam",
    embed: "https://open.spotify.com/embed/track/2ytGRxYdpQ5o1dUfrA33pA",
    mode: "brazil"
  },
  {
    title: "Posso Até Não Te Dar Flores (part. DJ DAVI DOGDOG)",
    artist: "DJ Japa NK, Mc Meno K, Mc Ryan SP e Mc Jacaré",
    embed: "https://open.spotify.com/embed/track/4tYCyoSpv0Ujpfwcneb02l",
    mode: "brazil"
  },
  {
    title: "Ilusão (Cracolândia) (part. Mc Davi, MC Ryan SP e Salvador Da Rima)",
    artist: "MC Hariel, Alok e Djay W",
    embed: "https://open.spotify.com/embed/track/6WXglvTFRmjlHHhgjYMNif",
    mode: "brazil"
  },
  {
    title: "Jetski",
    artist: "Samp MC",
    embed: "https://open.spotify.com/embed/track/0jPVcDk1PoqRlsb3EylQc6",
    mode: "brazil"
  },
  {
    title: "Renasci das Cinzas",
    artist: "Mc Daniel, Mc Paulin da Capital e OGBEATZZ",
    embed: "https://open.spotify.com/embed/track/2PwjlwWQFbOunQWt1raAW9",
    mode: "brazil"
  },
  {
    title: "Kallidade",
    artist: "Kalli e NaBuscaDoOuro",
    embed: "https://open.spotify.com/embed/track/2pwQMzlHOxY2EmbOfAo0HM",
    mode: "brazil"
  },
  {
    title: "Fim de Semana no Rio",
    artist: "Teto",
    embed: "https://open.spotify.com/embed/track/7afaZ37wJJL6880z1NRgJS",
    mode: "brazil"
  },
  {
    title: "4Tal",
    artist: "Matuê e Teto",
    embed: "https://open.spotify.com/embed/track/6OcZP4rUfuxms2r8Mwx5BQ",
    mode: "brazil"
  },
  {
    title: "A Última Dança",
    artist: "Matuê",
    embed: "https://open.spotify.com/embed/track/6ifISefylcgPQksE0gmcVY",
    mode: "brazil"
  },
  {
    title: "Flow Espacial",
    artist: "Teto, WIU e Matuê",
    embed: "https://open.spotify.com/embed/track/4qDT0BeJ7BjatrN9k8AvB4",
    mode: "brazil"
  },
  {
    title: "JAPONÊS",
    artist: "Brandão85 e Matuê",
    embed: "https://open.spotify.com/embed/track/6JH5wCoto58vgqa61jvazc",
    mode: "brazil"
  },
  {
    title: "Shake It Bololô",
    artist: "AOM",
    embed: "https://open.spotify.com/embed/track/07SbZjKytPqD7X4TtUjIeZ",
    mode: "brazil"
  },
  {
    title: "Cacos De Vidro (sample: Esperar pra Ver) (part. Evinha)",
    artist: "BK e Kolo",
    embed: "https://open.spotify.com/embed/track/7hgKeJgEQyjl6JcpudzvzU",
    mode: "brazil"
  },
  {
    title: "A Dança",
    artist: "Gilberto Gil e MC Hariel",
    embed: "https://open.spotify.com/embed/track/3i1JavmShRKVqPKBUja1PG",
    mode: "brazil"
  },
  {
    title: "Dubai",
    artist: "Hungria",
    embed: "https://open.spotify.com/embed/track/16Ij1j3ZawPQ2vxsnusKLY",
    mode: "brazil"
  },
  {
    title: "Estilo Cachorro",
    artist: "Racionais Mc's",
    embed: "https://open.spotify.com/embed/track/2tR8iLdCeYhVcyPZvN6T7X",
    mode: "brazil"
  },
  {
    title: "That's My Way (part. Seu Jorge e Leon Mobley)",
    artist: "Edi Rock e Bagua Records",
    embed: "https://open.spotify.com/embed/track/4M7bbRsVNB8iWQaX8Sbfln",
    mode: "brazil"
  },
  {
    title: "Desabafo / Deixa Eu Dizer",
    artist: "Marcelo D2 e Claudia",
    embed: "https://open.spotify.com/embed/track/5GCz9BOkt17aI6ZOR3EiUl",
    mode: "brazil"
  },
  {
    title: "Zorro do Asfalto",
    artist: "Hungria",
    embed: "https://open.spotify.com/embed/track/4Wg06OxzVbuDp9aFzS5nm4",
    mode: "brazil"
  },
  {
    title: "Oitavo Anjo (part. Jorge Benjor)",
    artist: "509-E",
    embed: "https://open.spotify.com/embed/track/18jeA7LiqGZK9ENA0KWVr1",
    mode: "brazil"
  },
  {
    title: "Vida Loka, Pt. 1",
    artist: "Racionais Mc's",
    embed: "https://open.spotify.com/embed/track/6m8AgjfI28ER6odzMxmHtR",
    mode: "brazil"
  },
  {
    title: "Negro Drama",
    artist: "Racionais Mc's",
    embed: "https://open.spotify.com/embed/track/3ytXzEJFeVydFfmUhHvti8",
    mode: "brazil"
  },
  {
    title: "Muleque De Vila",
    artist: "Projota",
    embed: "https://open.spotify.com/embed/track/4d2sSjYgtVjaUPxyM1tetN",
    mode: "brazil"
  },
  {
    title: "Impressionando Os Anjos - ao vivo",
    artist: "Gustavo Mioto",
    embed: "https://open.spotify.com/embed/track/3v4l0SvxjTk9IjiVLhXiKA",
    mode: "brazil"
  },
  {
    title: "Vai Vendo",
    artist: "Lucas Lucco",
    embed: "https://open.spotify.com/embed/track/2jlVhPAhZuErUsbYLOqOxj",
    mode: "brazil"
  },
  {
    title: "Tremendo Vacilao",
    artist: "Perlla",
    embed: "https://open.spotify.com/embed/track/480o64VmNvWcwzCg74VUxW",
    mode: "brazil"
  },
  {
    title: "ESCADA DO PRÉDIO",
    artist: "PEDRO SAMPAIO e Marina Sena",
    embed: "https://open.spotify.com/embed/track/560vXBs6hssdrdOw13QPl9",
    mode: "brazil"
  },
  {
    title: "Ela so pensa em beijar",
    artist: "Mc leozinho",
    embed: "https://open.spotify.com/embed/track/0WSO3rLrwKWLTR5TtZRN0X",
    mode: "brazil"
  },
  {
    title: "Mds",
    artist: "Kawe & Mc Lele JP",
    embed: "https://open.spotify.com/embed/track/0QglpM23kl9ldvVdoYNZwF",
    mode: "brazil"
  },
  {
    title: "Anos Luz",
    artist: "Matuê",
    embed: "https://open.spotify.com/embed/track/4hVTpP7CV9imY9U53p45sX",
    mode: "brazil"
  },
  {
    title: "Tá OK",
    artist: "MC Kevin o Chris e DENNIS",
    embed: "https://open.spotify.com/embed/track/0fABszUFNbNq9IW503Gj8v",
    mode: "brazil"
  },
  {
    title: "Oh Meu Deus",
    artist: "Projota",
    embed: "https://open.spotify.com/embed/track/6ZaQRwBNp3xWu5lpib6xO6",
    mode: "brazil"
  },
  {
    title: "Papo de Agustinho",
    artist: "Oruam e Mainstreet",
    embed: "https://open.spotify.com/embed/track/5cCwZJUf8QiCQGnyakhpmF",
    mode: "brazil"
  },
  {
    title: "Te Assumi Pro Brasil - Ao Vivo",
    artist: "Matheus & Kauan",
    embed: "https://open.spotify.com/embed/track/6P7Uodyh8g40Nyc3no6R8E",
    mode: "brazil"
  },
  {
    title: "Quarta Cadeira (Acústico)",
    artist: "Matheus & Kauan",
    embed: "https://open.spotify.com/embed/track/3xW3gvAnYH2JsLnubQ4GyT",
    mode: "brazil"
  },
  {
    title: "SEQUÊNCIA FEITICEIRA",
    artist: "PEDRO SAMPAIO, Mc Gw, Mc Jhey, Mc Rodrigo do CN e MC Nito",
    embed: "https://open.spotify.com/embed/track/4Lwm0XFseZ09OBdmUJlcYp",
    mode: "brazil"
  },
  {
    title: "Nocaute",
    artist: "Jorge & Mateus",
    embed: "https://open.spotify.com/embed/track/2NnSYdNhqye00il4nRB4tj",
    mode: "brazil"
  },
  {
    title: "Última Noite",
    artist: "Léo Foguete",
    embed: "https://open.spotify.com/embed/track/2Doe6AaIpyDy4JvFTsxSDn",
    mode: "brazil"
  },
  {
    title: "Eu Tenho Medo",
    artist: "Zé Vaqueiro",
    embed: "https://open.spotify.com/embed/track/7yjduLSgPntFlq79Cuzrfz",
    mode: "brazil"
  },
  {
    title: "Eu, Você, O Mar e Ela",
    artist: "Luan Santana",
    embed: "https://open.spotify.com/embed/track/693kJcwQwFTb8809nbvQxG",
    mode: "brazil"
  },
  {
    title: "Amiga da Minha Mulher",
    artist: "Seu Jorge",
    embed: "https://open.spotify.com/embed/track/5nh2T9qvyXZCvVVYYESeRW",
    mode: "brazil"
  },
  {
    title: "Quero Te Encontrar",
    artist: "Claudinho & Buchecha",
    embed: "https://open.spotify.com/embed/track/3AYcFdYKSL8mVqJWwCpS60",
    mode: "brazil"
  },
  {
    title: "Tropa De Elite",
    artist: "Tihuana",
    embed: "https://open.spotify.com/embed/track/0KuDeGUXh5QQ7gSiB6KGPh",
    mode: "brazil"
  },
  {
    title: "Malandragem",
    artist: "Cássia Eller",
    embed: "https://open.spotify.com/embed/track/2Ktn7Hg3jocizpfzYJKLty",
    mode: "brazil"
  },
  {
    title: "Metamorfose Ambulante",
    artist: "Raul Seixas",
    embed: "https://open.spotify.com/embed/track/2Yk0HvfTaijA47aM0Fj88u",
    mode: "brazil"
  },
{
    title: "Tempo Perdido",
    artist: "Legião Urbano",
    embed: "https://open.spotify.com/embed/track/7MnT7msJZg3XBAS0OTfGrB",
    mode: "brazil"
  },
{
    title: "Anjos (Pra quem tem fé)",
    artist: "O Rappa",
    embed: "https://open.spotify.com/embed/track/1UvWx2hgpxlF7HPbwLSmIY",
    mode: "brazil"
  },
{
    title: "Não quero dinheiro",
    artist: "Tim Maia",
    embed: "https://open.spotify.com/embed/track/0SfcG65T1KKCj5NQffpzQR",
    mode: "brazil"
  },
  {
    title: "Look At Me!",
    artist: "XXXTENTACION",
    embed: "https://open.spotify.com/embed/track/7floNISpH8VF4z4459Qo18",
    mode: "international"
  },
  {
    title: "Anna Júlia",
    artist: "Los Hermanos",
    embed: "https://open.spotify.com/embed/track/0aASUtDb1N96NJDwmWj5Gf",
    mode: "brazil"
  },
  {
    title: "Só Os Loucos Sabem",
    artist: "Charlie Brown Jr.",
    embed: "https://open.spotify.com/embed/track/3nI0piSOxAik2RCpHGloB7?",
    mode: "brazil"
  },
  {
  title: "Toosie Slide",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/127QTOFJsJQp5LbJbu3A1y",
  mode: "international"
},
{
  title: "Somebody to Love (Remix) (part. USHER)",
  artist: "Justin Bieber",
  embed: "https://open.spotify.com/embed/track/7IUl5c6u18rzmyQOblj10T",
  mode: "international"
},
{
  title: "HIGHEST IN THE ROOM",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/3eekarcy7kvN4yt5ZFzltW",
  mode: "international"
},
{
  title: "Danza Kuduro (part. Lucenzo)",
  artist: "Don Omar",
  embed: "https://open.spotify.com/embed/track/2a1o6ZejUi8U3wzzOtCOYw",
  mode: "international"
},
{
  title: "Faço Chover (It Will Rain)",
  artist: "Calcinha Preta",
  embed: "https://open.spotify.com/embed/track/1qamKCfDlcPV44niEiQsOa",
  mode: "brazil"
},
{
  title: "DtMF",
  artist: "Bad Bunny",
  embed: "https://open.spotify.com/embed/track/3sK8wGT43QFpWrvNQsrQya",
  mode: "international"
},
{
  title: "Never Say Never (part. Jaden)",
  artist: "Justin Bieber",
  embed: "https://open.spotify.com/embed/track/5GYbkDveRD2I8M5ZJ14hWn",
  mode: "international"
},
{
  title: "Umbrella",
  artist: "Rihanna",
  embed: "https://open.spotify.com/embed/track/49FYlytm3dAAraYgpoJZux",
  mode: "international"
},
{
  title: "Congratulations (part. Quavo)",
  artist: "Post Malone",
  embed: "https://open.spotify.com/embed/track/3a1lNhkSLSkpJE4MSHpDu9",
  mode: "international"
},
{
  title: "Dangerous (part. Akon)",
  artist: "Kardinal Offishall",
  embed: "https://open.spotify.com/embed/track/4NOZ35Dhucr6UlVyLOtktd",
  mode: "international"
},
{
  title: "goosebumps",
  artist: "Travis Scott",
  embed: "https://open.spotify.com/embed/track/6gBFPUFcJLzWGx4lenP6h2",
  mode: "international"
},
{
  title: "God's Plan",
  artist: "Drake",
  embed: "https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn",
  mode: "international"
},
{
  title: "Family Affair",
  artist: "Mary J. Blige",
  embed: "https://open.spotify.com/embed/track/3aw9iWUQ3VrPQltgwvN9Xu",
  mode: "international"
},
{
  title: "Bolha do Catucadão",
  artist: "DJ DANN ORIGINAL, DJ Thseven7, Kaue Mc e Oliver MC",
  embed: "https://open.spotify.com/embed/track/6wg9oQ055KTynFmkqc05yS",
  mode: "brazil"
},
{
  title: "Gimme That Remix (feat.lil`wayne)",
  artist: "Chris Brown",
  embed: "https://open.spotify.com/embed/track/2bIrFpyw3AA2t7gNIkfmGb",
  mode: "international"
},
{
  title: "Billionaire (part. Bruno Mars)",
  artist: "Travie McCoy",
  embed: "https://open.spotify.com/embed/track/2M9ULmQwTaTGmAdXaXpfz5",
  mode: "international"
},
{
  title: "Young, Wild & Free (part. Bruno Mars)",
  artist: "Snoop Dogg e Wiz Khalifa",
  embed: "https://open.spotify.com/embed/track/5HQVUIKwCEXpe7JIHyY734",
  mode: "international"
},
{
  title: "Lembra Aquele Cara",
  artist: "MC Menor MT, MC Pelourinho e DJ Kennedy OBraboo",
  embed: "https://open.spotify.com/embed/track/4O4zPFoJ5HWnqbGYlCA2qc",
  mode: "brazil"
},
{
  title: "CORNETADA",
  artist: "DJ BRUNINHO 17 e Mc Neguinho do Morro",
  embed: "https://open.spotify.com/embed/track/2VPM3kwqzkSUwKHdTS140h",
  mode: "brazil"
},
{
  title: "Pikezin do M.J",
  artist: "DJ Silva 07, NavasMC Oficial e Miury Dj",
  embed: "https://open.spotify.com/embed/track/2nzXwfnAPFVlLLpYtDQXmd",
  mode: "brazil"
},
{
  title: "Ela ké Leitada",
  artist: "Prod.Nifour, Mc Gw, Cacau Chuu e Storys Funk",
  embed: "https://open.spotify.com/embed/track/161dJFOgyuYcgKg0AzYuAh",
  mode: "brazil"
},
{
  title: "JETSKI",
  artist: "Pedro Sampaio, Melody e MC Meno K",
  embed: "https://open.spotify.com/embed/track/3jhyw60F61gc7nC4dblqtC",
  mode: "brazil"
},
{
  title: "FAMOSINHA",
  artist: "Dj Caio Vieira, Mc Rodrigo do CN e MC Meno K",
  embed: "https://open.spotify.com/embed/track/5Nj2UVsxXAvhfYNpcre3al",
  mode: "brazil"
},
{
  title: "É o Antares Melhor Baile da Cidade",
  artist: "Dj Wendel Czr, MC Flavinho e MC MOLEQUINHO",
  embed: "https://open.spotify.com/embed/track/1wNTTADawAcKHRZ6R7GfnS",
  mode: "brazil"
},
{
  title: "P do Pecado",
  artist: "Grupo Menos É Mais e Simone Mendes",
  embed: "https://open.spotify.com/embed/track/38Ps9Kui6qJjpVqdBOfN5M",
  mode: "brazil"
},
{
  title: "THE BOX MEDLEY 6",
  artist: "THE BOX, Raffé, tchelo rodrigues, TOKIODK e Lipinho Oficial",
  embed: "https://open.spotify.com/embed/track/507tluWzOtxx58Kb13L9qu",
  mode: "brazil"
},
{
  title: "Iphone Branco",
  artist: "L3OZIN, Mainstreet e Borges",
  embed: "https://open.spotify.com/embed/track/6jxE4XjFVSKF18kfo7FCl9",
  mode: "brazil"
},
{
  title: "USD, é USD",
  artist: "Kyan e Mu540",
  embed: "https://open.spotify.com/embed/track/5cPsBPHjF8ZsI3qktGulWR",
  mode: "brazil"
},
{
  title: "Oh Garota Eu Quero Você Só Pra Mim",
  artist: "Oruam, Zé Felipe e MC Tuto",
  embed: "https://open.spotify.com/embed/track/0BUkQGUXgcvf3gdCWYbtnJ",
  mode: "brazil"
},
{
  title: "THE BOX MEDLEY FUNK 2",
  artist: "THE BOX, MC Cebezinho, MC Brinquedo, Dj Oreia, Mc Laranjinha e MC Tuto",
  embed: "https://open.spotify.com/embed/track/7IFsTX5H1sWcEl8joV0IdD",
  mode: "brazil"
},
{
  title: "A Internet É Toxica",
  artist: "MC Saci, Mc Pretchako, DJ JOAO DA INESTAN e Dj Lc",
  embed: "https://open.spotify.com/embed/track/6Gn8SHd3RIWjOermcidCJk",
  mode: "brazil"
},
{
  title: "As It Was",
  artist: "Harry Styles",
  embed: "https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7",
  mode: "international"
},
{
  title: "Another Love",
  artist: "Tom Odell",
  embed: "https://open.spotify.com/embed/track/3JvKfv6T31zO0ini8iNItO",
  mode: "international"
},
{
  title: "Sweater Weather",
  artist: "The Neighbourhood",
  embed: "https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6",
  mode: "international"
},
{
  title: "505",
  artist: "Arctic Monkeys",
  embed: "https://open.spotify.com/embed/track/58ge6dfP91o9oXMzq3XkIS",
  mode: "international"
},
{
  title: "Heat Waves",
  artist: "Glass Animals",
  embed: "https://open.spotify.com/embed/track/02MWAaffLxlfxAUY7c5dvx",
  mode: "international"
},
{
  title: "Night Changes",
  artist: "One Direction",
  embed: "https://open.spotify.com/embed/track/5O2P9iiztwhomNh8xkR9lJ",
  mode: "international"
},
{
  title: "Midnight City",
  artist: "M83",
  embed: "https://open.spotify.com/embed/track/6GyFP1nfCDB8lbD2bG0Hq9",
  mode: "international"
},
{
  title: "Shape of You",
  artist: "Ed Sheeran",
  embed: "https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3",
  mode: "international"
},
{
  title: "Perfect",
  artist: "Ed Sheeran",
  embed: "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v",
  mode: "international"
},
{
  title: "Believer",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP",
  mode: "international"
},
{
  title: "Radioactive",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/62yJjFtgkhUrXktIoSjgP2",
  mode: "international"
},
{
  title: "Counting Stars",
  artist: "OneRepublic",
  embed: "https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1",
  mode: "international"
},
{
  title: "Someone You Loved",
  artist: "Lewis Capaldi",
  embed: "https://open.spotify.com/embed/track/7qEHsqek33rTcFNT9PFqLf",
  mode: "international"
},
{
  title: "Starboy",
  artist: "The Weeknd",
  embed: "https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB",
  mode: "international"
},
{
  title: "Bohemian Rhapsody",
  artist: "Queen",
  embed: "https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J",
  mode: "international"
},
{
  title: "Billie Jean",
  artist: "Michael Jackson",
  embed: "https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5",
  mode: "international"
},
{
  title: "Thriller",
  artist: "Michael Jackson",
  embed: "https://open.spotify.com/embed/track/2LlQb7Uoj1kKyGhlkBf9aC",
  mode: "international"
},
{
  title: "Smells Like Teen Spirit",
  artist: "Nirvana",
  embed: "https://open.spotify.com/embed/track/5ghIJDpPoe3CfHMGu71E6T",
  mode: "international"
},
{
  title: "Hotel California",
  artist: "Eagles",
  embed: "https://open.spotify.com/embed/track/40riOy7x9W7GXjyGp4pjAv",
  mode: "international"
},
{
  title: "Sweet Child O' Mine",
  artist: "Guns N' Roses",
  embed: "https://open.spotify.com/embed/track/7o2CTH4ctstm8TNelqjb51",
  mode: "international"
},
{
  title: "Wonderwall",
  artist: "Oasis",
  embed: "https://open.spotify.com/embed/track/7ygpwy2qP3NbrxVkHvUhXY",
  mode: "international"
},
{
  title: "Lose Yourself",
  artist: "Eminem",
  embed: "https://open.spotify.com/embed/track/7MJQ9Nfxzh8LPZ9e9u68Fq",
  mode: "international"
},
{
  title: "Envolver",
  artist: "Anitta",
  embed: "https://open.spotify.com/embed/track/3IAfUEeaXRX9s9UdKOJrFI",
  mode: "brazil"
},
{
  title: "Vai Malandra",
  artist: "Anitta",
  embed: "https://open.spotify.com/embed/track/6u0EAxf1OJTLS7CvInuNd7",
  mode: "brazil"
},
{
  title: "Kenny G",
  artist: "Matuê",
  embed: "https://open.spotify.com/embed/track/3MkdA6vwF0ifRl86yzTlJW",
  mode: "brazil"
},
{
  title: "Máquina do Tempo",
  artist: "Matuê",
  embed: "https://open.spotify.com/embed/track/5oI9blwsXC8AkTWw6wASY8",
  mode: "brazil"
},
{
  title: "Tipo Gin",
  artist: "Kevin O Chris",
  embed: "https://open.spotify.com/embed/track/4llr8mcoauwrHBtjGb7F9S",
  mode: "brazil"
},
{
  title: "Ela É do Tipo",
  artist: "Kevin O Chris",
  embed: "https://open.spotify.com/embed/track/2x8TNY9KwNvD19gVGs4WOP",
  mode: "brazil"
},
{
  title: "Dias de Luta, Dias de Glória",
  artist: "Charlie Brown Jr.",
  embed: "https://open.spotify.com/embed/track/006pMMCuRo2TFjh8sNGSov",
  mode: "brazil"
},
{
  title: "Céu Azul",
  artist: "Charlie Brown Jr.",
  embed: "https://open.spotify.com/embed/track/3cqeso9qMA6HoISorEoFfk",
  mode: "brazil"
},
{
  title: "Viva La Vida",
  artist: "Coldplay",
  embed: "https://open.spotify.com/embed/track/1mea3bSkSGXuIRvnydlB5b",
  mode: "international"
},
{
  title: "The Scientist",
  artist: "Coldplay",
  embed: "https://open.spotify.com/embed/track/75JFxkI2RXiU7L9VXzMkle",
  mode: "international"
},
{
  title: "Yellow",
  artist: "Coldplay",
  embed: "https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg",
  mode: "international"
},
{
  title: "Numb",
  artist: "Linkin Park",
  embed: "https://open.spotify.com/embed/track/2nLtzopw4rPReszdYBJU6h",
  mode: "international"
},
{
  title: "In The End",
  artist: "Linkin Park",
  embed: "https://open.spotify.com/embed/track/60a0Rd6pjrkxjPbaKzXjfq",
  mode: "international"
},
{
  title: "Wake Me Up",
  artist: "Avicii",
  embed: "https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2",
  mode: "international"
},
{
  title: "Closer",
  artist: "The Chainsmokers",
  embed: "https://open.spotify.com/embed/track/7BKLCZ1jbUBVqRi2FVlTVw",
  mode: "international"
},
{
  title: "Happier",
  artist: "Marshmello",
  embed: "https://open.spotify.com/embed/track/7BqHUALzNBTanL6OvsqmC1",
  mode: "international"
},
{
  title: "Sunflower",
  artist: "Post Malone",
  embed: "https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P",
  mode: "international"
},
{
  title: "Rockstar",
  artist: "Post Malone",
  embed: "https://open.spotify.com/embed/track/7wGoVu4Dady5GV0Sv4UIsx",
  mode: "international"
},
{
  title: "Circles",
  artist: "Post Malone",
  embed: "https://open.spotify.com/embed/track/21jGcNKet2qwijlDFuPiPb",
  mode: "international"
},
{
  title: "Bad Guy",
  artist: "Billie Eilish",
  embed: "https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m",
  mode: "international"
},
{
  title: "Lovely",
  artist: "Billie Eilish",
  embed: "https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4",
  mode: "international"
},
{
  title: "Hello",
  artist: "Adele",
  embed: "https://open.spotify.com/embed/track/62PaSfnXSMyLshYJrlTuL3",
  mode: "international"
},
{
  title: "Rolling In The Deep",
  artist: "Adele",
  embed: "https://open.spotify.com/embed/track/1c8gk2PeTE04A1pIDH9YMk",
  mode: "international"
},
{
  title: "Poker Face",
  artist: "Lady Gaga",
  embed: "https://open.spotify.com/embed/track/1QV6tiMFM6fSOKOGLMHYYg",
  mode: "international"
},
{
  title: "Bad Romance",
  artist: "Lady Gaga",
  embed: "https://open.spotify.com/embed/track/0SiywuOBRcynK0uKGWdCnn",
  mode: "international"
},
{
  title: "Shallow",
  artist: "Lady Gaga",
  embed: "https://open.spotify.com/embed/track/2VxeLyX666F8uXCJ0dZF8B",
  mode: "international"
},
{
  title: "Firework",
  artist: "Katy Perry",
  embed: "https://open.spotify.com/embed/track/4lCv7b86sLynZbXhfScfm2",
  mode: "international"
},
{
  title: "Roar",
  artist: "Katy Perry",
  embed: "https://open.spotify.com/embed/track/27tNWlhdAryQY04Gb2ZhUI",
  mode: "international"
},
{
  title: "Dark Horse",
  artist: "Katy Perry",
  embed: "https://open.spotify.com/embed/track/5jrdCoLpJSvHHorevXBATy",
  mode: "international"
},
{
  title: "Havana",
  artist: "Camila Cabello",
  embed: "https://open.spotify.com/embed/track/1rfofaqEpACxVEHIZBJe6W",
  mode: "international"
},
{
  title: "Señorita",
  artist: "Shawn Mendes",
  embed: "https://open.spotify.com/embed/track/0TK2YIli7K1leLovkQiNik",
  mode: "international"
},
{
  title: "Stitches",
  artist: "Shawn Mendes",
  embed: "https://open.spotify.com/embed/track/5jsw9uXEGuKyJzs0boZ1bT",
  mode: "international"
},
{
  title: "Take Me To Church",
  artist: "Hozier",
  embed: "https://open.spotify.com/embed/track/7x93eCAiJQF7DUt979fj3p",
  mode: "international"
},
{
  title: "Stressed Out",
  artist: "Twenty One Pilots",
  embed: "https://open.spotify.com/embed/track/3CRDbSIZ4r5MsZ0YwxuEkn",
  mode: "international"
},
{
  title: "Ride",
  artist: "Twenty One Pilots",
  embed: "https://open.spotify.com/embed/track/2Z8WuEywRWYTKe1NybPQEW",
  mode: "international"
},
{
  title: "Heathens",
  artist: "Twenty One Pilots",
  embed: "https://open.spotify.com/embed/track/6i0V12jOa3mr6uu4WYhUBr",
  mode: "international"
},
{
  title: "Thinking Out Loud",
  artist: "Ed Sheeran",
  embed: "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f",
  mode: "international"
},
{
  title: "Love Yourself",
  artist: "Justin Bieber",
  embed: "https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0",
  mode: "international"
},
{
  title: "Africa",
  artist: "Toto",
  embed: "https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX",
  mode: "international"
},
{
  title: "Eye Of The Tiger",
  artist: "Survivor",
  embed: "https://open.spotify.com/embed/track/2KH16WveTQWT6KOG9Rg6e2",
  mode: "international"
},
{
  title: "Take Me Home Country Roads",
  artist: "John Denver",
  embed: "https://open.spotify.com/embed/track/1YYhDizHx7PnDhAhko6cDS",
  mode: "international"
},
{
  title: "Dancing Queen",
  artist: "ABBA",
  embed: "https://open.spotify.com/embed/track/0GjEhVFGZW8afUYGChu3Rr",
  mode: "international"
},
{
  title: "Mamma Mia",
  artist: "ABBA",
  embed: "https://open.spotify.com/embed/track/2TxCwUlqaOH3TIyJqGgR91",
  mode: "international"
},
{
  title: "Gimme Gimme Gimme",
  artist: "ABBA",
  embed: "https://open.spotify.com/embed/track/3vkQ5DAB1qQMYO4Mr9zJN6",
  mode: "international"
},
{
  title: "Don't Stop Believin'",
  artist: "Journey",
  embed: "https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue",
  mode: "international"
},
{
  title: "Livin On A Prayer",
  artist: "Bon Jovi",
  embed: "https://open.spotify.com/embed/track/37ZJ0p5Jm13JPevGcx4SkF",
  mode: "international"
},
{
  title: "Thunderstruck",
  artist: "ACDC",
  embed: "https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj",
  mode: "international"
},
{
  title: "Back In Black",
  artist: "ACDC",
  embed: "https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj",
  mode: "international"
},
{
  title: "Seven Nation Army",
  artist: "The White Stripes",
  embed: "https://open.spotify.com/embed/track/3dPQuX8Gs42Y7b454ybpMR",
  mode: "international"
},
{
  title: "Mr Brightside",
  artist: "The Killers",
  embed: "https://open.spotify.com/embed/track/7oK9VyNzrYvRFo7nQEYkWN",
  mode: "international"
},
{
  title: "Boulevard Of Broken Dreams",
  artist: "Green Day",
  embed: "https://open.spotify.com/embed/track/5GorCbAP4aL0EJ16frG2hd",
  mode: "international"
},
{
  title: "American Idiot",
  artist: "Green Day",
  embed: "https://open.spotify.com/embed/track/6nTiIhLmQ3FWhvrGafw2zj",
  mode: "international"
},
{
  title: "Californication",
  artist: "Red Hot Chili Peppers",
  embed: "https://open.spotify.com/embed/track/48UPSzbZjgc449aqz8bxox",
  mode: "international"
},
{
  title: "Can't Stop",
  artist: "Red Hot Chili Peppers",
  embed: "https://open.spotify.com/embed/track/3ZOEytgrvLwQaqXreDs2Jx",
  mode: "international"
},
{
  title: "Zombie",
  artist: "The Cranberries",
  embed: "https://open.spotify.com/embed/track/7EZC6E7UjZe63f1jRmkWxt",
  mode: "international"
},
{
  title: "Take Me Out",
  artist: "Franz Ferdinand",
  embed: "https://open.spotify.com/embed/track/6ooluO7DiEhI1zmK94nRCM",
  mode: "international"
},
{
  title: "Feel Good Inc",
  artist: "Gorillaz",
  embed: "https://open.spotify.com/embed/track/0d28khcov6AiegSCpG5TuT",
  mode: "international"
},
{
  title: "Clint Eastwood",
  artist: "Gorillaz",
  embed: "https://open.spotify.com/embed/track/7yMiX7n9SBvadzox8T5jzT",
  mode: "international"
},
{
  title: "Do I Wanna Know?",
  artist: "Arctic Monkeys",
  embed: "https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst",
  mode: "international"
},
{
  title: "I Wanna Be Yours",
  artist: "Arctic Monkeys",
  embed: "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n",
  mode: "international"
},
{
  title: "The Less I Know The Better",
  artist: "Tame Impala",
  embed: "https://open.spotify.com/embed/track/6K4t31amVTZDgR3sKmwUJJ",
  mode: "international"
},
{
  title: "Feels Like We Only Go Backwards",
  artist: "Tame Impala",
  embed: "https://open.spotify.com/embed/track/0LtOwyZoSNZKJWHqjzADpW",
  mode: "international"
},
{
  title: "Borderline",
  artist: "Tame Impala",
  embed: "https://open.spotify.com/embed/track/5hM5arv9KDbCHS0k9uqwjr",
  mode: "international"
},
{
  title: "Let It Be",
  artist: "The Beatles",
  embed: "https://open.spotify.com/embed/track/7iN1s7xHE4ifF5povM6A48",
  mode: "international"
},
{
  title: "Hey Jude",
  artist: "The Beatles",
  embed: "https://open.spotify.com/embed/track/1eT2CjXwFXNx6oY5ydvzKU",
  mode: "international"
},
{
  title: "Come Together",
  artist: "The Beatles",
  embed: "https://open.spotify.com/embed/track/2EqlS6tkEnglzr7tkKAAYD",
  mode: "international"
},
{
  title: "Beat It",
  artist: "Michael Jackson",
  embed: "https://open.spotify.com/embed/track/3BovdzfaX4jb5KFQwoPfAw",
  mode: "international"
},
{
  title: "Smooth Criminal",
  artist: "Michael Jackson",
  embed: "https://open.spotify.com/embed/track/2bCQHF9gdG5BNDVuEIEnNk",
  mode: "international"
},
{
  title: "Bad",
  artist: "Michael Jackson",
  embed: "https://open.spotify.com/embed/track/3tS8q8SXxtrYSN8UgeQt6q",
  mode: "international"
},
{
  title: "Stayin Alive",
  artist: "Bee Gees",
  embed: "https://open.spotify.com/embed/track/5ubvP9oKmxLUVq506fgLhk",
  mode: "international"
},
{
  title: "September",
  artist: "Earth Wind & Fire",
  embed: "https://open.spotify.com/embed/track/2grjqo0Frpf2okIBiifQKs",
  mode: "international"
},
{
  title: "Never Gonna Give You Up",
  artist: "Rick Astley",
  embed: "https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC",
  mode: "international"
},
{
  title: "All Star",
  artist: "Smash Mouth",
  embed: "https://open.spotify.com/embed/track/3cfOd4CMv2snFaKAnMdnvK",
  mode: "international"
},
{
  title: "Another Brick In The Wall",
  artist: "Pink Floyd",
  embed: "https://open.spotify.com/embed/track/7K6xMPtAjTuLPNlJMLf5bS",
  mode: "international"
},
{
  title: "Comfortably Numb",
  artist: "Pink Floyd",
  embed: "https://open.spotify.com/embed/track/5HNCy40Ni5BZJFw1TKzRsC",
  mode: "international"
},
{
  title: "Wish You Were Here",
  artist: "Pink Floyd",
  embed: "https://open.spotify.com/embed/track/6mFkJmJqdDVQ1REhVfGgd1",
  mode: "international"
},
{
  title: "Come As You Are",
  artist: "Nirvana",
  embed: "https://open.spotify.com/embed/track/2RsAajgo0g7bMCHxwH3Sk0",
  mode: "international"
},
{
  title: "Lithium",
  artist: "Nirvana",
  embed: "https://open.spotify.com/embed/track/5vHLwhxxlGzmClMcxRRFPr",
  mode: "international"
},
{
  title: "Riptide",
  artist: "Vance Joy",
  embed: "https://open.spotify.com/embed/track/7yq4Qj7cqayVTp3FF9CWbm",
  mode: "international"
},
{
  title: "Pompeii",
  artist: "Bastille",
  embed: "https://open.spotify.com/embed/track/3gbBpTdY8lnQwqxNCcf795",
  mode: "international"
},
{
  title: "Take On Me",
  artist: "a-ha",
  embed: "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L",
  mode: "international"
},
{
  title: "Under Pressure",
  artist: "Queen & David Bowie",
  embed: "https://open.spotify.com/embed/track/11IzgLRXV7Cgek3tEgGgjw",
  mode: "international"
},
{
  title: "We Will Rock You",
  artist: "Queen",
  embed: "https://open.spotify.com/embed/track/4pbJqGIASGPr0ZpGpnWkDn",
  mode: "international"
},
{
  title: "We Are The Champions",
  artist: "Queen",
  embed: "https://open.spotify.com/embed/track/1lCRw5FEZ1gPDNPzy1K4zW",
  mode: "international"
},
{
  title: "Don't Stop Me Now",
  artist: "Queen",
  embed: "https://open.spotify.com/embed/track/7hQJA50XrCWABAu5v6QZ4i",
  mode: "international"
},
{
  title: "Demons",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/3LlAyCYU26dvFZBDUIMb7a",
  mode: "international"
},
{
  title: "Thunder",
  artist: "Imagine Dragons",
  embed: "https://open.spotify.com/embed/track/0tKcYR2II1VCQWT79i5NrW",
  mode: "international"
},
{
  title: "Can't Feel My Face",
  artist: "The Weeknd",
  embed: "https://open.spotify.com/embed/track/22VdIZQfgXJea34mQxlt81",
  mode: "international"
},
{
  title: "Save Your Tears",
  artist: "The Weeknd",
  embed: "https://open.spotify.com/embed/track/5QO79kh1waicV47BqGRL3g",
  mode: "international"
},
{
  title: "Uptown Funk",
  artist: "Mark Ronson ft. Bruno Mars",
  embed: "https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS",
  mode: "international"
},
{
  title: "Just The Way You Are",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/47Slg6LuqLaX0VodpSCvPt",
  mode: "international"
},
{
  title: "Locked Out Of Heaven",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/3w3y8KPTfNeOKPiqUTakBh",
  mode: "international"
},
{
  title: "Grenade",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/4lLtanYk6tkMvooU0tWzG8",
  mode: "international"
},
{
  title: "Treasure",
  artist: "Bruno Mars",
  embed: "https://open.spotify.com/embed/track/55h7vJchibLdUkxdlX3fK7",
  mode: "international"
},
{
  title: "Shape Of My Heart",
  artist: "Sting",
  embed: "https://open.spotify.com/embed/track/6CKoWCWAqEVWVjpeoJXyNH",
  mode: "international"
},
{
  title: "Every Breath You Take",
  artist: "The Police",
  embed: "https://open.spotify.com/embed/track/1JSTJqkT5qHq8MDJnJbRE1",
  mode: "international"
},
{
  title: "Message In A Bottle",
  artist: "The Police",
  embed: "https://open.spotify.com/embed/track/1oYYd2gnWZYrt89EBXdFiO",
  mode: "international"
},
{
  title: "Lose Control",
  artist: "Teddy Swims",
  embed: "https://open.spotify.com/embed/track/6usohdchdzW9oML7VC4Uhk",
  mode: "international"
},
{
  title: "Flowers",
  artist: "Miley Cyrus",
  embed: "https://open.spotify.com/embed/track/0yLdNVWF3Srea0uzk55zFn",
  mode: "international"
},
{
  title: "Drivers License",
  artist: "Olivia Rodrigo",
  embed: "https://open.spotify.com/embed/track/5wANPM4fQCJwkGd4rN57mH",
  mode: "international"
},
{
  title: "Good 4 U",
  artist: "Olivia Rodrigo",
  embed: "https://open.spotify.com/embed/track/4ZtFanR9U6ndgddUvNcjcG",
  mode: "international"
},
{
  title: "Levitating",
  artist: "Dua Lipa",
  embed: "https://open.spotify.com/embed/track/463CkQjx2Zk1yXoBuierM9",
  mode: "international"
},
{
  title: "New Rules",
  artist: "Dua Lipa",
  embed: "https://open.spotify.com/embed/track/2ekn2ttSfGqwhhate0LSR0",
  mode: "international"
},
{
  title: "Stay",
  artist: "The Kid LAROI & Justin Bieber",
  embed: "https://open.spotify.com/embed/track/5HCyWlXZPP0y6Gqq8TgA20",
  mode: "international"
},
{
  title: "Peaches",
  artist: "Justin Bieber",
  embed: "https://open.spotify.com/embed/track/4iJyoBOLtHqaGxP12qzhQI",
  mode: "international"
},
{
  title: "Industry Baby",
  artist: "Lil Nas X",
  embed: "https://open.spotify.com/embed/track/27NovPIUIRrOZoCHxABJwK",
  mode: "international"
},
{
  title: "Old Town Road",
  artist: "Lil Nas X",
  embed: "https://open.spotify.com/embed/track/2YpeDb67231RjR0MgVLzsG",
  mode: "international"
},
{
  title: "Despacito",
  artist: "Luis Fonsi",
  embed: "https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb",
  mode: "international"
},
{
  title: "Counting Blue Cars",
  artist: "Dishwalla",
  embed: "https://open.spotify.com/embed/track/6B618H5CuCdEzcVs0NKTlt",
  mode: "international"
},
{
  title: "Take A Chance On Me",
  artist: "ABBA",
  embed: "https://open.spotify.com/embed/track/5BckPAYcKEJuYs1eV1BHHe",
  mode: "international"
},
{
  title: "The Nights",
  artist: "Avicii",
  embed: "https://open.spotify.com/embed/track/0ct6r3EGTcMLPtrXHDvVjc",
  mode: "international"
},
{
  title: "Hey Ya!",
  artist: "OutKast",
  embed: "https://open.spotify.com/embed/track/3AszgPDZd9q0DpDFt4HFBy",
  mode: "international"
},
{
  title: "Crazy",
  artist: "Gnarls Barkley",
  embed: "https://open.spotify.com/embed/track/1vxw6aYJls2oq3gW0DujAo",
  mode: "international"
},
{
  title: "Feel It Still",
  artist: "Portugal. The Man",
  embed: "https://open.spotify.com/embed/track/6QgjcU0zLnzq5OrUoSZ3OK",
  mode: "international"
},
{
  title: "YES OR NO",
  artist: "Teto",
  embed: "https://open.spotify.com/embed/track/7BGhllQfISbfkwYSkp5nRC",
  mode: "brazil"
},
{
  title: "Talvez você precise de mim",
  artist: "Veigh",
  embed: "https://open.spotify.com/embed/track/2De1EHbIhepIVLHZ16bySE",
  mode: "brazil"
},
{
  title: "Eyes Without A Face",
  artist: "Billy Idol",
  embed: "https://open.spotify.com/embed/track/0pUVeEgZuNyFzIMKp67RbS",
  mode: "international"
},
{
  title: "High Hopes",
  artist: "Panic! At the Disco",
  embed: "https://open.spotify.com/embed/track/1rqqCSm0Qe4I9rUvWncaom",
  mode: "international"
},
{
  title: "Flicker of Light",
  artist: "Lola Young",
  embed: "https://open.spotify.com/embed/track/3etbPFMXnAuShtcImz4UXW",
  mode: "international"
},
{
  title: "Have You Ever Seen The Rain",
  artist: "Creedence Clearwater Revival",
  embed: "https://open.spotify.com/embed/track/2LawezPeJhN4AWuSB0GtAU",
  mode: "international"
},
{
  title: "Party Rock Anthem",
  artist: "LMFAO",
  embed: "https://open.spotify.com/embed/track/7mitXLIMCflkhZiD34uEQI",
  mode: "international"
},

];


const roundNames = {
  128: "64avos de final",
  64: "32avos de final",
  32: "16avos de final",
  16: "Oitavas de final",
  8: "Quartas de final",
  4: "Semifinal",
  2: "Final",
  1: "Campeão"
};


let started = false;
let currentRound = [];
let nextRound = [];
let currentIndex = 0;
let champion = null;
let loadingPhase = false;
let loadingText = "";
let finalsHistory = {
  quarter: [],
  semi: [],
  final: [],
  quarterWinners: [],
  semiWinners: [],
  finalWinner: null
};

let undoAvailable = true;
let lastState = null;

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function uniqueTracks(list) {
  const seen = new Set();

  return list.filter(track => {
    const key = `${track.title}__${track.artist}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function loadChampions() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveChampion(track) {

  // só salva no ranking se o modo for GENERAL
  if (currentMode !== "general") return;

  const data = loadChampions();
  const key = `${track.title}__${track.artist}`;

  if (!data[key]) {
    data[key] = {
      title: track.title,
      artist: track.artist,
      wins: 0
    };
  }

  data[key].wins += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getRanking(limit = 5) {
  const data = loadChampions();

  const ranking = Object.values(data)
    .sort((a, b) => b.wins - a.wins)
    .slice(0, limit);

  const totalChampionships = Object.values(data).reduce((sum, item) => sum + item.wins, 0);

  return {
    totalChampionships,
    ranking
  };
}

function renderRankingBlock() {
  const { totalChampionships, ranking } = getRanking();

  const items = ranking.length
    ? ranking
        .map(
          (item, index) => `
        <li class="ranking-item">
          <span class="ranking-pos">#${index + 1}</span>
          <div class="ranking-info">
            <strong>${item.title}</strong>
            <span>${item.artist}</span>
          </div>
          <span class="ranking-wins">${item.wins} copas</span>
        </li>
      `
        )
        .join("")
    : `<li class="ranking-empty">Ainda não há campeões registrados.</li>`;

  return `
    <div class="ranking-box">
      <div class="ranking-header">
        <h3>Ranking</h3>
        <div class="votes-badge">Copas finalizadas: <strong>${totalChampionships}</strong></div>
      </div>
      <ul class="ranking-list">
        ${items}
      </ul>
    </div>
  `;
}

function renderStartScreen() {
  return `
    <div class="start-screen hero-screen">
      <div class="hero-glow"></div>

      <img src="logo.png" class="logo">

      <p class="hero-subtitle">
        Qual música é a melhor? Decida duelo por duelo.
      </p>

      <div class="mode-buttons">
        <button class="main-btn hero-btn" onclick="clearTournamentProgress(); window.location.href='/general'">MÚSICAS GERAIS 🎶</button>
<button class="main-btn hero-btn" onclick="clearTournamentProgress(); window.location.href='/international'">MÚSICAS INTERNACIONAIS 🌎</button>
<button class="main-btn hero-btn" onclick="clearTournamentProgress(); window.location.href='/brazil'">MÚSICAS BRASILEIRAS 🔥</button>
      </div>

      <div class="home-ranking-wrap">
        ${renderRankingBlock()}
      </div>
    </div>
  `;
}

function renderBracketPairs(list, winners = []) {
  if (!list || !list.length) return "";

  let html = "";

  for (let i = 0; i < list.length; i += 2) {
    const left = list[i];
    const right = list[i + 1];

    const leftWon = left && winners.some(w => w.title === left.title && w.artist === left.artist);
    const rightWon = right && winners.some(w => w.title === right.title && w.artist === right.artist);

    html += `
      <div class="bracket-pair">
        <div class="bracket-match ${leftWon ? "winner-match" : "loser-match"}">${left ? left.title : ""}</div>
        <div class="bracket-x">✕</div>
        <div class="bracket-match ${rightWon ? "winner-match" : "loser-match"}">${right ? right.title : ""}</div>
      </div>
    `;
  }

  return html;
}

function renderWinnerScreen() {
  return `
    <div class="winner-screen">
      <p class="winner-title">CAMPEÃO DA COPA</p>
      <h2 class="winner-song">${champion.title}</h2>
      <p class="winner-artist">${champion.artist}</p>

      <div class="share-card clean-share-card">
        <p class="share-kicker">MINHA COPA NO SOUNDCLASH</p>

        <div class="clean-bracket-section">
          <h4>Semifinais</h4>

          <div class="clean-match">
            <div class="clean-team ${finalsHistory.semiWinners.includes(finalsHistory.semi[0]) ? 'winner' : 'loser'}">
              ${finalsHistory.semi[0].title}
            </div>
            <div class="clean-vs">VS</div>
            <div class="clean-team ${finalsHistory.semiWinners.includes(finalsHistory.semi[1]) ? 'winner' : 'loser'}">
              ${finalsHistory.semi[1].title}
            </div>
          </div>

          <div class="clean-match">
            <div class="clean-team ${finalsHistory.semiWinners.includes(finalsHistory.semi[2]) ? 'winner' : 'loser'}">
              ${finalsHistory.semi[2].title}
            </div>
            <div class="clean-vs">VS</div>
            <div class="clean-team ${finalsHistory.semiWinners.includes(finalsHistory.semi[3]) ? 'winner' : 'loser'}">
              ${finalsHistory.semi[3].title}
            </div>
          </div>
        </div>

        <div class="clean-bracket-section">
          <h4>Final</h4>

          <div class="clean-match final-match">
            <div class="clean-team ${champion.title === finalsHistory.final[0].title && champion.artist === finalsHistory.final[0].artist ? 'winner' : 'loser'}">
              ${finalsHistory.final[0].title}
            </div>
            <div class="clean-vs">VS</div>
            <div class="clean-team ${champion.title === finalsHistory.final[1].title && champion.artist === finalsHistory.final[1].artist ? 'winner' : 'loser'}">
              ${finalsHistory.final[1].title}
            </div>
          </div>
        </div>

        <div class="clean-champion-block">
          <h4>🏆 Campeão</h4>
          <div class="clean-champion-name">${champion.title}</div>
          <div class="clean-champion-artist">${champion.artist}</div>
        </div>

        <p class="share-footer">soundclashbr.vercel.app</p>
      </div>

      <div class="winner-actions">
        <button class="main-btn" onclick="shareChampion()">COMPARTILHAR RESULTADO</button>
        <button class="main-btn" onclick="downloadChampionImage()">BAIXAR IMAGEM</button>
        <button class="main-btn" onclick="startGame()">NOVA COPA</button>
      </div>

      ${renderRankingBlock()}
    </div>
  `;
}

function renderBattleScreen() {
  const left = currentRound[currentIndex];
  const right = currentRound[currentIndex + 1];

  const duel = Math.floor(currentIndex / 2) + 1;
  const totalDuels = currentRound.length / 2;

  const phase =
    roundNames[currentRound.length] ||
    `${currentRound.length / 2} confrontos`;

  return `
    <div class="topbar">
      <div class="badge">
        Fase: <strong>${phase}</strong>
      </div>

      <div class="badge">
        Duelo: <strong>${duel}</strong> de <strong>${totalDuels}</strong>
      </div>

      ${
        undoAvailable && lastState
          ? '<button class="main-btn secondary-btn" onclick="undoMove()">VOLTAR</button>'
          : ""
      }

      <button class="main-btn" onclick="clearTournamentProgress(); startGame(currentMode)">
        REINICIAR
      </button>
    </div>

    <div class="battle-grid">
      <div class="card">
        <h2>${left.title}</h2>
        <p>${left.artist}</p>

        <div class="player">
          <iframe
            loading="lazy"
            src="${left.embed}"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
          </iframe>

          <p class="spotify-note">
           
          </p>
        </div>

        <button
          class="choice-btn"
          onclick="chooseTrackByIndex(${currentIndex})"
        >
          ESCOLHER
        </button>
      </div>

      <div class="vs desktop-vs">VS</div>
      <div class="vs-mobile">VS</div>

      <div class="card">
        <h2>${right.title}</h2>
        <p>${right.artist}</p>

        <div class="player">
          <iframe
            loading="lazy"
            src="${right.embed}"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
          </iframe>

          <p class="spotify-note">
            
          </p>
        </div>

        <button
          class="choice-btn"
          onclick="chooseTrackByIndex(${currentIndex + 1})"
        >
          ESCOLHER
        </button>
      </div>
    </div>

    <div class="site-logo">
      <img src="logo.png" alt="SoundClash">
    </div>
  `;
}

function renderLoadingScreen() {
  return `
    <div class="start-screen hero-screen">
      <div class="hero-glow"></div>
      <img src="logo.png" class="logo" alt="SoundClash">
      <p class="hero-subtitle">${loadingText || "Carregando..."}</p>
    </div>
  `;
}

function render() {
  const game = document.getElementById("game");
  if (!game) return;

  if (!started) {
    game.innerHTML = renderStartScreen();
    return;
  }

  if (loadingPhase) {
    game.innerHTML = renderLoadingScreen();
    return;
  }

  if (champion) {
    game.innerHTML = renderWinnerScreen();
    return;
  }

  game.innerHTML = renderBattleScreen();
}

function setLoading(text, delay = 900) {
  loadingText = text;
  loadingPhase = true;
  render();

  return new Promise(resolve => {
    setTimeout(() => {
      loadingPhase = false;
      loadingText = "";
      resolve();
    }, delay);
  });
}

function startGame(mode = 'general') {
  currentMode = mode;

  let selectedTracks = tracks;

  if (mode === 'brazil') {
    const brazilTracks = tracks.filter(track => track.mode === 'brazil');
    if (brazilTracks.length > 1) {
      selectedTracks = brazilTracks;
    }
  } else if (mode === 'international') {
    const internationalTracks = tracks.filter(track => track.mode === 'international');
    if (internationalTracks.length > 1) {
      selectedTracks = internationalTracks;
    }
  }

  const shuffled = uniqueTracks(shuffle(selectedTracks));
const limited = shuffled.slice(0, 128);
const bracketSize = 2 ** Math.floor(Math.log2(limited.length));
currentRound = limited.slice(0, bracketSize);

  if (bracketSize < 2) {
    alert("Esse modo ainda não tem músicas suficientes.");
    return;
  }

  started = true;
  currentRound = limited.slice(0, bracketSize);
  nextRound = [];
  currentIndex = 0;
  champion = null;
  loadingPhase = false;
  loadingText = "";
  finalsHistory = {
    quarter: [],
    semi: [],
    final: [],
    quarterWinners: [],
    semiWinners: [],
    finalWinner: null
  };

  undoAvailable = true;
  lastState = null;

  saveTournamentProgress();
  render();
}
  

async function chooseTrack(winner) {
  lastState = {
    currentRound: [...currentRound],
    nextRound: [...nextRound],
    currentIndex: currentIndex
  };

  nextRound.push(winner);
  currentIndex += 2;

  if (currentIndex < currentRound.length) {
    saveTournamentProgress();
    render();
    return;
  }

  if (currentRound.length === 4) {
    finalsHistory.semi = [...currentRound];
    finalsHistory.semiWinners = [...nextRound];
  }

  if (currentRound.length === 2) {
    finalsHistory.final = [...currentRound];
    finalsHistory.finalWinner = nextRound[0];
  }

  if (nextRound.length === 1) {
  champion = nextRound[0];
  saveChampion(champion);
  clearTournamentProgress();
  render();
  return;
}

  if (nextRound.length <= 64) {
    currentRound = shuffle([...nextRound]);
  } else {
    currentRound = [...nextRound];
  }

  nextRound = [];
  currentIndex = 0;

  const nextPhase = roundNames[currentRound.length] || "Próxima fase";
  loadingText = nextPhase;
  loadingPhase = true;
  saveTournamentProgress();
  render();

  setTimeout(() => {
    loadingPhase = false;
    saveTournamentProgress();
    render();
  }, 900);
}

function chooseTrackByIndex(index) {
  const track = currentRound[index];
  if (!track) return;
  chooseTrack(track);
}

async function generateChampionImage() {
  const card = document.querySelector(".share-card");
  if (!card || typeof html2canvas === "undefined") {
    alert("Erro ao gerar imagem.");
    return null;
  }

  card.classList.add("export-mode");

  const canvas = await html2canvas(card, {
    scale: 2,
    backgroundColor: null
  });

  card.classList.remove("export-mode");

  return canvas.toDataURL("image/png");
}

async function downloadChampionImage() {
  const dataUrl = await generateChampionImage();
  if (!dataUrl || !champion) return;

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `soundclash-${champion.title}.png`;
  link.click();
}

async function shareChampion() {
  if (!champion) return;

  const text = `🎵 Meu campeão no SoundClash foi: ${champion.title} - ${champion.artist}`;
  const dataUrl = await generateChampionImage();

  if (!dataUrl) {
    alert("Não foi possível gerar a imagem.");
    return;
  }

  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const file = new File([blob], "soundclash-campeao.png", { type: "image/png" });

  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({
      title: "SoundClash",
      text,
      files: [file]
    }).catch(() => {});
    return;
  }

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "soundclash-campeao.png";
  link.click();
}
 
function undoMove() {
  if (!undoAvailable || !lastState) return;

  currentRound = [...lastState.currentRound];
  nextRound = [...lastState.nextRound];
  currentIndex = lastState.currentIndex;

  undoAvailable = false;
  lastState = null;

  render();
}

function handleRoute() {
  const path = window.location.pathname.toLowerCase();

  if (path === "/general") {
    startGame("general");
    return;
  }

  if (path === "/international") {
    startGame("international");
    return;
  }

  if (path === "/brazil") {
    startGame("brazil");
    return;
  }

  render();
}

function saveTournamentProgress() {
  const progress = {
    started,
    currentRound,
    nextRound,
    currentIndex,
    champion,
    finalsHistory,
    currentMode,
    loadingPhase,
    loadingText,
    lastState,
    undoAvailable
  };

  localStorage.setItem(
    TOURNAMENT_PROGRESS_KEY,
    JSON.stringify(progress)
  );
}

function loadTournamentProgress() {
  const raw = localStorage.getItem(TOURNAMENT_PROGRESS_KEY);
  if (!raw) return false;

  try {
    const progress = JSON.parse(raw);

    started = progress.started || false;
    currentRound = progress.currentRound || [];
    nextRound = progress.nextRound || [];
    currentIndex = progress.currentIndex || 0;
    champion = progress.champion || null;
    finalsHistory = progress.finalsHistory || {
      quarter: [],
      semi: [],
      final: [],
      quarterWinners: [],
      semiWinners: [],
      finalWinner: null
    };
    currentMode = progress.currentMode || "general";
    loadingPhase = progress.loadingPhase || false;
    loadingText = progress.loadingText || "";
    lastState = progress.lastState || null;
    undoAvailable = progress.undoAvailable ?? true;

    return true;
  } catch {
    return false;
  }
}

function clearTournamentProgress() {
  localStorage.removeItem(TOURNAMENT_PROGRESS_KEY);
}

const path = window.location.pathname.toLowerCase();
const routeMode =
  path === "/brazil" ? "brazil" :
  path === "/international" ? "international" :
  path === "/general" ? "general" :
  null;

const hasSavedProgress = loadTournamentProgress();

if (routeMode) {
  if (
    hasSavedProgress &&
    currentMode === routeMode &&
    currentRound.length > 0
  ) {
    render();
  } else {
    handleRoute();
  }
} else {
  clearTournamentProgress();
  started = false;
  champion = null;
  currentMode = null;
  currentRound = [];
  nextRound = [];
  currentIndex = 0;
  render();
}

window.addEventListener("popstate", () => {
  const currentPath = window.location.pathname.toLowerCase();

  if (currentPath === "/" || currentPath === "") {
    clearTournamentProgress();
    started = false;
    champion = null;
    currentMode = null;
    currentRound = [];
    nextRound = [];
    currentIndex = 0;
    finalsHistory = {
      quarter: [],
      semi: [],
      final: [],
      quarterWinners: [],
      semiWinners: [],
      finalWinner: null
    };
    render();
    return;
  }

  handleRoute();
});


function goHome() {
  clearTournamentProgress();
  started = false;
  champion = null;
  currentRound = [];
  nextRound = [];
  currentIndex = 0;
  finalsHistory = {
    quarter: [],
    semi: [],
    final: [],
    quarterWinners: [],
    semiWinners: [],
    finalWinner: null
  };

  
  render();
}
