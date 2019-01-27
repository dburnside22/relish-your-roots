import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeSchoolComponent } from './home-school/home-school.component';
import { NonToxicComponent } from './non-toxic/non-toxic.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecipeBoxesComponent } from './recipe-boxes/recipe-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RecipesComponent,
    HomeSchoolComponent,
    NonToxicComponent,
    NavigationComponent,
    RecipeBoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
