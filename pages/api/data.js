import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '3306',
  user: 'revenue_r_026',
  password: 'Gfz>2g33ajer',
  database: 'Revenue Production Database'
});

export default async function handler(req, res) {
  const [rows] = await pool.query('SELECT * FROM hotels LIMIT 10');
  res.status(200).json(rows);
};