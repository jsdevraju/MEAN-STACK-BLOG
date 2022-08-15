import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public userState: any;

  constructor(private http: HttpClient) {}
  // Get ALl Blogs Functionality
  getAllBlogs() {
    return this.http
      .get(`https://typescript-blog.herokuapp.com/api/v1/blog/home/blogs`)
      .pipe(catchError(this.getBlogError));
  }

  private getBlogError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }
  // Get Single Blog Functionality
  getSingleBlog(id: string) {
    return this.http
      .get(`https://typescript-blog.herokuapp.com/api/v1/blog/blog/${id}`)
      .pipe(catchError(this.getSingleError));
  }

  private getSingleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }
  // Get Categories Functionality
  getCategories() {
    return this.http
      .get(`https://typescript-blog.herokuapp.com/api/v1/category/categories`)
      .pipe(catchError(this.getCategoriesError));
  }

  private getCategoriesError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }

  // get Categories Blog Functionality
  getCategoriesBlog(id: string, limit: number = 6, page: number = 1) {
    return this.http
      .get(
        `https://typescript-blog.herokuapp.com/api/v1/blog/home/blogs/${id}?limit=${limit}&page=${page}`
      )
      .pipe(catchError(this.getCategoriesBlogError));
  }

  private getCategoriesBlogError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }

  // Register Functionality
  logoutUser(token: string) {
    return this.http
      .get(`https://typescript-blog.herokuapp.com/api/v1/auth/logout`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(catchError(this.logoutError));
  }

  private logoutError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }
  // Register Functionality
  loginUser(formData: any) {
    return this.http
      .post(`https://typescript-blog.herokuapp.com/api/v1/auth/login`, formData)
      .pipe(catchError(this.loginUserError));
  }

  private loginUserError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }
  // Register Functionality
  registerUser(formData: any) {
    return this.http
      .post(
        `https://typescript-blog.herokuapp.com/api/v1/auth/register`,
        formData
      )
      .pipe(catchError(this.registerUserError));
  }

  private registerUserError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:', ${error.error.message}`;
    } else {
      (errorMessage = `${error.error.message}`), error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }
}
