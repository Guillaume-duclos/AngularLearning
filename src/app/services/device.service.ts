export class DeviceService {

  devices = [
    {
      id: 1,
      name: 'Télévision',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Four',
      status: 'allumé'
    }
  ];

  getDeviceById = (id: number) => {
    const device = this.devices.find((deviceObject) => {
      return deviceObject.id === id;
    });
    return device;
  }

  switchOndevice = () => {
    for (let device of this.devices) {
      device.status = 'allumé';
    }
  }

  switchOffdevice = () => {
    for (let device of this.devices) {
      device.status = 'éteint';
    }
  }

  switchOnOne = (index: number) => {
    this.devices[index].status = 'allumé';
  }

  switchOffOne = (index: number) => {
    this.devices[index].status = 'éteint';
  }
}
