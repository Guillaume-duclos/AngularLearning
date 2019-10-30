import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    }
  )

  devices: any[];

  // Le constructeur est d'abord appellé
  constructor(private deviceService: DeviceService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 1000);
  }

  // Puis la fonction ngOnInit est ensuite appellé à son tour
  ngOnInit(): void {
    this.devices = this.deviceService.devices;
  }

  onOn = () => {
    this.deviceService.switchOndevice();
  }

  onOff = () => {
    this.deviceService.switchOffdevice();
  }

}
