const life = [
  "Fish",
  "Shark",
  "Crab",
  "Fish",
  "Seal",
  "Octopus",
  "Shark",
  "Seahorse",
  "Walrus",
  "Starfish",
  "Whale",
  "Penguin",
  "Jellyfish",
  "Squid",
  "Lobster",
  "Pelican",
  "Shrimp",
  "Jellyfish",
  "Dogfish",
  "Dolphin",
  "Aardvark",
  "Albatross",
  "Alligator",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Dinosaur",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Kangaroo",
  "Lapwing",
  "Lion",
  "Meerkat",
  "Narwhal",
  "Pelican",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Stingray",
  "Stinkbug",
  "Weasel",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

const seaLife = [
  "Fish",
  "Shark",
  "Crab",
  "Fish",
  "Seal",
  "Octopus",
  "Shark",
  "Seahorse",
  "Walrus",
  "Starfish",
  "Whale",
  "Penguin",
  "Jellyfish",
  "Squid",
  "Lobster",
  "Pelican",
  "Shrimp",
  "Jellyfish",
  "Dogfish",
  "Dolphin",
];

const commentsData = [
  "Nature, in the broadest sense, is the physical world or universe.",
  "Nature can refer to the phenomena of the physical world,",
  "Life in general. The study of nature is a large, if not the only",
  "part of science. Although humans are part of nature, human",
  "activity is often understood as a separate category from other ",
  "natural phenomena The word nature is borrowed from the Old French",
  "nature and is derived from the Latin word natura, or essential",
  "qualities, innate disposition, and in ancient times, literally ",
  "meant birth.[2] In ancient philosophy, natura is mostly used ",
  "as the Latin translation of the Greek word physis, which",
  "originally related to the intrinsic characteristics of plants,",
  "animals, and other features of the world to develop of their ",
  "own accord.[3][4] The concept of nature as a whole, the",
  "physical universe, is one of several expansions of the ",
  "original notion;[1] it began with certain core applications",
  "of the word by pre-Socratic philosophers ",
  "(though this word had a dynamic dimension then, especially",
  "for Heraclitus), and has steadily gained currency ever ",
  "During the advent of modern scientific",
  "method in the last several centuries, nature became the",
  "passive reality, organized and moved by divine laws.[5][6]",
  " With the Industrial revolution, nature increasingly became",
  "seen as the part of reality deprived from intentional ",
  "intervention: it was hence considered as sacred by some",
  "traditions (Rousseau, American transcendentalism) or a",
  "mere decorum for divine providence or human history",
  "(Hegel, Marx). However, a vitalist vision of nature,",
  "closer to the presocratic one, got reborn at the same ",
  "time, especially after Charles Darwin.[1]",
];
export { seaLife, life, commentsData };

//seed topics once
//for each user create 2 posts for each topics
//for each post create 2 to 5 comments (make the comment users random)

// await photos.photos.forEach(async (photo) => {
//   const position = await axios.get(
//     `https://api.3geonames.org/?randomland=${land}&json=1`
//   );
//   //post
//   console.log({
//     description: photo.alt,
//     image: photo.src.portrait,
//     latitude1: position.data.nearest.latt,
//     latitude2: position.data.nearest.latt,
//     longitude1: position.data.nearest.longt,
//     longitude2: position.data.nearest.longt,
//     topics: [topic],
//     commentCount: 0,
//     likes: [""],
//     author: username,
//     createdDate: Date.now(),
//   });
// });
