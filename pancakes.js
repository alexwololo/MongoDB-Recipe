//use pancakes;

// insertOne
db.pancakes.insertOne({
  order: 1,
  title: 'Klassiska svenska pannkakor',
  ingredients: [
    '2 ½ dl vetemjöl',
    '½ tsk salt',
    '6 dl mjölk',
    '3 ägg',
    '3 msk smör',
  ],
  directions:
    'Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen. Låt gärna svälla i cirka 30 minuter. Smält hälften av smöret i en stekpanna och vispa ner det i smeten. Använd resten av smöret till att steka tunna pannkakor.',
  rating: 2.5,
  calories: 426,
});

db.pancakes.insertMany([
  {
    order: 2,
    title: 'Nyttiga pannkakor med grahamsmjöl',
    ingredients: [
      '1 dl vetemjöl',
      '2 dl grahamsmjöl',
      '½ tsk salt',
      '5 dl mjölk',
      '2 ägg',
      '1 msk potatismjöl',
      '2 msk rapsolja',
    ],
    directions:
      'Blanda vete- och grahamsmjöl i en bunke. Tillsätt saltet och potatismjölet. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen. Tillsätt oljan. Låt smeten svälla i cirka 30 minuter. Smält olja i en stekpanna och stek tunna pannkakor.',
    rating: 5.6,
    calories: 123,
  },
  {
    order: 3,
    title: 'Spenatpannkakor',
    ingredients: [
      '1 ½ dl vetemjöl',
      '½ dl rågmjöl eller grahamsmjöl (eller ytterligare ½ dl vetemjöl)',
      '200 g hackad spenat',
      '½ tsk salt',
      '4 dl mjölk',
      '4 ägg',
      '3 msk rapsolja (eller margarin/smör)',
    ],
    directions:
      'Blanda vete- och rågmjöl i en bunke. Tillsätt saltet. Vispa i hälften av mjölken och vispa till en slät smet. Blanda i spenaten. Vispa i resten av mjölken och äggen. Tillsätt hälften av oljan. Om du har tid, låt gärna smeten svälla i cirka 30 minuter.',

    rating: 5,
    calories: 245,
  },
  {
    order: 4,
    title: 'Morotspannkakor',
    ingredients: [
      '1 ½ dl vetemjöl',
      '½ dl rågmjöl eller grahamsmjöl (eller ytterligare ½ dl vetemjöl)',
      '4 rivna morötter (ca 200 g)',
      '½ tsk salt',
      '4 dl mjölk',
      '4 ägg',
      '3 msk rapsolja (eller margarin/smör)',
    ],
    directions:
      'Blanda vete- och rågmjöl i en bunke. Tillsätt saltet. Vispa i hälften av mjölken och vispa till en slät smet. Blanda i morötterna. Vispa i resten av mjölken och äggen. Tillsätt hälften av oljan. Låt gärna smeten svälla i cirka 30 minuter.',
    rating: 8,
    calories: 685,
  },

  {
    order: 5,
    title: 'Ugnspannkaka',
    ingredients: [
      '2 ½ dl vetemjöl',
      '½ tsk salt',
      '6 dl mjölk',
      '3 ägg',
      '3 msk smör',
    ],
    directions:
      'Värm ugnen till 225 grader. Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen. Om du har tid - låt gärna smeten svälla i cirka 30 minuter. Smöra en rymlig ugnsfast form och häll i smeten. Grädda pannkakan i ugnen i ca 20-25 minuter.',
    rating: 6,
    calories: 856,
  },
  {
    order: 6,
    title: 'Fläskpannkaka',
    ingredients: [
      '200-300 g rimmat fläsk',
      '2 ½ dl vetemjöl',
      '½ tsk salt',
      '6 dl mjölk',
      '3 ägg',
      '3 msk smör',
    ],
    directions:
      'Värm ugnen till 225 grader. Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen. Om du har tid - låt gärna smeten svälla i cirka 30 minuter. Skär fläsket i små tärningar. Smöra en rymlig ugnsfast form och bryn fläsket i den i ugnen. Häll i smeten. Grädda pannkakan i ugnen i ca 20-25 minuter.',
    rating: 4.6,
    calories: 842,
  },
  {
    order: 7,
    title: 'Amerikanska pannkakor',
    ingredients: [
      '2 ½ dl vetemjöl',
      '2 tsk bakpulver',
      '½ tsk salt',
      '1 msk socker',
      '2 ½ dl mjölk',
      '2 msk smält smör + smör till stekning',
      '1 ägg',
    ],
    directions:
      'Blanda ihop de torra ingredienserna till smeten. Vispa sedan i mjölk, smör och sist ägget. Stek pannkakorna i lite smör i en stekpanna. När du ser bubblor på översidan på pannkakan är den dags att vända.',
    rating: 7.6,
    calories: 9999,
  },
  {
    order: 8,
    title: 'Pannkakstårta',
    ingredients: [
      '5 dl vetemjöl',
      '1 l mjölk',
      '3-4 ägg',
      '2 msk smör',
      '½ tsk salt',
    ],

    directions:
      'I princip går det ut på att göra vanliga pannkakor, som man sedan staplar ihop till en tårta med till exempel glass, hallon, grädde med mera i. Du steker pannkakorna, och om du är fler än en person kan den ena personen steka pannkakorna och den andra sätta igång med tårtan. Detta tar ganska lång tid. Stek pannkakorna på vanligt vis, när alla är klara kan du börja komponera tårtan. Välj ett fint tårtfat, där du lägger första pannkakan. Bre först på ett relativt tunt lager hallonsylt, lägg sedan på en lagom mängd vaniljglass (eller om du föredrar någon annan smak på glass), lägg på några (5-6) hallon och lägg på nästa pannkaka. Såhär fortsätter du till tårtan har blivit cirka 1 decimeter hög. Du kan själv lägga in grädde, godis, choklad och diverse godsaker precis hur du vill! Pannkakstårta är perfekt för fest eller efterrätt men också som lätt lunch!.',
    rating: 9.9,
    calories: 9998,
  },
  {
    order: 9,
    title: 'Mormors pannkakor',
    ingredients: [
      '2 dl mjölk',
      '2 dl mjöl',
      '2 ägg',
      '1 dl socker',
      '50 g smält smör',
    ],

    directions:
      'Vispa upp ägg och socker, sedan häller du i mjöl och mjölk. Smält smöret och häll ner i smeten. Låt smeten stå från morgon till kväll och stek pannkakorna då.. :)',
    rating: 3.7,
    calories: 85,
  },
  {
    order: 10,
    title: 'Krispiga pannkakor',
    ingredients: [
      '1 l mjöl',
      '1 ½ tsk salt',
      '6 ägg',
      '100 g smält margarin',
      '2 ½ dl mineralvatten (naturell)',
      '1 ½ l mjölk',
    ],

    directions:
      'Blanda mjöl, ägg, salt, det smälta margarinet och mineralvatten. Häll sedan i mjölk lite i sänder och vispa samtidigt. Grädda pannkakorna på medelstark värme i lite smör. Vänd dem efter någon minut. Servera med valfritt tillbehör, t ex sylt, glass eller strö lite socker över dem.',
    rating: 9.9,
    calories: 365,
  },
]);

