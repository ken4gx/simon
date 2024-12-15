const wilaya = [
  {id:1,text: 'Adrar'},
  {id:2,text: 'Chlef'},
  {id:3,text: 'Laghouat'},
  {id:4,text: 'Oum El Bouaghi'},
  {id:5,text: 'Batna'},
  {id:6,text: 'Béjaïa'},
  {id:7,text: 'Biskra'},
  {id:8,text: 'Béchar'},
  {id:9,text: 'Blida'},
  {id:10,text: 'Bouira'},
  {id:11,text: 'Tamanrasset'},
  {id:12,text: 'Tébessa'},
  {id:13,text: 'Tlemcen'},
  {id:14,text: 'Tiaret'},
  {id:15,text: 'Tizi Ouzou'},
  {id:16,text: 'Alger'},
  {id:17,text: 'Djelfa'},
  {id:18,text: 'Jijel'},
  {id:19,text: 'Sétif'},
  {id:20,text: 'Saïda'},
  {id:21,text: 'Skikda'},
  {id:22,text: 'Sidi Bel Abbès'},
  {id:23,text: 'Annaba'},
  {id:24,text: 'Guelma'},
  {id:25,text: 'Constantine'},
  {id:26,text: 'Médéa'},
  {id:27,text: 'Mostaganem'},
  {id:28,text: "M\'Sila"},
  {id:29,text: 'Mascara'},
  {id:30,text: 'Ouargla'},
  {id:31,text: 'Oran'},
  {id:32,text: 'El Bayadh'},
  {id:33,text: 'Illizi'},
  {id:34,text: 'Bordj Bou Arreridj'},
  {id:35,text: 'Boumerdès'},
  {id:36,text: 'El Tarf'},
  {id:37,text: 'Tindouf'},
  {id:38,text: 'Tissemsilt'},
  {id:39,text: 'El Oued'},
  {id:40,text: 'Khenchela'},
  {id:41,text: 'Souk Ahras'},
  {id:42,text: 'Tipaza'},
  {id:43,text: 'Mila'},
  {id:44,text: 'Aïn Defla'},
  {id:45,text: 'Naâma'},
  {id:46,text: 'Aïn Témouchent'},
  {id:47,text: 'Ghardaïa'},
  {id:48,text: 'Relizane'},
  {id:49,text: 'Timimoun'},
  {id:50,text: 'Bordj Baji Mokhtar'},
  {id:51,text: 'Ouled Djellal'},
  {id:52,text: 'Béni Abbès'},
  {id:53,text: 'In Salah'},
  {id:54,text: 'In Guezzam'},
  {id:55,text: 'Touggourt'},
  {id:56,text: 'Djanet'},
  {id:57,text: 'El M\'ghaier'},
  {id:58,text: 'El Meniaa'},
];

