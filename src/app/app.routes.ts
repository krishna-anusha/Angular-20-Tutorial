import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { SignalEx } from './components/signal-ex/signal-ex';
import { Databinding } from './components/databinding/databinding';

import { AttDirective } from './components/att-directive/att-directive';

export const routes: Routes = [
    {
        path:'admin',
        component:Admin
    },
    {
        path:'control-flow',
        component:ControlFlow
    },
    {
        path:'signal-ex',
        component:SignalEx

    },
    {
        path:'databinding',
        component:Databinding

    },
    {
        path:'attdirective',
        component:AttDirective
    }

];
