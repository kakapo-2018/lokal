
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('iwiInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('iwiInfo').insert([
        {id: 1, iwi_id: 1, content: "In 2010 the Crown and Te Atiawa recommenced negotiations to settle the historical Treaty claims of Te Atiawa. In February 2010 Te Atiawa Iwi Authority (TAIA) was given the mandate to negotiate a deed of settlement with the Crown. In June 2013, Te Atiawa resolved to establish Te Kotahitanga o Te Atiawa Trust (Te Kotahitanga) as the post-settlement governance entity (PSGE) for Te Atiawa. Te Kotahitanga is a private Trust that has the purpose of receiving Treaty settlement assets and holding, managing and administering the Trust Fund for the benefit of members of Te Atiawa (irrespective of where members live). It was also resolved in June 2013 that, following the signing of the Deed of Settlement.", image: ''},
        {id: 2, iwi_id: 2, content: 'eferfcev', image: ''},
        {id: 3, iwi_id: 3, content: 'erfvevcerfc', image: ''}
      ]);
    });
};
