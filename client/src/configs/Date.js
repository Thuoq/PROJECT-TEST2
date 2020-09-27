import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
const arrayMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const arrayYear = [
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
];
export const optionMonths = arrayMonths.map((month, idx) => (
  <Option key={`month + ${idx}`}>{month}</Option>
));

export const optionYears = arrayYear.map((year, idx) => (
  <Option key={`year + ${idx}`}>{year}</Option>
));
