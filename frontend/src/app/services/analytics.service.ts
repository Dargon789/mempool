import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { inject as injectAnalytics } from '@vercel/analytics';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Vercel Analytics with environment-aware configuration
      injectAnalytics({
        mode: environment.production ? 'production' : 'development',
      });
    }
  }
}
