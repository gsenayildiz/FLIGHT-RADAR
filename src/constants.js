export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.391297",
    bl_lng: "25.698739",
    tr_lat: "43.25524",
    tr_lng: "44.693651",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "e552ca3b70msh455368d175ebc4bp1e7692jsn5d54ecf619e2",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/detail",
  params: { flight: null },
  headers: {
    "x-rapidapi-key": "e552ca3b70msh455368d175ebc4bp1e7692jsn5d54ecf619e2",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
