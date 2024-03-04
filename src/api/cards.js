export const getCards = (numberOfCards) => {
  return fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20').then((response) => {
    return response.json();
  }).then((response) => {
    const shuffleCards = (cards) => {
      const inUse = cards.slice(0, numberOfCards);
      let duplicated = inUse.concat(inUse);
  
      for (let i = duplicated.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
  
        [duplicated[i], duplicated[j]] = [duplicated[j], duplicated[i]];
      }
  
      return duplicated;
    };
    const parsedCards = response.entries.map((entry, index) => {
      return {
        imageUrl: entry.fields.image.url,
        name: entry.meta.name,
        slug: entry.meta.slug,
        flipped: false,
        id: entry.meta.slug,
      };
    });

    return shuffleCards(parsedCards);
  });
};
