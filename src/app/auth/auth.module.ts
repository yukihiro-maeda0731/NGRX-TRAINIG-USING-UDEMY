import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {RegisterComponent} from '../auth/components/register/register.component'
import {reducers} from 'src/app/auth/store/reducers'
import {AuthService} from './services/auth.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
