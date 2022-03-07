import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
  
})
export class DashBoardComponent implements OnInit {
  addressDetails: any;
  addressCount:any;
  
  orderHeader: any = 'firstName';
  reverse:boolean = false;
   

  constructor(public dialog: MatDialog,  private httpService: ServiceService, private router: Router) { }

  ngOnInit(): void {
   

  this.loadData(); 
  
  }
 
  loadData(): void {

    this.httpService.getAllAddressData().subscribe(response=>{
      
      this.addressDetails = response;
      console.log(this.addressDetails);

    });
    
  }

  
  
  sort(headerName: any){
    this.orderHeader = headerName;
    this.reverse = !this.reverse;
  }

  delete(id: number) {
    this.httpService.deleteAddress(id).subscribe(response=> {
      console.log(response);
      this.ngOnInit();      
    });
  }

  update(address: any) {
    console.log(address);
    const dialogRef = this.dialog.open(AddAddressComponent, {
      data:address
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
    
  }
}
