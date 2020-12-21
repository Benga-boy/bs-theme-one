import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className="main-footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center py-4">
              <h3>LoopLAB</h3>
              <p>Copyright &copy; {new Date().getFullYear()} </p>
              <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">
              Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>

      <div id="contactModal" className="modal fase text-dark">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Contact Us
              </h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea type="text" className="form-control" placeholder="Message"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn-sm btn-primary btn-block">SEND</button>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Footer
