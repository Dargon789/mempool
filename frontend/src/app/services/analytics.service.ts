import { Injectable } from '@angular/core';
import { inject } from '@vercel/analytics';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {
    // Initialize Vercel Analytics with environment-aware configuration
    inject({
      mode: environment.production ? 'production' : 'development',
    });
  }
}
