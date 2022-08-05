'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b54516f1b9cf2bdabf60d866b1cde7cb",
"assets/assets/avant-garde_blues": "254ecacea59780a25e530302174c2f6d",
"assets/assets/avant-garde_childrens": "cef49996ea1327cd08abdda13a9b97c5",
"assets/assets/avant-garde_classical": "ceca2b69cc8591d4bf30e96fbfd4e0ea",
"assets/assets/avant-garde_country": "9f03b2735c08d4a8fdc6d6bbbc7ad51b",
"assets/assets/avant-garde_easy-listening": "3e2754db3f59d989faa4709bcf272513",
"assets/assets/avant-garde_electronic": "e2bf7b1ac39994ce3a1b92342003ae27",
"assets/assets/avant-garde_folk": "fdb31e668ffaf9c482c7abe2b56cf1d6",
"assets/assets/avant-garde_international": "2a85986465ceafd22403d917f3f8d4c8",
"assets/assets/avant-garde_jazz": "1166a8c958987a7a10c484e56954e592",
"assets/assets/avant-garde_latin": "17bec1bdc25aee4bdd293d49692fa7d3",
"assets/assets/avant-garde_new-age": "e6b8a1297e2024900ccc66b1dd4e30d1",
"assets/assets/avant-garde_pop-rock": "d6cfd518f23b13cb309421718a8a7973",
"assets/assets/avant-garde_r-b": "82e9e946d28eeeea16486dba9b5dbba6",
"assets/assets/avant-garde_rap": "9cfdc1c1829ca349fda124367aaddcbc",
"assets/assets/avant-garde_reggae": "c600b4be382fe863d0a5fa29ce9ae57b",
"assets/assets/avant-garde_stage-screen": "b045d22d4e28df617eecfdcbcc31ab85",
"assets/assets/avant-garde_vocal": "65f8cf104f64aeec469234218b423231",
"assets/assets/blues_avant-garde": "881e8964242ff0f40f9e64100dda2bec",
"assets/assets/blues_childrens": "e94d69f4277d3e20c704ee9077b575be",
"assets/assets/blues_classical": "622be514f7d562cf7ec0c9b656305653",
"assets/assets/blues_country": "acf2de62eccceb68ff56a4a290f01070",
"assets/assets/blues_easy-listening": "f42eff2d23fd33cf9d0af968950c8ae2",
"assets/assets/blues_electronic": "dc5b969384927ebfb0f0cc33e51caf60",
"assets/assets/blues_folk": "21dee29a3dfe201b8b245af1e0665a80",
"assets/assets/blues_international": "296dcf53501ffc4eab6feef4856f1905",
"assets/assets/blues_jazz": "ae278a492b0e4b2aca8e07c1999d4604",
"assets/assets/blues_latin": "cebb7658795b6a1061dfe29a61bf0747",
"assets/assets/blues_new-age": "0d3bde9309a65982c8a195fe9bde309b",
"assets/assets/blues_pop-rock": "f4a5d8e49ddd8b242d578123b3e7cff4",
"assets/assets/blues_r-b": "e873f0fbd0f9fca491a775b0f83d468b",
"assets/assets/blues_rap": "9c242e36a639f429931b91f8072610f6",
"assets/assets/blues_reggae": "bf6feec3ed02cdeefe52ee2cb11d07d3",
"assets/assets/blues_stage-screen": "8ad2739d5f45bb44db7f5b0193e54e94",
"assets/assets/blues_vocal": "d8f7bc4775a59a2f031ba5feb1d9bdd3",
"assets/assets/childrens_avant-garde": "06e5665bcbb09b2e4eb29919ee265a18",
"assets/assets/childrens_blues": "36966aa3df3b2289237e6695f879432c",
"assets/assets/childrens_classical": "ff1a06001f830b61331f9667c6dc313f",
"assets/assets/childrens_country": "cea80318309e90be64af380337dd1eef",
"assets/assets/childrens_easy-listening": "86a9c2e6dc119b5584746c4e0c99844c",
"assets/assets/childrens_electronic": "75503cbb74adee593cbe75690f9b725e",
"assets/assets/childrens_folk": "9990604767ce6f406b21bedc20668c75",
"assets/assets/childrens_international": "2f69d6d5dbeca330d6fdb44fbd08ec71",
"assets/assets/childrens_jazz": "14e083992c29746e00d1b533a44a3b0c",
"assets/assets/childrens_latin": "412f8733277a49cbc90139c0312d5427",
"assets/assets/childrens_new-age": "86cf4d3b954d034e0427fcfe0a7ae092",
"assets/assets/childrens_pop-rock": "e5c20c285d9a573cd43ef264ecc1e60d",
"assets/assets/childrens_r-b": "a9573f15556029b5b2d6348e7076fe05",
"assets/assets/childrens_rap": "07f20f2b79dfe04f31529b0844dea57e",
"assets/assets/childrens_reggae": "6a06b6c10cddf78d250b6492692dca3e",
"assets/assets/childrens_stage-screen": "26ef85076948c2672dd2b361ec2bf870",
"assets/assets/childrens_vocal": "bd92918a546f81ea0ba6de15a1ee1008",
"assets/assets/classical_avant-garde": "e46674db5da1d4583a7c904a7961389b",
"assets/assets/classical_blues": "e44ae8897b19d5bf19b101262ed8ebf8",
"assets/assets/classical_childrens": "4ffe1eb088e9e74c53a8efe1516d2d84",
"assets/assets/classical_country": "a36269c7b1c1cf9cc114953774cf428f",
"assets/assets/classical_easy-listening": "d54b88da90378c22fc79470e4bbe10b3",
"assets/assets/classical_electronic": "45d83151612ce516b4139dbb0605da0f",
"assets/assets/classical_folk": "d4d8cdd41dad2c88c78089cec1e6d2cf",
"assets/assets/classical_international": "5453d71e453b39e12355f6536b155500",
"assets/assets/classical_jazz": "139d4753d22e5e6ae2c750591baf1f0f",
"assets/assets/classical_latin": "cfd592a906c00bea438154daa432ddd8",
"assets/assets/classical_new-age": "d68306094f56701034ad13e1ee6fd62c",
"assets/assets/classical_pop-rock": "d13ee1b4cfc217c0414b08aad90209b7",
"assets/assets/classical_r-b": "9c97d9169c3130bab7db1a40848fcb80",
"assets/assets/classical_rap": "c59f1ad6e6c4e4f9cd05893e76327da7",
"assets/assets/classical_reggae": "933fa19dffe61bdce1c724b71604ba04",
"assets/assets/classical_stage-screen": "10cfee2f5779894d9bace13074ddf91e",
"assets/assets/classical_vocal": "708ad17424f4a571ccdd1af334062720",
"assets/assets/country_avant-garde": "9a00a2684d4583d757167849a064ab39",
"assets/assets/country_blues": "53a0944ca9dc64ec210bd2fe3d96989e",
"assets/assets/country_childrens": "5a4cfe168db7d69683f7681a2cb061e4",
"assets/assets/country_classical": "760df02415111466a9909f5cd84b4d4b",
"assets/assets/country_easy-listening": "bf3574ed653432ab09377c892faee7b3",
"assets/assets/country_electronic": "701de083f70f7c23a04e96b9138a7423",
"assets/assets/country_folk": "7e9bd91f317cb012b86aeb10b1025d0b",
"assets/assets/country_international": "96966b8732a6f8268c1314b8dc4d73fa",
"assets/assets/country_jazz": "9716b54faf147472c9d68095c600c42e",
"assets/assets/country_latin": "997eecb92826a45ec4ef7f63bf36393b",
"assets/assets/country_new-age": "9bba4aac14c48b2630347472cb16220d",
"assets/assets/country_pop-rock": "a2ea0ff3256d7dad7457af1cf36fe138",
"assets/assets/country_r-b": "4cbd1596cacd577968b2d7dac3bfce5f",
"assets/assets/country_rap": "3b01238d5335d513a7c9b233e3ec1488",
"assets/assets/country_reggae": "04703e308cb288b0b36c8a127f3116cf",
"assets/assets/country_stage-screen": "b8529966f316879cba32e1a9b6ca55a6",
"assets/assets/country_vocal": "f82ec2bcb8e487c062fcbbcc570e5731",
"assets/assets/easy-listening_avant-garde": "fe0e837cac14c7df9b011f5cecae27fb",
"assets/assets/easy-listening_blues": "5890fdfaaf66b889106e9a38fe5c27db",
"assets/assets/easy-listening_childrens": "99aa3c12b7b19dabb33724e06c587eb2",
"assets/assets/easy-listening_classical": "0a307e4a62b191bfeadfbc8fcb731faf",
"assets/assets/easy-listening_country": "b47a02ec09903c130ef00ed7cd2fbc0e",
"assets/assets/easy-listening_electronic": "2962c401c9f54ac14a983bf6b3e0ea2d",
"assets/assets/easy-listening_folk": "9fc04365d1b86b06f0788692d2dfed7d",
"assets/assets/easy-listening_international": "619833decf7406726b0edf75c791ece7",
"assets/assets/easy-listening_jazz": "6d0548c922e65442cda6622d22c69a09",
"assets/assets/easy-listening_latin": "09f4f7a789d0b359d175e34f79e37ac5",
"assets/assets/easy-listening_new-age": "fa8b53fb6afcff31d76baacc962818aa",
"assets/assets/easy-listening_pop-rock": "596de7bdda11334ab6d2175e7eb22459",
"assets/assets/easy-listening_r-b": "ce57aa4438c3953bc77d448fd3465a98",
"assets/assets/easy-listening_rap": "6a51e027e59ac53e17b9d9e71b51252f",
"assets/assets/easy-listening_reggae": "e9961feb550957a80e11010cd5c18e0f",
"assets/assets/easy-listening_stage-screen": "bc1c9291501e06dfffdf612ba6459a09",
"assets/assets/easy-listening_vocal": "9250da23eff6eee1164b1aa536896433",
"assets/assets/electronic_avant-garde": "1dbf674c383a444376eb772181b98dd6",
"assets/assets/electronic_blues": "019ba6d2d126ba046957b9e66b4920f2",
"assets/assets/electronic_childrens": "5bde92f74e517cc0d7c2de56802e6078",
"assets/assets/electronic_classical": "2672fc051a42f3852761849525a411ca",
"assets/assets/electronic_country": "3860b9a6a605eb7d707412bcb8ae68ae",
"assets/assets/electronic_easy-listening": "43a8865a4e0b6bbbdbea483f8c403485",
"assets/assets/electronic_folk": "8f2f2262a5a1ccc8e4d0826b0a6a5e83",
"assets/assets/electronic_international": "acc4a33e264c426c3d0110653c29764e",
"assets/assets/electronic_jazz": "391b510b257976e0374ec8dfb63ee70f",
"assets/assets/electronic_latin": "1d9faadc048fb88d069e2ca00a2f5648",
"assets/assets/electronic_new-age": "09eaac40448300111dd680de43fc7f2b",
"assets/assets/electronic_pop-rock": "3f5fafb5611c0cd38a9e25619f389693",
"assets/assets/electronic_r-b": "6ac6a2c10dd64de94c1940bb3fff47bd",
"assets/assets/electronic_rap": "b75956ee593b7a257809ff329632e78e",
"assets/assets/electronic_reggae": "e53acca55fa0e31e862123415e10bb1c",
"assets/assets/electronic_stage-screen": "65f715bde4d88a74bdcaa31784f06265",
"assets/assets/electronic_vocal": "f597252842fc42a6898a61dddae1cd95",
"assets/assets/folk_avant-garde": "039f9e8950573dc2e1a31813142e0dd9",
"assets/assets/folk_blues": "7c8fa44cd18c89d1b60c50f28374004a",
"assets/assets/folk_childrens": "6cbc7ba407c23526739fd44e37fe0948",
"assets/assets/folk_classical": "6fb3e38fe91c770de21561518fcd3ceb",
"assets/assets/folk_country": "19b102420175647b9b74cce035a51f4e",
"assets/assets/folk_easy-listening": "08d6e90284a633e8b180ad3a6a6a26f8",
"assets/assets/folk_electronic": "bf06653b16edd42d255c424de78c324c",
"assets/assets/folk_international": "126a14974c19e6934ad135ff99f5b751",
"assets/assets/folk_jazz": "8687606f8a00dd5a530dd09af0e3b527",
"assets/assets/folk_latin": "91f3abf7f3d919978ca753fb15a01689",
"assets/assets/folk_new-age": "b60922ad54ba02aaf7931e92dddd6749",
"assets/assets/folk_pop-rock": "0daa7d4de774196029a018ba433a8eab",
"assets/assets/folk_r-b": "ef597c640fb21003fa5ce70136c87dab",
"assets/assets/folk_rap": "a545bd222437d43bdb4792708c5a41ea",
"assets/assets/folk_reggae": "6fbd15cda49cfce87b78ec50e745ead4",
"assets/assets/folk_stage-screen": "759d5eee1c611279722d67056ba9d1c4",
"assets/assets/folk_vocal": "27cb73e51e4529265208f4e5b1885c8c",
"assets/assets/international_avant-garde": "bc30db4dd7f0b2cceea7dcc1cbd321e4",
"assets/assets/international_blues": "3b91bc23cb43eb4a803c68e06e9c89c9",
"assets/assets/international_childrens": "65054bb982f0930196de117ae775334c",
"assets/assets/international_classical": "c676b358804f7d80c7667f679fcbe85d",
"assets/assets/international_country": "d90d3b7141f319cae001a71bfc5a392a",
"assets/assets/international_easy-listening": "8dd6db05b4cf6f7632de38692e2bd092",
"assets/assets/international_electronic": "d61ddde002e54cd3565393783201559c",
"assets/assets/international_folk": "e867a026e935999fe917a9eec74f047c",
"assets/assets/international_jazz": "1fdae310eec383870da95081bf951041",
"assets/assets/international_latin": "bf8723cec78c6df1bd921298f274986e",
"assets/assets/international_new-age": "028392246737397458c4e3db207d569c",
"assets/assets/international_pop-rock": "d406fa27f50c112ff04711fa687e29dc",
"assets/assets/international_r-b": "182415ca94e0f358c34e5276d82b44d3",
"assets/assets/international_rap": "d59732a9ef53449d941ea51be84b6944",
"assets/assets/international_reggae": "186429c27d7d27954ed7db3f192cb3cd",
"assets/assets/international_stage-screen": "fa24904464adb6f9ddb4b01a71f2bb8a",
"assets/assets/international_vocal": "f3d0f97d424357e9e7743fa8ef6554ac",
"assets/assets/jazz_avant-garde": "bc41b71563d85eff72db30eee7944584",
"assets/assets/jazz_blues": "921d964816aab1ff52e8353aa10391f1",
"assets/assets/jazz_childrens": "09e2495b90702a9f481f966aabc0b4e1",
"assets/assets/jazz_classical": "5c8dccc5955740931547c24c505a3157",
"assets/assets/jazz_country": "8ffde602ff6df410b941ae360295e931",
"assets/assets/jazz_easy-listening": "568126d5148b6da5ffc7550ea8e8dab3",
"assets/assets/jazz_electronic": "01ae30d8a27cd6f708525fed0bcf6226",
"assets/assets/jazz_folk": "585d1e891666adc586f652074ceb4ed3",
"assets/assets/jazz_international": "0032280b4d46efa20e2317eba863ce2d",
"assets/assets/jazz_latin": "afe8c472f0502237a01a9a398d077d8c",
"assets/assets/jazz_new-age": "f39ccc94b0ae6e8578797671982d05b8",
"assets/assets/jazz_pop-rock": "6ee4320dff27abb964a4af1b0901d867",
"assets/assets/jazz_r-b": "46f082aa2169c2e28f8e6a65f2699264",
"assets/assets/jazz_rap": "bdcb513727db190264b2784f912da7f7",
"assets/assets/jazz_reggae": "00ff019cb7ca27012093b7908f1d4fb7",
"assets/assets/jazz_stage-screen": "ec2360a2523159f07207b092ad41d2f6",
"assets/assets/jazz_vocal": "f2d0490a526341f72f3b9529633c222e",
"assets/assets/latin_avant-garde": "17d3481fb985ff5e57ec49f541f8e887",
"assets/assets/latin_blues": "7138285b2881e0c04505cbe9c7985b91",
"assets/assets/latin_childrens": "71573462427cd92f1b57cda3218c639d",
"assets/assets/latin_classical": "b304216848dbe004f4869429c0f4389a",
"assets/assets/latin_country": "e3b7b0ddf5faa45e0ad46fdbb241fde0",
"assets/assets/latin_easy-listening": "6a7eeb391cd3cbb9840034a615c9c438",
"assets/assets/latin_electronic": "54510842a40bc8223f8b17f581dbe265",
"assets/assets/latin_folk": "59d95b900975a5fd537de818517d32f7",
"assets/assets/latin_international": "34edae507807523a344de67dd97415fb",
"assets/assets/latin_jazz": "ca4f404cc6aa5ec6ddd1f1a1b57629b8",
"assets/assets/latin_new-age": "2a4a7c8abe84a73259dcb6668754da3a",
"assets/assets/latin_pop-rock": "59095ac6aade25400b4d633ceff575bf",
"assets/assets/latin_r-b": "041f1c4431d5ce7bbec161bea1ec09be",
"assets/assets/latin_rap": "14ca641119f5d65a8ebff6dd93f70dba",
"assets/assets/latin_reggae": "6213fb8087cdafcfac490ee18ca13d4c",
"assets/assets/latin_stage-screen": "d7b48fe4b412d82bc0731f2e16ff0bcd",
"assets/assets/latin_vocal": "c9d5d4fb27b30c00c057242a2ac66e95",
"assets/assets/new-age_avant-garde": "6a13b7a5b890529e22afe3b9ae210227",
"assets/assets/new-age_blues": "109a7b1f39a0ae0e6ba09eb3f1686485",
"assets/assets/new-age_childrens": "a35517a1dd78a28cb61443e8ffa0466d",
"assets/assets/new-age_classical": "9761cec2b551b214b13e3ef551c9468b",
"assets/assets/new-age_country": "0fa58052797cd9346449d72b7084cc20",
"assets/assets/new-age_easy-listening": "8fb99c60703b372a628ffb616466a8a8",
"assets/assets/new-age_electronic": "601c0a5d100641858c5ce2868359c66f",
"assets/assets/new-age_folk": "6a9a20526493b824539fbc20eb0bec37",
"assets/assets/new-age_international": "9b43072a570fc411fcfe9502b4e6df09",
"assets/assets/new-age_jazz": "8cd26448e5560d9d5e4206139de6a083",
"assets/assets/new-age_latin": "4a258e0a11ce6a8eef258d8bcb6ef49d",
"assets/assets/new-age_pop-rock": "b9cd8d95dd8e54a6f3e130de2ac52f7b",
"assets/assets/new-age_r-b": "709d5d5aca805d95bd86f11643d7b58e",
"assets/assets/new-age_rap": "28580477d361f687864aa44627f6bb86",
"assets/assets/new-age_reggae": "799eb50af6edb8167518ae691ef72288",
"assets/assets/new-age_stage-screen": "87b9fe71df12e880eb8ae45763d0ffda",
"assets/assets/new-age_vocal": "84ff2dc9d9112efbb5ec61e96b37e427",
"assets/assets/pop-rock_avant-garde": "7ed516fcf4d5486e4fd73f08e8c45dc4",
"assets/assets/pop-rock_blues": "27d55ab15955cfdf972083d120b13e81",
"assets/assets/pop-rock_childrens": "9a28444fa35e7c89c57c17c1a84b4f98",
"assets/assets/pop-rock_classical": "cc64820ba19fef9378a65d296966a716",
"assets/assets/pop-rock_country": "9144e325c1d7b24c8da77445e748fe1b",
"assets/assets/pop-rock_easy-listening": "10efab86ebc5229de90fccddaf333319",
"assets/assets/pop-rock_electronic": "185e908201fdba8d2a45db45767326e8",
"assets/assets/pop-rock_folk": "8223f2d5315abea8de000f9b80d69a91",
"assets/assets/pop-rock_international": "241aba4d2468a888b4abd949e119ad29",
"assets/assets/pop-rock_jazz": "c91d6a62e6a36e1765bc5bb4c866a6c8",
"assets/assets/pop-rock_latin": "4ae9aba5107f9d5d3069171ea3898445",
"assets/assets/pop-rock_new-age": "8286ca516934a10a10b1c672378aa109",
"assets/assets/pop-rock_r-b": "936e3195f7567a9f62f223cea3492406",
"assets/assets/pop-rock_rap": "f8340150f0344144a88a76377fda8a56",
"assets/assets/pop-rock_reggae": "1a0e6fe179a0114cce62f14fdcff5921",
"assets/assets/pop-rock_stage-screen": "1e7fc2c8c78e307be9875837675c3615",
"assets/assets/pop-rock_vocal": "9a8eed87c783c03ea595b840940f8ac4",
"assets/assets/r-b_avant-garde": "45141f532e723a82fd7c6c645b07aa34",
"assets/assets/r-b_blues": "b06e9a7512ca6002155630e843f309d3",
"assets/assets/r-b_childrens": "26ec31912ecbe2bd8db767318be12f24",
"assets/assets/r-b_classical": "6c96af46c3e60b3a292ca1f1249858ca",
"assets/assets/r-b_country": "e655966d3bc21ee9c63d2161f0324ef5",
"assets/assets/r-b_easy-listening": "516d230e7b1c7d4e51940ffa1d9f541e",
"assets/assets/r-b_electronic": "8e1bca71e039cafe25cd731cd3c88b33",
"assets/assets/r-b_folk": "d4b509f14c67a4759299a0747b69ca84",
"assets/assets/r-b_international": "737328226010dd7f46e109d813fca449",
"assets/assets/r-b_jazz": "79ccee6761dcdaaa9b864bc773217465",
"assets/assets/r-b_latin": "b51dc0f9d34d1ff4eb6bd4be91999b24",
"assets/assets/r-b_new-age": "29d7a0fca92f1b33a51d5cff7d666948",
"assets/assets/r-b_pop-rock": "2c7edd9933924a1c5c7f17773c8f8be5",
"assets/assets/r-b_rap": "0042c5208a658e3d19f3c7dbf7a70fd8",
"assets/assets/r-b_reggae": "64fd268715d49e0a9dea16b95f9fef0f",
"assets/assets/r-b_stage-screen": "bef8706685382d6b0e9f12aa1cf10224",
"assets/assets/r-b_vocal": "a5472c37bd61642bcd059dcd420c0f36",
"assets/assets/rap_avant-garde": "0a113c07b2d6377c3a88eb4f350d5240",
"assets/assets/rap_blues": "68e96028edffd9366f1ce9f8fc932c37",
"assets/assets/rap_childrens": "da5a0163f342653727f22636b01589c5",
"assets/assets/rap_classical": "131b92fc01a2241c332b27470da3e1fb",
"assets/assets/rap_country": "55dd872004502ba22de8d70219d4a6eb",
"assets/assets/rap_easy-listening": "1ae5fbe2eb77b104d32d6d800b9c1378",
"assets/assets/rap_electronic": "aad09aba7f2384c7b36391bd9d30aa56",
"assets/assets/rap_folk": "8aba8ec067b17e949b2153c02837a64b",
"assets/assets/rap_international": "3a8daaf824c22de917779000b8b30a90",
"assets/assets/rap_jazz": "f7a4587800a1d21c582b967d9d337712",
"assets/assets/rap_latin": "fbaf87bf009696fe37a95c48c1ebb671",
"assets/assets/rap_new-age": "674ead3a32e3adea3b323a8b599b557d",
"assets/assets/rap_pop-rock": "9ada073a226ed0eef2ae722de938640b",
"assets/assets/rap_r-b": "9be2c04d3b5867289fa60081a1311d1f",
"assets/assets/rap_reggae": "33472211f6919eda53d9fefc1db49d3f",
"assets/assets/rap_stage-screen": "f4145a90a5b2e1f957a4125d970d580f",
"assets/assets/rap_vocal": "7ceec51335eb080824388a4c01094bd2",
"assets/assets/reggae_avant-garde": "e49936be6dc8085e696230d38e48334a",
"assets/assets/reggae_blues": "50a09566ff40d8b6ade4424ee1fa3a7d",
"assets/assets/reggae_childrens": "4f55eb947adfb597ae48a8ee0e2febab",
"assets/assets/reggae_classical": "e69d2f9c6324d6817f2eefc93c3f9433",
"assets/assets/reggae_country": "7666b417aa28c07afce1bd80646626c8",
"assets/assets/reggae_easy-listening": "76e97f25fd4a51a752f5faa8e31315a9",
"assets/assets/reggae_electronic": "d71f70136bb6c0c1d312417ccb69f534",
"assets/assets/reggae_folk": "9804af5ee1265824929c8f377dab0bc6",
"assets/assets/reggae_international": "32ac8921db3638b1e8fd8f0d074635f5",
"assets/assets/reggae_jazz": "9345222405af8eb33a00ab300cd0e6a8",
"assets/assets/reggae_latin": "926e8dc792c07ceeea67809031d8533c",
"assets/assets/reggae_new-age": "e979203c1a4d11c0c98edfe01474df19",
"assets/assets/reggae_pop-rock": "ae22950885e17911852a82abf115e564",
"assets/assets/reggae_r-b": "0d2a0082c2ccab5b85a28382457098dc",
"assets/assets/reggae_rap": "12195778fb72099deee1f41b25a45b70",
"assets/assets/reggae_stage-screen": "2e3ccac3f5902e56ede92fbc5d0e0c12",
"assets/assets/reggae_vocal": "8c6078cbc91e6519a7a92d6479409fa8",
"assets/assets/stage-screen_avant-garde": "1efa40c51b8b844e3ab0cfa8796395a4",
"assets/assets/stage-screen_blues": "180b4f7255bec2775006ff465f67ac50",
"assets/assets/stage-screen_childrens": "fdd3f9a659862dd7a114f0b2ec2397b1",
"assets/assets/stage-screen_classical": "ba0d105020d770adf5c1b5f0e0446666",
"assets/assets/stage-screen_country": "2b61623983295bdbc2f6cf211b294a31",
"assets/assets/stage-screen_easy-listening": "c490388b7b084268b7f85ff5324fb73b",
"assets/assets/stage-screen_electronic": "46e646f95ac12679bb15d91d36305ffa",
"assets/assets/stage-screen_folk": "70c7381500e48d2a1733e2c3065e801c",
"assets/assets/stage-screen_international": "52d9956a4e4b30fedffcc753d6feb97b",
"assets/assets/stage-screen_jazz": "99cd3f1baf785487da5bacecce555245",
"assets/assets/stage-screen_latin": "60dd0f5d530b3c9b97265c5150255b76",
"assets/assets/stage-screen_new-age": "720bfc6cf24a5a511c0c07fe2c1cf371",
"assets/assets/stage-screen_pop-rock": "08247a085483522a7ffdf31a5047f415",
"assets/assets/stage-screen_r-b": "b0f436c22a1afb1c19c9d70d9c46e272",
"assets/assets/stage-screen_rap": "a6a7bf34c031ec449256252456a92422",
"assets/assets/stage-screen_reggae": "a245d7ec76b35e4650ef8cbeb86b84c4",
"assets/assets/stage-screen_vocal": "a9fc448414a594863b5a7da453258289",
"assets/assets/vocal_avant-garde": "a2cc5cd31b944bee7f47f8129148e924",
"assets/assets/vocal_blues": "cd3f42d330ed456a0ac79ee1fc852b57",
"assets/assets/vocal_childrens": "2b4f5ecd0f2cd6e0a1f2659e9fe11b40",
"assets/assets/vocal_classical": "356b6fe877ecb8ec61db017e64d740ed",
"assets/assets/vocal_country": "ee14a1f11101601b1bfaf7a0d15a9fc6",
"assets/assets/vocal_easy-listening": "cb184a5645c25299bf13e1f7c7c16a24",
"assets/assets/vocal_electronic": "e4f12ec0a7a5d85f94d3a00fb0677833",
"assets/assets/vocal_folk": "27916c15c413e4ad41feeac71934791f",
"assets/assets/vocal_international": "ff3aeb7ce1feccc2c0decaab2ee8218d",
"assets/assets/vocal_jazz": "e5ab384acb4a0385e20727f0f9d8d850",
"assets/assets/vocal_latin": "0943db0765a28d0ed37ce78d7c5275de",
"assets/assets/vocal_new-age": "b2d2eff2a0749cf2c74d9b98f2b25e02",
"assets/assets/vocal_pop-rock": "0a8c0c6e37c9eca420b88367653af87f",
"assets/assets/vocal_r-b": "30fe00a2c4324dee01f61f5988dbb1a5",
"assets/assets/vocal_rap": "cd37901bf5edca7a86d91f432aabe895",
"assets/assets/vocal_reggae": "47a8406ab56b336c534ac47cbaea397e",
"assets/assets/vocal_stage-screen": "3a462ad04bec727865701150a32f87d1",
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
"index.html": "0eaaa005865990cd453d5869b64694c8",
"/": "0eaaa005865990cd453d5869b64694c8",
"main.dart.js": "078b4b0d389ce5586c45ce12c463423a",
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
