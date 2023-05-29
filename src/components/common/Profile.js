import styles from "../../styles/Profile.css";
import coverImg from "../../images/coverImage.jpg";
import profilePic from "../../images/profileImage.jpg";
import { LogoIcon, LocationIcon } from "../../icons";

export default function Profile() {
    return (
        <div className="profile">
            <div className="cover-image">
                <img src={coverImg} alt="Cover" />
            </div>
            <div className="profile-picture">
                <img src={profilePic} alt="Profile" />
            </div>

            <h1 className="name"> Jennifer Locatelli </h1>

            <h2 className="hello"> Hi there, it's nice to meet you! </h2>

            <p>  I am a coffee addict who enjoys traveling, meeting new people, discovering other cultures and re-discovering the hidden gems of Rome over and over again. </p>

            <div className="info-section">
                <div className="info-item"> 
                    <span className="icon"> 🌎 </span>
                    <span className="info-text">Languages Spoken</span>

                    <div className="language-item">
                        <span className="icon">🇮🇹</span>
                        <span className="info-text">Italian</span>
                    </div>
                    <div className="language-item">
                        <span className="icon">🇪🇸</span>
                        <span className="info-text">Spanish</span>
                    </div>
                    <div className="language-item">
                        <span className="icon">🇬🇧</span>
                        <span className="info-text">English</span>
                    </div>
                </div>
                <div className="info-item">
                    <span className="icon">📍</span>
                    <span className="info-text">Roma, Italy</span>
                </div>
                <div className="info-item">
                    <span className="icon">⏱️</span>
                    <span className="info-text">Responds within an hour</span>
                </div>
                <button className="contact-button">Contact Me</button>
            </div>    
        </div>
    )
}