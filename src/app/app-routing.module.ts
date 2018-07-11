import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
   {
        path: 'eligibility', loadChildren: 'src/app/eligibility/eligibility.module#EligibilityModule'
    },
    {
        path: 'error', loadChildren: 'src/app/error/error.module#ErrorModule'
    },
    {
        path: '**', redirectTo: 'eligibility', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents =
    [
    ];
