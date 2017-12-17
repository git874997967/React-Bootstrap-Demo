/*Multimedia*/
import React, {Component} from 'react'
import img from './thumbnail.png'
import img2 from './TheresaKnott_castle.svg'
import img3 from './carousel.png'
import {
    Badge,
    Button,
    ProgressBar,
    ButtonGroup,
    ButtonToolbar,
    Carousel,
    Col,
    Glyphicon,
    Grid,
    Image,
    Label,
    Media,
    ResponsiveEmbed,
    Row,
    Thumbnail
} from 'react-bootstrap'

class Mm extends Component {
    /*  constructor(props) {
          super(props)
          this.setState({
              index: 0,
              direction: null
          })
          this.handleSelect = this.handleSelect.bind(this)
      }*/

    /*  handleSelect(selectedIndex, e) {
          alert('selected=' + selectedIndex + ', direction=' + e.direction);
         /!* this.setState({
              index: selectedIndex,
              direction: e.direction
          });*!/
      }*/


    render() {
        const now=60
        return (

            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                        <Image src={img} alt='abc' rounded/>
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={img} alt='abc' circle/>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href='#' alt="171x180" src={img}/>
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={img} alt=' ' responsive/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <Thumbnail src={img} alt='240x200'>
                            <h3>Title of thumbnail</h3>
                            <p>desc</p>
                            <p><Button bsStyle='primary'>Button</Button>&nbsp;
                                <Button bsStyle='default'>Button</Button></p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={6}>
                        <Thumbnail src={img} alt='240x200'>
                            <h3>Title of thumbnail</h3>
                            <p>desc</p>
                            <p><Button bsStyle='primary'>Button</Button>&nbsp;
                                <Button bsStyle='default'>Button</Button></p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Grid>
                    <div style={{width: 660, height: 'auto'}} className='center'>
                        <ResponsiveEmbed a16by9>
                            <embed type="image/svg+xml" src={img2}/>
                        </ResponsiveEmbed>
                    </div>
                </Grid>
                <Grid style={{width: 660, height: 'auto'}}>
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={img3}/>
                            <Carousel.Caption>
                                <h3>This is the first</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={img3}/>
                            <Carousel.Caption>
                                <h3>This is the second</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={img3}/>
                            <Carousel.Caption>
                                <h3>This is the third</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={img} alt="thumbnail"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>媒体标题</Media.Heading>
                            <p>正文内容，Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                in faucibus.</p>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={img} alt="thumbnail"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>媒体标题</Media.Heading>
                            <p>正文内容，Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                in faucibus.</p>
                            <Media>
                                <Media.Left>
                                    <img width={64} height={64} src={img} alt="thumbnail"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>嵌入媒体标题</Media.Heading>
                                    <p>正文内容，Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus.</p>
                                </Media.Body>
                            </Media>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Body>
                            <Media.Heading>媒体标题</Media.Heading>
                            <p>正文内容，Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                in faucibus.</p>
                        </Media.Body>
                        <Media.Right>
                            <img width={64} height={64} src={img} alt="thumbnail"/>
                        </Media.Right>
                    </Media>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={img} alt="thumbnail"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>媒体标题</Media.Heading>
                            <p>正文内容，Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                in faucibus.</p>
                        </Media.Body>
                        <Media.Right>
                            <img width={64} height={64} src={img} alt="thumbnail"/>
                        </Media.Right>
                    </Media>
                </Grid>
                <Row>
                    <Col md={4} xs={6}>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button><Glyphicon glyph="align-left"/></Button>
                                <Button><Glyphicon glyph="align-center"/></Button>
                                <Button><Glyphicon glyph="align-right"/></Button>
                                <Button><Glyphicon glyph="align-justify"/></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button bsSize="large"><Glyphicon glyph="star"/> Star</Button>
                                <Button><Glyphicon glyph="star"/> Star</Button>
                                <Button bsSize="small"><Glyphicon glyph="star"/> Star</Button>
                                <Button bsSize="xsmall"><Glyphicon glyph="star"/> Star</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                    <Col md={4} xs={6}>
                        <h1>Label <Label bsStyle='primary'>New</Label></h1>
                        <h2>Label <Label>New</Label></h2>
                        <h3>Label <Label bsStyle='danger'>New</Label></h3>
                        <h4>Label <Label>New</Label></h4>
                        <h5>Label <Label>New</Label></h5>
                        <p>Label <Label bsStyle='success'>New</Label></p>
                    </Col>
                    <Col md={4} xs={6}>
                        <h1>Label <Badge bsStyle='primary'>New</Badge></h1>
                        <h2>Badge <Badge>New</Badge></h2>
                        <h3>Badge <Badge bsStyle='danger'>New</Badge></h3>
                        <h4>Badge <Badge>New</Badge></h4>
                        <h5>Badge <Badge>New</Badge></h5>
                        <p>Badge <Badge bsStyle='success'>New</Badge></p>
                    </Col>
                </Row>
                <Grid>
                    <ProgressBar  striped now={now-39} />
                    <ProgressBar active now={now} label={`${now}%`} />
                    <ProgressBar>
                        <ProgressBar striped bsStyle="success" now={35} key={1} />
                        <ProgressBar bsStyle="warning" now={20} key={2} />
                        <ProgressBar active bsStyle="danger" now={10} key={3} />
                    </ProgressBar>
                </Grid>
            </Grid>
        )
    }
}

export default Mm