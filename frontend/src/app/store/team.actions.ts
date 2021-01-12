import { Action } from '@ngrx/store';
import { TeamModel } from './team.model';

export enum TeamSectionType {
  GET_TEAM = '[TEAM MODULE] get Team',
}

export class GetTeamAction implements Action {
 readonly type = TeamSectionType.GET_TEAM;

  constructor() {}
}

export type TeamActions = GetTeamAction;
