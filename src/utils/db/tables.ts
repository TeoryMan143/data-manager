import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('user', {
  id: text('id').$default(crypto.randomUUID).primaryKey(),
  name: text('name').notNull(),
  dateOfBirth: integer('date_of_birth', { mode: 'timestamp' }).notNull(),
  email: text('email').notNull(),
  country: text('country').notNull(),
});
