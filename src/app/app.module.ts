import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSliderModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule,
} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageSmartComponent } from './containers/home-page-smart/home-page-smart.component';
import { LoginPageSmartComponent } from './containers/login-page-smart/login-page-smart.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesPageSmartComponent } from './containers/courses-page-smart/courses-page-smart.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CoursePageSmartComponent } from './containers/course-page-smart/course-page-smart.component';
import { BibliographyPageComponent } from './components/bibliography-page/bibliography-page.component';
import { BibliographyPageSmartComponent } from './containers/bibliography-page-smart/bibliography-page-smart.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { BookPageSmartComponent } from './containers/book-page-smart/book-page-smart.component';
import { RoomReservationSmartComponent } from './containers/room-reservation-smart/room-reservation-smart.component';
import { CalendarCommonModule, CalendarModule, CalendarWeekModule, DateAdapter } from 'angular-calendar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
// tslint:disable-next-line:max-line-length
import { CreateRoomReservationSmartComponent } from './containers/room-reservation-smart/create-room-reservation-smart/create-room-reservation-smart.component';
// tslint:disable-next-line:max-line-length
import { EditRoomReservationSmartComponent } from './containers/room-reservation-smart/edit-room-reservation-smart/edit-room-reservation-smart.component';
import { RoomReservationComponent } from './components/room-reservation/room-reservation.component';
import { CreateRoomReservationComponent } from './components/room-reservation/create-room-reservation/create-room-reservation.component';
import { EditRoomReservationComponent } from './components/room-reservation/edit-room-reservation/edit-room-reservation.component';
import { LivestreamSmartComponent } from './containers/livestream-smart/livestream-smart.component';
import { LivestreamPageComponent } from './components/livestream-page/livestream-page.component';
import { LivestreamOnlineSmartComponent } from './containers/livestream-smart/livestream-online-smart/livestream-online-smart.component';
import { LivestreamOnlinePageComponent } from './components/livestream-page/livestream-online-page/livestream-online-page.component';
import { DebateTimePageComponent } from './components/livestream-page/livestream-online-page/debate-time-page/debate-time-page.component';
import { MiniGamePageComponent } from './components/livestream-page/livestream-online-page/mini-game-page/mini-game-page.component';
// tslint:disable-next-line:max-line-length
import { DebateTimeSmartComponent } from './containers/livestream-smart/livestream-online-smart/debate-time-smart/debate-time-smart.component';
import { MiniGameSmartComponent } from './containers/livestream-smart/livestream-online-smart/mini-game-smart/mini-game-smart.component';
import { InlineSVGModule } from 'ng-inline-svg';


import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ChatPageSmartComponent } from './containers/chat-page-smart/chat-page-smart.component';
import { VideoRecordPopupComponent } from './components/chat-page/video-record-popup/video-record-popup.component';
import { AudioRecordPopupComponent } from './components/chat-page/audio-record-popup/audio-record-popup.component';
import { PollPopupComponent } from './components/chat-page/poll-popup/poll-popup.component';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';
import { SkillsPageSmartComponent } from './containers/skills-page-smart/skills-page-smart.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuizPageSmartComponent } from './containers/quiz-page-smart/quiz-page-smart.component';
import { QuizCheckPageComponent } from './components/quiz-check-page/quiz-check-page.component';
import { QuizCheckPageSmartComponent } from './containers/quiz-check-page-smart/quiz-check-page-smart.component';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';
import { NotificationPageSmartComponent } from './containers/notification-page-smart/notification-page-smart.component';
import { ToastrModule } from 'ngx-toastr';
import { QuestionsAndAnswersPageComponent } from './components/questions-and-answers-page/questions-and-answers-page.component';
import { CoursesEnrollmentComponent } from './components/courses-enrollment/courses-enrollment.component';
import { CoursesEnrollmentSmartComponent } from './containers/courses-enrollment-smart/courses-enrollment-smart.component';
import { ProfessorPageComponent } from './components/professor-page/professor-page.component';
import { ProfessorPageSmartComponent } from './containers/professor-page-smart/professor-page-smart.component';
import { QuestionsAndAnswersPageSmartComponent } from './containers/questions-and-answers-page-smart/questions-and-answers-page-smart.component';
import { TeamSupportComponent } from './components/team-support/team-support.component';
import { TeamSupportSmartComponent } from './containers/team-support-smart/team-support-smart.component';
import { TeamStudentsComponent } from './components/team-students/team-students.component';
import { TeamStudentsSmartComponent } from './containers/team-students-smart/team-students-smart.component';
import { TeamChartsComponent } from './components/team-charts/team-charts.component';
import { TeamChartsSmartComponent } from './containers/team-charts-smart/team-charts-smart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HomePageSmartComponent,
    LoginPageSmartComponent,
    CoursesPageComponent,
    CoursesPageSmartComponent,
    CoursePageComponent,
    CoursePageSmartComponent,
    BibliographyPageComponent,
    BibliographyPageSmartComponent,
    BookPageComponent,
    BookPageSmartComponent,
    RoomReservationSmartComponent,
    CreateRoomReservationSmartComponent,
    EditRoomReservationSmartComponent,
    RoomReservationComponent,
    CreateRoomReservationComponent,
    EditRoomReservationComponent,
    LivestreamSmartComponent,
    LivestreamPageComponent,
    LivestreamOnlineSmartComponent,
    LivestreamOnlinePageComponent,
    DebateTimePageComponent,
    MiniGamePageComponent,
    DebateTimeSmartComponent,
    MiniGameSmartComponent,
    ChatPageComponent,
    ChatPageSmartComponent,
    VideoRecordPopupComponent,
    AudioRecordPopupComponent,
    PollPopupComponent,
    QuizPageComponent,
    QuizPageSmartComponent,
    QuizCheckPageComponent,
    QuizCheckPageSmartComponent,
    SkillsPageComponent,
    SkillsPageSmartComponent,
    NotificationPageComponent,
    NotificationPageSmartComponent,
    CoursesEnrollmentComponent,
    CoursesEnrollmentSmartComponent,
    ProfessorPageComponent,
    ProfessorPageSmartComponent,
    TeamSupportComponent,
    TeamSupportSmartComponent,
    TeamStudentsComponent,
    TeamStudentsSmartComponent,
    TeamChartsComponent,
    TeamChartsSmartComponent,
    ProfessorPageSmartComponent,
    QuestionsAndAnswersPageComponent,
    QuestionsAndAnswersPageSmartComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgbModalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatSliderModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatDialogModule,
    MatToolbarModule, MatDatepickerModule, MatSelectModule, FormsModule,
    MatNativeDateModule, MatExpansionModule, MatStepperModule, MatChipsModule, MatBadgeModule,
    MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule, MatTreeModule,
    MatSnackBarModule, CalendarCommonModule, CalendarWeekModule, MatTooltipModule,
    InlineSVGModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }), NgbTimepickerModule
  ],
  entryComponents: [ChatPageComponent, VideoRecordPopupComponent, AudioRecordPopupComponent, PollPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
