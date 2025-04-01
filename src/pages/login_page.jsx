import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBCardTitle
  }
  from 'mdb-react-ui-kit';
const LoginPage = () => {
    return (
        <div className="w-screen m-auto h-screen flex justify-center items-center ">
            <div className="m-4 lg:size-2/4 lg:m-0 bg-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                <MDBContainer fluid className=" flex flex-col justify-around h-full">

                <MDBCardTitle className="text-4xl text-center font-bold mb-2">Login</MDBCardTitle>
        
                    <MDBRow className=" ">

                    <MDBCol col='10' md='6' className="py-4 lg:py-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>


                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
                        

                        <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

                    </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    );
};

export default LoginPage;