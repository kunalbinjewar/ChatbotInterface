import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { BotComponent } from './bot/bot.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'chatbot', component: BotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
