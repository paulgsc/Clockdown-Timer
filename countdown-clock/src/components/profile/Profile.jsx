import React from 'react'
import ProfileMenu from './ProfileMenu'

function Profile({ user }) {
  return (
    <div className="profile-container">
        <div className="profile-icon">
        <div className="profile-content">
            <button>
                <span>{user}</span>
            </button>
        </div>
    </div>
      <ProfileMenu />
    </div>
  )
}

export default Profile
