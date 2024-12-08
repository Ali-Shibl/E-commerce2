import React from 'react'
import './Loading.css'
export default function Loading() {
  return (
<div className="loading d-flex flex-column justify-content-center">
  <label className="loading-title">Loading .....</label>
  <span className="loading-circle sp1">
    <span className="loading-circle sp2">
      <span className="loading-circle sp3"></span>
    </span>
  </span>
</div>
  )
}
