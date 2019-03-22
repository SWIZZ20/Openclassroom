import { Injectable } from '@angular/core';

@Injectable()
export class ServicesProvider {

  bookList=
  [
    {
      name:'Book1:La fable de la fontaine',
      description:
      [
        {
          title:'La fable de la fontaine',
          genre:'theâtrale',
          totalPage:200
        }
      ],
      isLend:false
    },
    {
      name:'Book2:Conte et legende',
      description:
      [
        {
          title:'Conte et legende',
          genre:'Conte',
          totalPage:200
        }
      ],
      isLend:false
    },
    {
      name:'Book3:Les gens de la foret',
      description:
      [
        {
          title:'Les gens de la foret',
          genre:'Conte',
          totalPage:200
        }
      ],
      isLend:false
    },
  ];

  cdList=
  [
    {
      name:'CD1:Melancolie',
      description:
      [
        {
          title:'Melancolie',
          genre:'Slam',
          nbChanson:200
        }
      ],
      isLend:false
    },
    {
      name:'CD2:Négritude',
      description:
      [
        {
          title:'Négritude',
          genre:'Rap',
          nbChanson:200
        }
      ],
      isLend:false
    },
    {
      name:'CD3:Êternel insatisfait',
      description:
      [
        {
          title:'Êternel insatisfait',
          genre:'Rap',
          nbChanson:200
        }
      ],
      isLend:false
    }
  ];

  constructor() {
    
  }

  Lend()
  {

  }

  Back()
  {
    
  }

}
