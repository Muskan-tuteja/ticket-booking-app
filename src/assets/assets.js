import logo from "./logo.png";
import profile from './profile.png'

export const assets = {
  logo,
  profile,

}

export const dummyTrailers = [
  {
    image: "https://assets-prd.ignimgs.com/2024/12/03/snow-white-2025-replacement-button-1733251158379.jpg",
    videoUrl: "https://www.youtube.com/watch?v=iV46TJKL8cU",
   
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=9gghKcpVxd4",
  },
  {
    image: "https://m.media-amazon.com/images/M/MV5BNDAzMDVhYjktMTk2ZS00Zjk3LWI4YWUtMDY1NjI5MDgxYzk5XkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Dq6PmipyFuE",
  },
  {
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00378770-fshzjevtnf-portrait.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6bg5tM2jmUU&list=RD6bg5tM2jmUU&start_radio=1",
  },
 
];





const dummyCastsData = [
  {
    "name": "Robert Downey Jr.", "profile_path":
      "https://images.squarespace-cdn.com/content/v1/662d6dbc571bdb21fdbc79b5/74f0978e-7e70-4fe4-a8dc-c05112b758ca/16735402991293.jpg",
  },
  {
    "name": "Ajay Devgn", "profile_path":
     "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg",
  },
  {
    "name": "Dilip Kumar", "profile_path":
     "https://cdn.britannica.com/46/199946-050-0D1F2F1A/Dilip-Kumar-2008.jpg",
  },
  {
    "name": "Ayushmann Khurrana", "profile_path":
      "https://assets.gqindia.com/photos/66193c524cae6d217224ece4/1:1/w_1080,h_1080,c_limit/GQ-Hype-Ayushmann-Khurrana.jpg",
  },
  {
    "name": "Jimmy Shergill", "profile_path":
      "https://static.toiimg.com/thumb/msid-106936882,width-1280,height-720,resizemode-4/106936882.jpg",
  },
  {
    "name": "Tiger Shroff", "profile_path":
    "https://m.media-amazon.com/images/M/MV5BNjUyMTQyNDA2M15BMl5BanBnXkFtZTgwNDI4ODEzOTE@._V1_.jpg",
  },
  {
    "name": "Suniel Shetty", "profile_path":
      "https://in.bmscdn.com/iedb/artist/images/website/poster/large/suniel-shetty-2291-09-09-2019-01-21-33.jpg",
  },
  {
    "name": "Rajkummar Rao", "profile_path":
      "https://assets.gqindia.com/photos/66c5896bbf8b2a8d872f4fc6/16:9/w_1920,h_1080,c_limit/Stree%202%20actor%20Rajkummar%20Rao.jpg",
  },
  {
    "name": "varun dhawan", "profile_path":
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Varun_Dhawan_promoting_Badrinath_Ki_Dulhania.jpg",
  },
  {
    "name": " akshay kumar", "profile_path":
      "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    "name": "sanjay dutt", "profile_path":
      "https://m.media-amazon.com/images/M/MV5BNzU2NTgwNzY1OF5BMl5BanBnXkFtZTcwMjQxNzcxOA@@._V1_.jpg",
  },
  {
    "name": "Aamir khan", "profile_path":
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Aamir_Khan_at_the_success_bash_of_Secret_Superstar.jpg",
  },
  
];

