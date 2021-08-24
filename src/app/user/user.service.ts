import { Injectable } from '@angular/core';
import { EventBusService } from '../event-bus/event-bus.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private eventBusService: EventBusService) { }

  login(user: User){
    this.eventBusService.emitUser(user);
  }
}
