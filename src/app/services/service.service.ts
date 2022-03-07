import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  addAddressData(body: any): Observable<any> {
    console.log(body);
    console.log(environment.baseUrl);
    return this.httpClient.post(environment.baseUrl+"/register", body);
  }

  getAllAddressData(): Observable<any> {
    let addresslist= this.httpClient.get(environment.baseUrl + "/get");
    return addresslist;
  }

  deleteAddress(id : any): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + "/delete/"+id);
  }

  updateAddress(id : any, body:any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + "/update/"+id, body);
  }


}




