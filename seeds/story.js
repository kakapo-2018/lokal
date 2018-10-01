
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('story').del()
    .then(function () {
      // Inserts seed entries
      return knex('story').insert([
        {
          id: 1,
          iwi_id: 1,
          title: 'Te Aro Pa',
          latitude: '-41.29587',
          longitude: '174.77661',
          content: "In November 2005, work on a multi-million dollar high-rise development in the heart of Wellington city was suddenly halted when foundation work for the new building uncovered the remains of a 160 year old pa site. It was a remarkable find, given the pa site was just off Courtenay Place, in central Wellington, under a two-storey building that had stood in Taranaki Street for 100 years. The remains were of Te Aro Pa, one of the largest in the Wellington area, with up to 200 people in the 1850s occupying an area of more than two hectares. Te Aro Pa visitors' centre is not permanently staffed, but groups can pop in to view the preserved foundations of two ponga buildings - or whare ponga - dating from the 1840s.", image: 'https://teara.govt.nz/files/a13194atl.jpg', obj:'/Ngaketest.obj',objBackGroundImg:'https://cdn.stevejansen.photography/assets/uploads/2017/02/View-across-Wellington-Harbour.jpg'
        },
        {
          id: 2,
          iwi_id: 1,
          title: 'Uenuku',
          latitude: '-41.291800',
          longitude: '174.772425',
          content: "Uenuku is a taonga (treasure) of the Tainui people. Uenuku was the god of the rainbow, and the style of this striking representation is unlike most Māori carvings. Uenuku was lost during the battle of Hingakākā, between Ngāti Toa and Waikato tribes about 1780, and was rediscovered near Lake Ngāroto many years later. It was included in the acclaimed Te Māori exhibition of 1984, and is now the pride of the Te Awamutu museum. Here Uenuku, adorned with a feather cloak, is shown after its transfer from the old to the new museum building in 1975.",
          image: 'https://teara.govt.nz/files/a13194atl.jpg', obj:'',objBackGroundImg:''
        },
        {
          id: 3,
          iwi_id: 3,
          title: 'The battle of Gate Pā',
          latitude: '-41.292800',
          longitude: '174.77325',
          content: "These sketches relate to the battle of Gate Pā, on 28–30 April 1864, when British forces were defeated by Ngāi Te Rangi defenders. Across the top is a plan of the principal earthworks, dugouts and palisades made by the Māori defenders. At right is Penetaka Tuaia, regarded as the designer of the works. Below from left: the fortifications; their location (on a map with a south orientation); a sketch of a palisade; and a Māori flag flown on the day of the battle.",
          image: 'https://teara.govt.nz/files/a5578atl.jpg', obj:'',objBackGroundImg:''
        },
        {
          id: 4,
          iwi_id: 1,
          title: 'Pipitea Marae',
          latitude: '-41.27648',
          longitude: '174.78090',
          content: "Pipitea Marae, a modern marae by today's standards, was built in the early 1980s to cater for the growing demand of an urban Maori population in the Wellington region. It signifies a place for people of all iwi and all races to meet, where traditional kawa and protocol are always keenly observed. It is the biggest Marae in Wellington and being an urban Marae, it is often hired out as a conference facility and/or entertainment venue.The land above the Marae is the site of Pipitea Pa. ", image: '', obj:'',objBackGroundImg:''
        },
        {
          id: 5,
          iwi_id: 1,
          title: 'Rukutoa',
          latitude: '-41.29123',
          longitude: '174.77514',
          content: "Looking out to sea beyond the lighthouse is the area known as Rukutoa. This has always been an important fishing ground and shellfish gathering area for inner harbour tribes. Rukutoa, named because only the most skilled divers were capāble of obtaining shellfish, is notorious for its strong currents and rough waters. Many lives have been lost in divers' quests for seafood at this site. Continue around the coats and stop at the carpark on the right just past the point.  ",
          image: '', obj:'',objBackGroundImg:''
        },
        {
          id: 6,
          iwi_id: 1,
          title: 'Kai Whakaaua Waru Kainga',
          latitude: '-41.3075',
          longitude: '174.8321',
          content: "On the east side of Point Halswell, Kai Whakaaua Waru was a kāinga occupied by the Ngāti Ira people. The kāinga site had gardens nearby as well as a stream. Early writers noted several large middens, with oven stones remaining in the vicinity and thought there may have been a kūmara (sweet potato) plantation nearby.Continue around the coast to Taipakupaku Pt. Look for the small rest area on your left just around Taipakupaku Pt (shortly past Taipakupaku Rd). The first six or so houses around this point are situated on an old burial site.",
          image: '', obj:'',objBackGroundImg:''
        },
        {
          id: 8,
          iwi_id: 1,
          title: 'Whetu Kairangi Pā',
          latitude: '-41.28890',
          longitude: '174.77648',
          content: "Whetū Kairangi was a major fortified pā site built by Tara when he first brought his people to settle. The name of the pā itself refers to the stars in the heavens, although there are two possible explanations of the name's origin. One is that those in the pā could see no other villages and at night had only the stars to look at. The other states that the pā was so named because at night, from the beach below, the cooking fires looked as if they were stars in the sky.                      The pā was protected from surprise attack by outlying forts, and provided a safe retreat for the inhabitants of the surrounding unprotected villages. Just along the ridge to the north was the smaller pā of Kakariki-Hutia. It got its name from a battle where the chief of the pā grabbed some uncooked pārakeets and ate them as he ran to battle. The chief prevailed in the ensuing struggle and the victory was attributed to the fortifying properties of the uncooked birds. This Ngāti Ira pā was later occupied briefly by some of Wi Tako Ngatata's Te Atiawa followers before they moved off to eventually settle in Kumutoto Pā in the late 1830s. ",
          image: '', obj:'',objBackGroundImg:''
        },
        {
          id: 9,
          iwi_id: 1,
          title: 'Tangi-te-keo (Mt Victoria)',
          latitude: '-41.294885',
          longitude: '174.798238',
          content: "From here one can see most of Wellington Harbour. Legend has it that two taniwha lived in the harbour (which at that time was an enclosed lake). One was a restless, energetic taniwha named Ngake, who longed to escape its confinements and swim to open sea. It sped about in the north east corner of the harbour, using its tail to build up the shallow area (Waiwhetu), and then hurled itself at the rocks encircling the lake, and smashed through to escape to the freedom of Raukawa moana (Cook Strait). The other taniwha, Whātaitai, decided to make his escape through another exit. Pushing off with its tail, and in doing so forming the Ngauranga gorge, Whātaitai headed off down the other side of the island of Motu Kairanga (Miramar Peninsula) only to get stuck by the receding tide Ngake had let in. Whataitai's body thus forms the isthmus between the former island of Motu Kairanga and the western side of the harbour, where the airport is now situated. It is believed Tangi-te-keo, (Mt Victoria) was named after the soul of Whātaitai, which, after leaving the taniwha's body, flew up to the top of this hill in the shape of a bird and proceeded to tangi (weep and mourn). From this spot one can also see Matiu (Somes) Island and Makaro (Ward) Island. Named by Kupe, Matiu and Makaro were always regarded as a place of refuge. However, their lack of water supply meant they were never occupied on a long term basis, and no structures were erected on these islands. Follow the road down Mt Victoria to Oriental Parade and turn right. Follow the coast road round to Pt Halswell. While driving around Oriental Parade one can see Rukutoa, Point Halswell and the Miramar Peninsula to the left. ",
          image: '', obj:'',objBackGroundImg:''
        }
        
      ]);
    });
};

