import { TestBed } from '@angular/core/testing';

import { EndpointSimulateInterceptor } from './endpoint-simulate.interceptor';

describe('EndpointSimulateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EndpointSimulateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EndpointSimulateInterceptor = TestBed.inject(EndpointSimulateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
