import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes-comp',
  templateUrl: './jokes-comp.component.html',
  styleUrls: ['./jokes-comp.component.css']
})
export class JokesCompComponent implements OnInit {

jokesJson={
  
}


  jokeMessage="";
  constructor(private joke:JokeService  ) { 

  }

getJoke(){
 this.joke.get().subscribe(response => {
  this.jokeMessage=response;
})
}
getQuotes(){
  this.joke.get().subscribe(response => {
   this.jokeMessage=response;
 })
 }

 getDialogues(){
  this.joke.get().subscribe(response => {
   this.jokeMessage=response;
 })
 }
jokes="";
 getRandom(){
        this.jokes="Hai";
 }

  ngOnInit(): void {
  }

}
