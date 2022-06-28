import {createAction, props} from '@ngrx/store'
import {ActionTypes} from './actionTypes'

// registerActionはregister.component.tsから呼ばれている
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{username: string; password: string; email: string}>()
)
