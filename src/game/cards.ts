const cards = [
  {
    id: 1,
    title: "Brave Horizon Soren",
    level: "3",
    skills: "+3 ACT",
    energy: 6,
    effects:
      "Resilient: This card can stay on the field at 0 energy. Expend 3 energy, all other Drawfag cards on your side of the field gain 2 energy.",
  },
  {
    id: 2,
    title: "Demon King EHG",
    level: "5",
    skills: "+5 ACT",
    energy: 4,
    effects: "Expend 1 energy from all idle Drawfags.",
  },
  {
    id: 3,
    title: "Goblin Tech Trinket",
    level: "4",
    skills: "+3 LWD, +1 DDL",
    energy: 3,
    effects:
      "If this card contests a Requester card with the LWD tag, expend 1 extra energy.",
  },
  {
    id: 4,
    title: "Herbal Mage A.K.O",
    level: "4",
    skills: "+3 DDL",
    energy: 2,
    effects:
      "Replaces all request cards in play on the field with new cards. Any Requester cards that were contested cannot be claimed until the end of the next turn.",
  },
  {
    id: 5,
    title: "Caprine Sage Trigoat",
    level: "2",
    skills: "+2 LWD, +2 DDL",
    energy: 1,
    effects:
      "The level of this card goes up by 3 if there is another Drawfag on your side of the field.",
  },
  {
    id: 6,
    title: "Garbage Gremlin Dark",
    level: "1",
    skills: "+2 DDL",
    energy: 2,
    effects:
      "When this card sucessfully claims a Requester, Increase Influence Gained by this card by 1.",
  },
  {
    id: 7,
    title: "Armored Priest WL",
    level: "2",
    skills: "+1 LWD, +2 DDL",
    energy: 3,
    effects: " ",
  },
  {
    id: 8,
    title: "Overclocked Cyborg Turbo",
    level: "3",
    skills: "+3 ACT, +1 DDL",
    energy: 4,
    effects:
      "If this card is Claiming a Requester uncontested, expend one extra energy to double influence gain.",
  },
  {
    id: 9,
    title: "Alien Visitor Eggs",
    level: "4",
    skills: "+3 LWD, +2 DDL",
    energy: 5,
    effects: "If this card falls below 3 energy,  Grant this card +2 to DDL.",
  },
  {
    id: 10,
    title: "Fallen Angel Kay",
    level: "5",
    skills: "+1 LWD",
    energy: 6,
    effects:
      'Grant this card 2 energy if it is played while "Brave Horizon Soren" is on the field.',
  },
  {
    id: 11,
    title: "Homeless Girl",
    level: "2",
    skills: "+3 DDL",
    energy: 3,
    effects:
      "Grant yourself 1 bonus influence when this card wins a contested Requester",
  },
  {
    id: 12,
    title: "Hidden Star Revenge",
    level: "4",
    skills: "+1 LWD",
    energy: 3,
    effects: "When this card begins claiming a requester, gain 1 energy.",
  },
  {
    id: 13,
    title: "Milky Mommy Goat",
    level: "2",
    skills: "+2 LWD",
    energy: 4,
    effects: "",
  },
  {
    id: 14,
    title: "Pit Dweller Wurm",
    level: "1",
    skills: "+3 DDL",
    energy: 4,
    effects: "",
  },
  {
    id: 15,
    title: "Just Milo",
    level: "3",
    skills: "+2 LWD",
    energy: 2,
    effects: "Grant 1 Drawfag card you control 1 energy.",
  },
  {
    id: 16,
    title: "Thigh Seeker Vigil",
    level: "2",
    skills: "+1 DDL",
    energy: 2,
    effects:
      'When This Drawfag is on the field, Influence gained from "Thigh Enthusiast" is increased by 1.',
  },
  {
    id: 17,
    title: "Master Magician Voland",
    level: "0",
    skills: "",
    energy: 1,
    effects:
      "Any Request this card contests costs this card 1 energy. This Card claims Requests Immediately. This card cannot gain energy. When this card leaves The Thread, banish the card instead.",
  },
  {
    id: 18,
    title: "Frenzied Fledgling Dizzie",
    level: "0",
    skills: "+1 DDL",
    energy: 3,
    effects: "",
  },
];

cards.forEach((card) => {
  (card as any).kind = "artist";
  (card as any).level = parseInt(card.level);
  (card as any).skills = card.skills.split(", ");
  (card as any).effects = [card.effects];

  if (card.title.split(" ").length > 2) {
    const titleWords = card.title.split(" ");
    const title = titleWords.pop();
    const subtitle = titleWords.join(" ");

    (card as any).subtitle = subtitle;
    (card as any).title = title;
  }
});

export { cards };
