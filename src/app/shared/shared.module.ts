import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        NavBarComponent,
        SpinnerComponent
    ],
    exports: [
        NavBarComponent,
        SpinnerComponent,
        CommonModule
    ]
})
export class SharedModule {}