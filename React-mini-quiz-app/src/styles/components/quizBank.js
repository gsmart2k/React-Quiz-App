const quizBank = [
  {
    question: "Who was the first man to enter a moon ?",
    options: ["Charles Darwin", "Robert Mongo", "David Schawam", "Uriel Sam"],
    correct: "Charles Darwin",
    questionId: 1,
  },
  {
    question: "In whihc year did the Corona Virus Start ?",
    options: ["1999", "2003", "2020", "2019"],
    correct: "2019",
    questionId: 2,
  },
  {
    question: "Which Country has the greatest Population ?",
    options: ["China", "Russia", "Nigeria", "Isreal"],
    correct: "China",
    questionId: 3,
  },
  {
    question: "When is the next U.S.A Presidential Debate",
    options: ["October 2", "October 6", "October 4", "October 1"],
    correct: "October 1",
    questionId: 4,
  },
  {
    question: "Who is the President of Nigeria ?",
    options: ["Buhari", "Bwari", "Boohari", "Bhuari"],
    correct: "Buhari",
    questionId: 5,
  },
  {
    question: "Who is the Presdient of the U.S.A",
    options: ["Doanld Trump", "Donny Biden", "Tar Coo", "Biden Rei"],
    correct: "Donald Trump",
    questionId: 6,
  },
  {
    question: "Who did Trump Compete with in the Recent Presdiential Debate ?",
    options: ["Joe Bidden", "Rebecca Rice", "tee Harley", "Pop Dee"],
    correct: "Joe Bidden",
    questionId: 7,
  },
  {
    question: "Who was the first man to enter a moon ?",
    options: ["Charles Darwin", "Robert Mongo", "David Schawam", "Uriel Sam"],
    correct: "Charles Darwin",
    questionId: 8,
  },
  {
    question: "Who was the first man to enter a moon ?",
    options: ["Charles Darwin", "Robert Mongo", "David Schawam", "Uriel Sam"],
    correct: "Charles Darwin",
    questionId: 9,
  },
  {
    question: "Who was the first man to enter a moon ?",
    options: ["Charles Darwin", "Robert Mongo", "David Schawam", "Uriel Sam"],
    correct: "Charles Darwin",
    questionId: 10,
  },
  {
    question: "Who was the first man to enter a moon ?",
    options: ["Charles Darwin", "Robert Mongo", "David Schawam", "Uriel Sam"],
    correct: "Charles Darwin",
    questionId: 11,
  },
];
export default (n = 5) =>
  Promise.resolve(quizBank.sort(() => 0.5 - Math.random()).slice(0, n));
