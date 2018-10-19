import { Component, Injectable, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  
  openDialog(): void {
    const dialogRef = this.dialog.open(EncuestaComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'encuesta.component.html',
})
export class EncuestaComponent {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EncuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  enviar() {
    this.dialogRef.close();

    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'confirmacion.component.html',
})
export class ConfirmacionComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}