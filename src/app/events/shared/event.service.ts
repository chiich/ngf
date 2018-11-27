import { Injectable } from '@angular/core'

@Injectable()
export class EventService {
  getEvents() {
    return EVENTS
  }
}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '8:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angualrconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: [
      {
        id: 1,
        name: "Usng Angular 4 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 2,
        level: "Intermediate",
        abstract: `Learn all about the new pipes in Angular 4, both
        how to write them and how to get the new AI CLI to write
        them for you. Given by the famous PRD, president of Angular
        University (formerly Oxford University)
        `,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "Getting the most out of your dev team",
        presenter: "Jeff Gross",
        duration: 4,
        level: "Intermediate",
        abstract: ``,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']

      },
      {
        id: 3,
        name: "Angular 4 and Firebase",
        presenter: "David East",
        duration: 3,
        level: "Beginner",
        abstract: ``,
        voters: ['bradgreen', 'igorminar']

      }
    ]
  },
  {
    id: 2,
    name: 'Angular DisConnect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 799.99,
    imageUrl: '/assets/images/angualrconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: [
      {
        id: 1,
        name: "Usng Angular 4 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 2,
        level: "Intermediate",
        abstract: `Learn all about the new pipes in Angular 4, both
        how to write them and how to get the new AI CLI to write
        them for you. Given by the famous PRD, president of Angular
        University (formerly Oxford University)
        `,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "Getting the most out of your dev team",
        presenter: "Jeff Gross",
        duration: 4,
        level: "Intermediate",
        abstract: ``,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']

      },
      {
        id: 3,
        name: "Angular 4 and Firebase",
        presenter: "David East",
        duration: 3,
        level: "Beginner",
        abstract: ``,
        voters: ['bradgreen', 'igorminar']

      }
    ]
  },
  {
    id: 3,
    name: 'Angular InterConnect',
    date: '9/26/2036',
    time: '9:00 am',
    price: 1049.99,
    imageUrl: '/assets/images/angualrconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: [
      {
        id: 1,
        name: "Usng Angular 4 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 2,
        level: "Intermediate",
        abstract: `Learn all about the new pipes in Angular 4, both
        how to write them and how to get the new AI CLI to write
        them for you. Given by the famous PRD, president of Angular
        University (formerly Oxford University)
        `,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "Getting the most out of your dev team",
        presenter: "Jeff Gross",
        duration: 4,
        level: "Intermediate",
        abstract: ``,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']

      },
      {
        id: 3,
        name: "Angular 4 and Firebase",
        presenter: "David East",
        duration: 3,
        level: "Beginner",
        abstract: ``,
        voters: ['bradgreen', 'igorminar']

      }
    ]
  }
]