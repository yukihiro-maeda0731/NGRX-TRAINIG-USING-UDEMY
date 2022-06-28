import {createAction, props} from '@ngrx/store'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {ActionTypes} from './actionTypes'

// registerActionはregister.component.tsから呼ばれている
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)
