
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('iwiInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('iwiInfo').insert([
        { id: 1, 
          iwi_id: 1, 
          content: "In 2010 the Crown and Te Atiawa recommenced negotiations to settle the historical Treaty claims of Te Atiawa. In February 2010 Te Atiawa Iwi Authority (TAIA) was given the mandate to negotiate a deed of settlement with the Crown. In June 2013, Te Atiawa resolved to establish Te Kotahitanga o Te Atiawa Trust (Te Kotahitanga) as the post-settlement governance entity (PSGE) for Te Atiawa. Te Kotahitanga is a private Trust that has the purpose of receiving Treaty settlement assets and holding, managing and administering the Trust Fund for the benefit of members of Te Atiawa (irrespective of where members live). It was also resolved in June 2013 that, following the signing of the Deed of Settlement.", image: ''},
        
          { id: 2, 
            iwi_id: 2, 
            content: "Ngāti Toa, Ngāti Toarangatira or Ngāti Toa Rangatira, is a Māori iwi (tribe) in the lower North Island and upper South Island of New Zealand.[1] Its rohe (tribal area) extends from Whanganui in the north, Palmerston North in the east, and Kaikoura and Hokitika in the south.[2] Ngāti Toa remains a small iwi with a population of only about 4500 (NZ Census 2001). It has four marae: Takapūwāhia and Hongoeka in Porirua, and Whakatū and Wairau in the north of the South Island. Ngāti Toa's governing body has the name Te Rūnanga o Toa Rangatira.", image: ''},
        {
            id: 3,
            iwi_id: 3, 
            content: "The traditional lands of the Te Arawa people are around the Rotorua lakes. Te Arawa tribes today include Ngāti Pikiao, Tūhourangi and Ngāti Whakaue. In Te Arawa tradition, the ancestor Tamatekapua and his relatives set out for New Zealand from Hawaiki in a double-hulled canoe. After a shark rescued the crew from being eaten by a huge sea creature, the people renamed their canoe – and themselves – Te Arawa, after a species of shark.", image: ''}
      ]);
    });
};
