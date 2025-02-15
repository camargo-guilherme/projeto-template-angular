import { ErrorHandler, LOCALE_ID, NgModule, isDevMode } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table"
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { NgbDateParserFormatter, NgbDatepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { QRCodeModule } from "angularx-qrcode";
import { NgDragDropModule } from "ng-drag-drop";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from "ngx-mask"

// Application Imports
import { routing } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GlobalValuesService } from "./_service/global.values.service";
import { HelpersService } from "./_service/helpers.service";
import { JwtInterceptor, ErrorInterceptor, HeadersInterceptorProvider } from "./_helpers";
import { ApplicationErrorsHandler } from "./_helpers/application-errors-handler";
import { CustomDateParserFormatter } from "./_helpers/custom-date-parser-formatter";
import { AnalyzeModulePermission } from "./_helpers/analyze-module-permission";

// Components Imports
import { AddressComponent } from "./components/address/address.component"
import { PageLoaderComponent } from "./components/page-loader/page-loader.component";
import { FilterMenuComponent } from "./components/filter-menu/filter-menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GenericModalComponent } from "./components/generic-modal/generic-modal.component";
import { GridPaginationComponent } from "./components/grid-pagination/grid-pagination.component";
import { HeaderPageComponent } from "./components/header-page/header-page.component";
import { SideNavComponent } from "./components/side-menu/side-nav/side-nav.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { NavService } from "./components/side-menu/service/nav.service";
import { MatFileUploadComponent } from "./components/upload-material/mat-file-upload.component";
import { ChangePasswordModalComponent } from "./components/change-password-modal/change-password-modal.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { TableGridGenericComponent } from "./components/table-grid-generic/table-grid-generic.component";

// Pages Imports 
import { UsersFilterComponent } from "./pages/users/users-filter/users-filter.component";
import { UsersTableGridComponent } from "./pages/users/users-table-grid/users-table-grid.component"
import { UsersNewEditComponent } from "./pages/users/users-new-edit/users-new-edit.component"
import { ProfileComponent } from "./pages/profile/profile.component";
import { ProfileFilterComponent } from "./pages/profile/profile-filter/profile-filter.component";
import { ProfileNewEditComponent } from "./pages/profile/profile-new-edit/profile-new-edit.component";
import { ProfileTableGridComponent } from "./pages/profile/profile-table-grid/profile-table-grid.component"
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { AuthenticationService } from "./pages/login/service/authentication-service";
import { UserService } from "./pages/users/service/user.service";
import { ForgotPasswordChangeComponent } from "./pages/login/forgot-password-change/forgot-password-change.component";
import { ForgotPasswordComponent } from "./pages/login/forgot-password/forgot-password.component";
import { ProfileService } from "./pages/profile/service/profile.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLoaderComponent,
    FilterMenuComponent,
    FooterComponent,
    GenericModalComponent,
    GridPaginationComponent,
    HeaderPageComponent,
    SideNavComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    SideMenuComponent,
    UsersFilterComponent,
    UsersTableGridComponent,
    UsersNewEditComponent,
    ForgotPasswordComponent,
    ForgotPasswordChangeComponent,
    MatFileUploadComponent,
    ProfileComponent,
    ProfileFilterComponent,
    ProfileNewEditComponent,
    ProfileTableGridComponent,
    ChangePasswordModalComponent,
    AccordionComponent,
    AddressComponent,
    TableGridGenericComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    routing,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDialogModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgbDatepickerModule,
    CurrencyMaskModule,
    QRCodeModule,
    PdfViewerModule,
    DragDropModule,
    NgDragDropModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      progressBar: true
    }),
  ],
  providers: [
    AnalyzeModulePermission,
    HeadersInterceptorProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ApplicationErrorsHandler },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: "pt-br" },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    provideEnvironmentNgxMask(),
    NavService,
    AuthenticationService,
    GlobalValuesService,
    UserService,
    ProfileService,
    HelpersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
