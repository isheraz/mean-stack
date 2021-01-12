import { TeamModel } from './team.model';
import { TeamActions, TeamSectionType } from './team.actions';

// Section 1
export const initialState: Array<TeamModel> = [
  {
    id: 1,
    name: 'Team 1',
    users: [1, 2]
  }
];

export function TeamReducer(
  state: Array<TeamModel> = initialState,
  action: TeamActions
) {
  switch (action.type) {
    case TeamSectionType.GET_TEAM:
      return [...state, action.payload];
    default:
      return state;
  }
}
