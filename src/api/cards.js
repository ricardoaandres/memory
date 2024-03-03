export const getCards = () => {
  return fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20').then((response) => {
    return response.json();
  }).then((response) => {
    const parsedCards = response.entries.map((entry) => {
      return {
        imageUrl: entry.fields.image.url,
        name: entry.meta.name,
        slug: entry.meta.slug,
      };
    });

    return parsedCards;
  });
};
