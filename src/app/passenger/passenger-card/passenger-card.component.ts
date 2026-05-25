import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ipassenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { config } from 'rxjs';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  isInEditMode : boolean = false
  @ViewChild('fullName') fullName !: ElementRef
  @Input() passObj !: Ipassenger
  @Output() emitCheckedInflag : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(
    private _passService : PassengerService,
    private _snackBar : SnackBarService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onUpdate(){
    this.passObj.fullname = this.fullName.nativeElement.value
    console.log(this.passObj);
    this._passService.updatedPassenger(this.passObj)
    .subscribe({
      next : res => {
        this._snackBar.openSnackBar(res.msg)
        this.isInEditMode = false
      },
      error : err => {
         this._snackBar.openSnackBar(err.msg)
      }
    })
   
  }

  onRemove(id : number){

    let config = new MatDialogConfig()
    config.width = '350px'
    config.disableClose = true
    config.data = `Are you sure, you want to remove the passenger with id ${id} ?`
    let matR = this._matDialog.open(GetConfirmComponent, config)
    matR.afterClosed().subscribe(confirm => {
      if(confirm){
        this._passService.removePassenger(id)
        .subscribe({
          next : res => {
              this._snackBar.openSnackBar(res.msg)
              if(this.passObj.checkedIn){
                this.emitCheckedInflag.emit(true)
              }
          },
          error : err => {
            this._snackBar.openSnackBar(err.msg)
          }
        })
      }
    })
  }

}
