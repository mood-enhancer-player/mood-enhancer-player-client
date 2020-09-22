import React from 'react'

const Profile = ({ image, name }) => {
    return (
        <>
            <Box style={{ margin: "50px" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: "auto", marginLeft: "auto", width: "100px", height: "100px" }} />
            </Box>
        </>
    )
}

export default Profile
