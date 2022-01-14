import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { WebSocketService } from './service/websocket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;
  constructor(/*private webSocketService: WebSocketService*/) {}

  ngOnInit(): void {
    // console.log('Start of init');
    // this.webSocketService.connect('ws://localhost:8080');
    // console.log('End of init');
  }

  ngOnDestroy(): void {
    // console.log('Start of close');
    // this.webSocketService.close();
    // console.log('End of close');
  }
}
