import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pbg from '../pics/Princess_Bubblegum.png';
import lsp from '../pics/LSP.png';
import zelda from '../pics/Zelda.png';

class Art extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div className="art-grid">
                        <img
                            src={pbg}
                            alt="Princess Bubblegum"
                            className="art-img"
                        />

                        <img
                            src={lsp}
                            alt="LSP"
                            className="art-img"
                        />

                        <img
                            src={zelda}
                            alt="Zelda"
                            className="art-img"
                        />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Art;