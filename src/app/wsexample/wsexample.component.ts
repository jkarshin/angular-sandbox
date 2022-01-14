import { Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../service/SharedDataService';
import { WebSocketService } from '../service/websocket.service';

@Injectable({ providedIn: 'root' })
export class MessageService extends SharedDataService<string> {
  constructor() {
    super('');
  }
}

@Component({
  selector: 'app-wsexample',
  templateUrl: './wsexample.component.html',
  styleUrls: ['./wsexample.component.css'],
})
export class WSExampleComponent implements OnInit {
  messages = '';
  subscriptions: Array<Subscription> = [];

  constructor(
    private webSocketService: WebSocketService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.messageService
        .getState()
        .subscribe((newMessages) => (this.messages = newMessages))
    );

    this.subscriptions.push(
      this.webSocketService.messages$.subscribe((message) => {
        console.log(`Received: ${message}`);
        this.updateMessages(this.messages + `Received message: ${message}\n`);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClick() {
    let message = 'Ping!';
    this.updateMessages(this.messages + `Sending message: ${message}\n`);
    this.webSocketService.sendMessage(message);
  }

  private updateMessages(newMessages: string) {
    this.messageService.changeState(newMessages);
  }
}
