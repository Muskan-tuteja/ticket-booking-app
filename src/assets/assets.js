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
     "title":"In the lists Lands",
     "overview":"hello movie",
     "poster_path": "https://i.ytimg.com/vi/grVVw5oWh9E/sddefault.jpg",
    "backdrop_path":"https://img.theweek.in/content/dam/week/week/review/movies/images/2025/2/21/biwi.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-4-22",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":6.516,
    "runtime":114



  },
  {
    "_id": "1002",
     "id": 1002,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://m.media-amazon.com/images/M/MV5BYzdhNWQzMzItMzI0NC00N2M3LTg0MzctMjBmYzMzMDFiMGFjXkEyXkFqcGc@._V1_.jpg",
    "backdrop_path":"https://glamsham.com/wp-content/uploads/2025/01/Azaad-Review_pic-courtesy-Instagram.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-5-22",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":7.516,
    "runtime":117
  },
  {
     "_id": "1003",
     "id": 1003,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://upload.wikimedia.org/wikipedia/en/a/ab/Jewel_Thief_%E2%80%93_The_Heist_Begins_poster.jpg",
    "backdrop_path":"https://i.ytimg.com/vi/_dUNLPNfS8s/maxresdefault.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-6-01",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":8.516,
    "runtime":120
  },
  {
    "_id": "1004",
     "id": 1004,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://bollyspice.com/wp-content/uploads/2025/01/IMG_4306.jpeg",
    "backdrop_path":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sky_Force_poster.jpg/250px-Sky_Force_poster.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-6-19",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":7.516,
    "runtime":117
  },
  {
    "_id": "1005",
     "id": 1005,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://www.deccanchronicle.com/h-upload/2025/05/24/1921145-342-bhool-chuk-maaf.webp",
    "backdrop_path":"https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Bhool_Chuk_Maaf_film_poster.jpg/250px-Bhool_Chuk_Maaf_film_poster.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-4-19",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":7.516,
    "runtime":117
  },
  {
    "_id": "1006",
     "id": 1006,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://m.media-amazon.com/images/M/MV5BNWZhOGU0MTktNWNkMS00MWNmLWFiYTktOWRkNTJhYzlkNzQyXkEyXkFqcGc@._V1_.jpg",
    "backdrop_path":"https://m.media-amazon.com/images/M/MV5BNzBmOWI1MWUtODI4MS00ZmEzLTkxYmMtOGQ0YzMwZTI3YTJhXkEyXkFqcGc@._V1_.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-8-10",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":7.516,
    "runtime":117
  },
  {
    "_id": "1007",
     "id": 1007,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://m.media-amazon.com/images/S/pv-target-images/c60f68ca378775d0512b366fde20309bf62397641820b4389659a7fa20ae85bf.jpg",
    "backdrop_path":"https://upload.wikimedia.org/wikipedia/en/3/38/The_Bhootnii_poster.jpg",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-8-15",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":7.516,
    "runtime":117
  },
  {
    "_id": "1008",
     "id": 1008,
     "title":"In the list Lands",
     "overview":"hello movie",
     "poster_path": "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/The_Bhootnii_poster.jpg/250px-The_Bhootnii_poster.jpg",
    "backdrop_path":"https://static.theprint.in/wp-content/uploads/2025/04/ANI-20250403074427_CvcA05m.jpg?compress=true&quality=80&w=376&dpr=2.6",
    "genres":[
      {"id":28 , "name":"action"},
      {"id":14 , "name":"Fantasy"},
      {"id":12 , "name":"Adventure"}
    ],
    "casts" : dummyCastsData,
    "release_date": "2025-9-17",
    "original_language": "en",
    "tagline" : "Be There and be square",
    "vote_average":7.516,
    "runtime":117
  }
 
]

export const dummyDateTimeData={
  "2025-5-22":[
    {
    "showId": 101,
      "time":"2025-05-22T01:00:00.000Z",
    
    },
    {
    "showId": 102,
      "time": "2025-05-22T03:00:00.000Z",
     
    },
    {
    "showId": 103,
      "time": "2025-05-22T07:00:00.000Z",
      
    },

  ],
  "2025-4-22":[
    {
    "showId": 104,
      "time":"2025-04-22T01:00:00.000Z",
     
    },
    {
    "showId": 105,
      "time": "2025-04-22T03:00:00.000Z",
      
    },
    {
    "showId": 106,
      "time": "2025-04-22T07:00:00.000Z",
      
    },

  ],
  "2025-6-01":[
    {
    "showId": 107,
      "time":"2025-06-01T01:00:00.000Z",
    
    },
    {
    "showId": 108,
      "time": "2025-06-01T03:00:00.000Z",
      
    },
    {
    "showId": 109,
      "time": "2025-06-01T07:00:00.000Z",
     
    },

  ],
  "2025-6-19":[
    {
    "showId": 110,
      "time":"2025-06-19T01:00:00.000Z",
     
    },
    {
    "showId": 111,
      "time": "2025-06-19T03:00:00.000Z",
   
    },
    {
    "showId": 112,
      "time": "2025-06-19T07:00:00.000Z",
    
    },

  ],
  "2025-4-19":[
    {
    "showId": 113,
      "time":"2025-04-19T01:00:00.000Z",
     
    },
    {
    "showId": 114,
      "time": "2025-04-19T03:00:00.000Z",
   
    },
    {
    "showId": 115,
      "time": "2025-04-19T07:00:00.000Z",
    
    },

  ],
  "2025-08-10":[
    {
    "showId": 116,
      "time":"2025-08-10T01:00:00.000Z",
     
    },
    {
    "showId": 117,
      "time": "2025-08-10T03:00:00.000Z",
   
    },
    {
    "showId": 118,
      "time": "2025-08-10T07:00:00.000Z",
    
    },

  ],
  "2025-08-15":[
    {
    "showId": 119,
      "time":"2025-08-15T01:00:00.000Z",
     
    },
    {
    "showId": 120,
      "time": "2025-08-15T03:00:00.000Z",
   
    },
    {
    "showId": 121,
      "time": "2025-08-15T07:00:00.000Z",
    
    },

  ],
  "2025-09-17":[
    {
    "showId": 122,
      "time":"2025-09-17T01:00:00.000Z",
    
    },
    {
    "showId": 123,
      "time": "2025-09-17T03:00:00.000Z",
   
    },
    {
    "showId": 124,
      "time": "2025-09-17T07:00:00.000Z",
    
    },

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
  },
];

