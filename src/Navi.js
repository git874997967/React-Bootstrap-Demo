import React, {Component} from 'react'
import {
    Breadcrumb,
    Button,
    Col,
    FormControl,
    FormGroup,
    MenuItem,
    Nav,
    Navbar,
    NavDropdown,
    NavItem,
    Pager,
    Pagination,
    Panel,
    Grid,
    Tab,
    Tabs
} from 'react-bootstrap'

class Navi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active_key: 1,
            activePage: 1
        };
        this.handleSelect = this.handleSelect.bind(this)
    }

    /*we need the eventKey in each navitem pass them as event in this method*/
    handleSelect = (selectKey) => (
        this.setState({
            active_key: selectKey,
            activePage: selectKey
        }),
            alert('select' + selectKey)
    );

    render() {

        return (
            <Grid>
                <Grid className='Grid'>
                    <Nav pullRight stacked bsStyle='pills' active_key={this.state.active_key}
                         onSelect={this.handleSelect}>
                        <NavItem eventKey={1}>item 1</NavItem>
                        <NavItem eventKey={2}>item 2</NavItem>
                        <NavItem eventKey={3}>item 3</NavItem>
                        <NavItem eventKey={4}>item 4</NavItem>
                    </Nav>
                </Grid>
                <Grid className='Grid'>
                    <Panel>
                        <Nav justified bsStyle="tabs" active_key={this.state.active_key} onSelect={this.handleSelect}>
                            <NavItem eventKey="1" href="/home">导航条目 1 的内容</NavItem>
                            <NavItem eventKey="2" title="Item">导航条目 2 的内容</NavItem>
                            <NavItem eventKey="3" disabled>导航条目 3 的内容</NavItem>
                            <NavDropdown eventKey="4" title="下拉" id="nav-dropdown">
                                <MenuItem eventKey="4.1">操作</MenuItem>
                                <MenuItem eventKey="4.2">另一个操作</MenuItem>
                                <MenuItem eventKey="4.3">其它内容</MenuItem>
                                {/*分割线 在下拉里面基本都有*/}
                                <MenuItem divider/>
                                <MenuItem eventKey="4.4">其它链接</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Panel>
                </Grid>
                <Grid className='Grid'>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Button bsStyle='link'>Bootstrap</Button>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem eventKey={1} active href="#">Link</NavItem>
                            <NavItem eventKey={2} disabled href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </Grid>
                <Grid className='Grid'>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">React-Bootstrap</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">Link</NavItem>
                                <NavItem eventKey={2} href="#">Link</NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">Link Right</NavItem>
                                <NavItem eventKey={2} href="#">Link Right</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Grid>
                <Grid>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">Brand</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Form pullRight>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search"/>
                                </FormGroup>
                                {' '}
                                <Button type="submit">Submit</Button>
                            </Navbar.Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Grid>
                <Grid>
                    <Panel>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                                Library
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Data
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Panel>
                </Grid>
                <Grid>
                    <Panel>
                    <Tabs active_key={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
                        <Tab eventKey={1} title="Tab 1">
                            <Grid>Tab 1 content</Grid>
                        </Tab>
                        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                    </Tabs>
                    </Panel>
                </Grid>
                <Grid>
                    <Panel>
                        <Tab.Container id="left-tabs-example" defaultactive_key="first">
                            <Grid className="clearfix">
                                <Col sm={4}>
                                    <Nav bsStyle="pills" stacked>
                                        <NavItem eventKey="first">
                                            Tab 1
                                        </NavItem>
                                        <NavItem eventKey="second">
                                            Tab 2
                                        </NavItem>
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content animation>
                                        <Tab.Pane eventKey="first">

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            Tab 2 content
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Grid>
                        </Tab.Container>
                    </Panel>
                </Grid>
                <Grid>
                    <Pagination
                        bsSize="large"
                        items={10}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}/>
                    <br/>
                    <Pagination
                        bsSize="medium"
                        items={10}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}/>
                    <br/>
                    <Pagination
                        bsSize="small"
                        items={10}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}/>
                </Grid>
                <Grid>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        items={20}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}/>
                </Grid>
                <Grid>
                    <Pager>
                        <Pager.Item previous> &larr; Previous with previous attribute</Pager.Item>
                        <Pager.Item  >Next without <code>next </code>attr</Pager.Item>
                    </Pager>
                </Grid>
            </Grid>
        )
    }
}

export default Navi