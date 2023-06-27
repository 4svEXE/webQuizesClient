import { Component } from "@angular/core";
import { TestModel } from "src/app/models/Test";
import { TestService } from "src/app/services/test.service";

@Component({
  selector: "app-create-test",
  templateUrl: "./create-test.component.html",
  styleUrls: ["./create-test.component.scss"],
})
export class CreateTestComponent {
  testModel: TestModel = new TestModel(
    "empty", // title
    1, // difficulty
    [
      { title: "string", isCorrect: true },
      { title: "string", isCorrect: false },
      { title: "string", isCorrect: false },
      { title: "string", isCorrect: false },
    ], // answers
    "string", // image
    "string" // explanation
  );

  constructor(private testService: TestService) {}

  createNewTest() {
    
    this.testService
      .createTestQuestion(this.testModel)
      .subscribe((responce: any) => {
        console.log("res", responce);
      });
  }

  setDifficulty(difficulty: number) {
    this.testModel.difficulty = difficulty;
  }
}

type answerType = {
  title: string;
  isCorrect: boolean;
};
