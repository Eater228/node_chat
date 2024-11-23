import { DataTypes } from 'sequelize';
import { client } from '../untils/db.js';
import { Room } from './Room.js';

export const Messages = client.define('messages', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Messages.belongsTo(Room);
Room.hasOne(Messages);
