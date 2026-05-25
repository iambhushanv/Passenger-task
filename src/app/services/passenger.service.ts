import { Injectable } from '@angular/core';
import { Ipassenger, Ires } from '../models/passenger';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
   passengerArray: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 }
      ]
    },
    {
      id: 3,
      fullname: 'John Smith',
      checkedIn: true,
      checkInDate: 1491000000000,
      children: null
    },
    {
      id: 4,
      fullname: 'Priya Sharma',
      checkedIn: true,
      checkInDate: 1491500000000,
      children: [
        { name: 'Aryan', age: 9 },
        { name: 'Sneha', age: 5 }
      ]
    },
    {
      id: 5,
      fullname: 'Carlos Mendes',
      checkedIn: false,
      checkInDate: null,
      children: null
    },
    {
      id: 6,
      fullname: 'Aisha Khan',
      checkedIn: true,
      checkInDate: 1492000000000,
      children: [
        { name: 'Zara', age: 10 },
        { name: 'Omar', age: 6 },
        { name: 'Bilal', age: 3 }
      ]
    }
  ];

  constructor() { }

  fetchPassenger(): Observable<Ipassenger[]>{
    return of(this.passengerArray)
  }

  updatedPassenger(upadatedObj : Ipassenger): Observable<Ires<Ipassenger>>{
    let getIndex = this.passengerArray.findIndex(p => p.id === upadatedObj.id)
    this.passengerArray[getIndex]= upadatedObj
    return of({
      msg : `The Passenger with id ${upadatedObj.id} is upadated successfully !!!`,
      data : upadatedObj
    })
  }

  removePassenger(id: number): Observable<Ires<Ipassenger>>{
    let getIndex = this.passengerArray.findIndex( p => p.id === id)
    let removedPass = this.passengerArray.splice(getIndex, 1)
    return of({
      msg : `The Passenger with id ${id} is upadated successfully !!!`,
      data : removedPass[0]
    })
  }
}
