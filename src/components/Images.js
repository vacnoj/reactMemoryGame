var imageArray = [];
var pub = process.env.PUBLIC_URL;


function makeArray() {
   for(let i=0; i < 13; i++) {
      imageArray.push({
         image: `cardDeck/${i + 2}c.png`,
         id: ((i + 1) * 4) - 3,
         guessed: false
      });
      imageArray.push({
         image: `cardDeck/${i + 2}d.png`,
         id: ((i + 1) * 4) - 2,
         guessed: false
      });
      imageArray.push({
         image: `cardDeck/${i + 2}h.png`,
         id: ((i + 1) * 4) - 1,
         guessed: false
      });
      imageArray.push({
         image: `cardDeck/${i + 2}s.png`,
         id: ((i + 1) * 4),
         guessed: false
      });
   }
}
makeArray();
console.log(imageArray);

export default imageArray;