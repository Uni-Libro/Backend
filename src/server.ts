import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import BookRoute from '@routes/book.route';
import AuthorRoute from '@routes/author.route';
import validateEnv from '@utils/validateEnv';
import CategoryRoute from './routes/category.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new BookRoute(), new AuthorRoute(), new CategoryRoute()]);

app.listen();
