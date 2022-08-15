import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
})
export class ValidatorComponent implements OnInit {


  @Input () inputName: any
  @Input () labelName: any
  @Input () minChar?: any
  @Input () maxChar?: any

  constructor() { }

  ngOnInit(): void {

  }

}
