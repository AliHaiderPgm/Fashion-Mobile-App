// const USERS = {
//     1: {
//       id: 1,
//       username: 'Alexia Jane',
//       avatar: require('../../assets/images/users/32.jpeg'),
//     },
//     2: {
//       id: 2,
//       username: 'Jacky Depp',
//       avatar: require('../../assets/images/users/35.jpeg'),
//     },
//   };

import icons from '../components/constants/icons';

//   const REVIEWS = {
//     1: {
//       id: 1,
//       date: '21 May, 2022',
//       author: USERS[1],
//       rating: 7,
//       text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
//     },
//     2: {
//       id: 2,
//       date: '14 July, 2021',
//       author: USERS[2],
//       rating: 9.1,
//       text: 'Lorem ipsum dolor sit amet.',
//     },
//   };

//   export const HOTELS = {
//     1: {
//       id: 1,
//      tile: 'Argos in Cappadrequire(ocia../../assets/men_featured//)cp-1.jpeg'),
//      price 'Turkey, Cappadocia',
//      ratin: 9,
//      pricePeerDay '130$',
//       type: 'HOTEL',//    },
//     2: {
//       id: 2,
//       title: 'Sultan Cave Suites',
//       image: require('../../assets/images/hotels/cp-2.jpeg'),
//       price: 'Turkey, Cappadocia',
//       rating: 9.3,
//       pricePeerDay: '230$',
//       type: 'HOTEL',
//     },
//     3: {
//       id: 3,
//       title: 'Villa Brunella',
//       image: require('../../assets/images/hotels/capri-1.jpeg'),
//       price: 'Italy, Capri',
//       rating: 9.4,
//       pricePeerDay: '280$',
//       type: 'HOTEL',
//     },
//     4: {
//       id: 4,
//       title: 'Hotel La Floridiana',
//       image: require('../../assets/images/hotels/capri-2.jpeg'),
//       price: 'Italy, Capri',
//       rating: 9.3,
//       pricePeerDay: '190$',
//       type: 'HOTEL',
//     },
//     5: {
//       id: 5,
//       title: "Le Taha'a by Pearl Resorts",
//       image: require('../../assets/images/hotels/polynesia-1.jpeg'),
//       price: 'Polynesia, Bora Bora',
//       rating: 9.2,
//       pricePeerDay: '250$',
//       type: 'HOTEL',
//     },
//     6: {
//       id: 6,
//       title: 'Le Meridien Bora Bora',
//       image: require('../../assets/images/hotels/polynesia-2.jpeg'),
//       price: 'Polynesia, Bora Bora',
//       rating: 9.4,
//       pricePeerDay: '270$',
//       type: 'HOTEL',
//     },
//     7: {
//       id: 7,
//       title: 'InterContinental Phuket Resort',
//       image: require('../../assets/images/hotels/phuket-1.jpg'),
//       price: 'Thailand, Phuket',
//       rating: 9.2,
//       pricePeerDay: '210$',
//       type: 'HOTEL',
//     },
//     8: {
//       id: 8,
//       title: 'The Nai Harn',
//       image: require('../../assets/images/hotels/phuket-2.jpeg'),
//       price: 'Thailand, Phuket',
//       rating: 9.4,
//       pricePeerDay: '430$',
//       type: 'HOTEL',
//     },
//     9: {
//       id: 9,
//       title: 'Hotel Poseidon',
//       image: require('../../assets/images/hotels/ac-1.jpeg'),
//       price: 'Italy, Amalfi Coast',
//       rating: 9.2,
//       pricePeerDay: '330$',
//       type: 'HOTEL',
//     },
//     10: {
//       id: 10,
//       title: 'Le Agavi Hotel',
//       image: require('../../assets/images/hotels/ac-2.jpeg'),
//       price: 'Italy, Amalfi Coast',
//       rating: 9.4,
//       pricePeerDay: '350$',
//       type: 'HOTEL',
//     },
//     11: {
//       id: 11,
//       title: 'Hotel Casa 1800 Granada',
//       image: require('../../assets/images/hotels/granada-1.jpeg'),
//       price: 'Spain, Granada',
//       rating: 9.2,
//       pricePeerDay: '230$',
//       type: 'HOTEL',
//     },
//     12: {
//       id: 12,
//       title: 'Parador de Granada',
//       image: require('../../assets/images/hotels/granada-2.jpeg'),
//       price: 'Spain, Granada',
//       rating: 9.4,
//       pricePeerDay: '120$',
//       type: 'HOTEL',
//     },

//     13: {
//       id: 13,
//       title: 'Konansou',
//       image: require('../../assets/images/hotels/cb-1.jpeg'),
//       price: 'Japan, Cherry blossoms',
//       rating: 9.2,
//       pricePeerDay: '740$',
//       type: 'HOTEL',
//     },
//     14: {
//       id: 14,
//       title: 'Shuhokaku Kogetsu',
//       image: require('../../assets/images/hotels/cb-2.jpeg'),
//       price: 'Japan, Cherry blossoms',
//       rating: 9.4,
//       pricePeerDay: '240$',
//       type: 'HOTEL',
//     },
//   };

