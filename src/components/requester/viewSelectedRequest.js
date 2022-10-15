import React from 'react'
import { getCookie } from '../common/getCookie'

export default function viewSelectedRequest({requestData}) {
    return (
        <div>
            <h3>{requestData.title}</h3>
            <div className="row">
                <div className="col-8">
                    <div className="card-deck">
                        <div className="card">
                            <img src={requestData.requestImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className='row border-bottom'>
                                    <h5 className="text-normal"><i className="bi bi-person-circle"></i> {requestData.fname} {requestData.lname} is organizing this fund request.</h5>
                                </div>
                                <div className='row border-bottom'>
                                    <p className="card-text">{requestData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {requestData.userId === getCookie('uId')
                        ? (
                            <div className="d-flex justify-content-center mt-4">
                                <button type="button" className="btn btn-outline-danger">Remove Fund Request</button>
                            </div>) : null
                    }

                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className='row border-bottom'>
                                <h5 className="card-title"><center>Beneficiary's contact information</center></h5>
                            </div>

                            <div className='row'>
                                <div className='col-2 ms-2'>
                                    <h3><i className="bi bi-person-circle"></i></h3>
                                </div>
                                <div className='col-9 ps-0'>
                                    <h6 className='pt-2'>{requestData.fname} {requestData.lname}</h6>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-2 ms-2'>
                                    <h3><i className="bi bi-geo-alt-fill"></i></h3>
                                </div>
                                <div className='col-9 ps-0'>
                                    <h6 className='pt-2 text-muted'>{requestData.address}</h6>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-2 ms-2'>
                                    <h3><i className="bi bi-phone-fill"></i></h3>
                                </div>
                                <div className='col-9 ps-0'>
                                    <h6 className='pt-2 text-muted'>{requestData.tpno}</h6>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-2 ms-2'>
                                    <h3><i className="bi bi-envelope-open-fill"></i></h3>
                                </div>
                                <div className='col-9 ps-0'>
                                    <h6 className='pt-2 text-muted'>{requestData.email}</h6>
                                </div>
                            </div>

                            <div className='row border-top'>
                                <h6 className="card-text"><center>Share your fund request on social networks</center></h6>
                            </div>

                            <div className="d-flex justify-content-center">
                                <h3><i className="bi bi-facebook me-4"></i></h3>
                                <h3><i className="bi bi-twitter me-4"></i></h3>
                                <h3><i className="bi bi-instagram me-4"></i></h3>
                                <h3><i className="bi bi-whatsapp"></i></h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
