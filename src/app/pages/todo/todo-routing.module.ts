import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { NgModule } from "@angular/core";
import { TodoService } from "../../services/todo.service";

const routes: Routes = [
    { path: '', component: TodoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [TodoService],
    exports: [RouterModule]
})
export class TodoRoutingModule { } 