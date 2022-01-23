import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public variable1 = 'Iam First variable';
  public isTrue=true;
  public isFalse=false;
  public userName="Manjunath";
  public name = "";
  public id1="id1";
  public id2='id2';
  public class1='className1';
  public fontColor='';
  public textColor="red";






  public getName(){
    return this.name="Manjunath";
  }
  
  public getColor(){
    return this.fontColor='green';
  }

  public mystyles={
    color:"green",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
