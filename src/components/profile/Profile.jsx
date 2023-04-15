import React from 'react'

function Profile({ user }) {
  return (
    <div className="profile-icon">
        <div className="profile-content">
            <button>
                <span>{user}</span>
            </button>
        </div>
    </div>
  )
}

export default Profile
