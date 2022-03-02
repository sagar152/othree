import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Row, Col, Card, CardBody, Label, FormGroup, Button, Alert, InputGroup, InputGroupAddon } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, Lock } from 'react-feather';

import { loginUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/O3i_LOGO_V8_FINAL_800-X-800 3.png';
import sideimage from '../../assets/images/Mobile login-pana 1.png';

class Login extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.state = {
            username: 'test',
            password: 'test'
        }
    }

    componentDidMount() {
        this._isMounted = true;

        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.props.loginUser(values.username, values.password, this.props.history);
        console.log('values', values);
    }


    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/' />
        }
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && <div className="account-pages overflow-hidden">
                    
                        <Row className="justify-content-center">
                            <Col sm={12} md={12} xl={12}>
                                <Card className="vh-100 m-0">
                                    <CardBody className="p-0">
                                        <Row>
                                            <Col md={6} className="d-none d-md-inline-block">
                                              
                                                <div className="auth-page-sidebar">
                                                <h3 className='font-weight-bold text-white pt-5 text-center mt-0'>Login Account</h3>
                                                <p className="text-white text-center mb-5">Login to find your space.</p>
                                                    {/* <div className="auth-user-testimonial">
                                                        <p className="font-size-24 font-weight-bold text-white mb-1">I simply love it!</p>
                                                        <p className="lead">"It's a elegent templete. I love it very much!"</p>
                                                        <p>- Admin User</p>
                                                    </div> */}
                                                    <div className="text-center">
                                                        <img src={sideimage} alt="" height="500" />
                                                        </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className="p-5 position-relative">
                                                {this.props.loading && <Loader />}

                                                <div className="mx-auto mb-3 text-center">
                                                    <a href="/">
                                                        <img src={logo} alt="" height="80" />
                                                        {/* <h3 className="d-inline align-middle ml-1 text-logo">Shreyu</h3> */}
                                                    </a>
                                                </div>

                                                <h6 className=" font-weight-bold h5 mb-0 mt-4 text-center">Login</h6>
                                                {/* <p className="text-muted mt-1 mb-4">Enter your email address and password to access admin panel.</p> */}


                                                {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    <div>{this.props.error}</div>
                                                </Alert>}

                                                <AvForm onValidSubmit={this.handleValidSubmit} className="authentication-form">
                                                    <AvGroup className="">
                                                        <Label for="username" className='font-weight-bold'>Email Id*</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Mail className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="text" name="username" id="username" value={this.state.username} required style={{backgroundColor:"#F4F4F4"}} />
                                                        </InputGroup>
                                                        
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>


                                                    <AvGroup className="mb-3">
                                                        <Label for="password" className='font-weight-bold'>Password*</Label>
                                                        
                                                        <InputGroup className='mb-3'>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Lock className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="password" name="password" id="password" value={this.state.password} required style={{backgroundColor:"#F4F4F4"}} />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                        <Link to="/account/forget-password" className="ml-1 font-weight-bold">Forgot your password?</Link>
                                                    </AvGroup>

                                                    <FormGroup className="form-group mt-5 pt-3 mb-0 text-center">
                                                        <Button className="font-size-22 btn-block" style={{backgroundColor:'#08467F'}}>Login</Button>
                                                    </FormGroup>

                                                    {/* <p className="mt-3"><strong>Username:</strong> test &nbsp;&nbsp; <strong>Password:</strong> test</p> */}
                                                </AvForm>
                                            </Col>

                                            
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                </div>}
                {/* <Row>
                    <Col  md={6}>
                    <Card className='vh-100'>hnjh</Card>
                    </Col>
                    <Col  md={6}>
                    <Card>hmjh</Card>
                    </Col>
                </Row> */}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { loginUser })(Login);