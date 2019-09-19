import React, { Component } from 'react'
import {Drawer, Button} from 'antd'
import AddUser from './AddUser'


class DrawerAddUser extends Component {

    state = { visible: false};

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };

    render(){

            return (
                    <div>
                        <Button type="primary" icon="usergroup-add" onClick={this.showDrawer}>
                                Add User
                        </Button>
                        <Drawer
                        title="Add New User"
                        width={520}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >

                        <AddUser closeDrawer={this.onClose} />
                            
                            
                        </Drawer>
                    </div>
                )        
    }
    
}

export default DrawerAddUser
