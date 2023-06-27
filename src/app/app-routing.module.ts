import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { TestsComponent } from './views/pages/tests/tests.component';
import { CreateTestComponent } from './views/pages/create-test/create-test.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "tests", component: TestsComponent},
  {path: "create-test", component: CreateTestComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
