'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b54516f1b9cf2bdabf60d866b1cde7cb",
"assets/assets/avant-garde_blues": "af1d5e9c1e4f1cf7fb3da223ee684696",
"assets/assets/avant-garde_childrens": "0ca43804ee9ad3414df64d1a8c32ce56",
"assets/assets/avant-garde_classical": "a245278e3b242ae9a4680e9ba9e228a4",
"assets/assets/avant-garde_country": "4aae6d28d20cef96bcf5a032689fc609",
"assets/assets/avant-garde_easy-listening": "e2e0f848a8cb0f6fa00db59c176405ed",
"assets/assets/avant-garde_electronic": "574ac421b9a5ed83258f446b5787ba7a",
"assets/assets/avant-garde_folk": "f76a36e4e1d93aeb4dda20c0286cc16c",
"assets/assets/avant-garde_international": "6159119713fb6978ef107bf68bf69d7c",
"assets/assets/avant-garde_jazz": "891173ee650b9cdb4e5c925a40937cfc",
"assets/assets/avant-garde_latin": "20f437e5e8bd13bda17a3dde76ba16d2",
"assets/assets/avant-garde_new-age": "01e5b71dc06c67ee33fe53e8db8e4fec",
"assets/assets/avant-garde_pop-rock": "213bcf50860936027683bac650f0c011",
"assets/assets/avant-garde_r-b": "5661fee6194c4597aec0e3121746dee3",
"assets/assets/avant-garde_rap": "a9f0e19d3531eb079cd140a381207a0b",
"assets/assets/avant-garde_reggae": "f56d5d85d6ed54c4b656f553708dfa6b",
"assets/assets/avant-garde_stage-screen": "23b01f153c3c83f6eacf8a19aadd5a2e",
"assets/assets/avant-garde_vocal": "9c37d162e93417f05b7eeb09e9341681",
"assets/assets/blues_avant-garde": "7adb12c5fe5207ede406da1bbff83a12",
"assets/assets/blues_childrens": "a4aad4256ebbbca65a0ef0066aaa9b95",
"assets/assets/blues_classical": "9fe26f9ab2a08fde3e056692d9599570",
"assets/assets/blues_country": "a3e7a9e425b8870e37e412b10e5ab876",
"assets/assets/blues_easy-listening": "7d9429c1f5bb6f32e12688fc90cd0c81",
"assets/assets/blues_electronic": "c5c4fad87953314a12b5075cbb498cac",
"assets/assets/blues_folk": "edb1d2033cae971549ad05ee67cba4e1",
"assets/assets/blues_international": "c64caef939a00f78ccce69bc692ecdc1",
"assets/assets/blues_jazz": "a34605109d3a85108e6945d6c35a78ac",
"assets/assets/blues_latin": "1dea562e75e564785d7059cb077f7493",
"assets/assets/blues_new-age": "49729a7f71056b2d09264b409907ea49",
"assets/assets/blues_pop-rock": "9808da25b1782e12cf1972b6931ba824",
"assets/assets/blues_r-b": "d749e8114ff994d4205de6d55b06c400",
"assets/assets/blues_rap": "e7cc5e049ace3b72a438076725d2b3fd",
"assets/assets/blues_reggae": "22da1ca2153dd6226773b631a63c7cf4",
"assets/assets/blues_stage-screen": "222bf659ceefa71c2111ae92100d23db",
"assets/assets/blues_vocal": "f975ba55f204951de6845f2b079700d7",
"assets/assets/childrens_avant-garde": "5594ca673bcd0f52d9d8589e662800e9",
"assets/assets/childrens_blues": "3920f7590dc72f75adb749fd591195fb",
"assets/assets/childrens_classical": "2da5bf715f7e2b702f6b8401249310d8",
"assets/assets/childrens_country": "37292eb0a2c3c866147ea4b86e2e705d",
"assets/assets/childrens_easy-listening": "cbdcd64132ec100b0486be9c02349da1",
"assets/assets/childrens_electronic": "ed4d26adf2605b65cc2c0d838d3d36b4",
"assets/assets/childrens_folk": "637fc9282dab4914f7d770375d199c67",
"assets/assets/childrens_international": "4c45ed79cea7b3e0ae3493bf47b39eb1",
"assets/assets/childrens_jazz": "03633673664ef6c7527acb148c876a59",
"assets/assets/childrens_latin": "38a8efb724432a980e261acb3f913807",
"assets/assets/childrens_new-age": "c10497e897b428404951c9267ba56b5f",
"assets/assets/childrens_pop-rock": "f8ea30df35dad747ddbb1d1f680a6546",
"assets/assets/childrens_r-b": "e3dc1409e23c1642cef085d157564321",
"assets/assets/childrens_rap": "84b250d5739eb8d3df73e09532b907e1",
"assets/assets/childrens_reggae": "834f322237c9cfa247818085dbb90fbc",
"assets/assets/childrens_stage-screen": "88a10e61503740db24a28196a9d826a6",
"assets/assets/childrens_vocal": "63510a69c46b0cd44cb9f8007be97bc4",
"assets/assets/classical_avant-garde": "e20a72a69edba09b9bef71baea6a1d98",
"assets/assets/classical_blues": "df2068583725f0c50a56b9965473f5ef",
"assets/assets/classical_childrens": "65fad6ad1e3eaa18d2c7f0617800917e",
"assets/assets/classical_country": "408e6c20f9eafb16fe80c870b6104bfd",
"assets/assets/classical_easy-listening": "389393bf72f47c0c833bd434ac1d2e97",
"assets/assets/classical_electronic": "aa4ead3575294444b5dba225935cd021",
"assets/assets/classical_folk": "5cbb77a665355bf9a23bfd130d566541",
"assets/assets/classical_international": "4b41e8dcf610289e8272ffd54a9a8f10",
"assets/assets/classical_jazz": "7fa1d77ebecd8c3300d615bcb435d8ea",
"assets/assets/classical_latin": "4b8a6d35eb8b8c3700b7df1c985de5b4",
"assets/assets/classical_new-age": "d1247ec14b2d2be35c77c141a2791308",
"assets/assets/classical_pop-rock": "6ac80c3e0ba1aad241e5029d183aa741",
"assets/assets/classical_r-b": "2e0abb3bba25f8bf1abf25b6bd209ca3",
"assets/assets/classical_rap": "99af7e3fca2c2aae48b3d16a5f8dda4f",
"assets/assets/classical_reggae": "905fd4aeaf1564d798d26ccfa908c6f7",
"assets/assets/classical_stage-screen": "539509b982789401bd62a5c1cc02b540",
"assets/assets/classical_vocal": "40353fd70cd4daa31d2149af88c0515f",
"assets/assets/country_avant-garde": "ed6bddc0dc7711362b5a92f68380f93e",
"assets/assets/country_blues": "905250d079c157305cd2278d60e7b418",
"assets/assets/country_childrens": "750ae021b7dd2cbce8e72c468d787f5a",
"assets/assets/country_classical": "17772fc1fbbf7d34a995a1ba75aea538",
"assets/assets/country_easy-listening": "5140a22ff1c9ef478526ac3457a418b6",
"assets/assets/country_electronic": "2bdb3aca9f3fcaa96f4cf405c72c93f2",
"assets/assets/country_folk": "4316d518035490fbcaa082cd0f5c7556",
"assets/assets/country_international": "546318adb3d0afc9492915f76469f84b",
"assets/assets/country_jazz": "5f99b59b64e0ecb40ef9c43fd7a17605",
"assets/assets/country_latin": "4719fca28aab351140c11783aa55454e",
"assets/assets/country_new-age": "72527f1846017d8ab6aa9cbce72a65d5",
"assets/assets/country_pop-rock": "abb421f53e231447a213c0cd0fe429e9",
"assets/assets/country_r-b": "8c42881e961d59fdc0fec76655fa88bf",
"assets/assets/country_rap": "dd082d5e96766b6df7584ecfed13627e",
"assets/assets/country_reggae": "23ec0e4a60d814a57c50239267edcd75",
"assets/assets/country_stage-screen": "55bdb44ff67724a92db6d70a28619992",
"assets/assets/country_vocal": "490230c59b67e65d9c664a709b665d1d",
"assets/assets/easy-listening_avant-garde": "0b5b81c952838352cf83aa5d930e097a",
"assets/assets/easy-listening_blues": "08a2598afbb9e32dcef0603a3c5c9a11",
"assets/assets/easy-listening_childrens": "b0822cd9e8328a2bd01fbbf060683279",
"assets/assets/easy-listening_classical": "1cef5866dffdae417e710459586d93d1",
"assets/assets/easy-listening_country": "180ae789b4ecbc67a5ccce40fd98d806",
"assets/assets/easy-listening_electronic": "fb427b5012a68db309bbb790e75a4e11",
"assets/assets/easy-listening_folk": "61f12db582aaaffb85ecb6da43b31931",
"assets/assets/easy-listening_international": "3de699d93b56f5d4fb0fd6de389647bf",
"assets/assets/easy-listening_jazz": "570781a6788408449c66e83c9941ba7b",
"assets/assets/easy-listening_latin": "ebf8fc3784f9cae95dde78db63613a61",
"assets/assets/easy-listening_new-age": "74214cb3cf827437130eb971906c7dd7",
"assets/assets/easy-listening_pop-rock": "b5876b377093a2c33006bf9e637d916e",
"assets/assets/easy-listening_r-b": "060c986499abce7d7a671c63ee7666e4",
"assets/assets/easy-listening_rap": "900c42350e8a508aa30df7fd3b5d92e4",
"assets/assets/easy-listening_reggae": "c0b050400317100f00eba35798136c7b",
"assets/assets/easy-listening_stage-screen": "e88505026df5c5a6110de08897e97a2d",
"assets/assets/easy-listening_vocal": "2d52486f996d1f4a179a530302566e35",
"assets/assets/electronic_avant-garde": "51ebea9cf75a3f515f069e8e30d1e3cd",
"assets/assets/electronic_blues": "b2e9297e755c6c3a28796c5d6822ceba",
"assets/assets/electronic_childrens": "fd556474e83660838ee5e25ad46241fc",
"assets/assets/electronic_classical": "986ae70ea0e5fc79916a53abcf04e42c",
"assets/assets/electronic_country": "aafa634df5562ba7d3d5dcb04cac36d5",
"assets/assets/electronic_easy-listening": "eb36fc6344c7f5db8287a99904486e31",
"assets/assets/electronic_folk": "ecd42507f1763e58f97f5da851b4cd1e",
"assets/assets/electronic_international": "83250d741716094793288f4b8392c0bf",
"assets/assets/electronic_jazz": "778223859ff9eba788fcb672fed4975d",
"assets/assets/electronic_latin": "5be06c12eee1a2cbcc9c0f397c4574dc",
"assets/assets/electronic_new-age": "ac2d96ff155d0400e19cd0e4089f42b4",
"assets/assets/electronic_pop-rock": "67af00829f8d838d94bdb98cdf63baa2",
"assets/assets/electronic_r-b": "02e039e3579ff7193882f1ad1f7690b4",
"assets/assets/electronic_rap": "58cc406c67ebfb331b353d946476d615",
"assets/assets/electronic_reggae": "0196c2852ea1e7787dc2777c4a857b2f",
"assets/assets/electronic_stage-screen": "8eca05bd4c02113cf1091b77681fc92f",
"assets/assets/electronic_vocal": "447e6c8ece487555fb85987d08e476db",
"assets/assets/folk_avant-garde": "2da66768ac37edfcd5afb64ec80538b8",
"assets/assets/folk_blues": "71b27203b5c588ee718617313c723844",
"assets/assets/folk_childrens": "0d5543cb97aec0929d3626ab3aef1dd5",
"assets/assets/folk_classical": "ba32c11742b70aae62538f29521717b8",
"assets/assets/folk_country": "429349ba5d357ad941d28f2f21fc070e",
"assets/assets/folk_easy-listening": "60d81c1d3098eba199e1e296fc7454a4",
"assets/assets/folk_electronic": "6b8d724496f27079131beb3184f81514",
"assets/assets/folk_international": "676b4c80e3e3ab091cfbcc1d4c1cb1db",
"assets/assets/folk_jazz": "2271c5b82ab55cf92afc630f0bb46b5b",
"assets/assets/folk_latin": "cccc8099768cac7ec0607531974e9aa8",
"assets/assets/folk_new-age": "41c14cab0cdcd2bad1b015521334a1c2",
"assets/assets/folk_pop-rock": "4de9240ab30b241d20681b8edc7b098f",
"assets/assets/folk_r-b": "9c8f105ff0c6f85f22d32e53ba91d8ff",
"assets/assets/folk_rap": "35e495b9fcacf5aaee3e7c0fb7cc8dbc",
"assets/assets/folk_reggae": "a7db10120c1e23f61c3cdfd2efad3618",
"assets/assets/folk_stage-screen": "4a150eecdb1c5f44ffb26f990bc7e5c7",
"assets/assets/folk_vocal": "536d42ec1ebdb14e8a5e46bf7c2e3dc2",
"assets/assets/international_avant-garde": "65745576e4d370463c7de76906ee21df",
"assets/assets/international_blues": "2ea9f21b862757b63010030253150f90",
"assets/assets/international_childrens": "d0cd5cc23d20ac3105eecc66b875d876",
"assets/assets/international_classical": "43dde71a8ba38fec2ec190d1fa108518",
"assets/assets/international_country": "06a12d37dc722cf649849f8d2add7f74",
"assets/assets/international_easy-listening": "2c88b91f6dfa2a28b84b48a3971c0c91",
"assets/assets/international_electronic": "66779c980f9aeb41ad727f2bd8c73aea",
"assets/assets/international_folk": "34229b2221ae6840e90a1138d14cfd4e",
"assets/assets/international_jazz": "224b45420863fa08317bcacee22b4483",
"assets/assets/international_latin": "9a78a850b00b3893f90681ae4f53e718",
"assets/assets/international_new-age": "96e65c422778b56538f0a0e94a1d177d",
"assets/assets/international_pop-rock": "b136781ce383247c3c305871fd437b8a",
"assets/assets/international_r-b": "987de5ca604e4eb852b174905d9c0898",
"assets/assets/international_rap": "15ed9970c8b6305502fddc839f28a188",
"assets/assets/international_reggae": "9fd2ebb417168f6ceb8c0b98a56a191e",
"assets/assets/international_stage-screen": "d50add86494f147c3f734061f86c5e8b",
"assets/assets/international_vocal": "541499c4c2198e3fe7e330457c4f79e1",
"assets/assets/jazz_avant-garde": "cec7c7022f14b4e84ec74583b3c78ee9",
"assets/assets/jazz_blues": "44778a43295db1fd30d669e6335a7472",
"assets/assets/jazz_childrens": "bd15f740eb824ee35fa777bfc4ecf4f6",
"assets/assets/jazz_classical": "58586c788bbfadaf396c541ee9e1aba5",
"assets/assets/jazz_country": "fc09b8785ec5f34f585444ec43fa28f0",
"assets/assets/jazz_easy-listening": "c7c2180daaae5e982c2d54c0139769d1",
"assets/assets/jazz_electronic": "9df4d7f60b2302ed425619bda83a907f",
"assets/assets/jazz_folk": "6d070b22cf3cfe6185f0d0d16e780699",
"assets/assets/jazz_international": "fa03c2082daffcf5ac95435e75a16625",
"assets/assets/jazz_latin": "42c8cf12ef91e7b87a4c2781bbccd648",
"assets/assets/jazz_new-age": "dc48eef0f62f742d6474be1f040d4071",
"assets/assets/jazz_pop-rock": "8202238c46eb072cc97e6c5a3f0e85f0",
"assets/assets/jazz_r-b": "df2130a35188a365400a9e0e68171dab",
"assets/assets/jazz_rap": "12c3a0573a6634e779ce22d0e65b8ff1",
"assets/assets/jazz_reggae": "a85e237adaf369c67d7ad1dfefdfdfc7",
"assets/assets/jazz_stage-screen": "0ad2bdc9a7206d37a3dac69769b87558",
"assets/assets/jazz_vocal": "de9155f4c95657cd3fd5639879b700ce",
"assets/assets/latin_avant-garde": "7b94bbb7fd324ac295a0c4e2e6037e8b",
"assets/assets/latin_blues": "948511cf0f17784ef23f39476f663ec4",
"assets/assets/latin_childrens": "083e92070fde07fc5f50cccaf64f4f2f",
"assets/assets/latin_classical": "f9c49a87307869ca0d28627eb02f4214",
"assets/assets/latin_country": "b2c94ccb8a82a42178514c0806bc1d32",
"assets/assets/latin_easy-listening": "0131e3ee0393444e944ae573b4a41487",
"assets/assets/latin_electronic": "2a995b5d634af5a848f11a962bb94291",
"assets/assets/latin_folk": "c1c5c80bf764ed19fce0e796461315b3",
"assets/assets/latin_international": "c0cc81f283b6471c4d8139e8833315f5",
"assets/assets/latin_jazz": "1919f6188fc5119fc65339ee4771300c",
"assets/assets/latin_new-age": "826833312843fcd35a07a35c1afeaaba",
"assets/assets/latin_pop-rock": "bf629012caf0bb6d86fb9f6e18b0cec2",
"assets/assets/latin_r-b": "f1f01dec61ed6e88783a0ab3bcda9671",
"assets/assets/latin_rap": "b1a676bdb81042a3d85f7a1a867e49b3",
"assets/assets/latin_reggae": "756bbede6d235123cfa39af1ba81f01b",
"assets/assets/latin_stage-screen": "e9b7edc112b3abd1865e5e08f76f35e1",
"assets/assets/latin_vocal": "9e101f619e4f70bfc854844ba5540d2e",
"assets/assets/new-age_avant-garde": "5519920d009beceeb1de50940c7d8be1",
"assets/assets/new-age_blues": "479745b55fa8b40ccf6db65ebf5505a8",
"assets/assets/new-age_childrens": "980c23e0b9c8b42fdeeb6b20e4e0a451",
"assets/assets/new-age_classical": "37afc7c0dfa55d68dbe364e460d140fb",
"assets/assets/new-age_country": "13b5d3d87a9f45406a860fb352a60f0e",
"assets/assets/new-age_easy-listening": "eef924ca9594846b7aa8908bbcd01095",
"assets/assets/new-age_electronic": "8b652412645cc2d545948a02156287af",
"assets/assets/new-age_folk": "4d6356c8b248d5195b1a6742adee4cad",
"assets/assets/new-age_international": "2fe4bc8a04ef4b659d0f5035e1699e6f",
"assets/assets/new-age_jazz": "1317328cca32a061c05b515a561eecf4",
"assets/assets/new-age_latin": "df28efd4b17a0ebcdc44d451ce35058e",
"assets/assets/new-age_pop-rock": "ccc84f1eb6702aa6907226d14ea3a318",
"assets/assets/new-age_r-b": "1d4683817614bf8186dd1e5f0aeef6e4",
"assets/assets/new-age_rap": "b37e4e52aac67d775e344c3b23c6daaf",
"assets/assets/new-age_reggae": "33101001b1355d82bb607d6084f4c61b",
"assets/assets/new-age_stage-screen": "15d09d6e704fe50d28904a59239e800a",
"assets/assets/new-age_vocal": "a83ce3833ef9df02b6fc1a5e033cffae",
"assets/assets/pop-rock_avant-garde": "6db7c69656e58bea2af82aca3b18b507",
"assets/assets/pop-rock_blues": "ff9de6b6be461030b2125ac1fc1bcb85",
"assets/assets/pop-rock_childrens": "e1871af2539e248c28c62f51d53fa701",
"assets/assets/pop-rock_classical": "bca18cb889c5b4554d082568de6cd39a",
"assets/assets/pop-rock_country": "d324e3bc291c1e2d64aafe05449e08a3",
"assets/assets/pop-rock_easy-listening": "cbb90cfa347b0e0a223e4e3e18be46e2",
"assets/assets/pop-rock_electronic": "a10d1fb040fdb32041641b843dfe0bae",
"assets/assets/pop-rock_folk": "1bc3baa285fcae16e30703177a7869d1",
"assets/assets/pop-rock_international": "3bbbc6eedcce9354c1cbffd57f878213",
"assets/assets/pop-rock_jazz": "29c765831e0503a4435d1a3dbe9e050d",
"assets/assets/pop-rock_latin": "1bc8e82e3ff35b9832558130767473c8",
"assets/assets/pop-rock_new-age": "b39b9c26e5fda6dbdd3453b3a215d32b",
"assets/assets/pop-rock_r-b": "6590e90d7e69d6a014f0fbbe34a8ce64",
"assets/assets/pop-rock_rap": "2e11669a188193c0108602b3db5f947d",
"assets/assets/pop-rock_reggae": "d21ae1b2c15dfc6d1fb851a7e8c91d8e",
"assets/assets/pop-rock_stage-screen": "5f7abe0ee26687e5c6e506bba1a0ee56",
"assets/assets/pop-rock_vocal": "9f90701c6395cd8d0abba8b504efe535",
"assets/assets/r-b_avant-garde": "2cfbe7b47ad36fa8f6e92bcd94eb4842",
"assets/assets/r-b_blues": "8f89d92526a9fb0ee583f1ccd4010097",
"assets/assets/r-b_childrens": "6f79b60ff14b109feadaae4f7322bd7b",
"assets/assets/r-b_classical": "dca723511eaa0b9443b0c73257d6b1ef",
"assets/assets/r-b_country": "e1bd14526038342b220c6c759841307f",
"assets/assets/r-b_easy-listening": "1bcc81e97b4f133f850611eb1fa6d390",
"assets/assets/r-b_electronic": "7904ed8ce87611b8ee72cf5fdaf004a4",
"assets/assets/r-b_folk": "6fda6f7a35bc320c45602cf95fc0eb1a",
"assets/assets/r-b_international": "8ae234e1044624186ee322cf271b7a2e",
"assets/assets/r-b_jazz": "bae63509527fd1b49e4e343d66124dc2",
"assets/assets/r-b_latin": "289673f4f8087d6f564aef90310b58f6",
"assets/assets/r-b_new-age": "7e06e9e0c0af87f9ca10d5ebd55b96aa",
"assets/assets/r-b_pop-rock": "eeead16444acd21fa4c31fbe57dbe5dd",
"assets/assets/r-b_rap": "bdae4f70748a21281ea8745f96ac51b7",
"assets/assets/r-b_reggae": "c3de5ff4c1b9040168614e54e60f865d",
"assets/assets/r-b_stage-screen": "8fbbea883a381dc65b3d157dc44593fc",
"assets/assets/r-b_vocal": "839021f065d86980dbabba9b7ae93d66",
"assets/assets/rap_avant-garde": "cf0571078e21efeb356a7f917aea226c",
"assets/assets/rap_blues": "06bd0d981a3cf25c22faf25c88f5f6bf",
"assets/assets/rap_childrens": "0078a4949c133e153ac2a147e6209a23",
"assets/assets/rap_classical": "7fc79f2308ae7a4daea96f108a07e104",
"assets/assets/rap_country": "401b49e533a7892fc1ce72fa8dd7b951",
"assets/assets/rap_easy-listening": "d79088124f12e4f4f2a3d518ced62083",
"assets/assets/rap_electronic": "ad6323257c3dc43981d16317d1873514",
"assets/assets/rap_folk": "e8c2668066e5ae27df8c734f7fa747e7",
"assets/assets/rap_international": "b9b264e8c5be7ac4576cb269cc1d83bb",
"assets/assets/rap_jazz": "7865e158f7cd34f6fd5f9a74a08987f8",
"assets/assets/rap_latin": "61b0de421ac2d7a93862107048311f3d",
"assets/assets/rap_new-age": "06b48a6175042b51bdc39789f29935ae",
"assets/assets/rap_pop-rock": "3693f93acab030bbc4e442426891758b",
"assets/assets/rap_r-b": "a1275da48758d3a6aebd90ef4f0c55fd",
"assets/assets/rap_reggae": "df8e0261e0633acef6a2c7edaa758be5",
"assets/assets/rap_stage-screen": "dc2114ad19820b683ed4b7e7a11d473b",
"assets/assets/rap_vocal": "ece29e0e95b5a9b796795f0c1c8ae572",
"assets/assets/reggae_avant-garde": "ef155f0f7a587695d3d9aad61757de44",
"assets/assets/reggae_blues": "ad6a52ca190dc5ab9560f94697109636",
"assets/assets/reggae_childrens": "6baa1e77b0bd06ce7bd1de0015e6f961",
"assets/assets/reggae_classical": "692430ffd4fdc30c4382cd8f808ca9d9",
"assets/assets/reggae_country": "be5a789ff061f2bfed0349f31922d46e",
"assets/assets/reggae_easy-listening": "77afb5230c87b61f603a69a2981524c2",
"assets/assets/reggae_electronic": "f4b8aa90575a49ed5bcf066e32ed0b11",
"assets/assets/reggae_folk": "05fe3db57c00ab8eb4f36669c00da2f6",
"assets/assets/reggae_international": "531cc51e9f53fa71a9915912dc12e8e6",
"assets/assets/reggae_jazz": "d6e3c8e811999686391ac353bca02305",
"assets/assets/reggae_latin": "8f343e7acbe7b902afa8481869d8de34",
"assets/assets/reggae_new-age": "5a087569839c66c5380ec4ee8b3d2c2d",
"assets/assets/reggae_pop-rock": "4790d21264622b921796c9750e72b556",
"assets/assets/reggae_r-b": "eb13d7008c00eb92d9c7405752ef03a5",
"assets/assets/reggae_rap": "78288c2cb1c6b0331d532bc7b531896e",
"assets/assets/reggae_stage-screen": "6739435b07de1cbe6fc2c6995c54519c",
"assets/assets/reggae_vocal": "a7a15153b1836d6c01d872fcdf2772c4",
"assets/assets/stage-screen_avant-garde": "5070353a5ac5f4646a90ac61a20a5ff3",
"assets/assets/stage-screen_blues": "d98fe72862155391026b7bd241c6dc14",
"assets/assets/stage-screen_childrens": "7159f1e8a72eb48bae61da168bedc386",
"assets/assets/stage-screen_classical": "60e9ace7151a210f2b558915a3d94bee",
"assets/assets/stage-screen_country": "65633755a2244c5bb45bac068d2e201a",
"assets/assets/stage-screen_easy-listening": "a61851ed023cf1e6aaa71535d4845a14",
"assets/assets/stage-screen_electronic": "dc420b34b782678a1c240cae5f31e283",
"assets/assets/stage-screen_folk": "9004330de80bc7acd967f0e687de4f16",
"assets/assets/stage-screen_international": "1f77e7e696845675eb26c25e15cbd7fb",
"assets/assets/stage-screen_jazz": "c89073be50732faead57f114900a1e53",
"assets/assets/stage-screen_latin": "756b8fd114be4fec1078c6c87fd21c58",
"assets/assets/stage-screen_new-age": "5f3f517db1a7e93dec1b16aad0344ff1",
"assets/assets/stage-screen_pop-rock": "02fe7934768c29b5e36705b796db7108",
"assets/assets/stage-screen_r-b": "622f44b8840251935cd8bcd4d188fbe2",
"assets/assets/stage-screen_rap": "a7ec4dac35d1b64e1de220f305b7ca95",
"assets/assets/stage-screen_reggae": "7a0ba31dd525eb2aac75bab98c5b249f",
"assets/assets/stage-screen_vocal": "aa94abb0b67d197bdc6377bc0073ad13",
"assets/assets/vocal_avant-garde": "8d487d3a8210bbe09296e1bf18148fa8",
"assets/assets/vocal_blues": "ac73a9ee1074ddf00e329f32e59fb05c",
"assets/assets/vocal_childrens": "de77c8a4abba2ea7e1d7d6ec055fbf33",
"assets/assets/vocal_classical": "41df55744cd183bef08f3356e3352665",
"assets/assets/vocal_country": "b03935dc8f7af2307dac1e3e28d55ae0",
"assets/assets/vocal_easy-listening": "9626e8a2506fdc50b8168baf9b27d29b",
"assets/assets/vocal_electronic": "370c78cb16bf73be0fff06ea9c1d691a",
"assets/assets/vocal_folk": "652893b49d7a61bb0f80b48b6da4604b",
"assets/assets/vocal_international": "dd340d154e7c359a4a2fa8de1d1782c8",
"assets/assets/vocal_jazz": "94b3bb4242e7aff3a446cf234a7adae9",
"assets/assets/vocal_latin": "aadd8cca8a66d6c6de4eae645a26448d",
"assets/assets/vocal_new-age": "8ec1f481c14ec38efb2f9df113ebc7f3",
"assets/assets/vocal_pop-rock": "ebf2a76852ce6280d1b29517a2889ebd",
"assets/assets/vocal_r-b": "46802a7935e9a056dd5341169c7cc9ef",
"assets/assets/vocal_rap": "229bc43293b984038314feb5daa34224",
"assets/assets/vocal_reggae": "f09380c50142d1aae2124f7fcf48b5ab",
"assets/assets/vocal_stage-screen": "91c052ed7effd6b09cfb2cb438b36413",
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
"index.html": "54932ed298b22239d70ff1dec2221ed6",
"/": "54932ed298b22239d70ff1dec2221ed6",
"main.dart.js": "191c3185e482183c074408323a6c43d2",
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
