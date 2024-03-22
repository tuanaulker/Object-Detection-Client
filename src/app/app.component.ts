import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'object-detection-client';
  products!: any[];


  ngOnInit() {
    this.products.push({code:'a', name: 'b', category: 'x', quantity: 'v' });
  }

}
