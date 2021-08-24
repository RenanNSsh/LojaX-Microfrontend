import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  userEventBus: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {
    (window as any).UserEventBus = this.userEventBus;
    this.listenUserChanges();
  }

  emitUser(user: User) {
    this.userEventBus?.next(user);
  }

  listenUserChanges() {
    this.userEventBus.subscribe((user) => {
      console.info(user, 'usuario no app "pai"')
    });
  }

}
