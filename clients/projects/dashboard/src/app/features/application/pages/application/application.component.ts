import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dmo-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {

}
