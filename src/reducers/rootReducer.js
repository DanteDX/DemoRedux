  import { combineReducers } from 'redux';
  import {InfoReducer} from "./InfoReducer";
  import {NameReducer} from "./NameReducer";
  import {ProfessionReducer}  from "./ProfessionReducer";

  export const rootReducer = combineReducers({
      Information: InfoReducer,
      Names: NameReducer,
      Professions: ProfessionReducer
  });