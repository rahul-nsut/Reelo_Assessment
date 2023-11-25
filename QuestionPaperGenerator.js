// QuestionPaperGenerator.js
class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
      const totalQuestions = Math.floor(totalMarks / 5); // Assuming each question is worth 5 marks
  
      for (const difficulty in difficultyDistribution) {
        const percentage = difficultyDistribution[difficulty];
        const numQuestions = Math.floor((percentage / 100) * totalQuestions);
  
        const questions = this.questionStore.getQuestionsByDifficulty(difficulty);
        const selectedQuestions = this.getRandomQuestions(questions, numQuestions);
  
        questionPaper.push(...selectedQuestions);
      }
  
      return questionPaper;
    }
  
    getRandomQuestions(questions, num) {
      const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      return shuffledQuestions.slice(0, num);
    }
  }
  
  module.exports = QuestionPaperGenerator;
  