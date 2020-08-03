import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from '../features/issuesDisplay/issuesDisplaySlice'
import repoSearchReducer from '../features/repoSearch/repoDetailsSlice'
import issuesSlice from '../features/issuesList/issuesSlice'
import commentsSlice from '../features/issueDetails/commentsSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoSearchReducer,
  issues: issuesSlice,
  comments: commentsSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer