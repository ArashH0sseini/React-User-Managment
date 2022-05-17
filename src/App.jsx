import { Component } from "react";
import Header from "./components/header";
import AddUser from "./components/addUser";
import UserList from "./components/userList";
import Modal from "./components/modal";

class App extends Component {
    state = {
        showModal : false,
        userList: []
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    addUser(text) {
      this.setState((prevState) => {
        return {
          userList: [...prevState.userList, { key: Date.now(), text }],
        };
      });
    }

    deleteUser(key){
      this.setState((prevState)=>{
          return{
            userList: prevState.userList.filter(item => item.key !== key)
          }
      })
  }

  render() {
    let {userList} = this.state
    return (
      <>
        {
          this.state.showModal ? <Modal modal = {this.toggleModal} add = {this.addUser.bind(this)} /> : null
        }
        <div className="h-screen bg-gradient-to-r from-violet-900 to-pink-800 p-20">
          <Header />
          <AddUser modal = {this.toggleModal} />
          {
            userList.length === 0 
            ? <p className="text-white flex justify-center items-center px-10 bg-white/10 backdrop-blur-sm w-full m-auto mt-5 h-16 rounded-lg">There isnt Any User</p>
            : <UserList user={userList} delete={this.deleteUser.bind(this)} />
        }
        </div>
      </>
    );
  }
}

export default App;
