import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  designGet: ['designerId'],
  designGetUnAuth: null,
  designPost: ['designData'],
  designLike: ['designId'],
  designDelete: ['designId'],
  designFailure: ['designError'],
  designSuccess: ['designSuccess']
})

export const DesignTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  designerId: null,
  designData: null,
  designId: null,
  designError: null,
  designSuccess: null,
  fetching: false
})

/* ------------- Selectors ------------- */

export const DesignSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const getDesignsRequest = (state, { designerId }) =>
  state.merge({fetching: true, designerId, designSuccess: null, designError: null})

export const getUnauthDesignsRequest = state =>
  state.merge({fetching: true, designSuccess: null, designError: null})

export const designSuccess = (state, {designSuccess}) =>
  state.merge({fetching: false, designError: null, designSuccess})

// Something went wrong somewhere.
export const designError = (state, {designError}) =>
  state.merge({ fetching: false, designError, designSuccess: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DESIGN_GET]: getDesignsRequest,
  [Types.DESIGN_GET_UN_AUTH]: getUnauthDesignsRequest,
  [Types.DESIGN_SUCCESS]: designSuccess,
  [Types.DESIGN_FAILURE]: designError
})