export const TOP_PRODUCTS = [
  {
    id: 1,
    image: require('../../assets/topProduct-7-min.jpg'),
    title: 'Amalfi Coast',
    price: 200,
    description:
      'The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more',
    rating: 9.4,
    //   gallery: [
    //     require('../../assets/images/trips/3722dd4614a5a58f2ec8ebf17c22f76d.jpeg'),
    //     require('../../assets/images/trips/af933a359582704eee05be198e882be0.jpeg'),
    //   ],
    //   reviews: [REVIEWS[2], REVIEWS[1]],
    //   hotels: [HOTELS[9], HOTELS[10]],
    type: '150',
  },
  {
    id: 4,
    image: require('../../assets/topProduct-11.jpg'),
    title: 'Granada',
    price: 300,
    description:
      'Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain',
    rating: 8.9,
    //   gallery: [],
    //   reviews: [REVIEWS[1], REVIEWS[2]],
    //   hotels: [HOTELS[11], HOTELS[12]],
    type: 'PRODUCT',
  },
  {
    id: 6,
    image: require('../../assets/topProduct-3-min.jpg'),
    title: 'Cherry blossoms',
    price: 98,
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    rating: 7.4,
    //   gallery: [],
    //   reviews: [REVIEWS[1], REVIEWS[2]],
    //   hotels: [HOTELS[13], HOTELS[14]],
    type: 'PRODUCT',
  },
];

export const PRODUCTS = [
  {
    id: 5,
    image: require('../../assets/topProduct-4-min.jpg'),
    title: 'Cappadocia',
    price: 350,
    description:
      "Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.",
    rating: 9.2,
    //   gallery: [
    //     require('../../assets/images/trips/4c73f37e70dded978374960fb29360f2.jpeg'),
    //     require('../../assets/images/trips/55608c7000bb15d24ee022f3d3f0bf8a.jpeg'),
    //     require('../../assets/images/trips/c68a4484f89d0c087ebdaa43629d2a7a.jpeg'),
    //   ],
    //   reviews: [REVIEWS[1], REVIEWS[2]],
    //   hotels: [HOTELS[1], HOTELS[2]],
    type: 'PRODUCT',
  },
  {
    id: 2,
    image: require('../../assets/topProduct-5-min.jpg'),
    title: 'Capri',
    price: 75,
    description:
      'Capri is an island of a thousand faces, where visitors can walk the trails skirting the cliffs above the Mediterranean in total solitude, dive into the crystalline waters of its rocky shore, or plunge into the vibrant crowds of the Piazzetta and shop in the most fashionable boutiques in the world.',
    rating: 9.1,
    //   gallery: [],
    //   reviews: [REVIEWS[2], REVIEWS[1]],
    //   hotels: [HOTELS[3], HOTELS[4]],
    type: 'PRODUCT',
  },
  {
    id: 3,
    image: require('../../assets/topProduct-6-min.jpg'),
    title: 'Bora Bora',
    price: 250,
    description:
      'Learn how you can travel Bora Bora on a budget and how overwater bungalows are possible for cheap plus tips on keeping Bora Bora trip costs low.',
    rating: 8.9,
    //   gallery: [],
    //   reviews: [REVIEWS[1], REVIEWS[2]],
    //   hotels: [HOTELS[5], HOTELS[6]],
    type: 'PRODUCT',
  },
  {
    id: 7,
    image: require('../../assets/topProduct-2-min.jpg'),
    title: 'Phuket',
    price: 200,
    description:
      'Phuket is the largest island in Thailand. It is located in the Andaman Sea in southern Thailand',
    rating: 9.2,
    //   gallery: [],
    //   reviews: [REVIEWS[2], REVIEWS[1]],
    //   hotels: [HOTELS[7], HOTELS[8]],
    type: 'PRODUCT',
  },
];

export const SEARCH_PRODUCTS = [...PRODUCTS, ...TOP_PRODUCTS].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

// export const SEARCH_HOTELS = [...Object.values(HOTELS)].map(item => ({
//   ...item,
//   id: Math.random().toString(),
// }));

