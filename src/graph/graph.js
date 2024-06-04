import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const Graph = ({ data }) => {
  if (data.length === 0) return null;

  // Функция для вычисления разницы в днях между двумя датами
  const dateDiffInDays = (date1, date2) => {
    const diffInMs = Math.abs(date2 - date1);
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  };

  // Функция для поиска максимального количества дней между всеми парами дат
  const maxDays = data.reduce((max, row) => {
    const startDate = new Date(row[1]);
    const endDate = new Date(row[2]);
    const days = dateDiffInDays(startDate, endDate);
    return Math.max(max, days);
  }, 0);

  // Создаем массив заголовков столбцов, начиная с "День 1" и заканчивая "День maxDays"
  const columnHeaders = [...Array(maxDays)].map((_, i) => `День ${i + 1}`);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={maxDays + 1}>Дни с начала каравана</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Корабль</TableCell>
            {columnHeaders.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{row[0]}</TableCell>
              {columnHeaders.map((_, columnIndex) => {
                const startDate = new Date(row[1]);
                const currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + columnIndex);
                const dateString = currentDate.toISOString().split('T')[0];
                return (
                  <TableCell key={columnIndex}>
                    {dateString}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Graph;
