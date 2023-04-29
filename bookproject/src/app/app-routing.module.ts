import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BooklistComponent } from './components/booklist/booklist.component';

const routes: Routes = [
 {path:'', pathMatch:'full', redirectTo:'add-book'},
 {path:'book-list',component:BooklistComponent },
 {path:'add-book',component:AddbookComponent},
 {path:'edit-book/:id',component:BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
