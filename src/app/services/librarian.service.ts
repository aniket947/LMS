import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LibrarianService {

    constructor(private http: HttpClient) { }

    saveLibrarian(librarianobj: any): Observable<any> {
        return this.http.post('https://lmsapi-123-default-rtdb.firebaseio.com/user.json', librarianobj);
    }

    loadLibrarians(): Observable<any> {
        return this.http.get('https://lmsapi-123-default-rtdb.firebaseio.com/user.json');
    }

    deleteLibrarian(id: any): Observable<any> {
        return this.http.delete('https://lmsapi-123-default-rtdb.firebaseio.com/user/' + id + '.json');
    }

    getlibrarian(id: any): Observable<any> {
        return this.http.get('https://lmsapi-123-default-rtdb.firebaseio.com/user/' + id + '.json');
    }

    updateLibrarian(librarianobj: any): Observable<any> {
        return this.http.patch('https://lmsapi-123-default-rtdb.firebaseio.com/user.json', librarianobj);
    }
}   