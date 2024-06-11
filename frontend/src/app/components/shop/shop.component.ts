import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  nombre: string ='';
  ngOnInit() {
    const token: any = localStorage.getItem('token');
    console.log('token: ', token);
    const decoded = jwtHelperService.decodeToken(token);
    console.log('decoded: ', decoded);
    this.nombre = decoded.name;
  }
}
