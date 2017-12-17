import React, {Component} from 'react'
import {
    Button,
    Col,
    Grid,
    ListGroup,
    ListGroupItem,
    PageHeader,
    Panel,
    PanelGroup,
    Row,
    Table,
    Well
} from 'react-bootstrap'

class Lo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_key: 1,
            open: false
        };
        this.alertMsg = this.alertMsg.bind(this);
        this.toggle = this.toggle.bind(this)
    }

    toggle = () => (
        this.setState({
            open: !this.state.open
        })
    )
    alertMsg = (selectKey) => (
        this.setState({
            active_key: selectKey
        })

    )

    render() {
        const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];
        const style = {
            cursor: 'pointer'
        }
        return (<div>
                <Grid>
                    <Row className='show-grid '>
                        <Col xs={12} md={8} className='alert alert-danger'>
                            <code className='text-center'>    &lt;{'Col xs={12} md={8}'} /&gt;</code>
                        </Col>
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4}
                             className='alert alert-info'><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        <Col xsHidden md={4}
                             className='alert alert-warning'><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={6} mdPush={6}
                             className='alert alert-success'><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                        <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row className="show-grid">
                        {/*Hidden offset   Pull left order  Push right order in lg md and sm and xs*/}
                        <Col sm={6}
                             md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}
                        </Col>
                        <Col sm={6}
                             md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences}
                        </Col>
                        <Col sm={6}
                             md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}
                        </Col>
                        <Col sm={6}
                             md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <h1>This is h1 title</h1>
                    <PageHeader>
                        Example page header <small>Clearfix tag is used to clean trouble in float </small>
                        Page header is larger than h1
                    </PageHeader>
                </Grid>
                <Grid>
                    <code className='text-center'>Maybe this list without the event attr so it could be used in Nav and
                        Button </code>
                    <ListGroup onClick={this.alertMsg} active_key={this.state.active_key}>
                        <ListGroupItem event_key={1} active header='this is a header in ListItem'>Item 1</ListGroupItem>
                        <ListGroupItem event_key={2} bsStyle='warning'>Item 2</ListGroupItem>
                        <ListGroupItem event_key={3} disabled>...</ListGroupItem>
                    </ListGroup>
                </Grid>
                <Grid>
                    <Table striped bordered hover condensed responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>分栏标题</th>
                            <th>分栏标题</th>
                            <th>分栏标题</th>
                            <th>分栏标题</th>
                            <th>分栏标题</th>
                            <th>分栏标题</th>
                        </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td colSpan='4'>Table cell</td>
                            <td> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit tempor
                                tellus.Donec pretium posuere tellus.Proin quam nisl, tincidunt et, mattis eget,
                                convallis nec, purus.Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.Nulla posuere.Donec vitae dolor.Nullam tristique diam non
                                turpis.Cras placerat accumsan nulla.Nullam rutrum.Nam vestibulum accumsan nisl.
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Grid>
                <Grid>
                    <Well bsStyle='large'>
                        <code>The main difference between Well and Panel is the bg color I suppose</code>
                        <Button onClick={this.toggle}>Click to toggle the panel</Button>
                        <Panel bsStyle='success' collapsible expanded={this.state.open}
                               header='this is the title of the panel the title will not hide if the panel is hided'
                               footer='this is the panel footer will not hide as well'>
                            <ListGroup fill>
                                <ListGroupItem>Item 1</ListGroupItem>
                                <ListGroupItem>Item 2</ListGroupItem>
                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                            Some more panel content here.
                        </Panel>
                    </Well>
                </Grid>
                <Grid>
                    <Well>
                        <p>Accordion 是 PanelGroup accordion 的简写，标志面板处在折叠状态。 </p>
                        <PanelGroup defaultActiveKey='2' accordion>
                            <Panel header='Panel 1' eventKey='1' style={style}> this is the content of Panel 1</Panel>
                            <Panel header='Panel 2' eventKey='2' style={style}> this is the content of Panel 2</Panel>
                        </PanelGroup>
                    </Well>
                </Grid>
            </div>
        )
    }
}

export default Lo