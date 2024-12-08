import React from 'react';
import {Helmet} from "react-helmet";

export default function EditDataProfile() {




  return (
    <>

<Helmet>
        <meta charSet="utf-8" />
        <title>editProfile</title>
        <meta name="description" content="editProfilePage" />
      </Helmet>

    <form className="shadow p-4 p-lg-5">
      <h2 className="text-orange h3 mb-4">Edit Your Profile</h2>

      <div className="row">
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="Md"
            name="fname"
            id="fname"
            aria-label="First Name"
          />
        </div>

        {/* Last Name */}
        <div className="col-md-6">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="Rimel"
            name="lname"
            id="lname"
            aria-label="Last Name"
          />
        </div>

        {/* Email */}
        <div className="col-md-6 mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="Enter your email"
            name="email"
            id="email"
            aria-label="Email"
          />
        </div>

        {/* Address */}
        <div className="col-md-6 mt-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="Kingston, 5236, United States"
            name="address"
            id="address"
            aria-label="Address"
          />
        </div>

        {/* Password Changes */}
        <div className="col-12 mt-3">
          <label>Password Changes</label>
          <input
            type="password"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="Current Password"
            name="currentPassword"
            id="currentPassword"
            aria-label="Current Password"
          />
          <input
            type="password"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="New Password"
            name="newPassword"
            id="newPassword"
            aria-label="New Password"
          />
          <input
            type="password"
            className="form-control my-2 py-2 px-3 bg-light"
            placeholder="Confirm New Password"
            name="confirmPassword"
            id="confirmPassword"
            aria-label="Confirm New Password"
          />
        </div>
      </div>

      <div className="text-end mt-3">
        <button type="button" className="btn  me-2">
          Cancel
        </button>
        <button type="submit" className="btn btn-danger">
          Save Changes
        </button>
      </div>
    </form>
 </> );
}
