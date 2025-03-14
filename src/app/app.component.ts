import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  images = [
    'http://adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'http://adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
    'http://adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
    'http://adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg'
  ];

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