// export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];
export const data = [
  {
    uri: 'https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

  },
  {
    uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80'
  },
  {
    uri: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    uri: 'https://images.unsplash.com/photo-1522682078546-47888fe04e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    uri: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
]
export const brands = [
  icons.adidas,
  icons.zara,
  icons.fendi,
  icons.nike
]

export const MENS_FEATURED_PRODUCTS = [
  {
    id: 1,
  image: require('../../assets/men_featured/men_featured_product_1.jpg'),
  title: "acoburn0",
  price: 1414,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut.",
  rating: 5
}, {
  id: 2,
  image: require('../../assets/men_featured/men_featured_product_2.jpg'),
  title: "khaffenden1",
  price: 1118,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut,",
  rating: 3
}, {
  id: 3,
  image: require('../../assets/men_featured/men_featured_product_3.jpg'),
  title: "mgoskar2",
  price: 1048,
  description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, ",
  rating: 2
}, {
  id: 4,
  image: require('../../assets/men_featured/men_featured_product_4.jpg'),
  title: "lbricksey3",
  price: 832,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, ",
  rating: 2
}, {
  id: 5,
  image: require('../../assets/men_featured/men_featured_product_5.jpg'),
  title: "ckepe4",
  price: 1321,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non,",
  rating: 5
}, {
  id: 6,
  image: require('../../assets/men_featured/men_featured_product_6.jpg'),
  title: "mscallan5",
  price: 324,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit ",
  rating: 2
}, {
  id: 7,
  image: require('../../assets/men_featured/men_featured_product_7.jpg'),
  title: "mhaggith6",
  price: 809,
  description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam ",
  rating: 3
}, {
  id: 8,
  image: require('../../assets/men_featured/men_featured_product_8.jpg'),
  title: "mfozzard7",
  price: 278,
  description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, ",
  rating: 2
}, {
  id: 9,
  image: require('../../assets/men_featured/men_featured_product_9.jpg'),
  title: "dbras8",
  price: 375,
  description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus ",
  rating: 4
}]
export const CHILD_FEATURED_PRODUCTS = [
  {
  id: 1,
  image: require('../../assets/child_featured/child_featured_product_1.jpg'),
  title: "acoburn0",
  price: 1414,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut.",
  rating: 5
}, {
  id: 2,
  image: require('../../assets/child_featured/child_featured_product_2.jpg'),
  title: "khaffenden1",
  price: 1118,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut,",
  rating: 3
}, {
  id: 3,
  image: require('../../assets/child_featured/child_featured_product_3.jpg'),
  title: "mgoskar2",
  price: 1048,
  description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, ",
  rating: 2
}, {
  id: 4,
  image: require('../../assets/child_featured/child_featured_product_4.jpg'),
  title: "lbricksey3",
  price: 832,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, ",
  rating: 2
}, {
  id: 5,
  image: require('../../assets/child_featured/child_featured_product_5.jpg'),
  title: "ckepe4",
  price: 1321,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non,",
  rating: 5
}, {
  id: 6,
  image: require('../../assets/child_featured/child_featured_product_6.jpg'),
  title: "mscallan5",
  price: 324,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit ",
  rating: 2
}, {
  id: 7,
  image: require('../../assets/child_featured/child_featured_product_7.jpg'),
  title: "mhaggith6",
  price: 809,
  description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam ",
  rating: 3
}, 
]
export const WOMENS_FEATURED_PRODUCTS = [
  {
    id: 1,
  image: require('../../assets/women_featured/women_featured_product_1.jpg'),
  title: "acoburn0",
  price: 1414,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut.",
  rating: 5
}, {
  id: 2,
  image: require('../../assets/women_featured/women_featured_product_2.jpg'),
  title: "khaffenden1",
  price: 1118,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut,",
  rating: 3
}, {
  id: 3,
  image: require('../../assets/women_featured/women_featured_product_3.jpg'),
  title: "mgoskar2",
  price: 1048,
  description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, ",
  rating: 2
}, {
  id: 4,
  image: require('../../assets/women_featured/women_featured_product_4.jpg'),
  title: "lbricksey3",
  price: 832,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, ",
  rating: 2
}, {
  id: 5,
  image: require('../../assets/women_featured/women_featured_product_5.jpg'),
  title: "ckepe4",
  price: 1321,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non,",
  rating: 5
}, {
  id: 6,
  image: require('../../assets/women_featured/women_featured_product_6.jpg'),
  title: "mscallan5",
  price: 324,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit ",
  rating: 2
}, {
  id: 7,
  image: require('../../assets/women_featured/women_featured_product_7.jpg'),
  title: "mhaggith6",
  price: 809,
  description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam ",
  rating: 3
}, {
  id: 8,
  image: require('../../assets/women_featured/women_featured_product_8.jpg'),
  title: "mfozzard7",
  price: 278,
  description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, ",
  rating: 2
}, {
  id: 9,
  image: require('../../assets/women_featured/women_featured_product_9.jpg'),
  title: "dbras8",
  price: 375,
  description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus ",
  rating: 4
}]

export const CATEGORIES = [
  {
    title: "Men",
    image: require('../../assets/male_model_category.jpg')
  },
  {
    title: "Child",
    image: require('../../assets/child_model_category.jpg')
  },
  {
    title: "Women",
    image: require('../../assets/female_model_category.jpg')
  },
  {
    title: "Brands",
    icon: "star"
  }
]