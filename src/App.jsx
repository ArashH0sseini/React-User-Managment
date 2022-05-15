import { Component } from "react";
import Header from "./components/header";
import AddUser from "./components/addUser";
import UserList from "./components/userList";
import Modal from "./components/modal";

class App extends Component {
    state = {
        showModal : false
    }

    toggleModal=()=>{
        this.setState({
            showModal: !this.state.showModal
        })
    }

  render() {
    return (
      <>
        {
            this.state.showModal ? <Modal modal={this.toggleModal} /> : null
        }
        <div className="h-screen bg-gradient-to-r from-violet-900 to-pink-800 p-20">
          <Header />
          <AddUser modal={this.toggleModal} />
          <UserList />
        </div>
      </>
    );
  }
}

export default App;
