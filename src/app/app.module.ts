import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { HeroComponent } from './sections/hero/hero.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { BlogsLatestComponent } from './sections/blogs-latest/blogs-latest.component';
import { CategoriesBlogComponent } from './pages/categories-blog/categories-blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorComponent } from './components/validator/validator.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsletterComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    BlogDetailsComponent,
    BlogCardComponent,
    HeroComponent,
    LoaderComponent,
    BlogsLatestComponent,
    CategoriesBlogComponent,
    ValidatorComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
