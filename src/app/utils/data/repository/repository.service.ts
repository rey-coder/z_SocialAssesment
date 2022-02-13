import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as users from './users.json';
import * as posts from './posts.json';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() {
    
  }

  GetFriends(userId?: number): Observable<any[]> {
    let userList: any[] = (users as any).default;

    if (userId) {
      console.log(`Get friend for user ${userId}`);
      userList = userList.map((x) => {
        if (x.id != userId) 
          return x;
      });
    }

    return of(userList);
  }

  GetPosts(userId?: number): Observable<any[]> {
    let postList: any[] = (posts as any).default;

    if (userId) {
      console.info(`Get posts for user ${userId}`);
      postList = postList.filter((x) => x.userId == userId);
    } else {
      console.info(`Get all posts`);
      postList = postList
      .map(value => ({ value, key: Math.random() }))
      .sort((a, b) => a.key - b.key)
      .map(({ value }) => value)
    }
    

    return of(postList);
  }

  GetUser(userId: number): Observable<any> {
    let userList: any[] = (users as any).default;
    return of(userList.find(x => x.id == userId)); 
  }
}
