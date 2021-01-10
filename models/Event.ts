export default (sequelize, DataTypes) => {
  const event = sequelize.define(
    'Event',
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, nullable: false },
      venue: { type: DataTypes.STRING, nullable: false },
      desc: { type: DataTypes.STRING, nullable: true },
      date: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
      },
    },
    {}
  );
  return event;
};
