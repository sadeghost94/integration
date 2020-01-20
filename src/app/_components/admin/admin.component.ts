import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import {chainedInstruction} from "@angular/compiler/src/render3/view/util";
import  { AppComponent} from "../../app.component";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //@ViewChild(MainNavComponent, {static: true} ) child;
  //@Input() is_admin : boolean = false;

  @ViewChild(AppComponent, {static: false}) child;
  constructor() {

   }



  ngOnInit() {








  }

}
