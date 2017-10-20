import handlebars from 'handlebars';
import {readFileSync} from 'fs';

/**
 * User Route
 * @param  {Request} req 
 * @param  {Response} res
 * @param  {Function} next
 */
export async function user(req, res, next) {
	const currentUser = res.locals.auth.currentUser;
  const source = readFileSync('./pages/user.html').toString();
  const template = handlebars.compile(source);
  const html = template({title: 'Welcome', name: currentUser.name});
  res.send(html);
}
