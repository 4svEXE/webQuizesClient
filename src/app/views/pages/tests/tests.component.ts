import { Component } from "@angular/core";
import { TestModel } from "src/app/models/Test";
import { TestService } from "src/app/services/test.service";

type questionType = {
  isActive: boolean;
  isCorrect: boolean;
};

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.scss"],
})
export class TestsComponent {
  tests: TestModel[] = tasks;
  currentQuestion: number = 0;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.getTests();
  }

  question: questionType = { isActive: false, isCorrect: false };
  questions: questionType[] = [this.question];

  getTests() {
    this.testService.getTestQuestions().subscribe((tests: any) => {
      if (tests[0] !== undefined) {
        this.tests = tests;

        // fill questions array question objecs
        for (let i = 0; i < this.tests.length-1; i++) {
          let testsCopy = Object.assign({}, this.question);
          this.questions.push(testsCopy)
        }

        this.questions[0].isActive = true;
      }
    });
  }

  nextQuestion(isCorrect: boolean) {
    if (this.currentQuestion + 1 < this.tests.length) {
      this.questions[this.currentQuestion].isCorrect = isCorrect;

      this.questions[this.currentQuestion++].isActive = false;
      this.questions[this.currentQuestion].isActive = true;

    } else {
      alert("Test ends");
    }
  }
}

const tasks = [
  {
    _id: "649950bb98a76ea32abc3be1",
    image: "",
    title: "Loading...",
    difficulty: 1,
    answers: [
      {
        title: "Loading...",
        isCorrect: false,
        _id: "649954e3caea8ebd04e3820e",
      },
      {
        title: "Loading...",
        isCorrect: false,
        _id: "649954e3caea8ebd04e3820f",
      },
      {
        title: "Loading...",
        isCorrect: false,
        _id: "649954e3caea8ebd04e38210",
      },
      {
        title: "Loading...",
        isCorrect: true,
        _id: "649954e3caea8ebd04e38211",
      },
    ],
    explanation: "explanation",
    __v: 0,
  },
];
