const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Match = sequelize.define(
  "Match",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    leagueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "league_id",
    },
    teamIdAnalyzed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "team_id_analyzed",
    },
    teamIdOpponent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "team_id_opponent",
    },
    teamIdWinner: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "team_id_winner",
    },
    groupContractId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      field: "group_contract_id",
    },
    matchDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "match_date",
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "matches",
    // timestamps: false,
  }
);

module.exports = Match;
