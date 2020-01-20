import {Component, EventEmitter, Input, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  appitems = [
    {
      label: 'E-pod Sante',
      imageIcon: 'https://www.jobillico.com/medias/logo-entreprise/0/0/exp_logo_7966_fr_2016_09_02_14_49_44.png',
      link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
      externalRedirect: true
    },
    {
      label: 'GESTION DES UTILISATEURS',
      icon: 'supervised_user_circle',
      items: [
        {
          label: 'AJOUTER UN UTILISATEUR',
          link: 'register',
          icon: 'add_circle_outline'
        },
        {
          label: 'LISTE DES UTILISATEURS',
          link: 'register',
          icon: 'filter_list'
        }
      ]
    },
    {
      label: 'PARAMETRES D`APPRENTISSAGE  ',
      icon: '',
      items: [
        {
          label: 'AJOUT D`uN MODELE ',
          link: '/',
          icon: '',
          activeIcon: 'favorite',
          disabled: false,
        },
        {
          label: 'APPRENTISSAGE',
          link: '/item-2-2',
          icon: '',
          activeIcon: 'favorite',
          navigationExtras: {
            queryParams: { order: 'popular', filter: 'new' },
          }
        }
      ]
    },

  ];
  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
   // listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `rgb(8, 54, 71)`,
   // backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `blue`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false
  };
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



  constructor(private breakpointObserver: BreakpointObserver) {


  }



}
