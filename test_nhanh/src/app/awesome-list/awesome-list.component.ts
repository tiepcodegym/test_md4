import { Component, OnInit } from '@angular/core';
import {AwesomeService} from "../service/awesome.service";

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {

  awesomes: any[] =[];

  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.getAwesomes()
  }

  getAwesomes(){
    this.awesomeService.getAll().subscribe(res=>{
      this.awesomes = res
    })
  }

  delete(id:number){
    if(confirm('Are you sure?')){
      this.awesomeService.deleteAwesome(id).subscribe(res=>{
        this.getAwesomes();
      })
    }
  }


}
