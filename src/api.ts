export const getApiData = () => ({
  title: 'Review of the 2021 Suzuki Vitara',
  tags: ['cars', 'suzuki', 'vitara', 'review'],
  text: "It's pretty good.",
  author: 'someone',
  replies: [
    {
      title: 'Is it really though?',
      tags: ['doubt'],
      text: 'Not so sure',
      author: 'someone else',
      replies: [
        {
          title: 'Yeah it is',
          tags: ['lol'],
          text: 'trust me, bro',
          author: 'someone',
          replies: [],
        },
      ],
    },
    {
      title: "It's certainly better than the Dacia Duster",
      tags: ['dacia', 'bad'],
      text: 'Made in Hungary rather in Romania',
      author: 'another person',
      replies: [],
    },
  ],
});
