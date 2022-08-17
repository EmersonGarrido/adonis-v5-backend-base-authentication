import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('full_name', 180).notNullable()
      table.string('display_name', 180).notNullable()
      table.string('auth_type', 180).notNullable()
      table.string('phone_number', 180).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('status').nullable()
      table.string('token')
      table.date('token_created_at')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
