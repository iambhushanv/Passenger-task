import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passArr !: Array<Ipassenger>
  checkInArray !: Array<Ipassenger>
  constructor(
    private _passService : PassengerService
  ) { }

  ngOnInit(): void {
   this.fetchPassenger()
   this.getCheckInCount()
  }

  fetchPassenger(){
     this._passService.fetchPassenger()
    .subscribe({
      next : data => {
        this.passArr = data
      },
      error : err => {
        console.log(err);
        
      }
    })
  }

  getCheckInCount(){
    this.checkInArray = this.passArr.filter( p => {
      return p.checkedIn
    })
  }

  getRemoveFlag(flag : boolean){
    this.getCheckInCount()
  }

  trackByFun(index : number, pass : Ipassenger){
    return pass.id
  }

}
