import { getTeamList, deleteTeams, createTeam } from '../services/team.service';

describe('Team Service', () => {
  test('get team list', async () => {
    const results = await getTeamList();
    expect(typeof results).toBe('object');
  });

  test('delte team', async () => {
    const results = await deleteTeams(1);
    expect(results).toBe(1);
  });

  test('create team', async () => {
    const body = {
      name: 'team 1',
      users: [1, 2, 3],
    };
    const results: any = await createTeam(body);
    expect(typeof results).toBe('object');
  });
});
