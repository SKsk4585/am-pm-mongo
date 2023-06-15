import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { MeinComponent } from './components/layout-area/mein/mein.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ListComponent } from './components/product-area/list/list.component';
import { AddComponent } from './components/product-area/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  
    LayoutComponent,
            HeaderComponent,
            FooterComponent,
            MenuComponent,
            MeinComponent,
            PageNotFoundComponent,
            ListComponent,
            AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]

})
export class AppModule { }
