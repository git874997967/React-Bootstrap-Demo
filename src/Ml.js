import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Button, ButtonToolbar, Modal, Overlay, OverlayTrigger, Popover, Tooltip,Grid,Panel} from 'react-bootstrap'

class Ml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            show: true
        }
        /*these  bind is pretty vital */
     /*   this.close = this.close.bind(this)
        this.open = this.open.bind(this)*/
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            show: !this.state.show,
            showModal: !this.state.showModal
        })
    }

 /*   close() {
        /!*use this.state instead of this.setState*!/
        this.setState({showModal: false})

    }

    open() {
        this.setState({showModal: true})
    }*/

    render() {
        const popover = (
            <Popover id='modal-popover' title='popover'>
                info popped
            </Popover>
        )
        const tooltip0 = (
            <Tooltip id='modal-tooltip'>
                little tip
            </Tooltip>
        )
        const tooltip1 = (
            <Tooltip id="tooltip"><strong>点击我</strong> 就可以看到这个信息。</Tooltip>
        );
        const popoverLeft = (
            <Popover id="popover-positioned-scrolling-left" title="左边弹出">
                <strong>点击我</strong> 就可以看到这个信息。
            </Popover>
        );

        const popoverTop = (
            <Popover id="popover-positioned-scrolling-top" title="顶部弹出">
                <strong>点击我</strong> 就可以看到这个信息。
            </Popover>
        );

        const popoverBottom = (
            <Popover id="popover-positioned-scrolling-bottom" title="底部弹出">
                <strong>点击我</strong> 就可以看到这个信息。
            </Popover>
        );

        const popoverRight = (
            <Popover id="popover-positioned-scrolling-right" title="右边弹出">
                <strong>点击我</strong> 就可以看到这个信息。
            </Popover>
        );
        const sharedProps = {
            show: this.state.show,
            container: this,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        }
        return (
            <Grid className='container'>
                {/*     <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>对话框标题</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            主体内容...
                        </Modal.Body>

                        <Modal.Footer>
                            <Button>取消</Button>
                            <Button bsStyle="primary">保存</Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </Grid>*/}
                <Grid>
                    <Panel>
                    <p>click to trigger the modal button</p>
                    <Button bsStyle='primary' bsSize='large' onClick={this.toggle}>
                        show the Modal
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.toggle}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Text in a modal</h4>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                            <h4>Popover in a modal</h4>
                            <p>there is a <OverlayTrigger
                                overlay={popover}><Button>popover</Button></OverlayTrigger> here</p>

                            <h4>Tooltips in a modal</h4>
                            <p>there is a <OverlayTrigger
                                overlay={tooltip0}><Button>tooltip</Button></OverlayTrigger> here</p>

                            <hr/>

                            <h4>Overflowing text to show scroll behavior</h4>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                auctor fringilla.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.toggle}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    </Panel>
                </Grid>
                <Grid>
                    <Panel>
                    <ButtonToolbar justified>
                        {/*overlay is required*/}
                        <OverlayTrigger placement="left" overlay={tooltip1}>
                            <Button bsStyle="default">请将光标移到我上面</Button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={tooltip1}>
                            <Button bsStyle="default">请将光标移到我上面</Button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="bottom" overlay={tooltip1}>
                            <Button bsStyle="default">请将光标移到我上面</Button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="right" overlay={tooltip1}>
                            <Button bsStyle="default">请将光标移到我上面</Button>
                        </OverlayTrigger>
                    </ButtonToolbar>
                    </Panel>
                </Grid>
                <Grid>
                    <Panel>
                    <ButtonToolbar justified>
                        <OverlayTrigger container={this} trigger="click" placement="left" overlay={popoverLeft}>
                            <Button>点击我</Button>
                        </OverlayTrigger>
                        <OverlayTrigger container={this} trigger="click" placement="top" overlay={popoverTop}>
                            <Button>点击我</Button>
                        </OverlayTrigger>
                        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
                            <Button>点击我</Button>
                        </OverlayTrigger>
                        <OverlayTrigger container={this} trigger="click" placement="right" overlay={popoverRight}>
                            <Button>点击我</Button>
                        </OverlayTrigger>
                    </ButtonToolbar>
                    </Panel>
                </Grid >
                <Grid justified className='container'>
                    <Button ref="target" onClick={this.toggle}>
                        点击我!
                    </Button>

                    <Overlay {...sharedProps} placement="left">
                        <Tooltip id="overload-left">提示工具加载了！</Tooltip>
                    </Overlay>
                    <Overlay {...sharedProps} placement="top">
                        <Tooltip id="overload-top">提示工具加载了！</Tooltip>
                    </Overlay>
                    <Overlay {...sharedProps} placement="right">
                        <Tooltip id="overload-right">提示工具加载了！</Tooltip>
                    </Overlay>
                    <Overlay {...sharedProps} placement="bottom">
                        <Tooltip id="overload-bottom">提示工具加载了！</Tooltip>
                    </Overlay>
                </Grid>
            </Grid>
        )
    }
}


export default Ml