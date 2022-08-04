'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6e1e92f6bcba7c9d0fb5a29bb2a3cb1e",
"assets/assets/avant-garde_blues": "73b40981ce1bb0da94f3963dcd345067",
"assets/assets/avant-garde_childrens": "2b727fd44790989a6a6ac96455bebd2c",
"assets/assets/avant-garde_classical": "4f10c66094d5fbb18e699ffaab4db5d7",
"assets/assets/avant-garde_comedy-spoken": "c8fc2c0683ac00eef75997a899f3597b",
"assets/assets/avant-garde_country": "7ed17b9970098984f056f870a02cc7c5",
"assets/assets/avant-garde_easy-listening": "2317f1a33acb22cc33cd65e923682d05",
"assets/assets/avant-garde_electronic": "26ecc62690115da339fd9acd9aeb4030",
"assets/assets/avant-garde_folk": "fd2fee11bdd293707373d514da33d02a",
"assets/assets/avant-garde_international": "0f1adb75911832432307e509dd8b790b",
"assets/assets/avant-garde_jazz": "47f8efa91771b40b89f091223f9d66a1",
"assets/assets/avant-garde_latin": "4004fb18680bc9de17d3562b70c62a3d",
"assets/assets/avant-garde_new-age": "b9f19ade7b7a34c93256c60e724df110",
"assets/assets/avant-garde_pop-rock": "b78ecd47d8c053d9252c0be0031c2958",
"assets/assets/avant-garde_r-b": "76b23d724f7aa32d0509848f0c70b738",
"assets/assets/avant-garde_rap": "a7ad7a8b0c16eb7dff7fe5e030731310",
"assets/assets/avant-garde_reggae": "8584a4390a9d609c49495c07431b7911",
"assets/assets/avant-garde_stage-screen": "03a7e0fd8b76a0efeeb57cc2417b6e34",
"assets/assets/avant-garde_vocal": "44d8d17bd6fad9663237c6b5e0a7b9db",
"assets/assets/blues_avant-garde": "de550384051899292e1866c2afb911d9",
"assets/assets/blues_childrens": "9c0cb2f4b6dd2f8e1e582437054e8cf4",
"assets/assets/blues_classical": "07918adb2dc86d0728d4ed297dbe6709",
"assets/assets/blues_comedy-spoken": "15d04870021307579eb5f5ee57042d05",
"assets/assets/blues_country": "d08d4fbbd86de0ee16d88f699cd12e57",
"assets/assets/blues_easy-listening": "3d7bec3406a9ae0551334a17b02ecadd",
"assets/assets/blues_electronic": "5cf26e5366433a2500442d398f4b3dab",
"assets/assets/blues_folk": "b9bf81c52930004ec9e315b91e5278f2",
"assets/assets/blues_international": "54c9164e09cdde2f09f696e8497ddb7e",
"assets/assets/blues_jazz": "14197d4e5cec61ee5bdd141c8d7ff42d",
"assets/assets/blues_latin": "f0832764efeeb47b28e720a6d3e0d2cc",
"assets/assets/blues_new-age": "bdc504c04bfbf475c2267d80064a949f",
"assets/assets/blues_pop-rock": "60de9a204980c900fd06f99edb5845cf",
"assets/assets/blues_r-b": "afa17b1fc817644493c1c2f1fdc587b4",
"assets/assets/blues_rap": "78eff0a9600a433ac82e363b21531cb7",
"assets/assets/blues_reggae": "d1932f271dba4e4719dbd5b108abb38a",
"assets/assets/blues_stage-screen": "73d53dbf2d58ece1ce8a66f7b7b5464f",
"assets/assets/blues_vocal": "7007c08fcfd3417350b562abf7912060",
"assets/assets/childrens_avant-garde": "22af158d4a5449fd07f4db362efefa2c",
"assets/assets/childrens_blues": "49ff712a85cd3996608b6855981fe0b1",
"assets/assets/childrens_classical": "cb6246866b42deda2757181b16501227",
"assets/assets/childrens_comedy-spoken": "76c2faedbe5a6a85dc16beee0a2541b4",
"assets/assets/childrens_country": "8a56f847f980c7246af81b815a5ae2b4",
"assets/assets/childrens_easy-listening": "f24edf22062301a0ec3b91a9038fc339",
"assets/assets/childrens_electronic": "00e64854fb2c8a569bb46e5bd15fc0db",
"assets/assets/childrens_folk": "2f1d3ea15967d05ea7733b9c9f7631e1",
"assets/assets/childrens_international": "c1d0e980070c8b91388f10a42d05eb0d",
"assets/assets/childrens_jazz": "7e584b58b0dc783247077e5ce2c71234",
"assets/assets/childrens_latin": "0e46690498529ce86b2f0bd3504c19a2",
"assets/assets/childrens_new-age": "f44d18fe0091353528a5b4b9cdd15e57",
"assets/assets/childrens_pop-rock": "968e438280e330137dff1ead7cf0bc6d",
"assets/assets/childrens_r-b": "3863016fabfa0703be242a784840b17c",
"assets/assets/childrens_rap": "dc9854b716190755b4ba3d622553fcea",
"assets/assets/childrens_reggae": "8ed224f881309bc1a7665923597b33d8",
"assets/assets/childrens_stage-screen": "38de84bbe220c18df7730d802b7a54cb",
"assets/assets/childrens_vocal": "e827522da91d5fdd8bf8327fce2e6e47",
"assets/assets/classical_avant-garde": "23308fe6a61b4c19fb158d3a882bbe6b",
"assets/assets/classical_blues": "7c7e6c25bc89f946589cd2430dd4504c",
"assets/assets/classical_childrens": "7b52ac478557ee564222fbd75313bf23",
"assets/assets/classical_comedy-spoken": "4e9b474336a0c2530a31aeaccf749c00",
"assets/assets/classical_country": "a01079bbfaa226dd2bd2ed334b6b6ad2",
"assets/assets/classical_easy-listening": "94474e609c21839258651ebb61289364",
"assets/assets/classical_electronic": "29ebcac26d54752704c7e3ec990fd6a0",
"assets/assets/classical_folk": "2483970ad78f93a469c1cf1cef3f8c1b",
"assets/assets/classical_international": "6be0eadc60012ff19ff00bc7c0926dba",
"assets/assets/classical_jazz": "ef1448e1cef5e134162d24ba94a1359d",
"assets/assets/classical_latin": "7ec0d235476dfa5cc060d060f17a6732",
"assets/assets/classical_new-age": "71ec74592dda08779b0633b5ba9822ab",
"assets/assets/classical_pop-rock": "933c55051edc8dc42804c0466e78184b",
"assets/assets/classical_r-b": "a7591cc8d0880e1bb10f6b0d1d593d38",
"assets/assets/classical_rap": "2acf9a5a1681347f323a82dcc29a3b6c",
"assets/assets/classical_reggae": "b9848e51bf0ec4c9aa388e8f4a422ab8",
"assets/assets/classical_stage-screen": "73f2e926c573d9cfb8243a08a2e08d33",
"assets/assets/classical_vocal": "f38be629a67b59c75405c5b321b441e5",
"assets/assets/comedy-spoken_avant-garde": "15506884a87465d34780ae4bcbee1613",
"assets/assets/comedy-spoken_blues": "cd317f498ab2d94220523e98998b333f",
"assets/assets/comedy-spoken_childrens": "b18f0b6842a2e29fabe0e3d3a1488a2c",
"assets/assets/comedy-spoken_classical": "dbbdb065426ee4145c1dae99871fd30e",
"assets/assets/comedy-spoken_country": "3ee446a2d9bddc5d37b5b01ccb0e20d4",
"assets/assets/comedy-spoken_easy-listening": "0b1752fd1aa7f30cfb4d7fc3c6ddd0e1",
"assets/assets/comedy-spoken_electronic": "884f70b2000c2153f8f3a6f36b67f011",
"assets/assets/comedy-spoken_folk": "0540239bbdcd1380dbb140445ed54c33",
"assets/assets/comedy-spoken_international": "02fb22093be9a4b0d5dd999690f4283f",
"assets/assets/comedy-spoken_jazz": "6110823c2e2ccbdb8c83eeb001e49d91",
"assets/assets/comedy-spoken_latin": "81bca305fa545446af76d01fd44a24d7",
"assets/assets/comedy-spoken_new-age": "193d27089f7d5b7ec91a0e39f893944b",
"assets/assets/comedy-spoken_pop-rock": "241263c11ebfe0582befc1d9d589f419",
"assets/assets/comedy-spoken_r-b": "474a44d13541d4bcdca7ff289b1b2619",
"assets/assets/comedy-spoken_rap": "2c2509551e33304adbd51d73bf82a6ce",
"assets/assets/comedy-spoken_reggae": "8906bd0d1ae0f7e2a5245ed60c7fdd05",
"assets/assets/comedy-spoken_stage-screen": "9f0a3efdd2f4a99a1e87ee2342c9c1eb",
"assets/assets/comedy-spoken_vocal": "6c4775e64631ed293adb47dc16fd96f0",
"assets/assets/country_avant-garde": "71964a69cd2793d6bff2ce2c9b43aab1",
"assets/assets/country_blues": "b0a47ee33645ea09bcfe5597a6fe956f",
"assets/assets/country_childrens": "10010efce3f3818101d1540fbd71fcdb",
"assets/assets/country_classical": "1806186aae3d84f01534f7d2464ae29b",
"assets/assets/country_comedy-spoken": "4f606c181dd26803d2ef55625d2d6a4c",
"assets/assets/country_easy-listening": "5fc476686eb04fa4677c877717947e90",
"assets/assets/country_electronic": "9c9a03ea9bd2a98e032484feb1446ef0",
"assets/assets/country_folk": "72dc12a6f808c9829965b954ba2988a4",
"assets/assets/country_international": "7ec52173aaad5056cc746cb173da4709",
"assets/assets/country_jazz": "6dfafec1b6e4f59ccca31f79e9dc8258",
"assets/assets/country_latin": "2d1bb8320f6a88bbb5996ccb291b1d5f",
"assets/assets/country_new-age": "f3e72d57794c5af7bc4832644c92279e",
"assets/assets/country_pop-rock": "701c38157e93ec725cdc444e9ad85009",
"assets/assets/country_r-b": "b184feb72a3a8d7cc804838325d8061a",
"assets/assets/country_rap": "532717764ddd691ec710a787ea23ae0f",
"assets/assets/country_reggae": "79c249ab95e81bb409c5aa7d596924f7",
"assets/assets/country_stage-screen": "a84357eae1cfa2d4882004dba7fe246f",
"assets/assets/country_vocal": "800e70f6b010c79096f000ffbf8ea3ca",
"assets/assets/easy-listening_avant-garde": "5a31df466b1f8303774a0dd31c107e11",
"assets/assets/easy-listening_blues": "ce7ca976449d378825cc68de19b1545f",
"assets/assets/easy-listening_childrens": "97b9d163aa95f61918dd739a722496de",
"assets/assets/easy-listening_classical": "dedf66c969d4f49c78ff21d18e517bcf",
"assets/assets/easy-listening_comedy-spoken": "c338bfb2219c07faa16c12495f0097b1",
"assets/assets/easy-listening_country": "f26aad1a4895286d051b3919bce8b700",
"assets/assets/easy-listening_electronic": "a8245e81e1c47f6e7824bedddf0e4218",
"assets/assets/easy-listening_folk": "02036bd7f485a1ce85f9948b92ecaf4c",
"assets/assets/easy-listening_international": "ac3a3fbe68c2087ab17b8b68855f8f0f",
"assets/assets/easy-listening_jazz": "63e7e9991e8332279040b78b6994ea14",
"assets/assets/easy-listening_latin": "6a391e7b9f790257a190b7b8efee6b3e",
"assets/assets/easy-listening_new-age": "1461ccd0a055a3578efb657e090150c9",
"assets/assets/easy-listening_pop-rock": "959c54b227a9e4fb38b4e348aebf0add",
"assets/assets/easy-listening_r-b": "2744a29a357c424299e07df74e7c54ab",
"assets/assets/easy-listening_rap": "10d3ff30aa3e02e201b7cadcb406c43a",
"assets/assets/easy-listening_reggae": "d637fe3af3b16142eb9c59bdf1464a39",
"assets/assets/easy-listening_stage-screen": "4bb9fd445e3ad8afb883fbf4869d0577",
"assets/assets/easy-listening_vocal": "136941ea425fc3773c628758c9fbf155",
"assets/assets/electronic_avant-garde": "29a82ee79cd7914e4021e28e1794a422",
"assets/assets/electronic_blues": "3520b7a2e05dc5e6e0b6b31be6a225ec",
"assets/assets/electronic_childrens": "59c3f490e21019178b4fe241cb0c32df",
"assets/assets/electronic_classical": "fface53baf656909075fb6514154158c",
"assets/assets/electronic_comedy-spoken": "4ce8880908423ad86f3481d8e3cde274",
"assets/assets/electronic_country": "6560c325f712b5607aafc596201831bf",
"assets/assets/electronic_easy-listening": "78e8ab5a5c896a3d0eeceeed72b4f39f",
"assets/assets/electronic_folk": "ba44d3f4497862471a92447eb73d1d9b",
"assets/assets/electronic_international": "4b352c14fb86ffd38bcfcfe5f8002ae7",
"assets/assets/electronic_jazz": "395a4a1c084d24a2ab19874fb817c698",
"assets/assets/electronic_latin": "15ab49c859e88a83b3ad6fa97d936f53",
"assets/assets/electronic_new-age": "3068ee5678eda2249baddc926f4450d1",
"assets/assets/electronic_pop-rock": "66db2ed9b1feced9c7758553a9d1ef8d",
"assets/assets/electronic_r-b": "1c5b85e3eda372993a96d3568e1a4fc5",
"assets/assets/electronic_rap": "0b90213574c2be5fb2495e66b5a8ccb2",
"assets/assets/electronic_reggae": "19a8da4353c51bc738056a6a3691302e",
"assets/assets/electronic_stage-screen": "3fb1cf3fe96964c972463d6e5c735527",
"assets/assets/electronic_vocal": "b70390440b8cfdee24ccaf80db9a76f4",
"assets/assets/folk_avant-garde": "57ae0950b1bda0906307985aa2f55400",
"assets/assets/folk_blues": "10fd8e44f53b3d7435d6fa7caabf5871",
"assets/assets/folk_childrens": "96cf130f7d8974d091cce2ab6eef4c65",
"assets/assets/folk_classical": "2534db15d34b0be1056b750116cb87f2",
"assets/assets/folk_comedy-spoken": "a3ddbc8fb3a5f95c128324998646d0f2",
"assets/assets/folk_country": "73dc71f37c09af5ebc536016ca6e79de",
"assets/assets/folk_easy-listening": "0980bae9c7a1979a187b7cfdac25cd4f",
"assets/assets/folk_electronic": "c4f22c1f7492c358a8ce0ccaa0c22e37",
"assets/assets/folk_international": "d3ecf7e20d99bef51cad8d69bbb7c097",
"assets/assets/folk_jazz": "7bac13d89422b5f16445aafc0312d25d",
"assets/assets/folk_latin": "016ee898d93784d91757acbccd50534e",
"assets/assets/folk_new-age": "af26e372ab3275e0c183ec54677294b8",
"assets/assets/folk_pop-rock": "1c04288fd2b62b2d792cf5b81cc5c8a8",
"assets/assets/folk_r-b": "07da58556f520fadc823bbd1cd4166b4",
"assets/assets/folk_rap": "f296998d6bb47ee244701aad23c66280",
"assets/assets/folk_reggae": "048ec65653370259f63ae0d21acf8ad2",
"assets/assets/folk_stage-screen": "f566e7c16776c260f8ba9b0e5bcbe4d4",
"assets/assets/folk_vocal": "1b3702341c96822e5901cd2aa72c6ad4",
"assets/assets/international_avant-garde": "18640a3f1bed772f251331cb4c3e1fcc",
"assets/assets/international_blues": "ee058ad780f0d61f6e1b13f00a829f94",
"assets/assets/international_childrens": "5817a8094ef02a3b2e73f83446fd2a87",
"assets/assets/international_classical": "9038ad5b7d3bbef0b9487f934c04b830",
"assets/assets/international_comedy-spoken": "17c678caa610caef246b2fffac82bc60",
"assets/assets/international_country": "8fa938cd69e70790f562cd8afc655244",
"assets/assets/international_easy-listening": "adb03f8320fa79ac401ab6f20ea60a3d",
"assets/assets/international_electronic": "85ac31c252e617e89586b5ecef26b1c3",
"assets/assets/international_folk": "7e92246d28b2142fa2079b5f32fefb8a",
"assets/assets/international_jazz": "79b71e600160ca2e3b6ef2688cedbd38",
"assets/assets/international_latin": "5154e07c98409f02be6649b94198a9c7",
"assets/assets/international_new-age": "823f6b4f16d38c9d7c80836b9e741f9f",
"assets/assets/international_pop-rock": "fb3d8bcefd7149b205e71de6a99cc0cc",
"assets/assets/international_r-b": "71f829aaa1a8cdcb0036719921f6cd77",
"assets/assets/international_rap": "91e2d7b8b8889dec519db875293f3be5",
"assets/assets/international_reggae": "44b15dba826457b18aaad81aab102425",
"assets/assets/international_stage-screen": "d8908e35bc856bdb843bdaa03436326f",
"assets/assets/international_vocal": "3ac5e674faf8dbbfeea79bb5f255efe5",
"assets/assets/jazz_avant-garde": "3df82a7e2a20efc20ca6e07892da7338",
"assets/assets/jazz_blues": "03c15b5907de9b5a9b1071f4533daf51",
"assets/assets/jazz_childrens": "f96ecaced7f424597e04ef31bdd99cb7",
"assets/assets/jazz_classical": "e815ccc39c25d62927c37ccd14d1af97",
"assets/assets/jazz_comedy-spoken": "685fc76605983c9eb695f171df4401c2",
"assets/assets/jazz_country": "8e3e6cbb0e92a4f0d6d77b96d16745ae",
"assets/assets/jazz_easy-listening": "0e213386fbf120b53031ff95c63ca674",
"assets/assets/jazz_electronic": "4b6b99dfbd464eebe9450957a9bdf6a2",
"assets/assets/jazz_folk": "115adc9e7bfc8859ed41acca8822d2f6",
"assets/assets/jazz_international": "86818b89f6abecadddb0cd0d71c7d89e",
"assets/assets/jazz_latin": "2a276a4a9effa7bd999179f2a1bcd4bc",
"assets/assets/jazz_new-age": "b49200a63ce8fdc4c78e6a5a3ba42c84",
"assets/assets/jazz_pop-rock": "a9098c6d1a9e8f54c483a7e4ce0c8e9d",
"assets/assets/jazz_r-b": "b2cf9a7e758b4812fd336c3a1032021e",
"assets/assets/jazz_rap": "e87860a216f4893be9e9c70cd15af9c3",
"assets/assets/jazz_reggae": "65b327d1bcfe5bde7c569f786cd26459",
"assets/assets/jazz_stage-screen": "fa35b6c940f585fa3a78253c013f2754",
"assets/assets/jazz_vocal": "3eec71d940b4a358556d0dc3620224d1",
"assets/assets/latin_avant-garde": "76fea0ced45386cabb6de5034ce47ea8",
"assets/assets/latin_blues": "69e37f8da025dc759f542762ed324ac4",
"assets/assets/latin_childrens": "d34b63f74ecf77d6c30b4bf0b48325f5",
"assets/assets/latin_classical": "696e8e97a0f4adf623b438b163115ea6",
"assets/assets/latin_comedy-spoken": "12718aff9ae636bc110cb5bbe8284d64",
"assets/assets/latin_country": "958aa9f3c9ecfc300d9971d0d13cd30e",
"assets/assets/latin_easy-listening": "a6c7a68336d9ccb19d69c3d6bd5243c4",
"assets/assets/latin_electronic": "e30cdd32e49007f4903a9b687220d17c",
"assets/assets/latin_folk": "0a4f70c6eb73cb5a9b69fd3bec0bd55e",
"assets/assets/latin_international": "4b5c2fc38226890cc3de8fa58fc30537",
"assets/assets/latin_jazz": "28e7335f810ffd5095678674f80d90df",
"assets/assets/latin_new-age": "979f8568f359c597bbb40cd3d985ddb3",
"assets/assets/latin_pop-rock": "da90ecb7a7c00479826d9a41e70dbc11",
"assets/assets/latin_r-b": "0e1099c8910e915e75798ff2db6ffcf8",
"assets/assets/latin_rap": "784ba598b1d0b124a1895a32ffbf6ddb",
"assets/assets/latin_reggae": "80df6fac8ff9a3b855df33a3808dcf0b",
"assets/assets/latin_stage-screen": "94556d482e73607542a48e6bde2cae85",
"assets/assets/latin_vocal": "f8e5c47a977f4b260897cf0859abe1b7",
"assets/assets/new-age_avant-garde": "8e45dc0daeb4db4730cb95f4c6bb7d30",
"assets/assets/new-age_blues": "0b20d8a098cb4fee1aa4a57c5ce923b3",
"assets/assets/new-age_childrens": "3111471bdf922cd6d2f1c506d2c350c6",
"assets/assets/new-age_classical": "d8d08dd432fb5f792b26f084f53eb4f8",
"assets/assets/new-age_comedy-spoken": "c97e6896405b5f0b8203227f0dc9694c",
"assets/assets/new-age_country": "560c811f4738476bd21d7237b971c20e",
"assets/assets/new-age_easy-listening": "bc4eb1482c3e538644ad1e4cbb52001e",
"assets/assets/new-age_electronic": "2b60aa473f283c680cb123a9c4fd01aa",
"assets/assets/new-age_folk": "5835574be30380b2eb37653f5fd07ad5",
"assets/assets/new-age_international": "2d647486292e87e0fe7cc1aa40ac6a6d",
"assets/assets/new-age_jazz": "a7bd1919968ba9c026edf5eadff59ace",
"assets/assets/new-age_latin": "6fb8c0c168138a9692231fa37fe8cd37",
"assets/assets/new-age_pop-rock": "5e7d8fa7667609bfaf69eed511718419",
"assets/assets/new-age_r-b": "94f755cbdc47555e754377d8d2268dc1",
"assets/assets/new-age_rap": "39ca5dc2382273d7a439c29f41d663fe",
"assets/assets/new-age_reggae": "173da8a1a8c41ee02b8df2018f87f014",
"assets/assets/new-age_stage-screen": "064cb86bb0a5de8765e82d935c043880",
"assets/assets/new-age_vocal": "6570bdede898894f563be9c1c96a8c32",
"assets/assets/pop-rock_avant-garde": "ddecef48a9a57ea56cca0006b1390f89",
"assets/assets/pop-rock_blues": "53767c45604d407fd3de58c099a118d3",
"assets/assets/pop-rock_childrens": "5fba94d8ccdd53888c5610ab00dbf10d",
"assets/assets/pop-rock_classical": "0c0e23eae6c67029132a014d407028e1",
"assets/assets/pop-rock_comedy-spoken": "179430faa52377efc22b6ca96a2bdb9b",
"assets/assets/pop-rock_country": "05dfd7362657f9b38f30b825ff600e92",
"assets/assets/pop-rock_easy-listening": "eb023b1bad1ec447dfcce62490b5b61c",
"assets/assets/pop-rock_electronic": "26e2507050d4d5d0f364aa031320a60e",
"assets/assets/pop-rock_folk": "dc1bfd93212d0d56c3c496a138798a20",
"assets/assets/pop-rock_international": "3e8003134dea316962dc07018d045165",
"assets/assets/pop-rock_jazz": "7c5d0c64919077c0cda09d4057468a6b",
"assets/assets/pop-rock_latin": "989f1991f1d9d4d6f09e4aa0ac17cabb",
"assets/assets/pop-rock_new-age": "d20b8bb3089a1ef645c7daef5b714374",
"assets/assets/pop-rock_r-b": "3661aa82c86c6d8add2dc039c9ac4dfe",
"assets/assets/pop-rock_rap": "2165eac863fa6f194b03e854fa570ee3",
"assets/assets/pop-rock_reggae": "54b583bb5bc5f3e61fee9d4535e0de7d",
"assets/assets/pop-rock_stage-screen": "8911ffcc38a203d2c92d3f3558c3de21",
"assets/assets/pop-rock_vocal": "083da504856c3c5611dca1cec595dabb",
"assets/assets/r-b_avant-garde": "616d037b137860899e1a211ac7351a4a",
"assets/assets/r-b_blues": "a887147f66c6ded8f54d49db2bd1bc89",
"assets/assets/r-b_childrens": "7891eb275040b0b5188ec84107a9d034",
"assets/assets/r-b_classical": "99248f462b54f31a11b5b8945e0438eb",
"assets/assets/r-b_comedy-spoken": "9256884d7d2cab8ac6747039ca7e1204",
"assets/assets/r-b_country": "ba58aa95885c8d5fed326f3ffbc7b550",
"assets/assets/r-b_easy-listening": "45c5eaec93defbd33d10619b3ef02493",
"assets/assets/r-b_electronic": "a19ac50033588df8c88ea1d8e351fa35",
"assets/assets/r-b_folk": "10f0fb19c8ab4cec1a63246e52d5fbac",
"assets/assets/r-b_international": "ca20cdd6eb22c99f0d6bef8602b785e8",
"assets/assets/r-b_jazz": "ef501ef11d27e8d425a6bba61a0eaeac",
"assets/assets/r-b_latin": "04bd8dcb7daf30e3224ebecd61c7b7bf",
"assets/assets/r-b_new-age": "0c391e1a3bdade403e9103a6d5595bf0",
"assets/assets/r-b_pop-rock": "749735294ee2bdedcc40f1606c4d59ae",
"assets/assets/r-b_rap": "d78b5d7f3e4afc1d68f336fc652716d2",
"assets/assets/r-b_reggae": "9655d77938045e9dc46af9d5798f36b5",
"assets/assets/r-b_stage-screen": "0e253b1bf90e047e6a1ccf3fb114b4a4",
"assets/assets/r-b_vocal": "aac864143bed69eb15ee18cbd61b1eee",
"assets/assets/rap_avant-garde": "69aa0101b5f9ca2a2a0dba2b801dea35",
"assets/assets/rap_blues": "e89e321cd56bdcbb33ecd4034b5d05df",
"assets/assets/rap_childrens": "4cc2d8361c06438f7ce36579490a9b7a",
"assets/assets/rap_classical": "7cb513a164c1e94b324dc993ed69d07b",
"assets/assets/rap_comedy-spoken": "03e4d3a291456c019641abab8b2a5bab",
"assets/assets/rap_country": "5dc6657c694e9700d1bca6acd8d8c696",
"assets/assets/rap_easy-listening": "abf808c12d7d6b397ab22ab97513aa46",
"assets/assets/rap_electronic": "712b7a50e532bcb50e40f349bbd470e1",
"assets/assets/rap_folk": "2f974afa75c0033d3a606b8402336009",
"assets/assets/rap_international": "8c018417deec1e6166992d181f15f0fc",
"assets/assets/rap_jazz": "2caae38aba6d59144ecbf0c311b53604",
"assets/assets/rap_latin": "55dd1606fbaaf109754979bd90e72593",
"assets/assets/rap_new-age": "5fae8b333f28ed6f0397de5d6f65098c",
"assets/assets/rap_pop-rock": "ad073ad1f5c5b176e8318dcebc282b92",
"assets/assets/rap_r-b": "138541e53971096eda9622425803bd7a",
"assets/assets/rap_reggae": "c3dce272fd253e87279853f0c2fcbdb4",
"assets/assets/rap_stage-screen": "7e8e5ef11143fec3322c12272c0c01aa",
"assets/assets/rap_vocal": "c2febeede6aeb9fe9a3a19868002dd58",
"assets/assets/reggae_avant-garde": "ed53f24f2655fa0f1de9fee2739aae50",
"assets/assets/reggae_blues": "e856f8985dd989e875f372dd0cd14358",
"assets/assets/reggae_childrens": "fe4759b171818aba151f0484b2223346",
"assets/assets/reggae_classical": "a4b43ea2117e3a08433fe2d986e3ba59",
"assets/assets/reggae_comedy-spoken": "e760bc1ae8264417500e31ba1e840a95",
"assets/assets/reggae_country": "82b3f3ac85a006d3da6b8d86c735e014",
"assets/assets/reggae_easy-listening": "5b77ad9113d04bfa6143c4ff7f77a15c",
"assets/assets/reggae_electronic": "c0f985359dae8992d0059bbf14007955",
"assets/assets/reggae_folk": "81d0f949f5f8fc9663e72d2c776ac892",
"assets/assets/reggae_international": "f060504cd13b1c66ac24821c4a7fd266",
"assets/assets/reggae_jazz": "4ef4d81eed6905888bf65f17e673ffdd",
"assets/assets/reggae_latin": "6c7be6d5d563ec349005d18bdf587730",
"assets/assets/reggae_new-age": "fa3d7ddd3e4b4e12326551a16d2c5a4c",
"assets/assets/reggae_pop-rock": "2fc5a97339a9adeabae46be22ebfa780",
"assets/assets/reggae_r-b": "f33b5e8d16e4d8449a00b897cb8ab2a9",
"assets/assets/reggae_rap": "2b66025b7eaaef07a79413db4291cca5",
"assets/assets/reggae_stage-screen": "20457fdca2dbd88584c11a7714b134cd",
"assets/assets/reggae_vocal": "c8616fc845017dfb4df394df503c8278",
"assets/assets/stage-screen_avant-garde": "b0d6f29f3579779a61dd67a9e2846122",
"assets/assets/stage-screen_blues": "4ad98251edd14081d6612091dd175679",
"assets/assets/stage-screen_childrens": "3a33d5ce47dd4a662ee7b1320ba30398",
"assets/assets/stage-screen_classical": "8f43556e0531b6945f9e01d952acfd43",
"assets/assets/stage-screen_comedy-spoken": "6590b789a20be85a53a167ff75453a75",
"assets/assets/stage-screen_country": "37a3dec4f6215fc5b200c9fc631e26fa",
"assets/assets/stage-screen_easy-listening": "3c3930139401a0e6af9028fe9e63e9ab",
"assets/assets/stage-screen_electronic": "98b755a27b67a7c4f0a7fa11e9659b92",
"assets/assets/stage-screen_folk": "266700764fe23d597892cc04214877bc",
"assets/assets/stage-screen_international": "0cdc0251afb12c91e62d3efa8dc41be8",
"assets/assets/stage-screen_jazz": "21a6cda226509c497b9ff6577c5d5c3f",
"assets/assets/stage-screen_latin": "591b5018c3620d30c56e8732cbbd4b67",
"assets/assets/stage-screen_new-age": "9632f366f881630e8e2193ea861439a0",
"assets/assets/stage-screen_pop-rock": "40d50c68f68e708712211663b9577d0d",
"assets/assets/stage-screen_r-b": "7a1d18941a9e56e21d23fcb9964cdc99",
"assets/assets/stage-screen_rap": "28db65943cb15ffe660e73276414ea99",
"assets/assets/stage-screen_reggae": "9f1cdd7e7a1edcf184bed94970c05a9c",
"assets/assets/stage-screen_vocal": "968e148b9c3f190a9bc61fc942ca64aa",
"assets/assets/vocal_avant-garde": "2f073634657a11f5847bdeba0bb75dc2",
"assets/assets/vocal_blues": "363a95a70ff1c5716dcd46ab122d58b3",
"assets/assets/vocal_childrens": "acf6a5aa8b01faf452a721062c1e30ab",
"assets/assets/vocal_classical": "9932f65dd1d5989404aadc7c380dfe45",
"assets/assets/vocal_comedy-spoken": "c821852a4b3908ffcd037599577efc8a",
"assets/assets/vocal_country": "7c0d75e512d3ab552b783ba10f8edce3",
"assets/assets/vocal_easy-listening": "3ef91ce536142c3ea73ed3bea7674e16",
"assets/assets/vocal_electronic": "84a464b9cd8156b5ba30025f6143a186",
"assets/assets/vocal_folk": "7c23e1efc95128d5990a204cd5bd6f84",
"assets/assets/vocal_international": "032d0e98c26dd7de32f95b71e5bf79d6",
"assets/assets/vocal_jazz": "20ab6cdbcebd663b2c2d28269cece648",
"assets/assets/vocal_latin": "3418da73f61f9ba47ebe1a2b33665e07",
"assets/assets/vocal_new-age": "ebde84a1c19e7247db93326d095ed7e4",
"assets/assets/vocal_pop-rock": "d830c809c3da4d215cffb5b20eeec788",
"assets/assets/vocal_r-b": "3997f34fff8a56db64cf67c12ae7b755",
"assets/assets/vocal_rap": "cec5212dc8e93d5c5a71460fb4054be8",
"assets/assets/vocal_reggae": "1e008fed5cdc196a537c872d16ee8440",
"assets/assets/vocal_stage-screen": "6928af263daa3acba3cbced910743668",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/lake.jpg": "236690c07321de26550682c399675fb4",
"assets/NOTICES": "2eaf3de9d55eb264ec525ff361618125",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f6e0bb8ae2fcf956fb63db591247473",
"/": "2f6e0bb8ae2fcf956fb63db591247473",
"main.dart.js": "9b94db5b3d5a364609cad9dfee3bbaef",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "f9f0cb54513fbee6df620c42c5259e95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
