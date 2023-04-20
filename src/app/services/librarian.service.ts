import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LibrarianService {

    constructor(private http: HttpClient) { }

    saveLibrarian(librarianobj:any):Observable<any> {
        return this.http.post('https://lmsapi-123-default-rtdb.firebaseio.com/user.json',librarianobj);
    }
    loadLibrarian():Observable<any> {
        return this.http.get('https://lmsapi-123-default-rtdb.firebaseio.com/user.json');
    }
}   