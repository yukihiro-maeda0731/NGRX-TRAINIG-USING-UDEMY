import {createAction, props} from '@ngrx/store'
import {RegisterRequestinterface} from 'src/app/shared/types/registerRequest.interface'
import {ActionTypes} from './actionTypes'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestinterface}>()
)
