import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { useEffect, useState } from 'react';

function Home(props) {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const { userInfo } = props;

  useEffect(() => {
    axios.post('/api/list_user', {}).then((resp) => {
      console.log(Object.keys(resp.data.data[0]));
      if (resp.data.code === 0 && resp.data.data.length > 0) {
        setRows(resp.data.data);
        setHeaders(Object.keys(resp.data.data[0]));
      }
    });
  }, []);

  useEffect(() => {
    console.log(headers);
  }, [headers]);

  const getHeaders = () => {
    return (
      <>
        <TableHead>
          <TableRow>
            {headers.map((value) => {
              return <TableCell>{value}</TableCell>;
            })}
          </TableRow>
        </TableHead>
      </>
    );
  };

  const getRow = (row) => {
    return (
      <>
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {headers.map((key) => {
            return (
              <TableCell component="th" scope="row">
                {row[key]}
              </TableCell>
            );
          })}
        </TableRow>
      </>
    );
  };

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title="Registered Users">
            <Button color="inherit">{userInfo?.name}</Button>
          </AppBar>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              {getHeaders()}
              <TableBody>
                {rows.map((row) => (
                  <>{getRow(row)}</>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default Home;
