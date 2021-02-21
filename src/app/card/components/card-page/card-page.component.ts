import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/store.service';
import { postsUrl } from 'src/environments/environment';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {
  posts: any[];
  postsNumberToAdd: number = 20;
  postsStep: number = 1;
  showSpinner: boolean = false;
  postsEnd: boolean = false;
  scrolly: boolean = false;

  constructor(private http: HttpClient, private store: StoreService) { }

  ngOnInit(): void {
    this.loadInitPosts();
  }

  loadInitPosts() {
    this.showSpinner = true;
    this.http.get(postsUrl)
      .subscribe(posts => {
        if (this.store.getFirstLoadStatus()) {
          this.store.addPosts(posts);
          this.store.setFirstLoadToFalse();
        }
        this.posts = this.store.getSomePosts(0, this.postsNumberToAdd);
        this.showSpinner = false;
      })
  }

  onScroll() {
    if (!this.scrolly && !this.postsEnd) {
      this.showSpinner = true;
      this.scrolly = true;
      this.loadNextPosts();
    }
  }

  loadNextPosts() {
    if(this.postsNumberToAdd * (this.postsStep + 1) >= this.store.getAllPosts().length - 1) {
      this.postsEnd = true;
    }

    this.showSpinner = true;
    this.posts = this.posts.concat(this.store.getSomePosts(this.postsNumberToAdd * this.postsStep, this.postsNumberToAdd * ++this.postsStep));
    console.log(this.posts, this.postsStep)
    this.scrolly = false;
    this.showSpinner = false;
  }

}
