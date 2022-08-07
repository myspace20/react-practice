import React from 'react'

export default function score() {
  return (
    <div className='score-container'>
      <div className='score-card'>
        {score}
        <button>Back to Dashboard</button>
      </div>
    </div>
  )
}
