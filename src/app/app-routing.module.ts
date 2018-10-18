import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', component: home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule {}
