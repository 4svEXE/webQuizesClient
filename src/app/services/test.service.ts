import { Injectable } from "@angular/core";
import { WebRequestService } from "./web-request.service";
import { TestModel } from "../models/Test";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class TestService {
  private dataSubject = new Subject<TestModel[]>();
  data$ = this.dataSubject.asObservable();

  sendData(data: TestModel[]) {
    this.dataSubject.next(data);
  }

  constructor(private webReqService: WebRequestService) {}

  // Create the observer
  testSubject = new BehaviorSubject(this.getTestQuestions());

  // приймаємо дані з сервака й відправ на хуй
  getTestQuestions() {
    return this.webReqService.get("tests");
  }

  createTestQuestion(testModel: TestModel) {
    return this.webReqService.post("tests", testModel);
  }
}
