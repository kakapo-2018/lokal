
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('story').del()
    .then(function () {
      // Inserts seed entries
      return knex('story').insert([
        {
          id: 1, 
          iwi_id:1, 
          title:'Te Aro Pa',
          latitude:'-41.291800',
          longitude:'174.777425',
          content:"In November 2005, work on a multi-million dollar high-rise development in the heart of Wellington city was suddenly halted when foundation work for the new building uncovered the remains of a 160 year old pa site. It was a remarkable find, given the pa site was just off Courtenay Place, in central Wellington, under a two-storey building that had stood in Taranaki Street for 100 years. The remains were of Te Aro Pa, one of the largest in the Wellington area, with up to 200 people in the 1850s occupying an area of more than two hectares. Te Aro Pa visitors' centre is not permanently staffed, but groups can pop in to view the preserved foundations of two ponga buildings - or whare ponga - dating from the 1840s.", image:'https://teara.govt.nz/files/a13194atl.jpg'},
          {
            id: 2, 
            iwi_id:1, 
            title:'Uenuku',
            latitude:'-41.291800',
            longitude:'174.777425',
            content:"Uenuku is a taonga (treasure) of the Tainui people. Uenuku was the god of the rainbow, and the style of this striking representation is unlike most Māori carvings. Uenuku was lost during the battle of Hingakākā, between Ngāti Toa and Waikato tribes about 1780, and was rediscovered near Lake Ngāroto many years later. It was included in the acclaimed Te Māori exhibition of 1984, and is now the pride of the Te Awamutu museum. Here Uenuku, adorned with a feather cloak, is shown after its transfer from the old to the new museum building in 1975.",
            image:'https://teara.govt.nz/files/a13194atl.jpg'},
            {
              id: 3, 
              iwi_id:3, 
              title:'',
              latitude:'-41.291800',
              longitude:'174.777425',
              content:"These sketches relate to the battle of Gate Pā, on 28–30 April 1864, when British forces were defeated by Ngāi Te Rangi defenders. Across the top is a plan of the principal earthworks, dugouts and palisades made by the Māori defenders. At right is Penetaka Tuaia, regarded as the designer of the works. Below from left: the fortifications; their location (on a map with a south orientation); a sketch of a palisade; and a Māori flag flown on the day of the battle.",
              image:'https://teara.govt.nz/files/a5578atl.jpg'}
      ]);
    });
};

