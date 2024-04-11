import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('يناير / 1', 'الاثنين', "راس السنة"),
  createData("12 <= 9", "الثلاثاء => الجمعة", "عيد الفطر"),
  createData("23 ابريل", "الثلاثاء", "عيد الطفل"),
  createData("1 مايو", "الاربعاء", "عيد العمال"),
  createData("19 مايو", "الاحد", "عيد الاستقلال"),
  createData("15 مايو", "الاحد", "يوم الرياضة"),
  createData("19 <= 15", "السبت => الاربعاء", "عيد الاضحى"),
  createData("15 يوليو", "الاثنين", "عيد الوحدة الوطنية"),
  createData("30 اغسطس", "الجمعة", "عيد النصر"),
  createData("29 اكتوبر","الثلاثاء", "عيد الجمهورية"),
];

export default function Occasions() {
  return (
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>التاريخ</StyledTableCell>
            <StyledTableCell align="right">اليوم</StyledTableCell>
            <StyledTableCell align="right">اسم الاجازة</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}