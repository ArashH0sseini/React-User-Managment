import {Component} from 'react'
import Header from './components/header'
import AddUser from './components/addUser'
import UserList from './components/userList';

class App extends Component {
    render() {
        return (
             <div className='h-screen bg-gradient-to-r from-violet-900 to-pink-800 p-20'>
                 <Header/>
                 <AddUser />
                 <UserList />
             </div>
        );
    }
}

export default App;