import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Articles } from '../../pages/home/services/articles';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input({required: true}) content: string = '';
  @Input({required: true}) urlToImage: string = '';
  @Input({required: true}) title: string = '';
  @Input({required: true}) description: string = '';
}
