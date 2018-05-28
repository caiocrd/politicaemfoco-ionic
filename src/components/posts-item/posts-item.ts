import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemParentComponent } from './../ItemParent';
import { IItemComponent } from './../interfaces';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
/*
  Generated class for the PostsItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'posts-item',
  templateUrl: 'posts-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsItemComponent extends ItemParentComponent implements IItemComponent {

  constructor(
    public navCtrl: NavController,
    public cdRef: ChangeDetectorRef,
    public sanitise: DomSanitizer,
  ) {
    super(navCtrl, cdRef, sanitise);
  }
}
