import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule,RouterModule],
  selector: 'app-main-app-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {}
