const Question = require('./Question');
const QuestionStore = require('./QuestionStore');
const QuestionPaperGenerator = require('./QuestionPaperGenerator');

const question1 = new Question("What is the speed of light", "Physics", "Waves", "Easy", 5);
const question2 = new Question("What is the BODMAS Rule", "Maths", "Arithmetics", "Easy", 5);
const question3 = new Question("What is the formula of Rock Salt", "Chemistry", "Salt Analysis", "Easy", 5);

// Populate Question Store
const questionStore = new QuestionStore();
questionStore.addQuestion(question1);
questionStore.addQuestion(question2);
questionStore.addQuestion(question3);

// Generate Question Paper
const generator = new QuestionPaperGenerator(questionStore);
const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };
const questionPaper = generator.generateQuestionPaper(100, difficultyDistribution);

// Display the generated question paper
console.log("Generated Question Paper:");
questionPaper.forEach((q) => {
  console.log(`- ${q.question} (${q.difficulty}, ${q.marks} marks)`);
});
