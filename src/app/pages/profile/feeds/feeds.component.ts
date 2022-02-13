import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/utils/data/repository/repository.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feeds: any[] = [];
  username: string = '';

  constructor(
    private repoSvc: RepositoryService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((prms: any) => {
      this.username = prms.username;
      if ('key' in prms) {
        this.repoSvc.GetPosts(prms.key).subscribe((res: any) => {
          this.feeds = res;
        });
      }
    });
    
  }

}
