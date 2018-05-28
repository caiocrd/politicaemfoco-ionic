import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { Content } from 'ionic-angular';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import { IAuthorState, AppState } from './../../reducers';
/*
  Generated class for the PostCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'post-card',
  templateUrl: 'post-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {
  @Input() post: any;
  @Input() type: string;
  @Input() content: Content;
  @Input() onClick: (e, item, sanitise) => void;
  categories: Array<any>;
  tags: Array<any>;
  author$: Observable<IAuthorState>;
  featured_video: SafeHtml;
  
  constructor(
    private store: Store<AppState>, public sanitise: DomSanitizer
  ) { }

  ngOnInit() {
    const terms = this.post._embedded['https://api.w.org/term'] || this.post._embedded['wp:term'];
    this.categories = terms && terms[0];
    this.tags = terms && terms[1];
    this.author$ = this.store.select(state => state.items.users && state.items.users[this.post.author]);
    
    if(this.post  && this.post.metadata._featured_video){
      this.featured_video =  this.sanitise.bypassSecurityTrustHtml(this.post.metadata._featured_video[0].slice(34, this.post.metadata._featured_video[0].length - 3).replace("560", " 100%").replace("315", "200"));
    }
  }
}
