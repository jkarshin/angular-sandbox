import { BehaviorSubject } from 'rxjs';

export class SharedDataService<T> {
  private state: BehaviorSubject<T>;

  constructor(initialValue: T) {
    this.state = new BehaviorSubject<T>(initialValue);
  }

  changeState(myChange: T) {
    this.state.next(myChange);
  }

  getState() {
    return this.state.asObservable();
  }
}
