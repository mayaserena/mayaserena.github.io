import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';
import gameidentifier from '../pics/gameidentifier.png';
import colourshift from '../pics/colourshift.png';
import maze from '../pics/maze.png';

class Projects extends Component {

    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div className="projects-grid">

                        {/*game identifier*/}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#000', background: `url(${gameidentifier}) center / cover` }}>game-identifier</CardTitle>
                                <CardText>
                                    An image classification model made in Python using Keras that identifies a video game given a screenshot. 
                                </CardText>
                                <CardActions border>
                                <Button><a href="https://github.com/mayaserena/game-identifier" rel="noopener noreferrer" target="_blank">github</a></Button>
                            </CardActions>
                         </Card>

                        {/*colour shift*/}
                         <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#000', background: `url(${colourshift}) center / cover` }}>colour-shift</CardTitle>
                                <CardText>
                                    A computer vision application made in Python with OpenCV which colourizes an image using the dominant colours of another image. 
                                </CardText>
                                <CardActions border>
                                <Button><a href="https://github.com/mayaserena/colour-shift" rel="noopener noreferrer" target="_blank">github</a></Button>
                            </CardActions>
                         </Card>


                        {/*maze runner*/}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#000', background: `url(${maze}) center / cover` }}>maze-runner</CardTitle>
                                <CardText>
                                    A simple maze game made in Unity.
                                </CardText>
                                <CardActions border>
                                <Button><a href="https://github.com/mayaserena/maze-runner" rel="noopener noreferrer" target="_blank">github</a></Button>
                            </CardActions>
                         </Card>
                         
                         </div>

                        <div className="projects-grid2">

                        {/*file manager*/}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: `url(https://upload.wikimedia.org/wikipedia/commons/1/10/Dir_command_in_Windows_Command_Prompt.png) center / cover`}}>file-manager</CardTitle>
                                <CardText>
                                    A command line file manager that can perform various functions within a file system. Implemented with C++.
                                </CardText>
                                <CardActions border>
                                <Button><a href="https://github.com/mayaserena/FileManager" rel="noopener noreferrer" target="_blank">github</a></Button>
                            </CardActions>
                         </Card>

                        {/*store manager*/}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#000', background: 'url(https://us.123rf.com/450wm/svetlam87/svetlam871712/svetlam87171200038/91351391-stock-vector-store-shelves-with-groceries-food-and-drinks-vector-flat-illus.jpg?ver=6) bottom right 15% no-repeat #46B6AC'}}>store-manager</CardTitle>
                                <CardText>
                                    A back-end database to store customer and product 
                                    information along with a front-end to interact with the database.  
                                    Impplemented using MySQL, PHP, and Javascript.
                                </CardText>
                                <CardActions border>
                                <Button><a href="https://github.com/mayaserena/store-manager" rel="noopener noreferrer" target="_blank">github</a></Button>
                            </CardActions>
                         </Card>

                     </div>
                 </Cell>
             </Grid>
        )
    }
}

export default Projects;