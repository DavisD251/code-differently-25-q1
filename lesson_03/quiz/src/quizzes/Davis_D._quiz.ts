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
    return [DavisDQuiz.makeQuestion0(), DavisDQuiz.makeQuestion1()];
  }

  private static makeQuestion0(): QuizQuestion {
    return new MultipleChoiceQuizQuestion(
      1,
      'What is the best hairstlye?',
      new Map<AnswerChoice, string>([
        [AnswerChoice.A, 'Waves/Lowcut'],
        [AnswerChoice.B, 'Locs or Twists'],
        [AnswerChoice.C, 'Afro/HighTop'],
        [AnswerChoice.D, 'The Mullet'],
      ]),
      AnswerChoice.UNANSWERED,
    ); // Replace `UNANSWERED` with the correct answer.
  }

  private static makeQuestion1(): QuizQuestion {
    return new MultipleChoiceQuizQuestion(
      2,  
      'Are Hotdogs Sandwhiches?',
      new Map<AnswerChoice, string>([
        [AnswerChoice.A, 'No'],
        [AnswerChoice.B, 'Yes']
      ])
      AnswerChoice.UNANSWERED,
    ); // Provide an answer.
  }

  private static makeQuestion1(): QuizQuestion {
    return new MultipleChoiceQuizQuestion(
      3,
      'If we flip a coin...',
      new Map<AnswerChoice, string>([
        [AnswerChoice.A, 'Heads'],
        [AnswerChoice.B, 'Tails'],
      ]),
      AnswerChoice.UNANSWERED,
    ); // Replace `UNANSWERED` with the correct answer.
  }
}
