import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



/** Constants used to fill up our data base. */

@Component({
  selector: 'lms-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})

export class LibrarianComponent {
  displayedColumns: string[] = ['empId', 'name', 'joiningDate', 'contactNo'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor() {
    this.dataSource = new MatTableDataSource([{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1002',
      name: 'Aniket',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1003',
      name: 'Anup',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1004',
      name: 'Ajit',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1002',
      name: 'Aniket',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1003',
      name: 'Anup',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1002',
      name: 'Aniket',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1003',
      name: 'Anup',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1002',
      name: 'Aniket',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1003',
      name: 'Anup',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1002',
      name: 'Aniket',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1003',
      name: 'Anup',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1001',
      name: 'Piyush',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1002',
      name: 'Aniket',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },{
      empId: '1003',
      name: 'Anup',
      joiningDate: '07/04/2023',
      contactNo: 9922478965
    },]);

  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addlibrarian() {


  }
}
