import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='container py-5' style={{ width: "45rem", marginTop: "10rem", borderTop: "1px solid #E5ECF4" }} >
                <div className='row'>
                    <div className='col d-flex flex-column'>
                        <h6 className='card-text'>About Us</h6>
                        <div className='my-4'>
                            <p className='function-text'>Support Center</p>
                            <p className='function-text'>Customer Center</p>
                            <p className='function-text'>About Us</p>
                            <p className='function-text'>Copyright</p>
                            <p className='function-text'>Popular Campaign</p>
                        </div>

                    </div>
                    <div className='col'>
                        <h6 className='card-text'>Our Information</h6>
                        <div className='my-4'>
                            <p className='function-text'>Return Policy</p>
                            <p className='function-text'>Privacy Policy</p>
                            <p className='function-text'>Terms & Conditions</p>
                            <p className='function-text'>Site Map </p>
                            <p className='function-text'>Store Hours</p>
                        </div>
                    </div>

                    <div className='col'>
                        <h6 className='card-text'>My Account</h6>
                        <div className='my-4'>
                            <p className='function-text'>Press inquiries</p>
                            <p className='function-text'> Social media</p>
                            <p className='function-text'>directories</p>
                            <p className='function-text'>Images & B-roll </p>
                            <p className='function-text'>Permissions</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h6 className='card-text'>Policy</h6>
                        <div className='my-4'>
                            <p className='function-text'>Appliction security</p>
                            <p className='function-text'>Software principles</p>
                            <p className='function-text'>Unwanted software policy</p>
                            <p className='function-text'>Responsible supply chain</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
