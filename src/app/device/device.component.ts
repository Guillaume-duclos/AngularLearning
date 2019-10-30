import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})

export class DeviceComponent implements OnInit {

  // Propriétés personnalisés
  @Input() deviceName: string;
  @Input() deviceState: string;
  @Input() deviceIndex: number;
  @Input() id: number;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
  }

  getStatus = () =>  {
    return this.deviceState;
  }

  getColor = () => {
    if (this.deviceState === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  switchOneOn = () => {
    this.deviceService.switchOnOne(this.deviceIndex);
  }

  switchOneOff = () => {
    this.deviceService.switchOffOne(this.deviceIndex);
  }
}
