import {Injectable} from '@angular/core';
import {Person} from '@models/vo/person';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class PersonService extends BaseCrudService<Person> {
	protected service = environment.webServiceUri + 'person';
}