const commune = {
  1: [
    {
      id: 22,
      text: 'Timekten',
    },
    {
      id: 6,
      text: 'Bouda',
    },
    {
      id: 13,
      text: 'Ouled Ahmed Timmi',
    },
    {
      id: 1,
      text: 'Adrar',
    },
    {
      id: 9,
      text: 'Fenoughil',
    },
    {
      id: 10,
      text: 'In Zghmir',
    },
    {
      id: 16,
      text: 'Reggane',
    },
    {
      id: 17,
      text: 'Sali',
    },
    {
      id: 18,
      text: 'Sebaa',
    },
    {
      id: 27,
      text: 'Tsabit',
    },
    {
      id: 21,
      text: 'Tamest',
    },
    {
      id: 20,
      text: 'Tamantit',
    },
    {
      id: 26,
      text: 'Tit',
    },
    {
      id: 28,
      text: 'Zaouiet Kounta',
    },
    {
      id: 2,
      text: 'Akabli',
    },
    {
      id: 4,
      text: 'Aoulef',
    },
  ],
  2: [
    {
      id: 60,
      text: 'Talassa',
    },
    {
      id: 63,
      text: 'Zeboudja',
    },
    {
      id: 41,
      text: 'El Hadjadj',
    },
    {
      id: 52,
      text: 'Ouled Ben Abdelkader',
    },
    {
      id: 30,
      text: 'Ain Merane',
    },
    {
      id: 37,
      text: 'Breira',
    },
    {
      id: 51,
      text: 'Ouled Abbes',
    },
    {
      id: 48,
      text: 'Oued Fodda',
    },
    {
      id: 34,
      text: 'Beni Rached',
    },
    {
      id: 45,
      text: 'Herenfa',
    },
    {
      id: 59,
      text: 'Tadjena',
    },
    {
      id: 43,
      text: 'El Marsa',
    },
    {
      id: 39,
      text: 'Chlef',
    },
    {
      id: 54,
      text: 'Oum Drou',
    },
    {
      id: 55,
      text: 'Sendjas',
    },
    {
      id: 56,
      text: 'Sidi Abderrahmane',
    },
    {
      id: 57,
      text: 'Sidi Akkacha',
    },
    {
      id: 62,
      text: 'Tenes',
    },
    {
      id: 32,
      text: 'Beni  Bouattab',
    },
    {
      id: 42,
      text: 'El Karimia',
    },
    {
      id: 44,
      text: 'Harchoun',
    },
    {
      id: 36,
      text: 'Bouzeghaia',
    },
    {
      id: 61,
      text: 'Taougrit',
    },
    {
      id: 33,
      text: 'Beni Haoua',
    },
    {
      id: 29,
      text: 'Abou El Hassane',
    },
    {
      id: 49,
      text: 'Oued Goussine',
    },
    {
      id: 38,
      text: 'Chettia',
    },
    {
      id: 47,
      text: 'Moussadek',
    },
    {
      id: 53,
      text: 'Ouled Fares',
    },
    {
      id: 35,
      text: 'Boukadir',
    },
    {
      id: 50,
      text: 'Oued Sly',
    },
    {
      id: 58,
      text: 'Sobha',
    },
    {
      id: 31,
      text: 'Benairia',
    },
    {
      id: 46,
      text: 'Labiod Medjadja',
    },
    {
      id: 40,
      text: 'Dahra',
    },
  ],
  3: [
    {
      id: 67,
      text: 'El Beidha',
    },
    {
      id: 73,
      text: 'Gueltat Sidi Saad',
    },
    {
      id: 69,
      text: 'Brida',
    },
    {
      id: 66,
      text: 'Ain Sidi Ali',
    },
    {
      id: 85,
      text: 'Tadjemout',
    },
    {
      id: 74,
      text: 'Hadj Mechri',
    },
    {
      id: 87,
      text: 'Taouiala',
    },
    {
      id: 71,
      text: 'El Ghicha',
    },
    {
      id: 86,
      text: 'Tadjrouna',
    },
    {
      id: 82,
      text: 'Sebgag',
    },
    {
      id: 83,
      text: 'Sidi Bouzid',
    },
    {
      id: 80,
      text: 'Oued Morra',
    },
    {
      id: 79,
      text: 'Laghouat',
    },
    {
      id: 81,
      text: "Oued M'zi",
    },
    {
      id: 78,
      text: 'Ksar El Hirane',
    },
    {
      id: 70,
      text: 'El Assafia',
    },
    {
      id: 84,
      text: 'Sidi Makhlouf',
    },
    {
      id: 75,
      text: 'Hassi Delaa',
    },
    {
      id: 76,
      text: "Hassi R'mel",
    },
    {
      id: 65,
      text: 'Ain Madhi',
    },
    {
      id: 72,
      text: 'El Haouaita',
    },
    {
      id: 77,
      text: 'Kheneg',
    },
    {
      id: 68,
      text: 'Benacer Benchohra',
    },
    {
      id: 64,
      text: 'Aflou',
    },
  ],
  4: [
    {
      id: 104,
      text: 'Fkirina',
    },
    {
      id: 102,
      text: 'El Fedjoudj Boughrara Sa',
    },
    {
      id: 91,
      text: 'Ain Fekroun',
    },
    {
      id: 113,
      text: 'Rahia',
    },
    {
      id: 107,
      text: 'Meskiana',
    },
    {
      id: 100,
      text: 'El Belala',
    },
    {
      id: 95,
      text: 'Behir Chergui',
    },
    {
      id: 106,
      text: 'Ksar Sbahi',
    },
    {
      id: 115,
      text: 'Souk Naamane',
    },
    {
      id: 111,
      text: 'Ouled Zouai',
    },
    {
      id: 112,
      text: 'Oum El Bouaghi',
    },
    {
      id: 88,
      text: 'Ain Babouche',
    },
    {
      id: 94,
      text: 'Ain Zitoun',
    },
    {
      id: 97,
      text: 'Bir Chouhada',
    },
    {
      id: 89,
      text: 'Ain Beida',
    },
    {
      id: 96,
      text: 'Berriche',
    },
    {
      id: 116,
      text: 'Zorg',
    },
    {
      id: 93,
      text: "Ain M'lila",
    },
    {
      id: 109,
      text: 'Ouled Gacem',
    },
    {
      id: 110,
      text: 'Ouled Hamla',
    },
    {
      id: 99,
      text: 'El Amiria',
    },
    {
      id: 114,
      text: 'Sigus',
    },
    {
      id: 108,
      text: 'Oued Nini',
    },
    {
      id: 90,
      text: 'Ain Diss',
    },
    {
      id: 98,
      text: 'Dhalaa',
    },
    {
      id: 101,
      text: 'El Djazia',
    },
    {
      id: 92,
      text: 'Ain Kercha',
    },
    {
      id: 103,
      text: 'El Harmilia',
    },
    {
      id: 105,
      text: 'Hanchir Toumghani',
    },
  ],
  5: [
    {
      id: 150,
      text: 'Maafa',
    },
    {
      id: 139,
      text: 'Gosbat',
    },
    {
      id: 176,
      text: 'Timgad',
    },
    {
      id: 170,
      text: 'Taxlent',
    },
    {
      id: 161,
      text: 'Ouled Si Slimane',
    },
    {
      id: 148,
      text: 'Lemcene',
    },
    {
      id: 169,
      text: 'Talkhamt',
    },
    {
      id: 164,
      text: 'Ras El Aioun',
    },
    {
      id: 163,
      text: 'Rahbat',
    },
    {
      id: 160,
      text: 'Ouled Sellem',
    },
    {
      id: 140,
      text: 'Guigba',
    },
    {
      id: 172,
      text: 'Teniet El Abed',
    },
    {
      id: 123,
      text: 'Batna',
    },
    {
      id: 136,
      text: 'Fesdis',
    },
    {
      id: 154,
      text: 'Oued Chaaba',
    },
    {
      id: 141,
      text: 'Hidoussa',
    },
    {
      id: 145,
      text: 'Ksar Bellezma',
    },
    {
      id: 152,
      text: 'Merouana',
    },
    {
      id: 155,
      text: 'Oued El Ma',
    },
    {
      id: 147,
      text: 'Lazrou',
    },
    {
      id: 167,
      text: 'Seriana',
    },
    {
      id: 177,
      text: 'Zanet El Beida',
    },
    {
      id: 151,
      text: 'Menaa',
    },
    {
      id: 174,
      text: 'Tigharghar',
    },
    {
      id: 119,
      text: 'Ain Yagout',
    },
    {
      id: 128,
      text: 'Boumia',
    },
    {
      id: 132,
      text: 'Djerma',
    },
    {
      id: 135,
      text: 'El Madher',
    },
    {
      id: 162,
      text: 'Ouyoun El Assafir',
    },
    {
      id: 171,
      text: 'Tazoult',
    },
    {
      id: 127,
      text: 'Boumagueur',
    },
    {
      id: 153,
      text: 'N Gaous',
    },
    {
      id: 165,
      text: 'Sefiane',
    },
    {
      id: 120,
      text: 'Arris',
    },
    {
      id: 173,
      text: 'Tighanimine',
    },
    {
      id: 117,
      text: 'Ain Djasser',
    },
    {
      id: 134,
      text: 'El Hassi',
    },
    {
      id: 166,
      text: 'Seggana',
    },
    {
      id: 175,
      text: 'Tilatou',
    },
    {
      id: 137,
      text: 'Foum Toub',
    },
    {
      id: 142,
      text: 'Ichemoul',
    },
    {
      id: 143,
      text: 'Inoughissen',
    },
    {
      id: 129,
      text: 'Bouzina',
    },
    {
      id: 146,
      text: 'Larbaa',
    },
    {
      id: 126,
      text: 'Boulhilat',
    },
    {
      id: 130,
      text: 'Chemora',
    },
    {
      id: 122,
      text: 'Barika',
    },
    {
      id: 125,
      text: 'Bitam',
    },
    {
      id: 149,
      text: 'M Doukal',
    },
    {
      id: 121,
      text: 'Azil Abedelkader',
    },
    {
      id: 133,
      text: 'Djezzar',
    },
    {
      id: 157,
      text: 'Ouled Ammar',
    },
    {
      id: 138,
      text: 'Ghassira',
    },
    {
      id: 144,
      text: 'Kimmel',
    },
    {
      id: 168,
      text: 'T Kout',
    },
    {
      id: 118,
      text: 'Ain Touta',
    },
    {
      id: 124,
      text: 'Beni Foudhala El Hakania',
    },
    {
      id: 159,
      text: 'Ouled Fadel',
    },
    {
      id: 158,
      text: 'Ouled Aouf',
    },
    {
      id: 131,
      text: 'Chir',
    },
    {
      id: 156,
      text: 'Oued Taga',
    },
  ],
  6: [
    {
      id: 212,
      text: 'Sidi Ayad',
    },
    {
      id: 186,
      text: 'Barbacha',
    },
    {
      id: 199,
      text: 'Leflaye',
    },
    {
      id: 206,
      text: 'Kendira',
    },
    {
      id: 213,
      text: 'Sidi-Aich',
    },
    {
      id: 225,
      text: 'Tifra',
    },
    {
      id: 227,
      text: 'Tinebdar',
    },
    {
      id: 200,
      text: 'El Kseur',
    },
    {
      id: 201,
      text: 'Fenaia Il Maten',
    },
    {
      id: 229,
      text: 'Toudja',
    },
    {
      id: 198,
      text: 'Dra El Caid',
    },
    {
      id: 207,
      text: 'Kherrata',
    },
    {
      id: 187,
      text: 'Bejaia',
    },
    {
      id: 210,
      text: 'Oued Ghir',
    },
    {
      id: 191,
      text: 'Benimaouche',
    },
    {
      id: 188,
      text: 'Beni Djellil',
    },
    {
      id: 202,
      text: 'Feraoun',
    },
    {
      id: 214,
      text: 'Smaoun',
    },
    {
      id: 226,
      text: 'Timezrit',
    },
    {
      id: 209,
      text: 'Melbou',
    },
    {
      id: 215,
      text: 'Souk El Tenine',
    },
    {
      id: 219,
      text: 'Tamridjet',
    },
    {
      id: 194,
      text: 'Boukhelifa',
    },
    {
      id: 217,
      text: 'Tala Hamza',
    },
    {
      id: 224,
      text: 'Tichy',
    },
    {
      id: 179,
      text: "Ait R'zine",
    },
    {
      id: 204,
      text: 'Ighil-Ali',
    },
    {
      id: 180,
      text: 'Ait-Smail',
    },
    {
      id: 197,
      text: 'Darguina',
    },
    {
      id: 221,
      text: 'Taskriout',
    },
    {
      id: 185,
      text: 'Aokas',
    },
    {
      id: 228,
      text: "Tizi-N'berber",
    },
    {
      id: 178,
      text: 'Adekar',
    },
    {
      id: 189,
      text: "Beni K'sila",
    },
    {
      id: 220,
      text: 'Taourit Ighil',
    },
    {
      id: 181,
      text: 'Akbou',
    },
    {
      id: 195,
      text: 'Chellata',
    },
    {
      id: 205,
      text: 'Ighram',
    },
    {
      id: 218,
      text: 'Tamokra',
    },
    {
      id: 183,
      text: 'Amalou',
    },
    {
      id: 193,
      text: 'Bouhamza',
    },
    {
      id: 208,
      text: "M'cisna",
    },
    {
      id: 211,
      text: 'Seddouk',
    },
    {
      id: 190,
      text: 'Beni-Mallikeche',
    },
    {
      id: 192,
      text: 'Boudjellil',
    },
    {
      id: 222,
      text: 'Tazmalt',
    },
    {
      id: 182,
      text: 'Akfadou',
    },
    {
      id: 196,
      text: 'Chemini',
    },
    {
      id: 216,
      text: 'Souk Oufella',
    },
    {
      id: 223,
      text: 'Tibane',
    },
    {
      id: 203,
      text: 'Ouzellaguen',
    },
    {
      id: 184,
      text: 'Amizour',
    },
  ],
  7: [
    {
      id: 241,
      text: 'El Feidh',
    },
    {
      id: 249,
      text: 'Lichana',
    },
    {
      id: 235,
      text: 'Bouchakroun',
    },
    {
      id: 252,
      text: 'Mekhadma',
    },
    {
      id: 239,
      text: 'Djemorah',
    },
    {
      id: 236,
      text: 'Branis',
    },
    {
      id: 246,
      text: 'El Outaya',
    },
    {
      id: 245,
      text: 'El Kantara',
    },
    {
      id: 248,
      text: 'Khenguet Sidi Nadji',
    },
    {
      id: 231,
      text: 'Ain Zaatout',
    },
    {
      id: 262,
      text: 'Zeribet El Oued',
    },
    {
      id: 253,
      text: 'Meziraa',
    },
    {
      id: 233,
      text: 'Biskra',
    },
    {
      id: 243,
      text: 'El Hadjab',
    },
    {
      id: 254,
      text: "M'lili",
    },
    {
      id: 247,
      text: 'Foughala',
    },
    {
      id: 242,
      text: 'El Ghrous',
    },
    {
      id: 234,
      text: 'Bordj Ben Azzouz',
    },
    {
      id: 257,
      text: 'Ourlal',
    },
    {
      id: 256,
      text: 'Oumache',
    },
    {
      id: 230,
      text: 'Ain Naga',
    },
    {
      id: 238,
      text: 'Chetma',
    },
    {
      id: 244,
      text: 'El Haouch',
    },
    {
      id: 260,
      text: 'Sidi Okba',
    },
    {
      id: 251,
      text: "M'chouneche",
    },
    {
      id: 250,
      text: 'Lioua',
    },
    {
      id: 261,
      text: 'Tolga',
    },
  ],
  8: [
    {
      id: 264,
      text: 'Bechar',
    },
    {
      id: 268,
      text: 'Boukais',
    },
    {
      id: 275,
      text: 'Lahmar',
    },
    {
      id: 278,
      text: 'Mogheul',
    },
    {
      id: 277,
      text: 'Meridja',
    },
    {
      id: 281,
      text: 'Taghit',
    },
    {
      id: 263,
      text: 'Abadla',
    },
    {
      id: 270,
      text: 'Erg-Ferradj',
    },
    {
      id: 276,
      text: 'Machraa-Houari-Boumediene',
    },
    {
      id: 267,
      text: 'Beni-Ounif',
    },
    {
      id: 280,
      text: 'Tabelbala',
    },
    {
      id: 272,
      text: 'Kenadsa',
    },
  ],
  9: [
    {
      id: 285,
      text: 'Beni Mered',
    },
    {
      id: 305,
      text: 'Ouled Slama',
    },
    {
      id: 302,
      text: 'Mouzaia',
    },
    {
      id: 299,
      text: 'Hammam Elouane',
    },
    {
      id: 291,
      text: 'Bougara',
    },
    {
      id: 307,
      text: 'Souhane',
    },
    {
      id: 300,
      text: 'Larbaa',
    },
    {
      id: 308,
      text: 'Soumaa',
    },
    {
      id: 298,
      text: 'Guerrouaou',
    },
    {
      id: 290,
      text: 'Boufarik',
    },
    {
      id: 301,
      text: 'Meftah',
    },
    {
      id: 294,
      text: 'Chiffa',
    },
    {
      id: 284,
      text: 'Ain Romana',
    },
    {
      id: 303,
      text: 'Oued  Djer',
    },
    {
      id: 297,
      text: 'El-Affroun',
    },
    {
      id: 306,
      text: 'Ouled Yaich',
    },
    {
      id: 295,
      text: 'Chrea',
    },
    {
      id: 296,
      text: 'Djebabra',
    },
    {
      id: 304,
      text: 'Oued El Alleug',
    },
    {
      id: 287,
      text: 'Benkhelil',
    },
    {
      id: 286,
      text: 'Beni-Tamou',
    },
    {
      id: 293,
      text: 'Chebli',
    },
    {
      id: 292,
      text: 'Bouinan',
    },
    {
      id: 289,
      text: 'Bouarfa',
    },
    {
      id: 288,
      text: 'Blida',
    },
  ],
  10: [
    {
      id: 312,
      text: 'Ain Laloui',
    },
    {
      id: 334,
      text: 'Hadjera Zerga',
    },
    {
      id: 342,
      text: 'Mezdour',
    },
    {
      id: 351,
      text: 'Taguedite',
    },
    {
      id: 346,
      text: 'Ridane',
    },
    {
      id: 341,
      text: 'Maamora',
    },
    {
      id: 331,
      text: 'El-Hakimia',
    },
    {
      id: 310,
      text: 'Ahl El Ksar',
    },
    {
      id: 325,
      text: 'Dirah',
    },
    {
      id: 324,
      text: 'Dechmia',
    },
    {
      id: 317,
      text: 'Bechloul',
    },
    {
      id: 352,
      text: 'Ath Mansour',
    },
    {
      id: 347,
      text: 'Saharidj',
    },
    {
      id: 327,
      text: 'El Adjiba',
    },
    {
      id: 328,
      text: 'El Asnam',
    },
    {
      id: 339,
      text: 'M Chedallah',
    },
    {
      id: 319,
      text: 'Bordj Okhriss',
    },
    {
      id: 349,
      text: 'Sour El Ghozlane',
    },
    {
      id: 336,
      text: 'Hanif',
    },
    {
      id: 323,
      text: 'Chorfa',
    },
    {
      id: 344,
      text: 'Ouled Rached',
    },
    {
      id: 311,
      text: 'Ain El Hadjar',
    },
    {
      id: 309,
      text: 'Aghbalou',
    },
    {
      id: 345,
      text: 'Raouraoua',
    },
    {
      id: 330,
      text: 'El Khabouzia',
    },
    {
      id: 318,
      text: 'Bir Ghbalou',
    },
    {
      id: 321,
      text: 'Bouira',
    },
    {
      id: 313,
      text: 'Ain Turk',
    },
    {
      id: 315,
      text: 'Ait Laaziz',
    },
    {
      id: 314,
      text: 'Ain-Bessem',
    },
    {
      id: 332,
      text: 'El-Mokrani',
    },
    {
      id: 348,
      text: 'Souk El Khemis',
    },
    {
      id: 316,
      text: 'Aomar',
    },
    {
      id: 326,
      text: 'Djebahia',
    },
    {
      id: 329,
      text: 'El Hachimia',
    },
    {
      id: 335,
      text: 'Haizer',
    },
    {
      id: 350,
      text: 'Taghzout',
    },
    {
      id: 320,
      text: 'Bouderbala',
    },
    {
      id: 322,
      text: 'Boukram',
    },
    {
      id: 333,
      text: 'Guerrouma',
    },
    {
      id: 338,
      text: 'Lakhdaria',
    },
    {
      id: 340,
      text: 'Maala',
    },
    {
      id: 337,
      text: 'Kadiria',
    },
    {
      id: 353,
      text: "Z'barbar (El Isseri )",
    },
    {
      id: 343,
      text: 'Oued El Berdi',
    },
  ],
  11: [
    {
      id: 362,
      text: 'Tazrouk',
    },
    {
      id: 354,
      text: 'Abelsa',
    },
    {
      id: 361,
      text: 'Tamanrasset',
    },
    {
      id: 355,
      text: 'Ain Amguel',
    },
    {
      id: 359,
      text: 'Idles',
    },
  ],
  12: [
    {
      id: 380,
      text: 'El-Houidjbet',
    },
    {
      id: 379,
      text: 'El-Aouinet',
    },
    {
      id: 381,
      text: 'Ferkane',
    },
    {
      id: 385,
      text: 'Negrine',
    },
    {
      id: 368,
      text: 'Bir Mokkadem',
    },
    {
      id: 367,
      text: 'Bir Dheheb',
    },
    {
      id: 388,
      text: 'Saf Saf El Ouesra',
    },
    {
      id: 382,
      text: 'Guorriguer',
    },
    {
      id: 366,
      text: 'Bekkaria',
    },
    {
      id: 371,
      text: 'Boulhaf Dyr',
    },
    {
      id: 387,
      text: 'Oum Ali',
    },
    {
      id: 370,
      text: 'Boukhadra',
    },
    {
      id: 374,
      text: 'El Malabiod',
    },
    {
      id: 386,
      text: 'Ouenza',
    },
    {
      id: 375,
      text: 'El Meridj',
    },
    {
      id: 364,
      text: 'Ain Zerga',
    },
    {
      id: 389,
      text: 'Stah Guentis',
    },
    {
      id: 377,
      text: 'El Ogla',
    },
    {
      id: 376,
      text: 'El Mezeraa',
    },
    {
      id: 365,
      text: 'Bedjene',
    },
    {
      id: 384,
      text: 'Morsott',
    },
    {
      id: 391,
      text: 'Telidjen',
    },
    {
      id: 372,
      text: 'Cheria',
    },
    {
      id: 378,
      text: 'El Ogla El Malha',
    },
    {
      id: 369,
      text: 'Bir-El-Ater',
    },
    {
      id: 390,
      text: 'Tebessa',
    },
    {
      id: 383,
      text: 'Hammamet',
    },
    {
      id: 373,
      text: 'El Kouif',
    },
  ],
  13: [
    {
      id: 400,
      text: 'Bab El Assa',
    },
    {
      id: 441,
      text: 'Terny Beni Hediel',
    },
    {
      id: 424,
      text: 'Mansourah',
    },
    {
      id: 404,
      text: 'Beni Mester',
    },
    {
      id: 394,
      text: 'Ain Ghoraba',
    },
    {
      id: 411,
      text: 'Chetouane',
    },
    {
      id: 399,
      text: 'Amieur',
    },
    {
      id: 393,
      text: 'Ain Fezza',
    },
    {
      id: 422,
      text: 'Honnaine',
    },
    {
      id: 403,
      text: 'Beni Khellad',
    },
    {
      id: 436,
      text: 'Sidi Djillali',
    },
    {
      id: 410,
      text: 'Bouihi',
    },
    {
      id: 427,
      text: 'Nedroma',
    },
    {
      id: 426,
      text: "M'sirda Fouaga",
    },
    {
      id: 425,
      text: "Marsa Ben M'hidi",
    },
    {
      id: 437,
      text: 'Sidi Medjahed',
    },
    {
      id: 402,
      text: 'Beni Boussaid',
    },
    {
      id: 434,
      text: 'Sebdou',
    },
    {
      id: 417,
      text: 'El Gor',
    },
    {
      id: 414,
      text: 'El Aricha',
    },
    {
      id: 409,
      text: 'Bouhlou',
    },
    {
      id: 423,
      text: 'Maghnia',
    },
    {
      id: 420,
      text: 'Hammam Boughrara',
    },
    {
      id: 444,
      text: 'Zenata',
    },
    {
      id: 430,
      text: 'Ouled Riyah',
    },
    {
      id: 421,
      text: 'Hennaya',
    },
    {
      id: 435,
      text: 'Sidi Abdelli',
    },
    {
      id: 440,
      text: 'Souk Tleta',
    },
    {
      id: 408,
      text: 'Bensekrane',
    },
    {
      id: 418,
      text: 'Fellaoucene',
    },
    {
      id: 395,
      text: 'Ain Kebira',
    },
    {
      id: 392,
      text: 'Ain Fetah',
    },
    {
      id: 443,
      text: 'Tlemcen',
    },
    {
      id: 396,
      text: 'Ain Nehala',
    },
    {
      id: 397,
      text: 'Ain Tellout',
    },
    {
      id: 398,
      text: 'Ain Youcef',
    },
    {
      id: 405,
      text: 'Beni Ouarsous',
    },
    {
      id: 416,
      text: 'El Fehoul',
    },
    {
      id: 431,
      text: 'Remchi',
    },
    {
      id: 433,
      text: 'Sebbaa Chioukh',
    },
    {
      id: 439,
      text: 'Souani',
    },
    {
      id: 432,
      text: 'Sabra',
    },
    {
      id: 412,
      text: 'Dar Yaghmoracen',
    },
    {
      id: 419,
      text: 'Ghazaouet',
    },
    {
      id: 438,
      text: 'Souahlia',
    },
    {
      id: 442,
      text: 'Tianet',
    },
    {
      id: 406,
      text: 'Beni Smiel',
    },
    {
      id: 428,
      text: 'Oued Lakhdar',
    },
    {
      id: 429,
      text: 'Ouled Mimoun',
    },
    {
      id: 401,
      text: 'Beni Bahdel',
    },
    {
      id: 407,
      text: 'Beni Snous',
    },
    {
      id: 415,
      text: 'Azail',
    },
    {
      id: 413,
      text: 'Djebala',
    },
  ],
  14: [
    {
      id: 461,
      text: 'Mahdia',
    },
    {
      id: 447,
      text: 'Ain Dzarit',
    },
    {
      id: 472,
      text: 'Sebaine',
    },
    {
      id: 455,
      text: 'Faidja',
    },
    {
      id: 475,
      text: 'Si Abdelghani',
    },
    {
      id: 480,
      text: 'Sougueur',
    },
    {
      id: 485,
      text: 'Tousnina',
    },
    {
      id: 465,
      text: 'Meghila',
    },
    {
      id: 473,
      text: 'Sebt',
    },
    {
      id: 479,
      text: 'Sidi Hosni',
    },
    {
      id: 448,
      text: 'Ain El Hadid',
    },
    {
      id: 456,
      text: 'Frenda',
    },
    {
      id: 482,
      text: 'Takhemaret',
    },
    {
      id: 449,
      text: 'Ain Kermes',
    },
    {
      id: 453,
      text: 'Djebilet Rosfa',
    },
    {
      id: 460,
      text: 'Madna',
    },
    {
      id: 463,
      text: 'Medrissa',
    },
    {
      id: 476,
      text: 'Sidi Abderrahmane',
    },
    {
      id: 459,
      text: 'Ksar Chellala',
    },
    {
      id: 457,
      text: 'Guertoufa',
    },
    {
      id: 474,
      text: 'Serghine',
    },
    {
      id: 486,
      text: 'Zmalet El Emir Abdelkade',
    },
    {
      id: 469,
      text: 'Oued Lilli',
    },
    {
      id: 477,
      text: 'Sidi Ali Mellal',
    },
    {
      id: 454,
      text: 'Djillali Ben Amar',
    },
    {
      id: 462,
      text: 'Mechraa Safa',
    },
    {
      id: 481,
      text: 'Tagdempt',
    },
    {
      id: 450,
      text: 'Bougara',
    },
    {
      id: 458,
      text: 'Hamadia',
    },
    {
      id: 471,
      text: 'Rechaiga',
    },
    {
      id: 484,
      text: 'Tidda',
    },
    {
      id: 467,
      text: 'Nadorah',
    },
    {
      id: 483,
      text: 'Tiaret',
    },
    {
      id: 464,
      text: 'Medroussa',
    },
    {
      id: 466,
      text: 'Mellakou',
    },
    {
      id: 478,
      text: 'Sidi Bakhti',
    },
    {
      id: 446,
      text: 'Ain Deheb',
    },
    {
      id: 451,
      text: 'Chehaima',
    },
    {
      id: 468,
      text: 'Naima',
    },
    {
      id: 445,
      text: 'Ain Bouchekif',
    },
    {
      id: 452,
      text: 'Dahmouni',
    },
    {
      id: 470,
      text: 'Rahouia',
    },
  ],
  15: [
    {
      id: 535,
      text: 'Mizrana',
    },
    {
      id: 522,
      text: 'Idjeur',
    },
    {
      id: 510,
      text: 'Beni-Douala',
    },
    {
      id: 512,
      text: 'Beni-Zikki',
    },
    {
      id: 527,
      text: 'Illoula Oumalou',
    },
    {
      id: 489,
      text: 'Agouni-Gueghrane',
    },
    {
      id: 493,
      text: 'Ait Bouaddou',
    },
    {
      id: 538,
      text: 'Ouadhias',
    },
    {
      id: 547,
      text: "Tizi N'tleta",
    },
    {
      id: 488,
      text: 'Aghribs',
    },
    {
      id: 498,
      text: 'Ait-Chafaa',
    },
    {
      id: 504,
      text: 'Akerrou',
    },
    {
      id: 507,
      text: 'Azeffoun',
    },
    {
      id: 525,
      text: 'Iflissen',
    },
    {
      id: 544,
      text: 'Tigzirt',
    },
    {
      id: 505,
      text: 'Assi-Youcef',
    },
    {
      id: 513,
      text: 'Boghni',
    },
    {
      id: 515,
      text: 'Bounouh',
    },
    {
      id: 533,
      text: 'Mechtras',
    },
    {
      id: 517,
      text: 'Draa-Ben-Khedda',
    },
    {
      id: 540,
      text: 'Sidi Namane',
    },
    {
      id: 543,
      text: 'Tadmait',
    },
    {
      id: 546,
      text: 'Tirmitine',
    },
    {
      id: 494,
      text: 'Ait Boumahdi',
    },
    {
      id: 501,
      text: 'Ait-Toudert',
    },
    {
      id: 509,
      text: 'Beni-Aissi',
    },
    {
      id: 537,
      text: 'Ouacif',
    },
    {
      id: 495,
      text: 'Ait Khellili',
    },
    {
      id: 534,
      text: 'Mekla',
    },
    {
      id: 541,
      text: 'Souama',
    },
    {
      id: 511,
      text: 'Beni-Yenni',
    },
    {
      id: 521,
      text: 'Iboudrarene',
    },
    {
      id: 549,
      text: 'Tizi-Ouzou',
    },
    {
      id: 487,
      text: 'Abi-Youcef',
    },
    {
      id: 490,
      text: 'Ain-El-Hammam',
    },
    {
      id: 502,
      text: 'Ait-Yahia',
    },
    {
      id: 503,
      text: 'Akbil',
    },
    {
      id: 514,
      text: 'Boudjima',
    },
    {
      id: 532,
      text: 'Makouda',
    },
    {
      id: 491,
      text: 'Ain-Zaouia',
    },
    {
      id: 496,
      text: 'Ait Yahia Moussa',
    },
    {
      id: 518,
      text: 'Draa-El-Mizan',
    },
    {
      id: 520,
      text: 'Frikat',
    },
    {
      id: 536,
      text: "M'kira",
    },
    {
      id: 548,
      text: 'Tizi-Gheniff',
    },
    {
      id: 552,
      text: 'Yatafene',
    },
    {
      id: 526,
      text: 'Illilten',
    },
    {
      id: 528,
      text: 'Imsouhal',
    },
    {
      id: 506,
      text: 'Azazga',
    },
    {
      id: 519,
      text: 'Freha',
    },
    {
      id: 524,
      text: 'Ifigha',
    },
    {
      id: 551,
      text: 'Yakourene',
    },
    {
      id: 553,
      text: 'Zekri',
    },
    {
      id: 492,
      text: 'Ait Aggouacha',
    },
    {
      id: 529,
      text: 'Irdjen',
    },
    {
      id: 530,
      text: 'Larbaa Nath Irathen',
    },
    {
      id: 500,
      text: 'Ait-Oumalou',
    },
    {
      id: 550,
      text: 'Tizi-Rached',
    },
    {
      id: 497,
      text: 'Ait-Aissa-Mimoun',
    },
    {
      id: 539,
      text: 'Ouaguenoun',
    },
    {
      id: 545,
      text: 'Timizart',
    },
    {
      id: 531,
      text: 'Maatkas',
    },
    {
      id: 542,
      text: 'Souk-El-Tenine',
    },
    {
      id: 499,
      text: 'Ait-Mahmoud',
    },
    {
      id: 508,
      text: 'Beni Zmenzer',
    },
    {
      id: 523,
      text: 'Iferhounene',
    },
    {
      id: 516,
      text: 'Bouzeguene',
    },
  ],
  16: [
    {
      id: 588,
      text: 'Hussein Dey',
    },
    {
      id: 592,
      text: 'Les Eucalyptus',
    },
    {
      id: 606,
      text: 'Sidi Moussa',
    },
    {
      id: 591,
      text: 'Kouba',
    },
    {
      id: 594,
      text: 'Mohamed Belouzdad',
    },
    {
      id: 555,
      text: 'Ain Taya',
    },
    {
      id: 558,
      text: 'Bab Ezzouar',
    },
    {
      id: 569,
      text: 'Bordj El Kiffan',
    },
    {
      id: 574,
      text: 'Dar El Beida',
    },
    {
      id: 584,
      text: 'El Marsa',
    },
    {
      id: 595,
      text: 'Mohammadia',
    },
    {
      id: 566,
      text: 'Bir Touta',
    },
    {
      id: 598,
      text: 'Ouled Chebel',
    },
    {
      id: 609,
      text: 'Tessala El Merdja',
    },
    {
      id: 587,
      text: 'Herraoua',
    },
    {
      id: 602,
      text: 'Reghaia',
    },
    {
      id: 603,
      text: 'Rouiba',
    },
    {
      id: 593,
      text: 'Maalma',
    },
    {
      id: 600,
      text: 'Rahmania',
    },
    {
      id: 607,
      text: 'Souidania',
    },
    {
      id: 608,
      text: 'Staoueli',
    },
    {
      id: 610,
      text: 'Zeralda',
    },
    {
      id: 559,
      text: 'Baba Hassen',
    },
    {
      id: 577,
      text: 'Douira',
    },
    {
      id: 578,
      text: 'Draria',
    },
    {
      id: 579,
      text: 'El Achour',
    },
    {
      id: 590,
      text: 'Khraissia',
    },
    {
      id: 554,
      text: 'Ain Benian',
    },
    {
      id: 573,
      text: 'Cheraga',
    },
    {
      id: 575,
      text: 'Dely Ibrahim',
    },
    {
      id: 586,
      text: 'Hammamet',
    },
    {
      id: 599,
      text: 'Ouled Fayet',
    },
    {
      id: 556,
      text: 'Alger Centre',
    },
    {
      id: 582,
      text: 'El Madania',
    },
    {
      id: 585,
      text: 'El Mouradia',
    },
    {
      id: 605,
      text: "Sidi M'hamed",
    },
    {
      id: 604,
      text: 'Sehaoula',
    },
    {
      id: 567,
      text: 'Bologhine Ibnou Ziri',
    },
    {
      id: 572,
      text: 'Casbah',
    },
    {
      id: 596,
      text: 'Oued Koriche',
    },
    {
      id: 601,
      text: 'Rais Hamidou',
    },
    {
      id: 564,
      text: 'Bir Mourad Rais',
    },
    {
      id: 565,
      text: 'Birkhadem',
    },
    {
      id: 576,
      text: 'Djasr Kasentina',
    },
    {
      id: 589,
      text: 'Hydra',
    },
    {
      id: 583,
      text: 'El Magharia',
    },
    {
      id: 562,
      text: 'Ben Aknoun',
    },
    {
      id: 563,
      text: 'Beni Messous',
    },
    {
      id: 571,
      text: 'Bouzareah',
    },
    {
      id: 580,
      text: 'El Biar',
    },
    {
      id: 560,
      text: 'Bachedjerah',
    },
    {
      id: 570,
      text: 'Bourouba',
    },
    {
      id: 581,
      text: 'El Harrach',
    },
    {
      id: 597,
      text: 'Oued Smar',
    },
    {
      id: 561,
      text: 'Baraki',
    },
    {
      id: 568,
      text: 'Bordj El Bahri',
    },
    {
      id: 557,
      text: 'Bab El Oued',
    },
  ],
  17: [
    {
      id: 634,
      text: 'Hassi El Euch',
    },
    {
      id: 612,
      text: 'Ain El Ibel',
    },
    {
      id: 626,
      text: 'El Guedid',
    },
    {
      id: 621,
      text: 'Charef',
    },
    {
      id: 618,
      text: 'Benyagoub',
    },
    {
      id: 642,
      text: 'Sidi Baizid',
    },
    {
      id: 637,
      text: "M'liliha",
    },
    {
      id: 622,
      text: 'Dar Chioukh',
    },
    {
      id: 644,
      text: 'Taadmit',
    },
    {
      id: 632,
      text: 'Had Sahary',
    },
    {
      id: 620,
      text: 'Bouira Lahdab',
    },
    {
      id: 613,
      text: 'Ain Fekka',
    },
    {
      id: 643,
      text: 'Sidi Laadjel',
    },
    {
      id: 635,
      text: 'Hassi Fedoul',
    },
    {
      id: 628,
      text: 'El Khemis',
    },
    {
      id: 641,
      text: 'Selmana',
    },
    {
      id: 640,
      text: 'Sed Rahal',
    },
    {
      id: 636,
      text: 'Messaad',
    },
    {
      id: 631,
      text: 'Guettara',
    },
    {
      id: 623,
      text: 'Deldoul',
    },
    {
      id: 646,
      text: 'Zaccar',
    },
    {
      id: 625,
      text: 'Douis',
    },
    {
      id: 627,
      text: 'El Idrissia',
    },
    {
      id: 611,
      text: 'Ain Chouhada',
    },
    {
      id: 624,
      text: 'Djelfa',
    },
    {
      id: 619,
      text: 'Birine',
    },
    {
      id: 639,
      text: 'Oum Laadham',
    },
    {
      id: 629,
      text: 'Faidh El Botma',
    },
    {
      id: 616,
      text: 'Amourah',
    },
    {
      id: 645,
      text: 'Zaafrane',
    },
    {
      id: 630,
      text: 'Guernini',
    },
    {
      id: 615,
      text: 'Ain Oussera',
    },
    {
      id: 617,
      text: 'Benhar',
    },
    {
      id: 614,
      text: 'Ain Maabed',
    },
    {
      id: 633,
      text: 'Hassi Bahbah',
    },
    {
      id: 638,
      text: 'Moudjebara',
    },
  ],
  18: [
    {
      id: 662,
      text: 'Jijel',
    },
    {
      id: 656,
      text: 'El Aouana',
    },
    {
      id: 668,
      text: 'Selma Benziada',
    },
    {
      id: 660,
      text: 'Erraguene Souissi',
    },
    {
      id: 650,
      text: 'Boussif Ouled Askeur',
    },
    {
      id: 674,
      text: 'Ziama Mansouriah',
    },
    {
      id: 651,
      text: 'Chahna',
    },
    {
      id: 659,
      text: 'Emir Abdelkader',
    },
    {
      id: 665,
      text: 'Oudjana',
    },
    {
      id: 672,
      text: 'Taher',
    },
    {
      id: 652,
      text: 'Chekfa',
    },
    {
      id: 657,
      text: 'El Kennar Nouchfi',
    },
    {
      id: 670,
      text: 'Sidi Abdelaziz',
    },
    {
      id: 658,
      text: 'El Milia',
    },
    {
      id: 667,
      text: 'Ouled Yahia Khadrouch',
    },
    {
      id: 666,
      text: 'Ouled Rabah',
    },
    {
      id: 671,
      text: 'Sidi Marouf',
    },
    {
      id: 661,
      text: 'Ghebala',
    },
    {
      id: 669,
      text: 'Settara',
    },
    {
      id: 649,
      text: 'Bouraoui Belhadef',
    },
    {
      id: 655,
      text: 'El Ancer',
    },
    {
      id: 664,
      text: 'Khiri Oued Adjoul',
    },
    {
      id: 654,
      text: 'Djimla',
    },
    {
      id: 663,
      text: 'Kaous',
    },
    {
      id: 673,
      text: 'Texenna',
    },
    {
      id: 647,
      text: "Bordj T'har",
    },
    {
      id: 648,
      text: 'Boudria Beniyadjis',
    },
    {
      id: 653,
      text: 'Djemaa Beni Habibi',
    },
  ],
  19: [
    {
      id: 726,
      text: 'Rosfa',
    },
    {
      id: 721,
      text: 'Oued El Bared',
    },
    {
      id: 734,
      text: "Tizi N'bechar",
    },
    {
      id: 720,
      text: 'Mezloug',
    },
    {
      id: 709,
      text: 'Guellal',
    },
    {
      id: 717,
      text: 'Kasr El Abtal',
    },
    {
      id: 724,
      text: 'Ouled Si Ahmed',
    },
    {
      id: 684,
      text: 'Ait Naoual Mezada',
    },
    {
      id: 685,
      text: 'Ait-Tizi',
    },
    {
      id: 699,
      text: 'Bouandas',
    },
    {
      id: 701,
      text: 'Bousselam',
    },
    {
      id: 713,
      text: 'Hamam Soukhna',
    },
    {
      id: 732,
      text: 'Taya',
    },
    {
      id: 733,
      text: 'Tella',
    },
    {
      id: 680,
      text: 'Ain Oulmene',
    },
    {
      id: 702,
      text: 'Boutaleb',
    },
    {
      id: 714,
      text: 'Hamma',
    },
    {
      id: 725,
      text: 'Ouled Tebben',
    },
    {
      id: 686,
      text: 'Amoucha',
    },
    {
      id: 727,
      text: 'Salah Bey',
    },
    {
      id: 677,
      text: 'Ain Azel',
    },
    {
      id: 679,
      text: 'Ain Lahdjar',
    },
    {
      id: 689,
      text: 'Beidha Bordj',
    },
    {
      id: 697,
      text: 'Bir Haddada',
    },
    {
      id: 711,
      text: 'Guenzet',
    },
    {
      id: 716,
      text: 'Harbil',
    },
    {
      id: 682,
      text: 'Ain-Roua',
    },
    {
      id: 694,
      text: 'Beni Oussine',
    },
    {
      id: 707,
      text: 'El Ouricia',
    },
    {
      id: 700,
      text: 'Bougaa',
    },
    {
      id: 705,
      text: 'Draa-Kebila',
    },
    {
      id: 715,
      text: 'Hammam Guergour',
    },
    {
      id: 729,
      text: 'Setif',
    },
    {
      id: 678,
      text: 'Ain El Kebira',
    },
    {
      id: 703,
      text: 'Dehamcha',
    },
    {
      id: 722,
      text: 'Ouled Addouane',
    },
    {
      id: 683,
      text: 'Ain-Sebt',
    },
    {
      id: 695,
      text: 'Beni-Aziz',
    },
    {
      id: 718,
      text: 'Maaouia',
    },
    {
      id: 690,
      text: 'Bellaa',
    },
    {
      id: 698,
      text: 'Bir-El-Arch',
    },
    {
      id: 708,
      text: 'El-Ouldja',
    },
    {
      id: 730,
      text: 'Tachouda',
    },
    {
      id: 731,
      text: 'Tala-Ifacene',
    },
    {
      id: 728,
      text: 'Serdj-El-Ghoul',
    },
    {
      id: 712,
      text: 'Guidjel',
    },
    {
      id: 723,
      text: 'Ouled Sabor',
    },
    {
      id: 688,
      text: 'Bazer-Sakra',
    },
    {
      id: 706,
      text: 'El Eulma',
    },
    {
      id: 710,
      text: 'Guelta Zerka',
    },
    {
      id: 692,
      text: 'Beni Fouda',
    },
    {
      id: 704,
      text: 'Djemila',
    },
    {
      id: 681,
      text: 'Ain-Legradj',
    },
    {
      id: 691,
      text: 'Beni Chebana',
    },
    {
      id: 693,
      text: 'Beni Ourtilane',
    },
    {
      id: 696,
      text: 'Beni-Mouhli',
    },
    {
      id: 675,
      text: 'Ain Abessa',
    },
    {
      id: 676,
      text: 'Ain Arnat',
    },
    {
      id: 687,
      text: 'Babor',
    },
    {
      id: 719,
      text: 'Maouaklane',
    },
  ],
  20: [
    {
      id: 745,
      text: 'Saida',
    },
    {
      id: 749,
      text: 'Tircine',
    },
    {
      id: 743,
      text: 'Ouled Brahim',
    },
    {
      id: 737,
      text: 'Ain Soltane',
    },
    {
      id: 741,
      text: 'Maamora',
    },
    {
      id: 739,
      text: 'El Hassasna',
    },
    {
      id: 736,
      text: 'Ain Sekhouna',
    },
    {
      id: 748,
      text: 'Sidi Boubekeur',
    },
    {
      id: 744,
      text: 'Ouled Khaled',
    },
    {
      id: 740,
      text: 'Hounet',
    },
    {
      id: 750,
      text: 'Youb',
    },
    {
      id: 738,
      text: 'Doui Thabet',
    },
    {
      id: 746,
      text: 'Sidi Ahmed',
    },
    {
      id: 742,
      text: 'Moulay Larbi',
    },
    {
      id: 735,
      text: 'Ain El Hadjar',
    },
    {
      id: 747,
      text: 'Sidi Amar',
    },
  ],
  21: [
    {
      id: 751,
      text: 'Ain Bouziane',
    },
    {
      id: 783,
      text: 'Salah Bouchaour',
    },
    {
      id: 768,
      text: 'El Hadaiek',
    },
    {
      id: 787,
      text: 'Zerdezas',
    },
    {
      id: 780,
      text: 'Ouled Habbaba',
    },
    {
      id: 759,
      text: 'Beni Oulbane',
    },
    {
      id: 784,
      text: 'Sidi Mezghiche',
    },
    {
      id: 758,
      text: 'Beni Bechir',
    },
    {
      id: 782,
      text: 'Ramdane Djamel',
    },
    {
      id: 761,
      text: 'Bin El Ouiden',
    },
    {
      id: 770,
      text: 'Emjez Edchich',
    },
    {
      id: 786,
      text: 'Tamalous',
    },
    {
      id: 753,
      text: 'Ain Kechra',
    },
    {
      id: 778,
      text: 'Ouldja Boulbalout',
    },
    {
      id: 781,
      text: 'Oum Toub',
    },
    {
      id: 767,
      text: 'El Ghedir',
    },
    {
      id: 775,
      text: 'Kerkara',
    },
    {
      id: 766,
      text: 'El Arrouch',
    },
    {
      id: 788,
      text: 'Zitouna',
    },
    {
      id: 779,
      text: 'Ouled Attia',
    },
    {
      id: 777,
      text: 'Oued Zhour',
    },
    {
      id: 764,
      text: 'Collo',
    },
    {
      id: 763,
      text: 'Cheraia',
    },
    {
      id: 760,
      text: 'Beni Zid',
    },
    {
      id: 776,
      text: 'Khenag Maoune',
    },
    {
      id: 769,
      text: 'El Marsa',
    },
    {
      id: 757,
      text: 'Ben Azzouz',
    },
    {
      id: 756,
      text: 'Bekkouche Lakhdar',
    },
    {
      id: 771,
      text: 'Es Sebt',
    },
    {
      id: 752,
      text: 'Ain Charchar',
    },
    {
      id: 755,
      text: 'Azzaba',
    },
    {
      id: 762,
      text: 'Bouchetata',
    },
    {
      id: 772,
      text: 'Filfila',
    },
    {
      id: 773,
      text: 'Hammadi Krouma',
    },
    {
      id: 785,
      text: 'Skikda',
    },
    {
      id: 754,
      text: 'Ain Zouit',
    },
    {
      id: 765,
      text: 'Djendel Saadi Mohamed',
    },
    {
      id: 774,
      text: 'Kanoua',
    },
  ],
  22: [
    {
      id: 822,
      text: 'Sidi Ali Benyoub',
    },
    {
      id: 814,
      text: 'Moulay Slissen',
    },
    {
      id: 804,
      text: 'El Hacaiba',
    },
    {
      id: 792,
      text: 'Ain Tindamine',
    },
    {
      id: 837,
      text: 'Tenira',
    },
    {
      id: 816,
      text: 'Oued Sefioun',
    },
    {
      id: 805,
      text: 'Hassi Dahou',
    },
    {
      id: 817,
      text: 'Oued Taourira',
    },
    {
      id: 798,
      text: 'Benachiba Chelia',
    },
    {
      id: 831,
      text: 'Sidi Yacoub',
    },
    {
      id: 830,
      text: 'Sidi Lahcene',
    },
    {
      id: 829,
      text: 'Sidi Khaled',
    },
    {
      id: 832,
      text: 'Tabia',
    },
    {
      id: 825,
      text: 'Sidi Brahim',
    },
    {
      id: 794,
      text: 'Amarnas',
    },
    {
      id: 801,
      text: 'Boukhanefis',
    },
    {
      id: 806,
      text: 'Hassi Zahana',
    },
    {
      id: 802,
      text: 'Chetouane Belaila',
    },
    {
      id: 797,
      text: 'Ben Badis',
    },
    {
      id: 795,
      text: 'Bedrabine El Mokrani',
    },
    {
      id: 821,
      text: 'Sfisef',
    },
    {
      id: 810,
      text: "M'cid",
    },
    {
      id: 800,
      text: 'Boudjebaa El Bordj',
    },
    {
      id: 793,
      text: 'Ain- Adden',
    },
    {
      id: 828,
      text: 'Sidi Hamadouche',
    },
    {
      id: 826,
      text: 'Sidi Chaib',
    },
    {
      id: 808,
      text: 'Makedra',
    },
    {
      id: 789,
      text: 'Ain El Berd',
    },
    {
      id: 819,
      text: 'Redjem Demouche',
    },
    {
      id: 818,
      text: 'Ras El Ma',
    },
    {
      id: 815,
      text: 'Oued Sebaa',
    },
    {
      id: 809,
      text: 'Marhoum',
    },
    {
      id: 824,
      text: 'Sidi Bel-Abbes',
    },
    {
      id: 791,
      text: 'Ain Thrid',
    },
    {
      id: 820,
      text: 'Sehala Thaoura',
    },
    {
      id: 838,
      text: 'Tessala',
    },
    {
      id: 796,
      text: 'Belarbi',
    },
    {
      id: 813,
      text: 'Mostefa  Ben Brahim',
    },
    {
      id: 839,
      text: 'Tilmouni',
    },
    {
      id: 840,
      text: 'Zerouala',
    },
    {
      id: 803,
      text: 'Dhaya',
    },
    {
      id: 812,
      text: 'Mezaourou',
    },
    {
      id: 835,
      text: 'Teghalimet',
    },
    {
      id: 836,
      text: 'Telagh',
    },
    {
      id: 790,
      text: 'Ain Kada',
    },
    {
      id: 807,
      text: 'Lamtar',
    },
    {
      id: 823,
      text: 'Sidi Ali Boussidi',
    },
    {
      id: 827,
      text: 'Sidi Dahou Zairs',
    },
    {
      id: 799,
      text: 'Bir El Hammam',
    },
    {
      id: 811,
      text: 'Merine',
    },
    {
      id: 834,
      text: 'Tefessour',
    },
    {
      id: 833,
      text: 'Taoudmout',
    },
  ],
  23: [
    {
      id: 842,
      text: 'Annaba',
    },
    {
      id: 850,
      text: 'Seraidi',
    },
    {
      id: 843,
      text: 'Berrahal',
    },
    {
      id: 849,
      text: 'Oued El Aneb',
    },
    {
      id: 848,
      text: 'El Hadjar',
    },
    {
      id: 851,
      text: 'Sidi Amar',
    },
    {
      id: 846,
      text: 'El Bouni',
    },
    {
      id: 841,
      text: 'Ain El Berda',
    },
    {
      id: 845,
      text: 'Cheurfa',
    },
    {
      id: 847,
      text: 'El Eulma',
    },
    {
      id: 852,
      text: 'Treat',
    },
    {
      id: 844,
      text: 'Chetaibi',
    },
  ],
  24: [
    {
      id: 875,
      text: 'Nechmaya',
    },
    {
      id: 863,
      text: 'Bou Hamdane',
    },
    {
      id: 872,
      text: 'Hammam Debagh',
    },
    {
      id: 884,
      text: 'Roknia',
    },
    {
      id: 867,
      text: 'Dahouara',
    },
    {
      id: 873,
      text: "Hammam N'bail",
    },
    {
      id: 871,
      text: 'Guelma',
    },
    {
      id: 866,
      text: 'Boumahra Ahmed',
    },
    {
      id: 853,
      text: 'Ain Ben Beida',
    },
    {
      id: 865,
      text: 'Bouchegouf',
    },
    {
      id: 878,
      text: 'Medjez Sfa',
    },
    {
      id: 881,
      text: 'Oued Ferragha',
    },
    {
      id: 864,
      text: 'Bouati Mahmoud',
    },
    {
      id: 869,
      text: 'El Fedjoudj',
    },
    {
      id: 874,
      text: 'Heliopolis',
    },
    {
      id: 877,
      text: 'Medjez Amar',
    },
    {
      id: 879,
      text: 'Houari Boumedienne',
    },
    {
      id: 883,
      text: 'Ras El Agba',
    },
    {
      id: 885,
      text: 'Sellaoua Announa',
    },
    {
      id: 868,
      text: 'Djeballah Khemissi',
    },
    {
      id: 861,
      text: 'Bordj Sabath',
    },
    {
      id: 882,
      text: 'Oued Zenati',
    },
    {
      id: 856,
      text: 'Ain Regada',
    },
    {
      id: 854,
      text: 'Ain Larbi',
    },
    {
      id: 855,
      text: 'Ain Makhlouf',
    },
    {
      id: 886,
      text: 'Tamlouka',
    },
    {
      id: 857,
      text: 'Ain Sandel',
    },
    {
      id: 862,
      text: 'Bou Hachana',
    },
    {
      id: 876,
      text: 'Khezaras',
    },
    {
      id: 858,
      text: 'Belkheir',
    },
    {
      id: 860,
      text: 'Beni Mezline',
    },
    {
      id: 870,
      text: 'Guelaat Bou Sbaa',
    },
    {
      id: 880,
      text: 'Oued Cheham',
    },
    {
      id: 859,
      text: 'Bendjarah',
    },
  ],
  25: [
    {
      id: 892,
      text: 'Didouche Mourad',
    },
    {
      id: 894,
      text: 'Hamma Bouziane',
    },
    {
      id: 890,
      text: 'Beni Hamidane',
    },
    {
      id: 898,
      text: 'Zighoud Youcef',
    },
    {
      id: 888,
      text: 'Ain Smara',
    },
    {
      id: 893,
      text: 'El Khroub',
    },
    {
      id: 897,
      text: 'Ouled Rahmoun',
    },
    {
      id: 887,
      text: 'Ain Abid',
    },
    {
      id: 889,
      text: 'Ben Badis',
    },
    {
      id: 895,
      text: 'Ibn Ziad',
    },
    {
      id: 896,
      text: 'Messaoud Boudjeriou',
    },
    {
      id: 891,
      text: 'Constantine',
    },
  ],
  26: [
    {
      id: 943,
      text: 'Ouled Hellal',
    },
    {
      id: 956,
      text: 'Souagui',
    },
    {
      id: 929,
      text: 'Ksar El Boukhari',
    },
    {
      id: 934,
      text: "M'fatha",
    },
    {
      id: 947,
      text: 'Saneg',
    },
    {
      id: 920,
      text: 'El Azizia',
    },
    {
      id: 930,
      text: 'Maghraoua',
    },
    {
      id: 935,
      text: 'Mihoub',
    },
    {
      id: 909,
      text: 'Bouaiche',
    },
    {
      id: 912,
      text: 'Boughzoul',
    },
    {
      id: 914,
      text: 'Chabounia',
    },
    {
      id: 926,
      text: 'Hannacha',
    },
    {
      id: 936,
      text: 'Ouamri',
    },
    {
      id: 937,
      text: 'Oued Harbil',
    },
    {
      id: 905,
      text: 'Beni Slimane',
    },
    {
      id: 910,
      text: 'Bouaichoune',
    },
    {
      id: 939,
      text: 'Ouled Bouachra',
    },
    {
      id: 950,
      text: 'Si Mahdjoub',
    },
    {
      id: 913,
      text: 'Bouskene',
    },
    {
      id: 953,
      text: 'Sidi Rabie',
    },
    {
      id: 906,
      text: 'Berrouaghia',
    },
    {
      id: 941,
      text: 'Ouled Deid',
    },
    {
      id: 946,
      text: 'Rebaia',
    },
    {
      id: 932,
      text: 'Medjebar',
    },
    {
      id: 961,
      text: 'Tletat Ed Douair',
    },
    {
      id: 962,
      text: 'Zoubiria',
    },
    {
      id: 901,
      text: 'Aissaouia',
    },
    {
      id: 923,
      text: 'El Haoudane',
    },
    {
      id: 933,
      text: 'Mezerana',
    },
    {
      id: 957,
      text: 'Tablat',
    },
    {
      id: 908,
      text: 'Boghar',
    },
    {
      id: 949,
      text: 'Seghouane',
    },
    {
      id: 919,
      text: 'Draa Esmar',
    },
    {
      id: 931,
      text: 'Medea',
    },
    {
      id: 959,
      text: 'Tamesguida',
    },
    {
      id: 904,
      text: 'Ben Chicao',
    },
    {
      id: 922,
      text: 'El Hamdania',
    },
    {
      id: 945,
      text: 'Ouzera',
    },
    {
      id: 960,
      text: 'Tizi Mahdi',
    },
    {
      id: 899,
      text: 'Ain Boucif',
    },
    {
      id: 925,
      text: 'El Ouinet',
    },
    {
      id: 927,
      text: 'Kef Lakhdar',
    },
    {
      id: 942,
      text: 'Ouled Emaaraf',
    },
    {
      id: 951,
      text: 'Sidi Demed',
    },
    {
      id: 903,
      text: 'Baata',
    },
    {
      id: 924,
      text: 'El Omaria',
    },
    {
      id: 940,
      text: 'Ouled Brahim',
    },
    {
      id: 907,
      text: 'Bir Ben Laabed',
    },
    {
      id: 921,
      text: 'El Guelbelkebir',
    },
    {
      id: 948,
      text: 'Sedraya',
    },
    {
      id: 900,
      text: 'Ain Ouksir',
    },
    {
      id: 915,
      text: 'Chelalet El Adhaoura',
    },
    {
      id: 916,
      text: 'Cheniguel',
    },
    {
      id: 958,
      text: 'Tafraout',
    },
    {
      id: 911,
      text: 'Bouchrahil',
    },
    {
      id: 928,
      text: 'Khams Djouamaa',
    },
    {
      id: 952,
      text: 'Sidi Naamane',
    },
    {
      id: 902,
      text: 'Aziz',
    },
    {
      id: 917,
      text: 'Derrag',
    },
    {
      id: 944,
      text: 'Oum El Djellil',
    },
    {
      id: 918,
      text: 'Djouab',
    },
    {
      id: 954,
      text: 'Sidi Zahar',
    },
    {
      id: 955,
      text: 'Sidi Ziane',
    },
    {
      id: 938,
      text: 'Ouled Antar',
    },
  ],
  27: [
    {
      id: 970,
      text: 'Fornaka',
    },
    {
      id: 981,
      text: 'Oued El Kheir',
    },
    {
      id: 973,
      text: 'Hassiane',
    },
    {
      id: 972,
      text: 'Hassi Mameche',
    },
    {
      id: 977,
      text: 'Mazagran',
    },
    {
      id: 992,
      text: 'Stidia',
    },
    {
      id: 967,
      text: 'Ain-Tedles',
    },
    {
      id: 987,
      text: 'Sidi Belaattar',
    },
    {
      id: 991,
      text: 'Sour',
    },
    {
      id: 964,
      text: 'Ain-Boudinar',
    },
    {
      id: 975,
      text: 'Kheir-Eddine',
    },
    {
      id: 985,
      text: 'Sayada',
    },
    {
      id: 986,
      text: 'Sidi Ali',
    },
    {
      id: 993,
      text: 'Tazgait',
    },
    {
      id: 968,
      text: 'Benabdelmalek Ramdane',
    },
    {
      id: 979,
      text: 'Mostaganem',
    },
    {
      id: 971,
      text: 'Hadjadj',
    },
    {
      id: 988,
      text: 'Sidi-Lakhdar',
    },
    {
      id: 963,
      text: 'Achaacha',
    },
    {
      id: 974,
      text: 'Khadra',
    },
    {
      id: 980,
      text: 'Nekmaria',
    },
    {
      id: 982,
      text: 'Ouled Boughalem',
    },
    {
      id: 969,
      text: 'Bouguirat',
    },
    {
      id: 984,
      text: 'Safsaf',
    },
    {
      id: 989,
      text: 'Sirat',
    },
    {
      id: 990,
      text: 'Souaflia',
    },
    {
      id: 966,
      text: 'Ain-Sidi Cherif',
    },
    {
      id: 976,
      text: 'Mansourah',
    },
    {
      id: 978,
      text: 'Mesra',
    },
    {
      id: 994,
      text: 'Touahria',
    },
    {
      id: 965,
      text: 'Ain-Nouissy',
    },
    {
      id: 983,
      text: 'Ouled-Maalah',
    },
  ],
  28: [
    {
      id: 1008,
      text: 'Chellal',
    },
    {
      id: 1028,
      text: 'Ouled Madhi',
    },
    {
      id: 1014,
      text: 'Khettouti Sed-El-Jir',
    },
    {
      id: 1000,
      text: 'Belaiba',
    },
    {
      id: 1004,
      text: 'Berhoum',
    },
    {
      id: 1009,
      text: 'Dehahna',
    },
    {
      id: 1018,
      text: 'Magra',
    },
    {
      id: 1002,
      text: 'Beni Ilmane',
    },
    {
      id: 1007,
      text: 'Bouti Sayeh',
    },
    {
      id: 1033,
      text: 'Sidi Aissa',
    },
    {
      id: 995,
      text: 'Ain El Hadjel',
    },
    {
      id: 1035,
      text: 'Sidi Hadjeres',
    },
    {
      id: 1006,
      text: 'Bou Saada',
    },
    {
      id: 1011,
      text: 'El Hamel',
    },
    {
      id: 1032,
      text: 'Oulteme',
    },
    {
      id: 1003,
      text: 'Benzouh',
    },
    {
      id: 1030,
      text: 'Ouled Sidi Brahim',
    },
    {
      id: 1034,
      text: 'Sidi Ameur',
    },
    {
      id: 1039,
      text: 'Tamsa',
    },
    {
      id: 1001,
      text: 'Ben Srour',
    },
    {
      id: 1022,
      text: 'Mohamed Boudiaf',
    },
    {
      id: 1031,
      text: 'Ouled Slimane',
    },
    {
      id: 1041,
      text: 'Zarzour',
    },
    {
      id: 996,
      text: 'Ain El Melh',
    },
    {
      id: 997,
      text: 'Ain Fares',
    },
    {
      id: 999,
      text: 'Ain Rich',
    },
    {
      id: 1005,
      text: 'Bir Foda',
    },
    {
      id: 1036,
      text: "Sidi M'hamed",
    },
    {
      id: 1020,
      text: 'Medjedel',
    },
    {
      id: 1021,
      text: 'Menaa',
    },
    {
      id: 1010,
      text: 'Djebel Messaad',
    },
    {
      id: 1037,
      text: 'Slim',
    },
    {
      id: 1023,
      text: "M'sila",
    },
    {
      id: 1013,
      text: 'Hammam Dalaa',
    },
    {
      id: 1025,
      text: 'Ouanougha',
    },
    {
      id: 1029,
      text: 'Ouled Mansour',
    },
    {
      id: 1040,
      text: 'Tarmount',
    },
    {
      id: 1016,
      text: 'Maadid',
    },
    {
      id: 1024,
      text: "M'tarfa",
    },
    {
      id: 1017,
      text: 'Maarif',
    },
    {
      id: 1027,
      text: 'Ouled Derradj',
    },
    {
      id: 1038,
      text: 'Souamaa',
    },
    {
      id: 1012,
      text: 'El Houamed',
    },
    {
      id: 1015,
      text: 'Khoubana',
    },
    {
      id: 1019,
      text: "M'cif",
    },
    {
      id: 998,
      text: 'Ain Khadra',
    },
    {
      id: 1026,
      text: 'Ouled Addi Guebala',
    },
  ],
  29: [
    {
      id: 1075,
      text: 'Oued El Abtal',
    },
    {
      id: 1081,
      text: 'Sidi Abdelmoumene',
    },
    {
      id: 1078,
      text: 'Sedjerara',
    },
    {
      id: 1072,
      text: 'Mohammadia',
    },
    {
      id: 1085,
      text: 'Tighennif',
    },
    {
      id: 1071,
      text: 'Mocta-Douz',
    },
    {
      id: 1060,
      text: 'Ferraguig',
    },
    {
      id: 1054,
      text: 'El Ghomri',
    },
    {
      id: 1087,
      text: 'Zahana',
    },
    {
      id: 1053,
      text: 'El Gaada',
    },
    {
      id: 1077,
      text: 'Ras El Ain Amirouche',
    },
    {
      id: 1074,
      text: 'Oggaz',
    },
    {
      id: 1046,
      text: 'Alaimia',
    },
    {
      id: 1084,
      text: 'Sig',
    },
    {
      id: 1051,
      text: 'Chorfa',
    },
    {
      id: 1049,
      text: 'Bou Henni',
    },
    {
      id: 1058,
      text: 'El Mamounia',
    },
    {
      id: 1055,
      text: 'El Gueitena',
    },
    {
      id: 1042,
      text: 'Ain Fares',
    },
    {
      id: 1062,
      text: 'Gharrous',
    },
    {
      id: 1048,
      text: 'Benian',
    },
    {
      id: 1047,
      text: 'Aouf',
    },
    {
      id: 1064,
      text: 'Guerdjoum',
    },
    {
      id: 1045,
      text: 'Ain Frass',
    },
    {
      id: 1043,
      text: 'Ain Fekan',
    },
    {
      id: 1066,
      text: 'Khalouia',
    },
    {
      id: 1059,
      text: 'El Menaouer',
    },
    {
      id: 1052,
      text: 'El Bordj',
    },
    {
      id: 1082,
      text: 'Sidi Boussaid',
    },
    {
      id: 1070,
      text: 'Matemore',
    },
    {
      id: 1083,
      text: 'Sidi Kada',
    },
    {
      id: 1067,
      text: 'Makhda',
    },
    {
      id: 1069,
      text: 'Mascara',
    },
    {
      id: 1050,
      text: 'Bouhanifia',
    },
    {
      id: 1063,
      text: 'Ghriss',
    },
    {
      id: 1065,
      text: 'Hacine',
    },
    {
      id: 1057,
      text: 'El Keurt',
    },
    {
      id: 1061,
      text: 'Froha',
    },
    {
      id: 1086,
      text: 'Tizi',
    },
    {
      id: 1079,
      text: 'Sehailia',
    },
    {
      id: 1068,
      text: 'Maoussa',
    },
    {
      id: 1080,
      text: 'Sidi Abdeldjebar',
    },
    {
      id: 1056,
      text: 'El Hachem',
    },
    {
      id: 1073,
      text: 'Nesmot',
    },
    {
      id: 1088,
      text: 'Zelamta',
    },
    {
      id: 1044,
      text: 'Ain Ferah',
    },
    {
      id: 1076,
      text: 'Oued Taria',
    },
  ],
  30: [
    {
      id: 1101,
      text: 'Ouargla',
    },
    {
      id: 1096,
      text: 'Hassi Messaoud',
    },
    {
      id: 1089,
      text: 'Ain Beida',
    },
    {
      id: 1095,
      text: 'Hassi Ben Abdellah',
    },
    {
      id: 1103,
      text: 'Sidi Khouiled',
    },
    {
      id: 1093,
      text: 'El Borma',
    },
    {
      id: 1102,
      text: 'Rouissat',
    },
    {
      id: 1100,
      text: "N'goussa",
    },
  ],
  31: [
    {
      id: 1134,
      text: 'Sidi Chami',
    },
    {
      id: 1127,
      text: 'Hassi Mefsoukh',
    },
    {
      id: 1116,
      text: 'Bir El Djir',
    },
    {
      id: 1125,
      text: 'Hassi Ben Okba',
    },
    {
      id: 1124,
      text: 'Gdyel',
    },
    {
      id: 1126,
      text: 'Hassi Bounif',
    },
    {
      id: 1122,
      text: 'El Kerma',
    },
    {
      id: 1123,
      text: 'Es Senia',
    },
    {
      id: 1114,
      text: 'Ben Freha',
    },
    {
      id: 1113,
      text: 'Arzew',
    },
    {
      id: 1133,
      text: 'Sidi Ben Yebka',
    },
    {
      id: 1110,
      text: 'Ain Biya',
    },
    {
      id: 1115,
      text: 'Bethioua',
    },
    {
      id: 1128,
      text: 'Marsat El Hadjadj',
    },
    {
      id: 1112,
      text: 'Ain Turk',
    },
    {
      id: 1131,
      text: 'Oran',
    },
    {
      id: 1120,
      text: 'El Ancor',
    },
    {
      id: 1129,
      text: 'Mers El Kebir',
    },
    {
      id: 1117,
      text: 'Boufatis',
    },
    {
      id: 1121,
      text: 'El Braya',
    },
    {
      id: 1132,
      text: 'Oued Tlelat',
    },
    {
      id: 1111,
      text: 'Ain Kerma',
    },
    {
      id: 1119,
      text: 'Boutlelis',
    },
    {
      id: 1130,
      text: 'Messerghin',
    },
    {
      id: 1118,
      text: 'Bousfer',
    },
    {
      id: 1135,
      text: 'Tafraoui',
    },
  ],
  32: [
    {
      id: 1136,
      text: 'Ain El Orak',
    },
    {
      id: 1151,
      text: 'Krakda',
    },
    {
      id: 1154,
      text: 'Sidi Slimane',
    },
    {
      id: 1153,
      text: 'Sidi Ameur',
    },
    {
      id: 1138,
      text: 'Boualem',
    },
    {
      id: 1146,
      text: 'El Bnoud',
    },
    {
      id: 1139,
      text: 'Bougtoub',
    },
    {
      id: 1147,
      text: 'El Kheiter',
    },
    {
      id: 1157,
      text: 'Tousmouline',
    },
    {
      id: 1155,
      text: 'Sidi Tiffour',
    },
    {
      id: 1156,
      text: 'Stitten',
    },
    {
      id: 1144,
      text: 'El Bayadh',
    },
    {
      id: 1152,
      text: 'Rogassa',
    },
    {
      id: 1148,
      text: 'El Mehara',
    },
    {
      id: 1150,
      text: 'Kef El Ahmar',
    },
    {
      id: 1141,
      text: 'Brezina',
    },
    {
      id: 1149,
      text: 'Ghassoul',
    },
    {
      id: 1145,
      text: 'Labiodh Sidi Cheikh',
    },
    {
      id: 1140,
      text: 'Boussemghoun',
    },
    {
      id: 1142,
      text: 'Cheguig',
    },
    {
      id: 1143,
      text: 'Chellala',
    },
    {
      id: 1137,
      text: 'Arbaouat',
    },
  ],
  33: [
    {
      id: 1159,
      text: 'Bordj Omar Driss',
    },
    {
      id: 1160,
      text: 'Debdeb',
    },
    {
      id: 1163,
      text: 'In Amenas',
    },
    {
      id: 1162,
      text: 'Illizi',
    },
  ],
  34: [
    {
      id: 1177,
      text: 'Elhammadia',
    },
    {
      id: 1189,
      text: 'Ouled Sidi-Brahim',
    },
    {
      id: 1164,
      text: 'Ain Taghrout',
    },
    {
      id: 1197,
      text: 'Tixter',
    },
    {
      id: 1167,
      text: 'Belimour',
    },
    {
      id: 1176,
      text: 'El Annasseur',
    },
    {
      id: 1180,
      text: 'Ghailasa',
    },
    {
      id: 1194,
      text: 'Taglait',
    },
    {
      id: 1170,
      text: 'Bordj Ghedir',
    },
    {
      id: 1174,
      text: 'El Euch',
    },
    {
      id: 1192,
      text: 'Sidi-Embarek',
    },
    {
      id: 1183,
      text: 'Khelil',
    },
    {
      id: 1169,
      text: 'Bir Kasdali',
    },
    {
      id: 1193,
      text: 'Tefreg',
    },
    {
      id: 1178,
      text: 'El Main',
    },
    {
      id: 1173,
      text: 'Djaafra',
    },
    {
      id: 1172,
      text: 'Colla',
    },
    {
      id: 1196,
      text: 'Teniet En Nasr',
    },
    {
      id: 1179,
      text: "El M'hir",
    },
    {
      id: 1184,
      text: 'Ksour',
    },
    {
      id: 1185,
      text: 'Mansoura',
    },
    {
      id: 1181,
      text: 'Haraza',
    },
    {
      id: 1190,
      text: 'Rabta',
    },
    {
      id: 1175,
      text: 'El Achir',
    },
    {
      id: 1182,
      text: 'Hasnaoua',
    },
    {
      id: 1186,
      text: 'Medjana',
    },
    {
      id: 1165,
      text: 'Ain Tesra',
    },
    {
      id: 1187,
      text: 'Ouled Brahem',
    },
    {
      id: 1191,
      text: 'Ras El Oued',
    },
    {
      id: 1171,
      text: 'Bordj Zemmoura',
    },
    {
      id: 1188,
      text: 'Ouled Dahmane',
    },
    {
      id: 1195,
      text: 'Tassamert',
    },
    {
      id: 1166,
      text: 'B. B. Arreridj',
    },
    {
      id: 1168,
      text: 'Ben Daoud',
    },
  ],
  35: [
    {
      id: 1212,
      text: 'El Kharrouba',
    },
    {
      id: 1210,
      text: 'Dellys',
    },
    {
      id: 1201,
      text: 'Ben Choud',
    },
    {
      id: 1198,
      text: 'Afir',
    },
    {
      id: 1226,
      text: 'Thenia',
    },
    {
      id: 1202,
      text: 'Beni Amrane',
    },
    {
      id: 1215,
      text: 'Khemis El Khechna',
    },
    {
      id: 1199,
      text: 'Ammal',
    },
    {
      id: 1228,
      text: 'Timezrit',
    },
    {
      id: 1229,
      text: 'Zemmouri',
    },
    {
      id: 1216,
      text: 'Larbatache',
    },
    {
      id: 1214,
      text: 'Isser',
    },
    {
      id: 1208,
      text: 'Chabet El Ameur',
    },
    {
      id: 1219,
      text: 'Ouled Aissa',
    },
    {
      id: 1218,
      text: 'Naciria',
    },
    {
      id: 1207,
      text: 'Bouzegza Keddara',
    },
    {
      id: 1224,
      text: 'Souk El Had',
    },
    {
      id: 1223,
      text: 'Sidi Daoud',
    },
    {
      id: 1200,
      text: 'Baghlia',
    },
    {
      id: 1217,
      text: 'Leghata',
    },
    {
      id: 1211,
      text: 'Djinet',
    },
    {
      id: 1227,
      text: 'Tidjelabine',
    },
    {
      id: 1222,
      text: 'Si Mustapha',
    },
    {
      id: 1220,
      text: 'Ouled Hedadj',
    },
    {
      id: 1221,
      text: 'Ouled Moussa',
    },
    {
      id: 1206,
      text: 'Boumerdes',
    },
    {
      id: 1209,
      text: 'Corso',
    },
    {
      id: 1203,
      text: 'Bordj Menaiel',
    },
    {
      id: 1204,
      text: 'Boudouaou',
    },
    {
      id: 1205,
      text: 'Boudouaou El Bahri',
    },
    {
      id: 1225,
      text: 'Taourga',
    },
    {
      id: 1213,
      text: 'Hammedi',
    },
  ],
  36: [
    {
      id: 1230,
      text: 'Ain El Assel',
    },
    {
      id: 1236,
      text: 'Bougous',
    },
    {
      id: 1246,
      text: 'El Tarf',
    },
    {
      id: 1253,
      text: 'Zitouna',
    },
    {
      id: 1235,
      text: 'Besbes',
    },
    {
      id: 1231,
      text: 'Ain Kerma',
    },
    {
      id: 1237,
      text: 'Bouhadjar',
    },
    {
      id: 1247,
      text: 'Hammam Beni Salah',
    },
    {
      id: 1249,
      text: 'Oued Zitoun',
    },
    {
      id: 1233,
      text: 'Ben M Hidi',
    },
    {
      id: 1234,
      text: 'Berrihane',
    },
    {
      id: 1239,
      text: 'Chebaita Mokhtar',
    },
    {
      id: 1243,
      text: 'Echatt',
    },
    {
      id: 1244,
      text: 'El Aioun',
    },
    {
      id: 1245,
      text: 'El Kala',
    },
    {
      id: 1251,
      text: 'Souarekh',
    },
    {
      id: 1252,
      text: 'Zerizer',
    },
    {
      id: 1238,
      text: 'Bouteldja',
    },
    {
      id: 1240,
      text: 'Chefia',
    },
    {
      id: 1248,
      text: 'Lac Des Oiseaux',
    },
    {
      id: 1241,
      text: 'Chihani',
    },
    {
      id: 1250,
      text: 'Raml Souk',
    },
    {
      id: 1232,
      text: 'Asfour',
    },
    {
      id: 1242,
      text: 'Drean',
    },
  ],
  37: [
    {
      id: 1255,
      text: 'Tindouf',
    },
    {
      id: 1254,
      text: 'Oum El Assel',
    },
  ],
  38: [
    {
      id: 1262,
      text: 'Khemisti',
    },
    {
      id: 1275,
      text: 'Theniet El Had',
    },
    {
      id: 1269,
      text: 'Ouled Bessam',
    },
    {
      id: 1271,
      text: 'Sidi Boutouchent',
    },
    {
      id: 1276,
      text: 'Tissemsilt',
    },
    {
      id: 1272,
      text: 'Sidi Lantri',
    },
    {
      id: 1257,
      text: 'Beni Chaib',
    },
    {
      id: 1258,
      text: 'Beni Lahcene',
    },
    {
      id: 1270,
      text: 'Sidi Abed',
    },
    {
      id: 1273,
      text: 'Sidi Slimane',
    },
    {
      id: 1261,
      text: 'Boucaid',
    },
    {
      id: 1263,
      text: 'Larbaa',
    },
    {
      id: 1266,
      text: 'Lazharia',
    },
    {
      id: 1264,
      text: 'Lardjem',
    },
    {
      id: 1268,
      text: 'Melaab',
    },
    {
      id: 1265,
      text: 'Layoune',
    },
    {
      id: 1274,
      text: 'Tamellahet',
    },
    {
      id: 1277,
      text: 'Youssoufia',
    },
    {
      id: 1260,
      text: 'Bordj El Emir Abdelkader',
    },
    {
      id: 1256,
      text: 'Ammari',
    },
    {
      id: 1267,
      text: 'Maacem',
    },
    {
      id: 1259,
      text: 'Bordj Bounaama',
    },
  ],
  39: [
    {
      id: 1282,
      text: 'Douar El Maa',
    },
    {
      id: 1283,
      text: 'El Ogla',
    },
    {
      id: 1291,
      text: 'Magrane',
    },
    {
      id: 1301,
      text: 'Sidi Aoun',
    },
    {
      id: 1292,
      text: 'Mih Ouansa',
    },
    {
      id: 1290,
      text: 'Kouinine',
    },
    {
      id: 1278,
      text: 'Bayadha',
    },
    {
      id: 1294,
      text: 'Nakhla',
    },
    {
      id: 1299,
      text: 'Robbah',
    },
    {
      id: 1286,
      text: 'Guemar',
    },
    {
      id: 1279,
      text: 'Ben Guecha',
    },
    {
      id: 1297,
      text: 'Ourmes',
    },
    {
      id: 1304,
      text: 'Taghzout',
    },
    {
      id: 1287,
      text: 'Hamraia',
    },
    {
      id: 1298,
      text: 'Reguiba',
    },
    {
      id: 1280,
      text: 'Debila',
    },
    {
      id: 1288,
      text: 'Hassani Abdelkrim',
    },
    {
      id: 1289,
      text: 'Hassi Khalifa',
    },
    {
      id: 1307,
      text: 'Trifaoui',
    },
    {
      id: 1305,
      text: 'Taleb Larbi',
    },
    {
      id: 1295,
      text: 'Oued El Alenda',
    },
    {
      id: 1285,
      text: 'El-Oued',
    },
  ],
  40: [
    {
      id: 1321,
      text: 'Khirane',
    },
    {
      id: 1309,
      text: 'Babar',
    },
    {
      id: 1316,
      text: 'El Mahmal',
    },
    {
      id: 1324,
      text: 'Ouled Rechache',
    },
    {
      id: 1314,
      text: 'Djellal',
    },
    {
      id: 1328,
      text: 'Yabous',
    },
    {
      id: 1320,
      text: 'Khenchela',
    },
    {
      id: 1319,
      text: 'Kais',
    },
    {
      id: 1313,
      text: 'Chelia',
    },
    {
      id: 1325,
      text: 'Remila',
    },
    {
      id: 1327,
      text: 'Taouzianat',
    },
    {
      id: 1310,
      text: 'Baghai',
    },
    {
      id: 1315,
      text: 'El Hamma',
    },
    {
      id: 1318,
      text: 'Ensigha',
    },
    {
      id: 1326,
      text: 'Tamza',
    },
    {
      id: 1308,
      text: 'Ain Touila',
    },
    {
      id: 1323,
      text: "M'toussa",
    },
    {
      id: 1311,
      text: 'Bouhmama',
    },
    {
      id: 1317,
      text: 'El Oueldja',
    },
    {
      id: 1322,
      text: "M'sara",
    },
    {
      id: 1312,
      text: 'Chechar',
    },
  ],
  41: [
    {
      id: 1349,
      text: 'Souk Ahras',
    },
    {
      id: 1329,
      text: 'Ain Soltane',
    },
    {
      id: 1347,
      text: 'Sedrata',
    },
    {
      id: 1334,
      text: 'Hanencha',
    },
    {
      id: 1337,
      text: 'Machroha',
    },
    {
      id: 1330,
      text: 'Ain Zana',
    },
    {
      id: 1341,
      text: 'Ouled Driss',
    },
    {
      id: 1351,
      text: 'Terraguelt',
    },
    {
      id: 1343,
      text: 'Oum El Adhaim',
    },
    {
      id: 1340,
      text: 'Oued Kebrit',
    },
    {
      id: 1352,
      text: 'Tiffech',
    },
    {
      id: 1345,
      text: 'Ragouba',
    },
    {
      id: 1332,
      text: 'Drea',
    },
    {
      id: 1350,
      text: 'Taoura',
    },
    {
      id: 1353,
      text: 'Zaarouria',
    },
    {
      id: 1333,
      text: 'Haddada',
    },
    {
      id: 1335,
      text: 'Khedara',
    },
    {
      id: 1342,
      text: 'Ouled Moumen',
    },
    {
      id: 1339,
      text: 'Merahna',
    },
    {
      id: 1344,
      text: 'Ouillen',
    },
    {
      id: 1348,
      text: 'Sidi Fredj',
    },
    {
      id: 1331,
      text: 'Bir Bouhouche',
    },
    {
      id: 1346,
      text: 'Safel El Ouiden',
    },
    {
      id: 1336,
      text: 'Khemissa',
    },
    {
      id: 1338,
      text: "M'daourouche",
    },
    {
      id: 1354,
      text: 'Zouabi',
    },
  ],
  42: [
    {
      id: 1369,
      text: 'Hadjout',
    },
    {
      id: 1375,
      text: 'Merad',
    },
    {
      id: 1374,
      text: 'Menaceur',
    },
    {
      id: 1355,
      text: 'Aghbal',
    },
    {
      id: 1377,
      text: 'Nador',
    },
    {
      id: 1381,
      text: 'Sidi-Amar',
    },
    {
      id: 1368,
      text: 'Gouraya',
    },
    {
      id: 1376,
      text: 'Messelmoun',
    },
    {
      id: 1364,
      text: 'Cherchell',
    },
    {
      id: 1370,
      text: 'Hadjret Ennous',
    },
    {
      id: 1378,
      text: 'Sidi Ghiles',
    },
    {
      id: 1365,
      text: 'Damous',
    },
    {
      id: 1373,
      text: 'Larhat',
    },
    {
      id: 1367,
      text: 'Fouka',
    },
    {
      id: 1357,
      text: 'Ain Tagourait',
    },
    {
      id: 1360,
      text: 'Bou Haroun',
    },
    {
      id: 1361,
      text: 'Bou Ismail',
    },
    {
      id: 1371,
      text: 'Khemisti',
    },
    {
      id: 1356,
      text: 'Ahmer El Ain',
    },
    {
      id: 1362,
      text: 'Bourkika',
    },
    {
      id: 1366,
      text: 'Douaouda',
    },
    {
      id: 1379,
      text: 'Sidi Rached',
    },
    {
      id: 1358,
      text: 'Attatba',
    },
    {
      id: 1363,
      text: 'Chaiba',
    },
    {
      id: 1372,
      text: 'Kolea',
    },
    {
      id: 1380,
      text: 'Sidi Semiane',
    },
    {
      id: 1382,
      text: 'Tipaza',
    },
    {
      id: 1359,
      text: 'Beni Mileuk',
    },
  ],
  43: [
    {
      id: 1394,
      text: 'El Mechira',
    },
    {
      id: 1393,
      text: 'El Ayadi Barbes',
    },
    {
      id: 1384,
      text: 'Ain Beida Harriche',
    },
    {
      id: 1411,
      text: 'Tassala Lematai',
    },
    {
      id: 1410,
      text: 'Terrai Bainen',
    },
    {
      id: 1387,
      text: 'Amira Arres',
    },
    {
      id: 1408,
      text: 'Tassadane Haddada',
    },
    {
      id: 1399,
      text: 'Minar Zarza',
    },
    {
      id: 1406,
      text: 'Sidi Merouane',
    },
    {
      id: 1391,
      text: 'Chigara',
    },
    {
      id: 1397,
      text: 'Hamala',
    },
    {
      id: 1396,
      text: 'Grarem Gouga',
    },
    {
      id: 1412,
      text: 'Tiberguent',
    },
    {
      id: 1404,
      text: 'Rouached',
    },
    {
      id: 1392,
      text: 'Derrahi Bousselah',
    },
    {
      id: 1414,
      text: 'Zeghaia',
    },
    {
      id: 1401,
      text: 'Oued Endja',
    },
    {
      id: 1383,
      text: 'Ahmed Rachedi',
    },
    {
      id: 1407,
      text: 'Tadjenanet',
    },
    {
      id: 1385,
      text: 'Ain Mellouk',
    },
    {
      id: 1403,
      text: 'Ouled Khalouf',
    },
    {
      id: 1388,
      text: 'Benyahia Abderrahmane',
    },
    {
      id: 1409,
      text: 'Teleghma',
    },
    {
      id: 1402,
      text: 'Oued Seguen',
    },
    {
      id: 1400,
      text: 'Oued Athmenia',
    },
    {
      id: 1386,
      text: 'Ain Tine',
    },
    {
      id: 1390,
      text: 'Chelghoum Laid',
    },
    {
      id: 1413,
      text: 'Yahia Beniguecha',
    },
    {
      id: 1395,
      text: 'Ferdjioua',
    },
    {
      id: 1405,
      text: 'Sidi Khelifa',
    },
    {
      id: 1398,
      text: 'Mila',
    },
    {
      id: 1389,
      text: 'Bouhatem',
    },
  ],
  44: [
    {
      id: 1440,
      text: 'Khemis-Miliana',
    },
    {
      id: 1446,
      text: 'Sidi-Lakhdar',
    },
    {
      id: 1415,
      text: 'Ain-Benian',
    },
    {
      id: 1420,
      text: 'Ain-Torki',
    },
    {
      id: 1437,
      text: 'Hammam-Righa',
    },
    {
      id: 1429,
      text: 'Bourached',
    },
    {
      id: 1439,
      text: 'Hoceinia',
    },
    {
      id: 1430,
      text: 'Djelida',
    },
    {
      id: 1421,
      text: 'Arib',
    },
    {
      id: 1431,
      text: 'Djemaa Ouled Cheikh',
    },
    {
      id: 1434,
      text: 'El-Amra',
    },
    {
      id: 1435,
      text: 'El-Attaf',
    },
    {
      id: 1449,
      text: 'Tiberkanine',
    },
    {
      id: 1416,
      text: 'Ain-Bouyahia',
    },
    {
      id: 1433,
      text: 'El-Abadia',
    },
    {
      id: 1447,
      text: 'Tacheta Zegagha',
    },
    {
      id: 1422,
      text: 'Birbouche',
    },
    {
      id: 1432,
      text: 'Djendel',
    },
    {
      id: 1425,
      text: 'Ben Allal',
    },
    {
      id: 1443,
      text: 'Oued Chorfa',
    },
    {
      id: 1428,
      text: 'Boumedfaa',
    },
    {
      id: 1418,
      text: 'Ain-Lechiakh',
    },
    {
      id: 1419,
      text: 'Ain-Soltane',
    },
    {
      id: 1444,
      text: 'Oued Djemaa',
    },
    {
      id: 1436,
      text: 'El-Maine',
    },
    {
      id: 1445,
      text: 'Rouina',
    },
    {
      id: 1450,
      text: 'Zeddine',
    },
    {
      id: 1426,
      text: 'Bir-Ould-Khelifa',
    },
    {
      id: 1427,
      text: 'Bordj-Emir-Khaled',
    },
    {
      id: 1448,
      text: 'Tarik-Ibn-Ziad',
    },
    {
      id: 1423,
      text: 'Bathia',
    },
    {
      id: 1424,
      text: 'Belaas',
    },
    {
      id: 1438,
      text: 'Hassania',
    },
    {
      id: 1417,
      text: 'Ain-Defla',
    },
    {
      id: 1442,
      text: 'Miliana',
    },
    {
      id: 1441,
      text: 'Mekhatria',
    },
  ],
  45: [
    {
      id: 1462,
      text: 'Tiout',
    },
    {
      id: 1459,
      text: 'Moghrar',
    },
    {
      id: 1453,
      text: 'Asla',
    },
    {
      id: 1456,
      text: 'Kasdir',
    },
    {
      id: 1457,
      text: 'Makmen Ben Amar',
    },
    {
      id: 1452,
      text: 'Ain Sefra',
    },
    {
      id: 1458,
      text: 'Mecheria',
    },
    {
      id: 1455,
      text: 'El Biodh',
    },
    {
      id: 1451,
      text: 'Ain Ben Khelil',
    },
    {
      id: 1460,
      text: 'Naama',
    },
    {
      id: 1454,
      text: 'Djenienne Bourezg',
    },
    {
      id: 1461,
      text: 'Sfissifa',
    },
  ],
  46: [
    {
      id: 1486,
      text: 'Sidi Boumediene',
    },
    {
      id: 1489,
      text: 'Tamzoura',
    },
    {
      id: 1471,
      text: 'Chaabat El Ham',
    },
    {
      id: 1474,
      text: 'El Maleh',
    },
    {
      id: 1483,
      text: 'Ouled Kihal',
    },
    {
      id: 1472,
      text: 'Chentouf',
    },
    {
      id: 1490,
      text: 'Terga',
    },
    {
      id: 1481,
      text: 'Oued Sebbah',
    },
    {
      id: 1473,
      text: 'El Amria',
    },
    {
      id: 1479,
      text: 'Hassi El Ghella',
    },
    {
      id: 1482,
      text: 'Ouled Boudjemaa',
    },
    {
      id: 1463,
      text: 'Aghlal',
    },
    {
      id: 1465,
      text: 'Ain Kihal',
    },
    {
      id: 1467,
      text: 'Ain Tolba',
    },
    {
      id: 1468,
      text: 'Aoubellil',
    },
    {
      id: 1469,
      text: 'Beni Saf',
    },
    {
      id: 1478,
      text: 'Hassasna',
    },
    {
      id: 1476,
      text: 'Emir Abdelkader',
    },
    {
      id: 1488,
      text: 'Sidi Safi',
    },
    {
      id: 1484,
      text: 'Oulhaca El Gheraba',
    },
    {
      id: 1487,
      text: 'Sidi Ouriache',
    },
    {
      id: 1464,
      text: 'Ain El Arbaa',
    },
    {
      id: 1475,
      text: 'El Messaid',
    },
    {
      id: 1480,
      text: 'Oued Berkeche',
    },
    {
      id: 1485,
      text: 'Sidi Ben Adda',
    },
    {
      id: 1466,
      text: 'Ain Temouchent',
    },
    {
      id: 1470,
      text: 'Bouzedjar',
    },
    {
      id: 1477,
      text: 'Hammam Bou Hadjar',
    },
  ],
  47: [
    {
      id: 1493,
      text: 'Dhayet Bendhahoua',
    },
    {
      id: 1500,
      text: 'Mansoura',
    },
    {
      id: 1494,
      text: 'El Atteuf',
    },
    {
      id: 1492,
      text: 'Bounoura',
    },
    {
      id: 1503,
      text: 'Zelfana',
    },
    {
      id: 1497,
      text: 'El Guerrara',
    },
    {
      id: 1502,
      text: 'Sebseb',
    },
    {
      id: 1501,
      text: 'Metlili',
    },
    {
      id: 1491,
      text: 'Berriane',
    },
    {
      id: 1496,
      text: 'Ghardaia',
    },
  ],
  48: [
    {
      id: 1516,
      text: 'El-Guettar',
    },
    {
      id: 1530,
      text: 'Ouled Aiche',
    },
    {
      id: 1509,
      text: 'Beni Dergoun',
    },
    {
      id: 1511,
      text: 'Dar Ben Abdelah',
    },
    {
      id: 1541,
      text: 'Zemmoura',
    },
    {
      id: 1512,
      text: 'Djidiouia',
    },
    {
      id: 1519,
      text: 'Hamri',
    },
    {
      id: 1507,
      text: 'Belaassel Bouzagza',
    },
    {
      id: 1517,
      text: 'El-Matmar',
    },
    {
      id: 1534,
      text: 'Sidi Khettab',
    },
    {
      id: 1537,
      text: "Sidi M'hamed Benaouda",
    },
    {
      id: 1505,
      text: 'Ain-Tarek',
    },
    {
      id: 1518,
      text: 'Had Echkalla',
    },
    {
      id: 1515,
      text: 'El Ouldja',
    },
    {
      id: 1522,
      text: 'Mazouna',
    },
    {
      id: 1504,
      text: 'Ain Rahma',
    },
    {
      id: 1520,
      text: 'Kalaa',
    },
    {
      id: 1538,
      text: 'Sidi Saada',
    },
    {
      id: 1540,
      text: 'Yellel',
    },
    {
      id: 1539,
      text: 'Souk El Had',
    },
    {
      id: 1524,
      text: 'Mendes',
    },
    {
      id: 1528,
      text: 'Oued Essalem',
    },
    {
      id: 1535,
      text: 'Sidi Lazreg',
    },
    {
      id: 1506,
      text: 'Ammi Moussa',
    },
    {
      id: 1526,
      text: 'Ouarizane',
    },
    {
      id: 1525,
      text: 'Merdja Sidi Abed',
    },
    {
      id: 1531,
      text: 'Ouled Sidi Mihoub',
    },
    {
      id: 1508,
      text: 'Bendaoud',
    },
    {
      id: 1529,
      text: 'Oued-Rhiou',
    },
    {
      id: 1513,
      text: 'El Hassi',
    },
    {
      id: 1536,
      text: "Sidi M'hamed Benali",
    },
    {
      id: 1523,
      text: 'Mediouna',
    },
    {
      id: 1510,
      text: 'Beni Zentis',
    },
    {
      id: 1527,
      text: 'Oued El Djemaa',
    },
    {
      id: 1521,
      text: 'Lahlef',
    },
    {
      id: 1533,
      text: 'Relizane',
    },
    {
      id: 1514,
      text: "El H'madna",
    },
    {
      id: 1532,
      text: 'Ramka',
    },
  ],
  49: [
    {
      id: 25,
      text: 'Tinerkouk',
    },
    {
      id: 24,
      text: 'Timimoun',
    },
    {
      id: 15,
      text: 'Ouled Said',
    },
    {
      id: 12,
      text: 'Metarfa',
    },
    {
      id: 19,
      text: 'Talmine',
    },
    {
      id: 14,
      text: 'Ouled Aissa',
    },
    {
      id: 7,
      text: 'Charouine',
    },
    {
      id: 3,
      text: 'Aougrout',
    },
    {
      id: 8,
      text: 'Deldoul',
    },
    {
      id: 11,
      text: 'Ksar Kaddour',
    },
  ],
  50: [
    {
      id: 23,
      text: 'Timiaouine',
    },
    {
      id: 5,
      text: 'Bordj Badji Mokhtar',
    },
  ],
  51: [
    {
      id: 258,
      text: 'Ras El Miad',
    },
    {
      id: 232,
      text: 'Besbes',
    },
    {
      id: 259,
      text: 'Sidi Khaled',
    },
    {
      id: 240,
      text: 'Doucen',
    },
    {
      id: 237,
      text: 'Chaiba',
    },
    {
      id: 255,
      text: 'Ouled Djellal',
    },
  ],
  52: [
    {
      id: 265,
      text: 'Beni-Abbes',
    },
    {
      id: 282,
      text: 'Tamtert',
    },
    {
      id: 271,
      text: 'Igli',
    },
    {
      id: 269,
      text: 'El Ouata',
    },
    {
      id: 279,
      text: 'Ouled-Khodeir',
    },
    {
      id: 273,
      text: 'Kerzaz',
    },
    {
      id: 283,
      text: 'Timoudi',
    },
    {
      id: 274,
      text: 'Ksabi',
    },
    {
      id: 266,
      text: 'Beni-Ikhlef',
    },
  ],
  53: [
    {
      id: 360,
      text: 'Inghar',
    },
    {
      id: 357,
      text: 'Ain Salah',
    },
    {
      id: 358,
      text: 'Foggaret Ezzoua',
    },
  ],
  54: [
    {
      id: 363,
      text: 'Tin Zouatine',
    },
    {
      id: 356,
      text: 'Ain Guezzam',
    },
  ],
  55: [
    {
      id: 1107,
      text: 'Temacine',
    },
    {
      id: 1104,
      text: 'Sidi Slimane',
    },
    {
      id: 1097,
      text: 'Megarine',
    },
    {
      id: 1099,
      text: 'Nezla',
    },
    {
      id: 1091,
      text: 'Blidet Amor',
    },
    {
      id: 1106,
      text: 'Tebesbest',
    },
    {
      id: 1108,
      text: 'Touggourt',
    },
    {
      id: 1105,
      text: 'Taibet',
    },
    {
      id: 1092,
      text: 'El Alia',
    },
    {
      id: 1094,
      text: 'El-Hadjira',
    },
    {
      id: 1090,
      text: 'Benaceur',
    },
    {
      id: 1098,
      text: "M'naguer",
    },
    {
      id: 1109,
      text: 'Zaouia El Abidia',
    },
  ],
  56: [
    {
      id: 1161,
      text: 'Djanet',
    },
    {
      id: 1158,
      text: 'Bordj El Haouass',
    },
  ],
  57: [
    {
      id: 1296,
      text: 'Oum Touyour',
    },
    {
      id: 1300,
      text: 'Sidi Amrane',
    },
    {
      id: 1293,
      text: "M'rara",
    },
    {
      id: 1281,
      text: 'Djamaa',
    },
    {
      id: 1306,
      text: 'Tenedla',
    },
    {
      id: 1284,
      text: "El-M'ghaier",
    },
    {
      id: 1303,
      text: 'Still',
    },
    {
      id: 1302,
      text: 'Sidi Khelil',
    },
  ],
  58: [
    {
      id: 1495,
      text: 'El Meniaa',
    },
    {
      id: 1499,
      text: 'Hassi Gara',
    },
    {
      id: 1498,
      text: 'Hassi Fehal',
    },
  ],
}

export { wilaya, commune }
