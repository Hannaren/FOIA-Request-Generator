import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Letter } from '../letter';

@Component({
  selector: 'app-letter-form',
  templateUrl: './letter-form.component.html',
  styleUrls: ['./letter-form.component.css']
})

export class LetterFormComponent {

  model = new Letter('Name of Recipient', 'Agency', '555 Main St. City Name, State', 'Ex.: Financial budgets between years 2000-2010.', 'you@email.com', 'Ex.: inform the public through broadcast television.', 100, 'Your Name', '100 Easy St. Kansas City, MO', '816-555-5555');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  /*
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }
  */
}


/*
export class LetterFormComponent implements OnInit {
  letterForm = this.formBuilder.group({
    name: [''],
    contactAddress: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    agency: [''],
    requestTextArea: [''],
    yourEmail: [''],
    feeTextArea: [''],
    fee: [''],
    yourName: [''],
    yourAddress: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    yourPhone: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

}
*/

