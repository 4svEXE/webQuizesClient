type answerType = {
  title: string;
  isCorrect: boolean;
};

export class TestModel {
  id?: number;
  title: string;
  difficulty: number;
  answers: answerType[];
  image?: string;
  explanation: string;

  constructor(
    id: number,
    title: string,
    completed: boolean,
    difficulty: number,
    answers: answerType[],
    image: string,
    explanation: string
  ) {
    this.id = id;
    this.title = title;
    this.difficulty = difficulty;
    this.answers = answers;
    this.image = image;
    this.explanation = explanation;
  }
}
