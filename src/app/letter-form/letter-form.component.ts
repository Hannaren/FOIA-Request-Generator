import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-letter-form',
  templateUrl: './letter-form.component.html',
  styleUrls: ['./letter-form.component.css']
})
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
