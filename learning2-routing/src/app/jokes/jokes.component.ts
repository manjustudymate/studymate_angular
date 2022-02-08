import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes',
  template: `
    <p>
      jokes works!
    </p>

<div class="joke">
    <div *ngFor="let x of jokeMessage">{{x|json}}</div>
</div>
<button (click)="getJoke()">Generate</button>
  `,
  styles: [
  ]
})
export class JokesComponent implements OnInit {
 jokeMessage="";
  constructor(private  joke:JokeService ) { }

getJoke(){
 this.joke.get().subscribe(response => {
  this.jokeMessage=response.dataseries ;
})
}
  ngOnInit(): void {
  }

}
