import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CrudAppComponent } from '../app/crud.component';

beforeEachProviders(() => [CrudAppComponent]);

describe('App: Crud', () => {
  it('should create the app',
      inject([CrudAppComponent], (app: CrudAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'crud works!\'',
      inject([CrudAppComponent], (app: CrudAppComponent) => {
    expect(app.title).toEqual('crud works!');
  }));
});
