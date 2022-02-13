import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/utils/data/repository/repository.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() feedItem: any;

  user: any;

  constructor(
    private repoSvc: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repoSvc.GetUser(this.feedItem.userId).subscribe((res: any) => this.user = res);
  }

}
