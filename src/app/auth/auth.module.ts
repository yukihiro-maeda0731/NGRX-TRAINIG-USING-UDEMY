import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {RegisterComponent} from './components/register/register.component'
import {AuthService} from './services/auth.service'
import {RegisterEffect} from './store/effects/register.effect'
import {reducers} from './store/reducers'

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
    // 第一引数の'auth'はdevtoolでstate確認する際のプロパティ名
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
