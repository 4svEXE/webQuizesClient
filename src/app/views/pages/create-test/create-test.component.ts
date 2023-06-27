import { Component } from "@angular/core";
import { TestModel } from "src/app/models/Test";
import { NotificationService } from "src/app/services/notification.service";
import { TestService } from "src/app/services/test.service";

@Component({
  selector: "app-create-test",
  templateUrl: "./create-test.component.html",
  styleUrls: ["./create-test.component.scss"],
})
export class CreateTestComponent {
  testModel: TestModel = new TestModel(
    "", // title
    1, // difficulty
    [
      { title: "", isCorrect: true },
      { title: "", isCorrect: false },
      { title: "", isCorrect: false },
      { title: "", isCorrect: false },
    ], // answers
    "", // image
    "" // explanation
  );

  constructor(
    private testService: TestService,
    private notifyService: NotificationService
  ) {}

  createNewTest(event: any) {
    event.preventDefault();

    this.testService
      .createTestQuestion(this.testModel)
      .subscribe((responce: any) => {
        this.showToasterSuccess(
          "Test question wos created successfully!",
          "Succes!"
        );

        console.log("responce", responce);
        this.clearInputs();
      });
  }

  setDifficulty(difficulty: number) {
    this.testModel.difficulty = difficulty;
  }

  clearInputs() {
    this.testModel = new TestModel(
      "", // title
      1, // difficulty
      [
        { title: "", isCorrect: true },
        { title: "", isCorrect: false },
        { title: "", isCorrect: false },
        { title: "", isCorrect: false },
      ], // answers
      "", // image
      "" // explanation
    );
  }

  // Notifications

  showToasterSuccess(message: string, title: string) {
    this.notifyService.showSuccess(message, title);
  }

  showToasterError(message: string, title: string) {
    this.notifyService.showError(message, title);
  }

  showToasterInfo(message: string, title: string) {
    this.notifyService.showInfo(message, title);
  }

  showToasterWarning(message: string, title: string) {
    this.notifyService.showWarning(message, title);
  }
}

type answerType = {
  title: string;
  isCorrect: boolean;
};
