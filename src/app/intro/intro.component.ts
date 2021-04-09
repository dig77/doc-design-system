import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { introAnimationTrigger} from '../animations/animate'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [introAnimationTrigger]
})
export class IntroComponent implements OnInit {

  constructor(
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {

  }

}
