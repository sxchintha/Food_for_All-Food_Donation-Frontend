import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewFundsCard({ fund }) {
    // Calculate the remaining time to endthe fundraising
    const getRemainingTime = (endingDate) => {
        // endingDate = '2022-09-28';
        var timeDiff = moment(endingDate).diff(moment(), 'days');
        if (timeDiff === 0) {
            timeDiff = moment(endingDate).diff(moment(), 'hours');
            if (timeDiff === 0) {
                timeDiff = moment(endingDate).diff(moment(), 'minutes');
                if (timeDiff === 0) {
                    timeDiff = moment(endingDate).diff(moment(), 'seconds');
                    return timeDiff + ' second(s)';
                }
                return timeDiff + ' minute(s)';
            }
            return timeDiff + ' hour(s)';
        }
        return timeDiff + ' day(s)';

    }

    return (
        <div className='col-xxl-6 col-lg-10 col-sm-12'>
            <Link to={'/fund/viewFund'} state={fund} className="disable-hover-color">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={fund.fundImage} className="img-fluid card-image" alt={fund.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="d-flex">
                                    <h5 className="card-title p-2 flex-grow-1">{fund.title}</h5>
                                    <div className='btn text-danger p-2'>
                                        {
                                            fund.status === "pending" || fund.status === "approved" ?
                                                (
                                                    <Link to={`/fund/editFund`} state={fund} >
                                                        <div className="material-icons opacity-10 d-inline-block">edit</div>
                                                        {" "}Edit
                                                    </Link>
                                                ) : null
                                        }
                                    </div>
                                </div>
                                <p className="card-text">{fund.target}</p>

                                <div className='row d-flex'>
                                    <div className='col-sm-6 col-md-4'>
                                        <div>Budget</div>
                                        <h5>Rs.{fund.budget}</h5>
                                    </div>
                                    {
                                        fund.status === "approved" ? (
                                            <div className='col-sm-6 col-md-4'>
                                                <div>Timeleft</div>
                                                <h5 className='text-danger'>{getRemainingTime(fund.endingDate)}</h5>
                                            </div>
                                        ) : (
                                            <div className='col-sm-6 col-md-4'>
                                                <div>Status</div>
                                                {
                                                    fund.status === "completed" ? (
                                                        <h5 className='text-success'>Completed</h5>
                                                    ) : (
                                                        fund.status === "pending" ?
                                                            (<h5 className='text-info text-capitalize'>{fund.status}</h5>) :
                                                            (<h5 className='text-danger text-capitalize'>{fund.status}</h5>)
                                                    )
                                                }
                                            </div>
                                        )
                                    }
                                    <div className='col-sm-6 col-md-4'>
                                        {
                                            fund.status === "completed" ? (
                                                <>
                                                    <div>Completed on</div>
                                                    {new Date(fund.completedOn).toISOString().split('T')[0]}
                                                </>
                                            ) : (
                                                <>
                                                    <div>Created on</div>
                                                    {
                                                        new Date(fund.createdOn).toISOString().split('T')[0]
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