// returns a cursor ie the first 20 documents (but i have only 10 pancakes)
db.pancakes.find();

// count number of recipes
db.pancakes.find().count();
db.pancakes.countDocuments();

// update one document with a new array
db.pancakes.updateOne(
  { order: 7 },
  {
    $push: {
      filling: {
        $each: [
          'c:a 5 dl glass',
          'c:a 3-4 dl grädde',
          'c:a 1 l hallon, eller mer',
          'hallonsylt',
          'godis',
          'DETTA KOMMER INTE ATT SYNAS PGA $slice: 5',
        ],
        $sort: { filling: -1 },
        $slice: 5,
      },
    },
  }
);
// print
db.pancakes.findOne({ order: 7 });

// delete one document
db.pancakes.deleteOne({ order: 7 });

// display something specific, im showing all titles
db.pancakes.findOne({}, { _id: 0, title: 1 });
db.pancakes.find({}, { _id: 0, title: 1 });
//Sort by "rating" in Ascending Order
db.pancakes
  .find()
  .sort({ rating: 1 })
  .forEach((d) => {
    printjson({ name: d.title, rating: d.rating });
  });

// make all pancakes as a favourite if their order number is 6 or less
db.pancakes.updateMany({ order: { $lte: 6 } }, { $set: { isFav: true } });

// count all favourites that marked as favourites
db.pancakes.find({ isFav: true }).count();
db.pancakes.countDocuments({ isFav: true });

// list all documets that are marked as favourite
db.pancakes.find({ isFav: true });
