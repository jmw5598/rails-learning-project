import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dmo-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {}
