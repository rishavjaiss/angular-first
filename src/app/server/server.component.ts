import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverID: string;
  serverStatus: string = '';
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverID = (Math.random() * 10).toFixed(0);
  }
}
