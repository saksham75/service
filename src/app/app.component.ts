import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactComponent } from './components/react/react.component';
import { AngularComponent } from './components/angular/angular.component';
import { AdduserComponent } from './components/adduser/adduser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactComponent, AngularComponent,AdduserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service-demo';
}
