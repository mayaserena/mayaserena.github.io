import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../pics/avatar2.png';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Maya Murad</h1>

                            <p>
                                Hello, my name is Maya and I'm in the final year of my Honours Specialization in Computer Science with a minor in Game Development at the University of Western Ontario.
                                I have a strong interest in HCI and machine learning.
                                Outside of computer science, I enjoy drawing, playing video games, and going to the gym.
                                Thanks for reading and enjoy your look around!
                            </p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/maya-murad-0a492219b/?originalSubdomain=ca" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>

                                {/* Github */}
                                <a href="http://github.com/mayaserena" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;