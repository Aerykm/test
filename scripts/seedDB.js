const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Discussion"
);

const discussionSeed = [
  {
    topic: "Season 3 Attack on Titan Eren is a cry baby",
    name: "ReinerFTW",
    discuss:
      "This man was balling his eyes out the entire season...even when christa tried to encourage him all he could do was try to give up his power and be depressed LOL. His power is op and he doesnt even know it, I hate when characters are mentally blocked for an entire season bruh.",
    date: new Date(Date.now())
  },
  {
    topic: "Darling in the franxx is a rip-off",
    name: "AsukasLover",
    discuss:
      "Is no one really going to acknowledge the fact that darling in the franxx is a shot for shot clone of evangelion? From the mechs right down to the bodysuits and characters, its clear that this show just copied the OG mecha anime, what do you guys think?",
    date: new Date(Date.now())
  },
  {
    topic: "Will I actually live to see the end of the berserk manga??",
    name: "GriffithDidNothingWrong",
    discuss:
      "I feel like either the miura will die before he completes the story or i will like holy shit. Guts was on that ship for 10 YEARS!!! and now we find out what happens once he meets casca...straight misery. I hope i live to see the day where they reunite and can actually stand each other.",
    date: new Date(Date.now())
  }
];

db.Discussion
  .remove({})
  .then(() => db.Discussion.collection.insertMany(discussionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
