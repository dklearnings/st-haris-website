import React from 'react'

function Spinner() {
  return (
    <div>{/* Spinner Start */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status" />
      </div>
      {/* Spinner End */}</div>
  )
}

export default Spinner