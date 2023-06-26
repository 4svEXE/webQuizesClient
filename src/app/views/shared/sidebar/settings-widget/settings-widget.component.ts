import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-widget',
  templateUrl: './settings-widget.component.html',
  styleUrls: ['./settings-widget.component.scss']
})
export class SettingsWidgetComponent {
  config: ConfigType = {
    testSize: 20,
    difficulty: 1,
    rightAnswers: 0
  }

  constructor(){

  }

  ngOnInit(): void {};

  setTestSize(testSize: number): void {
    // this.config.testSize = testSize
  }

  setDifficulty(difficulty: number): void {
    // this.config.difficulty = difficulty;
  }

  setRightAnswer(): void {
    // this.config.rightAnswers++
  }
}

type ConfigType = {
  testSize: number, // 10,15,20
  difficulty: number // 1,2,3
  rightAnswers: number // 0-20
}