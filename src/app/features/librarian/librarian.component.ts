import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibrarianService } from 'src/app/services/librarian.service';



/** Constants used to fill up our data base. */

@Component({
  selector: 'lms-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})

export class LibrarianComponent implements AfterViewInit {
  displayedColumns: string[] = ['empId', 'name', 'joiningDate', 'contactNo', 'userType'];
  libData: MatTableDataSource<any>;
  empId: any = [];
  name: any = [];
  joiningDate: any = [];
  contactNo: any = [];
  userType: any = [];
  // librarianIDMsg = '';
  // librarianNameMsg = '';
  // librarianJoiningDateMsg = '';
  // librarianMobNumMsg = '';




  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private librarianService: LibrarianService, private _snackBar: MatSnackBar) {
    this.libData = new MatTableDataSource([{
    }]);
  }
  ngOnInit() {
    this.bindLibrarians();
  }

  ngAfterViewInit(): void {
    this.libData!.paginator = this.paginator;
    this.libData!.sort = this.sort;
  }
  bindLibrarians() {
    this.librarianService.loadLibrarian().subscribe(res => {
      console.log(res);
      let librarianData: any = [];
      Object.entries(res).forEach((key, value) => {
        librarianData.push(key[1]);
      })
      this.libData = librarianData;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.libData!.filter = filterValue.trim().toLowerCase();

    if (this.libData!.paginator) {
      this.libData!.paginator.firstPage();
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
    let data = {
      empId: this.empId,
      name: this.name,
      joiningDate: this.joiningDate,
      contactNo: this.contactNo,
      userType: 'Librarian'
    };
    this.librarianService.saveLibrarian(data).subscribe(res => {
      console.log(res);
      this._snackBar.open('Data Saved', '', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        duration: 3000
      });
      this.bindLibrarians();
    })
  }
}
  // clearMsg() {
  //   this.librarianIDMsg = '';
  //   this.librarianNameMsg = '';
  //   this.librarianJoiningDateMsg = '';
  //   this.librarianMobNumMsg = '';
  // }

