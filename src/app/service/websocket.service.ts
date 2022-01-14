import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, Subject, switchAll, tap } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private socket$: WebSocketSubject<any>;
  /*
   * Calling class(es) can subscribe to this obeservable to listen for messages.
   *
   * It will be undefined before connect() is called.
   */
  public messages$: Observable<any>;

  /*
   * Establishes a new connection if one is not already established (even if
   * if the existing connection is for a different url!)
   *
   * Once a connection is closed, consumers will need to re-subscribe.
   */
  public connect(url: string): void {
    if (!this.socket$ || this.socket$.closed) {
      console.log(`Attempting to connect to: ${url}`);
      this.socket$ = new WebSocketSubject({
        url,
        openObserver: {
          next: () => {
            console.log(`Successfully connected to ${url}`);
          },
        },
        closeObserver: {
          next(closeEvent) {
            console.log(
              `WS connection closed; code: ${closeEvent.code} reason: ${closeEvent.reason}`
            );
          },
        },
      });
      this.messages$ = this.socket$.pipe(
        tap({
          error: (error) =>
            console.log(`Received error from websocket: ${error}`),
        })
      );
    }
  }

  public sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  public close() {
    this.socket$.complete();
  }
}
