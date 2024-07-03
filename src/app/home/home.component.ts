import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    sidebar = false;

    isTextareaVisible: boolean = false; // Controla a visibilidade do textarea

    toggleTextarea() {
      this.isTextareaVisible = !this.isTextareaVisible;
    }
  }
