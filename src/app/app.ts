import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import Admin from './components/admin/admin';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { Databinding } from './components/databinding/databinding';
import { FormsModule } from '@angular/forms';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from './components/control-flow/control-flow';



@Component({
  selector: 'app-root',
  imports: [ RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20basic');
}
