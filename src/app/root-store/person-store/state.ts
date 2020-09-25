import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Person} from '@models/vo/person';

export const adapter: EntityCrudAdapter<Person> = createCrudEntityAdapter<Person>({
	selectId: model => Person.selectId(model),
});

export interface State extends EntityCrudState<Person> {
};

export const initialState: State = adapter.getInitialCrudState();
