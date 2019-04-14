import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  dataList: any;
  public nameList: any[];

  constructor(public http: HttpClient) {
    this.dataList = [];

    for (let i = 0; i < 50; i++) {
      this.dataList.push(this.getFakeuser());
    }
  }

  getFakeuser() {
    const obj: any = {
      '_id': this.dataList.length + 1,
      'index': this.dataList.length + 1,
      'guid': 'e44c55dc-d78b-4e40-8b49-f8caa7b1b4af',
      'isActive': true,
      'balance': '$3,647.19',
      'picture': '',
      'age': 36,
      'eyeColor': 'brown',
      'name': {
        'first': 'Maxine',
        'last': 'Atkinson'
      },
      'company': 'BLUEGRAIN',
      'email': 'maxine.atkinson@bluegrain.io',
      'phone': '+1 (845) 485-3676',
      'address': '441 Hendrix Street, Fairmount, Puerto Rico, 6385',
      // tslint:disable-next-line:max-line-length
      'about': 'Deserunt velit eu irure in consectetur dolor anim dolore excepteur culpa. Nulla Lorem consectetur amet sit sunt do culpa amet ut voluptate pariatur cupidatat. Incididunt consectetur esse adipisicing laboris ex pariatur proident laboris. Proident velit non non incididunt officia. Eu esse qui ad excepteur est non est minim exercitation Lorem excepteur sit nostrud veniam. Dolor elit do eiusmod esse Lorem aliquip.',
      'registered': 'Friday, May 9, 2014 6:19 PM',
      'latitude': '64.629032',
      'longitude': '13.064858',
      'friends': [
        {
          'id': 0,
          'name': 'Barber Herrera'
        },
        {
          'id': 1,
          'name': 'Marjorie Kemp'
        },
        {
          'id': 2,
          'name': 'Esther Goff'
        }
      ],
      'greeting': 'Hello, Maxine! You have 5 unread messages.',
      'favoriteFruit': 'banana'
    };

    obj.picture = 'http://i.pravatar.cc/100?img=' + this.getAvatarImg();
    obj.loaded = false;

    return obj;
  }

  getAvatarImg() {
    return Math.floor(Math.random() * Math.floor(70));
  }

  public imageLoaded(indx: number) {
    setTimeout(() => {
      this.dataList[indx].loaded = true;
    }, 1000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}

export interface Config {
  fname: string;
  lname: string;
}
