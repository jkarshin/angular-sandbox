import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { WebSocketService } from './service/websocket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.connect('ws://localhost:8080');
    // Dummy subscription to keep the connection alive:
    this.webSocketService.messages$.subscribe((message) => {});
  }

  ngOnDestroy(): void {
    this.webSocketService.close();
  }
}
