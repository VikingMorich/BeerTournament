const initialState = {
  beerList: [
    { loser: 'Romo', winner: 'Moriche', beers: 4, id: 1 },
    { loser: 'Moriche', winner: 'Casvil', beers: 2, id: 2 },
    { loser: 'DonCalzon', winner: 'Oylla', beers: 1, id: 3 }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
