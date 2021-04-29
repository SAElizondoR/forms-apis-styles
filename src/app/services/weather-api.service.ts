import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * API: https://www.weatherapi.com
 */

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private cities = ['Monterrey', 'Saltillo', 'Guadalajara', 'Queretaro', 'Manzanillo', 'Cancun',
  'Merida', 'Tijuana', 'Mazatlan', 'Acapulco'];
  private readonly apikey = 'a0665454d51442db8df11207212804';

  constructor(private http: HttpClient) { }

  getWeatherInfo() {
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    const url = `http://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${this.cities[randomIndex]}&aqi=no`;
    return this.http.get(url);
  }
}
