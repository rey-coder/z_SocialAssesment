import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RepositoryService } from 'src/app/utils/data/repository/repository.service';

@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss']
})
export class LeftAsideComponent implements OnInit {

  friendList: any [] = [];

  @Output() ProfileClicked = new EventEmitter();

  constructor(private repoSvc: RepositoryService) { }

  ngOnInit(): void {
    console.info('Initializing friends list');
    this.repoSvc.GetFriends(2).subscribe((res: any) => {
      this.friendList = res as unknown as Array<any>;
    });
  }

  ProfileTouched() {
    this.ProfileClicked.emit();
  }

}
