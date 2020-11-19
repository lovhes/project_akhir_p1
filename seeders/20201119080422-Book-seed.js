'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Books', [
     {
        book_name: "Ace of the Dragon Division",
        cover_image: "https://cdn.novelupdates.com/images/2019/01/27424s.jpg",
        description: `There’s SIS in great Britain, CIA in the US. In Huaxia, there’s Dragon Division, known as the mysterious power of the East.
        When a soldier that originally failed to be selected to join, appeared on the Dragon Division’s list again, no one noticed, that this inconspicuous and humble looking guy was actually the Dragon King of the division, the one that’s most difficult to deal with.
        He was a man, whose appearance gave every one existential crisis, including a fly that was consecutively caught by him with a pair of chopsticks.
        Of course, this story is hilarious as well.
        `,
        genre: `Action, Adventure, Comedy, Martial Arts, Romance, Supernatural`,
        isbn: `156356`,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      book_name: "My Death Flags Show No Sign of Ending",
      cover_image: "https://cdn.novelupdates.com/images/2017/07/My-Death-Flags-Show-No-Sign-of-Ending.jpg",
      description: `When he came to his senses, Hirasawa Kazuki, a normal university student, found himself in possession of the body of a game’s character.
      Moreover, it was Harold Stokes, the story’s most hated character who was even given the title 『King of Tr*sh』by the players. Myriads of landmines are just waiting for him to step on them, like death flags!
      Will Harold be able to clear the survival route while avoiding the countless death flags in his way?!
      `,
      genre: `Action, Adventure, Drama, Fantasy, Mystery, Romance, Shounen`,
      isbn: `132682`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      book_name: "Ouroboros Record ~Circus of Oubeniel~",
      cover_image: "https://cdn.novelupdates.com/images/2016/12/Ouroboros1.jpg",
      description: `[This is an everlasting love story.] The second son of the Count family, Tullius Shernan Oubeniel, was a person who reincarnated from modern day Japan. That is, a person who has a single experience of death. With no understanding as to how he was reincarnated, he thought that perhaps, he might be reincarnated next time in the same way. Yet, his fear of death was greater than anything – above that, he could only do things such that he avoids death. Peculiar to this world were certain kinds of magic and one of them was alchemy. Choosing this class of magic, he was said to be able to attain perpetual youth and longevity. With that as his only salvation and goal, he had to reach out his hand towards the deepest secrets of alchemy and did so as though it was the only way for him to live. Even if there were sacrifices to be made for that end.
      A s*ave maid admired him from his youth. A Count family. Adventurer. s*ave. Citizen. Aristocrat. Country. Humans. Other beings that were not human…… Just because of one man’s delusional obsessions, many lives were changed, warped, torn apart. Even then, Tullius’s footsteps never knew pause. Everything was so that he could reach the forever he longed for.
      `,
      genre: `Drama, Fantasy, Mature, Psychological, Seinen, Supernatural, Tragedy`,
      isbn: `132562`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      book_name: "Trafford’s Trading Club",
      cover_image: "https://cdn.novelupdates.com/images/2017/04/Trafford%E2%80%99s-Trading-Club.jpg",
      description: `Luo Qiu became the boss of a ‘club’ by chance.
      It was a weird club that sold strange items and with a servant girl that had 300 years of working experience. Countless people with dreams, hopes and ambitions came to the club to exchange anything precious they own for what they want. They would offer their lifespan, items, and even their soul. Every successful trade would increase Luo Qiu’s lifespan by a little. 
      “Tribute successful, your lifespan has increased by 99 years.” 
      As thus, Luo Qiu began his endless life as the club’s boss.
      `,
      genre: `Action, Drama, Fantasy, Horror, Martial Arts, Mature, Mystery, Psychological, Supernatural, Tragedy, Xuanhuan`,
      isbn: `415232`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      book_name: "Tsuki ga Michibiku Isekai Douchuu",
      cover_image: "https://cdn.novelupdates.com/images/2017/04/moon81.jpg",
      description: `High school student Misumi Makoto is called into a fantasy world by the god Tsukuyomi, in order to be a hero. However, the Goddess ruling the world isn’t as thrilled to have him there, and kicks him to the edge of the world. Tsukuyomi declares that Makoto is free to find his own way after Makoto is abandoned by the other Goddess.
      `,
      genre: `Action, Adventure, Comedy, Drama, Fantasy, Harem, Shounen`,
      isbn: `835523`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      book_name: "Trash of the Count’s Family",
      cover_image: "https://cdn.novelupdates.com/images/2020/01/images-5.jpeg",
      description: `When I opened my eyes, I was inside a novel.
      [The Birth of a Hero].
      [The Birth of a Hero] was a novel focused on the adventures of the main character, Choi Han, a high school boy who was transported to a different dimension from Earth, along with the birth of the numerous heroes of the continent.
      I became a part of that novel as the tr*sh of the Count’s family, the family that oversaw the territory where the first village that Choi Han visits is located.
      The problem is that Choi Han becomes twisted after that village, and everyone in it, are destroyed by assassins.
      The bigger problem is the fact that this s*upid tr*sh who I’ve become doesn’t know about what happened in the village and messes with Choi Han, only to get beaten to a pulp.
      “…This is going to be a problem.”
      I feel like something serious has happened to me.
      But it was worth trying to make this my new life.
      `,
      genre: `Action, Adventure, Comedy, Fantasy, Seinen`,
      isbn: `451323`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      book_name: "About the Reckless Girl Who Kept Challenging a Reborn Man Like Me",
      cover_image: "https://cdn.novelupdates.com/images/2017/11/muboyubo1_shoei.jpg",
      description: `“A prodigy at ten, a genius at fifteen, a common man past twenty.”
      This is a story of the struggle of an ordinary guy like me who is a “reincarnator” and a reckless and promising girl who is a “genius”.
      `,
      genre: `Fantasy Romance School Life Seinen Slice of Life`,
      isbn: `645613`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Books', null, {})
  }
};
