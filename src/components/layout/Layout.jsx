import Header from '../header/Header.jsx';
import Form from '../form/Form';
import List from '../list/List';

const Layout = ({Addtodo, todos, Done, Remove}) => {
    return (
    <div className="layout">
        <Header/>
        <Form Addtodo={Addtodo}/>
        <List todos={todos} Done={Done} Remove={Remove}/>
    </div>
    );
} 

export default Layout;