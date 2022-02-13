import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/utils/data/repository/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  feeds: any[] = [];

  constructor(private repoSvc: RepositoryService) { }

  ngOnInit(): void {
    this.repoSvc.GetPosts().subscribe((res: any) => {
      this.feeds = res;
    });
  }

}
