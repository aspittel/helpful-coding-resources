import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
 
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators'

import { Resource } from './resource'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class ResourcesService {
  private resourcesUrl = 'https://helpful-coding-resources.herokuapp.com/resources'

  constructor (
    private http: HttpClient,
  ) {}

  getResources (): Observable<Resource[]>{
    return this.http.get<Resource[]>(this.resourcesUrl)
               .pipe(
                  tap(resources => console.log('done! 😀'))
               )
  }

}
