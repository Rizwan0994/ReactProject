import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../users/Table.css";

function createData(name, trackingId, date, status,datechange, networth,channel) {
  return { name, trackingId, date, status ,datechange,networth,channel};
}

const rows = [
  createData("#0123569", 18908424, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908424, "Milley  Luise", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908424, "Claire Teressa", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908421, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908421, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908421, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908421, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908421, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  createData("#0123569", 18908421, "Alex Senthil", "$5000","18 Jan 2021","$12000","$12000"),
  

];



export default function BasicTable() {
  return (
      <div className="Table">
    
    <div class="container">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-6">

    <div class="form">
      <i class="fa fa-search"></i>
      <input type="text" class="form-control form-input" placeholder="Search anything..."/>
    
    </div>
    
  </div>
  
</div>

</div>

        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Total num. of users</TableCell>
                <TableCell align="left">Active users</TableCell>
                <TableCell align="left">User drop off</TableCell>
                <TableCell align="left">Graphs</TableCell>
                <TableCell align="left">By date range</TableCell>
                <TableCell align="left">By net worth</TableCell>
                <TableCell align="left">User by channel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: 'white' }}>
              {rows.map((row) => (
                <TableRow className="rowcolor"
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } } }
                 >
                  <TableCell >
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left" >{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">{row.datechange}</TableCell>
                  <TableCell align="left" >{row.networth}</TableCell>
                  <TableCell align="left" >{row.channel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
