import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import BookModel from '@/models/books.model';
import AuthorModel from '@/models/authors.model';
import CategoryModel from '@/models/category.model';
import bookCategoryModel from '@/models/bookCategory.model';
import bookAuthorModel from '@/models/bookAuthor.model';
import bookmarksModel from '@/models/bookmarks.model';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  timezone: '+04:30',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 1,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Books: BookModel(sequelize),
  Author: AuthorModel(sequelize),
  Category: CategoryModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export const Relations = {
  BookCategory: bookCategoryModel(sequelize, DB.Books, DB.Category),
  BookAuthor: bookAuthorModel(sequelize, DB.Books, DB.Author),
  BookMark: bookmarksModel(sequelize, DB.Books, DB.Users),
};
export default DB;