export const dummyShowData = [
  {
    "_id": "1001",
    "id": 1001,
    "title":"Mere Husband Ki Biwi",
    "overview":"An epic fantasy adventure of lost kingdoms.",
    "poster_path": "https://liveindia.tv/wp-content/uploads/2025/02/Box-office.jpg",
    "backdrop_path":"https://i.ytimg.com/vi/kPDPBU8eVuo/maxresdefault.jpg",
    "genres":[
      {"id":28 , "name":"Action"},
      {"id":12 , "name":"Adventure"},
      {"id":14 , "name":"Fantasy"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-04-22",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":6.5,
    "vote_count": 98234, 
    "runtime":114
  },
  {
    "_id": "1002",
    "id": 1002,
    "title":"Azzad",
    "overview":"Thrilling action in the heart of the desert.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYzdhNWQzMzItMzI0NC00N2M3LTg0MzctMjBmYzMzMDFiMGFjXkEyXkFqcGc@._V1_.jpg",
    "backdrop_path":"https://glamsham.com/wp-content/uploads/2025/01/Azaad-Review_pic-courtesy-Instagram.jpg",
    "genres":[
      {"id":28 , "name":"Action"},
      {"id":53 , "name":"Thriller"},
      {"id":80 , "name":"Crime"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-05-22",
    "original_language": "en",
    "tagline" : "Survive the storm",
    "vote_average":7.5,
    "vote_count": 123435, 
    "runtime":117
  },
  {
    "_id": "1003",
    "id": 1003,
    "title":"Space Odyssey",
    "overview":"Journey through the stars and beyond.",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/a/ab/Jewel_Thief_%E2%80%93_The_Heist_Begins_poster.jpg",
    "backdrop_path":"https://i.ytimg.com/vi/_dUNLPNfS8s/maxresdefault.jpg",
    "genres":[
      {"id":878 , "name":"Sci-Fi"},
      {"id":12 , "name":"Adventure"},
      {"id":28 , "name":"Action"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-06-01",
    "original_language": "en",
    "tagline" : "Explore the unknown",
    "vote_average":8.5,
    "vote_count": 12342,
    "runtime":120
  },
  {
    "_id": "1004",
    "id": 1004,
    "title":"Sky Force",
    "overview":"A daring aerial battle across nations.",
    "poster_path": "https://bollyspice.com/wp-content/uploads/2025/01/IMG_4306.jpeg",
    "backdrop_path":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sky_Force_poster.jpg/250px-Sky_Force_poster.jpg",
    "genres":[
      {"id":28 , "name":"Action"},
      {"id":10752 , "name":"War"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-06-19",
    "original_language": "en",
    "tagline" : "Fight for the skies",
    "vote_average":7.5,
    "vote_count": 9234,
    "runtime":117
  },
  {
    "_id": "1005",
    "id": 1005,
    "title":"Bhool Chuk Maaf",
    "overview":"A story of love, loss, and forgiveness.",
    "poster_path": "https://www.deccanchronicle.com/h-upload/2025/05/24/1921145-342-bhool-chuk-maaf.webp",
    "backdrop_path":"https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Bhool_Chuk_Maaf_film_poster.jpg/250px-Bhool_Chuk_Maaf_film_poster.jpg",
    "genres":[
      {"id":18 , "name":"Drama"},
      {"id":10749 , "name":"Romance"},
      {"id":35 , "name":"Comedy"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-04-19",
    "original_language": "en",
    "tagline" : "Forgive and forget",
    "vote_average":7.5,
    "vote_count": 4234,
    "runtime":117
  },
  {
    "_id": "1006",
    "id": 1006,
    "title":"Cyber Chase",
    "overview":"A hacker's journey through the digital world.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNWZhOGU0MTktNWNkMS00MWNmLWFiYTktOWRkNTJhYzlkNzQyXkEyXkFqcGc@._V1_.jpg",
    "backdrop_path":"https://m.media-amazon.com/images/M/MV5BNzBmOWI1MWUtODI4MS00ZmEzLTkxYmMtOGQ0YzMwZTI3YTJhXkEyXkFqcGc@._V1_.jpg",
    "genres":[
      {"id":28 , "name":"Action"},
      {"id":878 , "name":"Sci-Fi"},
      {"id":53 , "name":"Thriller"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-08-10",
    "original_language": "en",
    "tagline" : "Hack the world",
    "vote_average":5.5,
    "vote_count": 1934,
    "runtime":117
  },
  {
    "_id": "1007",
    "id": 1007,
    "title":"The Bhootnii",
    "overview":"A supernatural journey into fear and mystery.",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/The_Bhootnii_poster.jpg/250px-The_Bhootnii_poster.jpg",
    "backdrop_path":"https://upload.wikimedia.org/wikipedia/en/3/38/The_Bhootnii_poster.jpg",
    "genres":[
      {"id":27 , "name":"Horror"},
      {"id":53 , "name":"Thriller"},
      {"id":9648 , "name":"Mystery"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-08-15",
    "original_language": "en",
    "tagline" : "Face your fears",
    "vote_average":9.5,
    "vote_count": 2234,
    "runtime":117
  },
  {
    "_id": "1008",
    "id": 1008,
    "title":"Chhori 2",
    "overview":"Haunting secrets in a mysterious mansion.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNTFhOTE4MWItZTdmZS00NTI0LTliM2ItNTM4ZjM5MjE0MTYxXkEyXkFqcGc@._V1_.jpg",
    "backdrop_path":"https://static.theprint.in/wp-content/uploads/2025/04/ANI-20250403074427_CvcA05m.jpg?compress=true&quality=80&w=376&dpr=2.6",
    "genres":[
      {"id":27 , "name":"Horror"},
      {"id":53 , "name":"Thriller"},
      {"id":9648 , "name":"Mystery"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-09-17",
    "original_language": "en",
    "tagline" : "Unlock the unknown",
    "vote_average":8.5,
    "vote_count": 1234,
    "runtime":127
  },
{
  "_id": "1015",
  "id": 1015,
  "title":"Sapno Ki Duniya",
  "overview":"A heartwarming story of friendship and dreams coming true in modern India.",
  "poster_path": "https://via.placeholder.com/150",
  "backdrop_path": "https://rukminim2.flixcart.com/image/480/640/kt1u3rk0/book/e/o/t/sapno-ki-duniya-original-imag6hpk7ggtvz68.jpeg?q=90",
  "genres":[
    {"id":35 , "name":"Comedy"},
    {"id":18 , "name":"Drama"}
  ],
  "casts" : dummyCastsData,
  "release_date": "2026-02-10",
  "original_language": "hi",
  "tagline" : "Where dreams meet reality",
  "vote_average":0.0,
  "vote_count": 0, 
  "runtime":130
},

  {
  "_id": "1010",
  "id": 1010,
  "title":"Autumn Mystery",
  "overview":"A thrilling story unfolding in the cold November nights.",
  "poster_path": "https://via.placeholder.com/150",
  "backdrop_path": "https://m.media-amazon.com/images/M/MV5BODIzZmQzMTItZGY1YS00MmU4LWE5ZjgtNmFlMjQyMGZiY2FhXkEyXkFqcGc@._V1_.jpg",
  "genres":[
    {"id":53 , "name":"Thriller"},
    {"id":9648 , "name":"Mystery"}
  ],
  "casts" : dummyCastsData,
  "release_date": "2025-11-10",
  "original_language": "en",
  "tagline" : "Mystery in the air",
  "vote_average":0.0,
  "vote_count": 0, 
  "runtime":125
},

{
  "_id": "1011",
  "id": 1011,
  "title":"Winter Tales",
  "overview":"Epic adventures set in December chill.",
  "poster_path": "https://m.media-amazon.com/images/M/MV5BYzQyNGM3NTEtYWNkYy00ODVmLWI3ODgtMDU2ZTA2MDUzZjZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYzQyNGM3NTEtYWNkYy00ODVmLWI3ODgtMDU2ZTA2MDUzZjZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "genres":[
    {"id":14 , "name":"Fantasy"},
    {"id":12 , "name":"Adventure"}
  ],
  "casts" : dummyCastsData,
  "release_date": "2025-12-18",
  "original_language": "en",
  "tagline" : "Magic in the winter",
  "vote_average":0.0,
  "vote_count": 0, 
  "runtime":130
},
{
  "_id": "1014",
  "id": 1014,
  "title":"Nayi Udaan",
  "overview":"A motivational drama about chasing dreams and overcoming obstacles.",
  "poster_path": "https://via.placeholder.com/150",
  "backdrop_path": "https://m.media-amazon.com/images/I/41qM2oczXjL._UF1000,1000_QL80_.jpg",
  "genres":[
    {"id":18 , "name":"Drama"},
    {"id":10749 , "name":"Romance"}
  ],
  "casts" : dummyCastsData,
  "release_date": "2026-01-15",
  "original_language": "hi",
  "tagline" : "Dreams take flight",
  "vote_average":0.0,
  "vote_count": 0, 
  "runtime":138
}
,
{
  "_id": "1013",
  "id": 1013,
  "title":"Bharat Veer",
  "overview":"An action-packed patriotic thriller featuring daring adventures across India.",
  "poster_path": "https://via.placeholder.com/150",
  "backdrop_path": "https://m.media-amazon.com/images/I/71DOtoHvh7L._UF1000,1000_QL80_.jpg",
  "genres":[
    {"id":28 , "name":"Action"},
    {"id":10752 , "name":"War"}
  ],
  "casts" : dummyCastsData,
  "release_date": "2025-12-05",
  "original_language": "hi",
  "tagline" : "Courage runs in our veins",
  "vote_average":0.0,
  "vote_count": 0, 
  "runtime":135
}

]

// assets/assets.js me add karein
export const seatsData = [
  { id: "A1", type: "VIP", bookedBy: null },
  { id: "A2", type: "VIP", bookedBy: null },
  { id: "A3", type: "VIP", bookedBy: null },
  { id: "B1", type: "Regular", bookedBy: null },
  { id: "B2", type: "Regular", bookedBy: null },
  { id: "B3", type: "Regular", bookedBy: null },
  { id: "C1", type: "Regular", bookedBy: null },
  { id: "C2", type: "Regular", bookedBy: null },
  { id: "C3", type: "Regular", bookedBy: null },
];




export const dummyDateTimeData = {
  "2025-05-22": [
    { showId: 101, time:"2025-05-22T01:00:00.000Z" },
    { showId: 102, time:"2025-05-22T03:00:00.000Z" },
    { showId: 103, time:"2025-05-22T07:00:00.000Z" },
  ],
  "2025-04-22": [
    { showId: 104, time:"2025-04-22T01:00:00.000Z" },
    { showId: 105, time:"2025-04-22T03:00:00.000Z" },
    { showId: 106, time:"2025-04-22T07:00:00.000Z" },
  ],
  "2025-06-01": [
    { showId: 107, time:"2025-06-01T01:00:00.000Z" },
    { showId: 108, time:"2025-06-01T03:00:00.000Z" },
    { showId: 109, time:"2025-06-01T07:00:00.000Z" },
  ],
  "2025-06-19": [
    { showId: 110, time:"2025-06-19T01:00:00.000Z" },
    { showId: 111, time:"2025-06-19T03:00:00.000Z" },
    { showId: 112, time:"2025-06-19T07:00:00.000Z" },
  ],
  "2025-04-19": [
    { showId: 113, time:"2025-04-19T01:00:00.000Z" },
    { showId: 114, time:"2025-04-19T03:00:00.000Z" },
    { showId: 115, time:"2025-04-19T07:00:00.000Z" },
  ],
  "2025-08-10": [
    { showId: 116, time:"2025-08-10T01:00:00.000Z" },
    { showId: 117, time:"2025-08-10T03:00:00.000Z" },
    { showId: 118, time:"2025-08-10T07:00:00.000Z" },
  ],
  "2025-08-15": [
    { showId: 119, time:"2025-08-15T01:00:00.000Z" },
    { showId: 120, time:"2025-08-15T03:00:00.000Z" },
    { showId: 121, time:"2025-08-15T07:00:00.000Z" },
  ],
  "2025-09-17": [
    { showId: 122, time:"2025-09-17T01:00:00.000Z" },
    { showId: 123, time:"2025-09-17T03:00:00.000Z" },
    { showId: 124, time:"2025-09-17T07:00:00.000Z" },
  ]
}

export const dummyDashboardDate = {
  totalBookings: 14,
  totalRevenue: 1517,
  totalUsers: 5,
  activeShows: [
    {
      _id: "1001",
      movie: dummyShowData[0],
      showDateTime:"2025-05-22T01:00:00.000Z",
      showPrice: 60,
      occupiedSeats: {
        A1: "user_1",
            B1: "user_2",
            C3: "user_3",
      },
    },
    {
      _id: "1002",
      movie: dummyShowData[1],
      showDateTime:"2025-05-22T07:00:00.000Z",
      showPrice: 100,
      occupiedSeats: {
        D1: "A001",
        D2: "A001",
        D3: "A001",
      },
    },
    {
      _id: "1003",
      movie: dummyShowData[2],
      showDateTime:"2025-06-01T01:00:00.000Z",
      showPrice: 90,
      occupiedSeats: {
        c1: "A001",
        c2: "A001",
        h3: "A001",
      },
    },
    {
      _id: "1004",
      movie: dummyShowData[3],
      showDateTime:"2025-06-19T03:00:00.000Z",
      showPrice: 90,
      occupiedSeats: {
        c1: "A001",
        c2: "A001",
        h3: "A001",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "B001",
    user: { name: "Muskan" },
    show: {
      showId: 1004,
      movie: dummyShowData[0],
      showDateTime: "2025-06-19T03:00:00.000Z",
      showPrice: 59,
    },
    amount: 118,
    bookedSeats: ["D1", "D2"],
    isPaid: false,
      status: "Pending",
  },
  {
    _id: "B002",
    user: { name: "Rahul" },
    show: {
      showId: 1001,
      movie: dummyShowData[1],
      showDateTime: "2025-04-22T01:00:00.000Z",
      showPrice: 99,
    },
    amount: 99, // 1 seat * 99
    bookedSeats: ["A1"],
    isPaid: true,
    status: "Confirmed",
  },
  {
    _id: "B003",
    user: { name: "Aditi" },
    show: {
      showId: 1003,
      movie: dummyShowData[2],
      showDateTime: "2025-06-01T03:00:00.000Z",
      showPrice: 49,
    },
    amount: 147, // 3 seats * 49
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: false,
     status: "Pending",
  },
  {
    _id: "B004",
    user: { name: "Karan" },
    show: {
      showId: 1006,
      movie: dummyShowData[3],
      showDateTime: "2025-08-10T07:00:00.000Z",
      showPrice: 120,
    },
    amount: 240, // 2 seats * 120
    bookedSeats: ["B1", "B2"],
    isPaid: true,
      status: "Confirmed",
  },
  {
    _id: "B005",
    user: { name: "Sneha" },
    show: {
      showId: 1008,
      movie: dummyShowData[4],
      showDateTime: "2025-09-17T03:00:00.000Z",
      showPrice: 80,
    },
    amount: 140,
    bookedSeats: ["C1", "C2", "C3"],
    isPaid: false,
       status: "Pending",
  },
];

