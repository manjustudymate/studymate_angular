import { Component } from '@angular/core';
import { LoadJsonService } from './load-json.service';
import { HttpClient } from '@angular/common/http';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Joqes-corner';

  istrue1=false;
  istrue2=false;
  istrue3=false;
  flag=false;
  firstDialogue=true;

  errorMessages=['Please check your internet connection!!','Will update new jokes..please choose Quotes or Dialogues'];

  constructor(private jsondata:LoadJsonService) { }
  visits='';
  ngOnInit() {
    this.jsondata.getVisits().subscribe(response => {
      this.visits=response.value;
    })

    this.jsondata.getJoke().subscribe(response => {
      this.jokesJson=response;
    })

    this.jsondata.getquote().subscribe(response => {
      this.quotesJson=response;
    })

    this.jsondata.getdialogue().subscribe(response => {
      this.dialoguesJson=response;
    })

  }

  jokesJson=[];
  quotesJson=[];
  dialoguesJson=[];

 onclickJokes(){
  this.istrue1=true;
  this.istrue2=false;
  this.istrue3=false;
  this.jokeNumbers=[];
  this.flag=false;
  (<HTMLInputElement>document.getElementById("card1")).style.backgroundColor='steelblue';
  (<HTMLInputElement>document.getElementById("card1")).style.color='White';

  (<HTMLInputElement>document.getElementById("card2")).style.backgroundColor='white';
  (<HTMLInputElement>document.getElementById("card2")).style.color='black';

  (<HTMLInputElement>document.getElementById("card3")).style.backgroundColor='white';
  (<HTMLInputElement>document.getElementById("card3")).style.color='black';

 }
 onclickQuote(){
  this.istrue1=false;
  this.istrue2=true;
  this.istrue3=false;
  this.flag=false;

  (<HTMLInputElement>document.getElementById("card2")).style.backgroundColor='steelblue';
  (<HTMLInputElement>document.getElementById("card2")).style.color='White';

  (<HTMLInputElement>document.getElementById("card1")).style.backgroundColor='white';
  (<HTMLInputElement>document.getElementById("card1")).style.color='black';

  (<HTMLInputElement>document.getElementById("card3")).style.backgroundColor='white';
  (<HTMLInputElement>document.getElementById("card3")).style.color='black';
  
 }
 onclickDialogue(){
  this.istrue1=false;
  this.istrue2=false;
  this.istrue3=true;
  this.firstDialogue=true;
  this.flag=false;

  (<HTMLInputElement>document.getElementById("card3")).style.backgroundColor='steelblue';
  (<HTMLInputElement>document.getElementById("card3")).style.color='White';

  (<HTMLInputElement>document.getElementById("card2")).style.backgroundColor='white';
  (<HTMLInputElement>document.getElementById("card2")).style.color='#1976d2';

  (<HTMLInputElement>document.getElementById("card1")).style.backgroundColor='white';
  (<HTMLInputElement>document.getElementById("card1")).style.color='#1976d2';

 }
jokeNumbers=[] as  any;
randomMessage='';
generateJoke(){

  
  let len = this.jokesJson.length;
  let num=Math.floor(Math.random()*len);this.flag=true;
  if(len==0){
    this.randomMessage=this.errorMessages[0];
    this.jsondata.getJoke().subscribe(response => {
      this.dialoguesJson=response;
    })
  } 
  else {
    if(!(num in this.jokeNumbers)){
  this.randomMessage=this.jokesJson[num];
  this.jokeNumbers.push(num);
}
else{
  if(this.jokesJson.length==this.jokeNumbers.length){
    this.randomMessage=this.errorMessages[1];
  }
  else{
  this.generateJoke();}
}
  }
}

generatequote(){
  this.flag=true;
  let len = this.quotesJson.length;
  if(len==0){
    this.randomMessage=this.errorMessages[0];
    this.jsondata.getquote().subscribe(response => {
      this.dialoguesJson=response;
    })
  } 
  else {
  this.randomMessage=this.quotesJson[Math.floor(Math.random()*len)];
}
}


generatedialogue(){
  this.flag=true;
  let len = this.dialoguesJson.length;
  if((this.firstDialogue)){
    this.randomMessage=this.dialoguesJson[0];
    this.firstDialogue=false;
  }
  else{
    if(len==0){
      this.randomMessage=this.errorMessages[0];  
    }
    else{
      this.randomMessage=this.dialoguesJson[Math.floor(Math.random()*len)];}
}
}

}

