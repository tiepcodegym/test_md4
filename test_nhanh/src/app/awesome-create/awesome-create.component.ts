import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AwesomeService} from "../service/awesome.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-awesome-create',
  templateUrl: './awesome-create.component.html',
  styleUrls: ['./awesome-create.component.css']
})
export class AwesomeCreateComponent implements OnInit {
  formCreate?: FormGroup | any;
  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router) { }

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    })
  }

  submit(){
    let data = this.formCreate?.value;
    this.awesomeService.createAwesome(data).subscribe(res=>{
      this.router.navigate([''])
    })
  }


}
