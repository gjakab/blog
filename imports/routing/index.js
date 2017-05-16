import route from './router.js';
import Home from '/imports/ui/Home/Home.jsx';
import Login from '/imports/ui/Login/Login.jsx';
import Register from '/imports/ui/Register/Register.jsx';
import Articles from '/imports/ui/Articles/Articles.jsx';
import CreateArticle from '/imports/ui/Articles/CreateArticle.jsx';
import ViewArticle from '/imports/ui/Articles/ViewArticle.jsx';

route('/', Home);
route('/login',Login);
route('/register',Register);
route('/articles', Articles);
route('/createArticle',CreateArticle);
route('/viewArticle/:_id',ViewArticle);