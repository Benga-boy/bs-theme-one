import React, { Fragment } from 'react'
import { images } from '../../images/export'

const Share = () => {
  return (
    <Fragment>
      <section id="share-head-section" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h1 className="display-4">
            Share
              </h1>
              <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, nemo adipisci architecto inventore voluptatibus excepturi voluptates voluptatum. Esse, aut. Perferendis.
              </p>
              <a href="#" className="btn btn-outline-light">Find out more</a>
            </div>
          </div>
        </div>
      </section>

      <section id="share-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={images[2].value.default} alt="explore" className="rounded-circle mb-3 img-fluid" />
            </div>
            <div className="col-md-6">
              <h3>Share what you create</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati perferendis. Doloribus praesentium assumenda animi quaerat quae quidem eligendi illum.</p>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati perferendis
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati perferendis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </Fragment>
  )
}

export default Share
