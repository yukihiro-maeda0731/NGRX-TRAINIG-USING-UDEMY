import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from 'src/app/shared/types/authState.interface'
import {registerAction} from '../store/actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
