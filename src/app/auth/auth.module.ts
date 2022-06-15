import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RegisterComponent} from '../auth/components/register/register.component'

@NgModule({
  imports: [CommonModule],
  declarations: [RegisterComponent],
})
export class AuthModule {}
