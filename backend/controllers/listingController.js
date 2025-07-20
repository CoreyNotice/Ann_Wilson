const baseURL = 'http://localhost:4000';
exports.getAllListings = (req, res) => {
  const listings = [
    {
      id: 1,
      title: 'Modern Condo',
      imageUrl: `${baseURL}/assets/photo1.jpg`,
      price: 400000
    },
    {
      id: 2,
      title: 'Luxury Villa',
  imageUrl: `${baseURL}/assets/photo2.jpg`,
      price: 950000
    },
    {
      id: 3,
      title: 'Modo',
      imageUrl: `${baseURL}/assets/photo3.jpg`,
      price: 5465644
    },
    {
      id: 4,
      title: 'Lu Villa',
      imageUrl: `${baseURL}/assets/photo4.jpg`,
      price: 46564654
    },
    {
      id: 5,
      title: 'noice home',
      imageUrl: `${baseURL}/assets/photo5.jpg`,
      price: 98452145
    },
    {
      id: 6,
      title: 'rich Home here',
      imageUrl: `${baseURL}/assets/photo6.jpg`,
      price: 87965412
    },
    {
      id: 7,
      title: '64 Tom ave.',
      imageUrl: `${baseURL}/assets/photo7.jpg`,
      price: 98465521
    },
    {
      id: 8,
      title: '85 GO PLace',
      imageUrl: `${baseURL}/assets/photo8.jpg`,
      price: 950000
    }
  ];

  res.json(listings);
};
