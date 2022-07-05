const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'oauth_client_scopes',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            oauthClientId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'oauth_clients',
                    key: 'id'
                },
                unique: 'oauth_client_scopes_oauth_clients_id_fk',
                field: 'oauth_client_id'
            },
            scope: {
                type: DataTypes.STRING(36),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'updated_at'
            }
        },
        {
            sequelize,
            tableName: 'oauth_client_scopes',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }]
                },
                {
                    name: 'oauth_client_scopes_uindex',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'oauth_client_id' }]
                }
            ]
        }
    );
};
