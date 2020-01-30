import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class HighscoreTable extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false, apiResponse: null };
    }
    
    callAPI() {
        fetch("http://localhost:9000/views/highscore", {
            credentials: 'include',
            method: 'GET',
            headers: {
                Accept: 'application/json',
              }
        })
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        console.log('2')
        this.setState({isLoading: true});
        this.callAPI();
        console.log('hello', this.state)
    }

    render() {
        if (this.state.apiResponse === null){
            return (
                <div>loading...</div>
            )
        }
        console.log(this.state.apiResponse)
        return (
        
        <div>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="right">First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Total beer (ml)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.apiResponse.map(row => (
                    <TableRow key={row.first_name}>

                    <TableCell align="right">{row.first_name}</TableCell>
                    <TableCell align="right">{row.last_name}</TableCell>
                    <TableCell align="right">{row.total_volume}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        );
    }
}

export default HighscoreTable;