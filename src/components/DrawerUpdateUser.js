import React, { Component } from 'react'
import {Drawer} from 'antd'
import UpdateUser from './UpdateUser'


class DrawerUpdateUser extends Component {

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
                    <>
                        
                        <a onClick={this.showDrawer}>Edit</a>
                        <Drawer
                        title="Add New User"
                        width={520}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                            {console.log("Drawer Update : ", this.props)}
                        <UpdateUser closeDrawer={this.onClose} data={this.props}/>
                            
                            
                        </Drawer>
                    </>
                )        
    }
    
}

export default DrawerUpdateUser
