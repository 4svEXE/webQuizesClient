type answerType = {
  title: string;
  isCorrect: boolean;
};

export class TestModel {
  title: string;
  difficulty: number;
  answers: answerType[];
  image?: string;
  explanation: string;
  id?: number;

  constructor(
    title: string,
    difficulty: number,
    answers: answerType[],
    image: string,
    explanation: string,
    id?: number
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.answers = answers;
    this.image = image;
    this.explanation = explanation;
    this.id = id;
  }
}
