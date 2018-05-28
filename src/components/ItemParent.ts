import { NavController } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';
import { IItemComponent } from './interfaces';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

export class ItemParentComponent implements IItemComponent {
    type: string;
    options: any;
    _item: any;
    featured_video: SafeHtml;
    constructor(
        public navCtrl: NavController,
        public cdRef: ChangeDetectorRef,
        public sanitise: DomSanitizer,
    ) {
        console.log('o sanitise no log eh ' + this.sanitise);
    }
    // http://stackoverflow.com/questions/41797590/angular-2-onpush-change-detection-for-dynamic-components
    set item(val: any) { this._item = val; this.cdRef.markForCheck(); }
    get item() { 
        //console.log('o item no itemParent eh ' + this._item);  
        if(this._item && this._item.metadata._featured_video && this._item.metadata._featured_video[0]){
           console.log(this.sanitise);
           console.log(this._item.metadata._featured_video[0]);
           this._item.metadata._featured_video =  this.sanitise.bypassSecurityTrustHtml(this._item.metadata._featured_video[0].slice(34, this._item.metadata._featured_video[0].length - 3).replace("560", " 100%").replace("315", "200"));
          }
        return this._item;
    
    
    };
}