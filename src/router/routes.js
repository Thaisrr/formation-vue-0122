import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users";
import Books from "../pages/Books";
import BooksDetails from "../pages/BooksDetails";
import BookForm from "../pages/BookForm";
import StoreExemple from "../pages/StoreExemple";
import Events from "../pages/Events";
import TestMixin from "../pages/TestMixin";

export default [
    {path: '/about', name: 'about', component: About},
    {path: '/users', name: 'users', component: Users},
    {
        path: '/books',
        name: 'books',
        component: Books,
        children: [ // pas de / sur les routes enfants si on veut une url parent/enfant
            {path: 'details/:id', name: 'details', component: BooksDetails},
            {path: 'add', name: 'add', component: BookForm}
        ]
    },
    {path: '/store', name: 'store', component: StoreExemple},
    {path: '/events', name: 'events', component: Events},
    {path: '/mixins', name: 'mixin', component: TestMixin},
    {path: '/', name: 'home', component: Home},
];
