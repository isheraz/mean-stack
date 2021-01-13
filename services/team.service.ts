import { Team, User } from '../models';

export const deleteTeams = async (id) => Team.destroy({ where: { id } });

export const getTeamList = async () =>
  Team.findAll({
    include: {
      model: User,
      as: 'Users',
    },
  });

export const createTeam = async (body: any) =>
  new Promise((resolve, reject) => {
    Team.create({ name: body.name })
      .then((user) => {
        user
          .setUsers(body.users)
          .then((userTeam) => {
            if (userTeam) {
              resolve(user);
            }
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
