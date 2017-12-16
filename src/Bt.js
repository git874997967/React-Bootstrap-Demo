import React, {Component} from 'react'
import {Button, ButtonToolbar, DropdownButton, MenuItem, SplitButton,Clearfix} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Bt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
        /* what is the meanning of this*/
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({isLoading: true});

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({isLoading: false});
        }, 2000);
    }
    renderDropdownButton = (title, i) => {

        return (
            /*title means the info on components required
            * id  is required */
            <SplitButton bsStyle={title.toLowerCase()} title={title} key={i}
                         id={`split-button-basic-${i}`} >
                <MenuItem eventKey="1">操作</MenuItem>
                <MenuItem eventKey="2">另一操作</MenuItem>
                <MenuItem eventKey="3">其它内容</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4">分隔链接</MenuItem>
            </SplitButton>

        );
    }
    onSelectAlert=(eventKey)=>{
        alert(`Alert from menu item.\neventKey: ${eventKey}`);
    }
    render() {
        const text = this.state.isLoading ? 'Loading...' : 'Loading state';
        const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

        return (
            <div className='container'>
                <ButtonToolbar>
                    <Button bsStyle='primary' bsSize='large' disabled> large primary diasbled</Button>
                    <Button bsStyle='info' bsSize='small' active> small info active</Button>
                    <Button
                        bsStyle="danger"
                        disabled={this.isLoading}
                        onClick={!this.isLoading ? this.handleClick : null}>
                        {text}
                    </Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    {BUTTONS.map(this.renderDropdownButton)}
                </ButtonToolbar>
                <ButtonToolbar>
                    <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large" disabled>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                    <DropdownButton bsSize="small" title="small button" id="dropdown-size-large">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
                <Clearfix className='alert alert-info'>
                    <ul className='dropdown-menu open'>
                        <MenuItem header>标题</MenuItem>
                        <MenuItem>链接</MenuItem>
                        <MenuItem divider/>
                        <MenuItem header>标题</MenuItem>
                        <MenuItem>链接</MenuItem>
                        <MenuItem disabled>禁用</MenuItem>
                        <MenuItem title="See? I have a title.">
                            带标题的链接
                        </MenuItem>
                        <MenuItem eventKey={1} href="#someHref" onSelect={this.onSelectAlert}>
                            带警告的链接
                        </MenuItem>
                    </ul>
                </Clearfix>
            </div>
        )
    }
}

export default Bt;
