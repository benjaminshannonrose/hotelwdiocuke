import IndexPage from '../../pages/IndexPage';
import SignUpPage from '../../pages/SignUpPage';
import LoginPage from '../../pages/LoginPage';
import BookingsPage from '../../pages/BookingsPage';

const classes = { IndexPage, SignUpPage, LoginPage, BookingsPage };

export default function pageFactory (page) {
    return classes[page];
}

