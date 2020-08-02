import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from '../features/issuesDisplay/issuesDisplaySlice'
import repoSearchReducer from '../features/repoSearch/repoDetailsSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoSearch: repoSearchReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer