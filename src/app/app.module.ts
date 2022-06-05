import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { InputClearable } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { LoginComponent } from './login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main/main.component';
import { RegisterComponent } from './register/register.component';
import { ReaderComponent } from './reader/reader.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritosComponent } from './favoritos/favoritos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomSheetComponent,
    InputClearable,
    SearchPipe,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    ReaderComponent,
    ProfileDashboardComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    LayoutModule,
    InfiniteScrollModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
