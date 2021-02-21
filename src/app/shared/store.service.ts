import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  static posts = [];
  static firstLoad = true;

  constructor() { }

  getAllPosts() {
    return StoreService.posts;
  }

  getSomePosts(start: number, end: number) {
    return StoreService.posts.slice(start, end);
  }

  addPosts(newPosts) {
    StoreService.posts.push(...newPosts);
  }

  getFirstLoadStatus() {
    return StoreService.firstLoad;
  }

  setFirstLoadToFalse() {
    StoreService.firstLoad = false;
  }


}
