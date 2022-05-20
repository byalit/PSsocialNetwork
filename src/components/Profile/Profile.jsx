import React from "react";
import p from "./Profile.module.css";
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>

            <Myposts posts ={props.posts} />

        </div>
    );
};
export default Profile;
