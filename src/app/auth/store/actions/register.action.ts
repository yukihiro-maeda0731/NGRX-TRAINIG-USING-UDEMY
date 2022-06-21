import {createAction, props} from '@ngrx/store'
import {RegisterRequestinterface} from 'src/app/shared/types/registerRequest.interface'
import {ActionTypes} from 'src/app/auth/store/actionTypes'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestinterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
