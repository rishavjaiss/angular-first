import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverName = '';
  username = '';
  serverCreated = false;
  showDisplay = false;
  serverCreationStatus = 'Server was not created! :(';
  servers = ['Test Server', 'Test Server 2'];
  logs = [];
  onServerCreation() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! :) Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  toggleDetails() {
    this.showDisplay = !this.showDisplay;
    this.logs.push(this.logs.length + 1);
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {}
}
