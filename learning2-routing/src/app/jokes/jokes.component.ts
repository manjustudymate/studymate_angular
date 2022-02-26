import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes',
  template: `
    <p>
      jokes works!
    </p>

<div class="joke">
    
    <div>{{jokeMessage |json}}</div>
</div>
<button (click)="getJoke()">Generate</button>
<button (click)="getJoke1()">Generate</button>

  `,
  styles: [
  ]
})
export class JokesComponent implements OnInit {
 jokeMessageJson="";
  constructor(private  joke:JokeService ) { 

  }
jokeMessage=''
getJoke(){
 this.joke.get().subscribe(response => {
  this.jokeMessageJson=response;
})
}

getJoke1(){

  this.jokeMessage=this.jokeMessageJson[3];

}

  ngOnInit(): void {
  }

}
