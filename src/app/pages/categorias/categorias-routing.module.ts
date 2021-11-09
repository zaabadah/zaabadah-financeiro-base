import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

const routes: Routes = [
  { path: '',         component: ListaCategoriaComponent },
  { path: 'new',      component: FormCategoriaComponent },
  { path: ':id/edit', component: FormCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
