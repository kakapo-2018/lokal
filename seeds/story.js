
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('story').del()
    .then(function () {
      // Inserts seed entries
      return knex('story').insert([
        {id: 1, iwi_id:1, title:'Te Aro Pa', latitude:'-41.291800', longitude:'174.777425', content:"In November 2005, work on a multi-million dollar high-rise development in the heart of Wellington city was suddenly halted when foundation work for the new building uncovered the remains of a 160 year old pa site. It was a remarkable find, given the pa site was just off Courtenay Place, in central Wellington, under a two-storey building that had stood in Taranaki Street for 100 years. The remains were of Te Aro Pa, one of the largest in the Wellington area, with up to 200 people in the 1850s occupying an area of more than two hectares. Te Aro Pa visitors' centre is not permanently staffed, but groups can pop in to view the preserved foundations of two ponga buildings - or whare ponga - dating from the 1840s.", image:'https://teara.govt.nz/files/a13194atl.jpg'},
      ]);
    });
};

