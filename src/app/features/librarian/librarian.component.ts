import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



/** Constants used to fill up our data base. */

@Component({
  selector: 'lms-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})

export class LibrarianComponent implements AfterViewInit {
  displayedColumns: string[] = ['empId', 'name', 'joiningDate', 'contactNo'];
  dataSource: MatTableDataSource<any>;
  empId: any=[];
  name: any=[];
  joiningDate: any=[];
  contactNo: any=[];
  // librarianIDMsg = '';
  // librarianNameMsg = '';
  // librarianJoiningDateMsg = '';
  // librarianMobNumMsg = '';
  
  


  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor() {

    // this.dataSource = new MatTableDataSource([{
    //   ID: this.empId, name: this.name,
    //   date: this.joiningDate, mobNum: this.contactNo
    // }])
    this.dataSource = new MatTableDataSource([{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    }]);
  }

  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator;
    this.dataSource!.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }
  // validationEntry() {
  //   if (this.empId === '' || this.empId === undefined) {

  //     this.librarianIDMsg = 'Enter ID';
  //     return;
  //   }
  //   if (this.name === '' || this.name === undefined) {

  //     this.librarianNameMsg = 'Enter Name';
  //     return;
  //   }
  //   if (this.joiningDate === '' || this.joiningDate === undefined) {
  //     //alert('Enter Name')
  //     this.librarianJoiningDateMsg = 'Joining Date';
  //     return;
  //   }
  //   if (this.contactNo === '' || this.contactNo === undefined) {
  //     //alert('Enter Name')
  //     this.librarianMobNumMsg = 'Enter Mobile No.'
  //     return false;
  //   }
  //   return true;
  // }
  addlibrarian() {
      let a = {
      empId: this.empId, name: this.name,
      joiningDate: this.joiningDate, contactNo: this.contactNo
    }
    this.dataSource.data.push(a)
    // this.row.push(this.dataSource);
  
    // this.dataSource = new MatTableDataSource([a])
    // let librarianarray = [];
    // librarianarray = this.dataSource;

    // librarianarray.push(a)
    // this.clearMsg();
    // let validationform = this.validationEntry();
    // if (validationform == true) {
    //   this.studentArray.push(this.dataSource);

  }



}
  // clearMsg() {
  //   this.librarianIDMsg = '';
  //   this.librarianNameMsg = '';
  //   this.librarianJoiningDateMsg = '';
  //   this.librarianMobNumMsg = '';
  // }

