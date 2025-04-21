import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessService {

  constructor() { }
  ConnectRemoteServer(){
    console.log("Connected to the Database");
  }
}

