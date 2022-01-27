import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AwesomeService} from "../service/awesome.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-awesome-update',
  templateUrl: './awesome-update.component.html',
  styleUrls: ['./awesome-update.component.css']
})
export class AwesomeUpdateComponent implements OnInit {
  formUpdate?: FormGroup;
  id?: number;
  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.formUpdate = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
    // @ts-ignore
    this.id = +this.router.snapshot.paramMap.get('id');
    this.awesomeService.getAwesome(this.id).subscribe(res=>{
      this.formUpdate?.patchValue({
          tag: res.tag,
          url: res.url,
          descriptions: res.descriptions
        })
    })
  }

  submit(){
    let data = this.formUpdate?.value;
    this.awesomeService.update(data,this.id).subscribe(res=>{
      this.route.navigate([''])
    })
  }

}
