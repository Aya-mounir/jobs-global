import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../global/base.service';
import { ApiUrls } from '../../config/api-urls';

@Injectable({
  providedIn: 'root',
})
export class JobsService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  // get All Jobs
  getAllJobs(perPage: any) {
    return this.get(
      ApiUrls.jobs + '?pagination_type=paginate&amp;per_page=' + perPage
    );
  }
}
