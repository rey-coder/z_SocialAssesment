import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfoModel } from 'src/app/utils/data/device-detector.service';
import { RepositoryService } from 'src/app/utils/data/repository/repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  me: any;
  deviceInfo?: DeviceInfoModel;
  showSideMenu: boolean = false;

  constructor(
    private repoSvc: RepositoryService,
    private deviceSvc: DeviceDetectorService
  ) {
    deviceSvc.deviceSubj.subscribe((device: any) => this.deviceInfo = device);
  }

  ngOnInit(): void {
    this.repoSvc.GetUser(2).subscribe((res: any) => {
      this.me = res;
    });
  }

  ToggleSideMenu() {
    console.log('Toggle side menu');
    this.showSideMenu = !this.showSideMenu;
  }

}
