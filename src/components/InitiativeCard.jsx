import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

class InitiativeCard extends Component {
    render() {
        return (
                <Card
                sx={{ width: 500, margin: 2 }}
                raised={true}
                >
                    <CardHeader
                        title={this.props.name}
                        action={
                            <Avatar
                                sx={{ fontSize: 20, backgroundColor: lightBlue[500]}}
                                color="text.secondary"
                                alignRight
                                gutterBottom
                            >{this.props.initiative}</Avatar>
                        }
                    >
                    </CardHeader>    
                </Card>
        )
    }
}
export default InitiativeCard;