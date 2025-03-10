import {
  AnswerChoice,
  MultipleChoiceQuizQuestion,
  QuizQuestion,
  QuizQuestionProvider,
} from 'codedifferently-instructional';

export class DavisDQuiz implements QuizQuestionProvider {
  getProviderName(): string {
    return 'DavisD';
  }

  makeQuizQuestions(): QuizQuestion[] {
    return [
      DavisDQuiz.makeQuestion1(),
      DavisDQuiz.makeQuestion2(),
      DavisDQuiz.makeQuestion3(),
    ];
  }

  private static makeQuestion1(): QuizQuestion {
    return new MultipleChoiceQuizQuestion(
      1,
      'What is the best hairstlye?',
      new Map<AnswerChoice, string>([
        [AnswerChoice.A, 'Waves/Lowcut'],
        [AnswerChoice.B, 'Locs or Twists'],
        [AnswerChoice.C, 'Afro/HighTop'],
        [AnswerChoice.D, 'The Mullet'],
      ]),
      AnswerChoice.A,
    ); // Replace `UNANSWERED` with the correct answer.
  }

  private static makeQuestion2(): QuizQuestion {
    return new MultipleChoiceQuizQuestion(
      2,
      'Are Hotdogs Sandwhiches?',
      new Map<AnswerChoice, string>([
        [AnswerChoice.A, 'No'],
        [AnswerChoice.B, 'Yes'],
      ]),
      AnswerChoice.A,
    ); // Provide an answer.
  }

  private static makeQuestion3(): QuizQuestion {
    return new MultipleChoiceQuizQuestion(
      3,
      'If we flip a coin...',
      new Map<AnswerChoice, string>([
        [AnswerChoice.A, 'Heads'],
        [AnswerChoice.B, 'Tails'],
        [AnswerChoice.C, 'Both'],
      ]),
      AnswerChoice.C,
    ); // Replace `UNANSWERED` with the correct answer.
  }
}
