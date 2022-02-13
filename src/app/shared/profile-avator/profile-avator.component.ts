import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-avator',
  templateUrl: './profile-avator.component.html',
  styleUrls: ['./profile-avator.component.scss']
})
export class ProfileAvatorComponent implements OnInit {

  @Input() person: any;
  @Input() showUsername = false;
  @Input() showDisplayname = true;
  @Input() customStyle: string = '';

  @Output() ProfileClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ProfileTouched() {
    console.log('profile clicked');
    this.ProfileClicked.emit();
  }

}
