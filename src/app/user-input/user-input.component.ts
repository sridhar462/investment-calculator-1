import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  submit() {
    console.log("submitted the form");
    console.log("initialInvestment", this.initialInvestment);
    console.log("annualInvestment", this.annualInvestment);
    console.log("expectedReturn", this.expectedReturn);
    console.log("duration", this.duration);
  }
}
