import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { BarElement } from 'chart.js';
import { theme } from '../../../theme/theme';
import { Block } from '../../ui/Block';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
          display: false, // убираем описание
      },
    },
    scales: {
        
      x: {
        
        grid: {
          display: false, // убираем сетку
        },
        
      },
      y: {
        display: false,
        grid: {
          display: false, // убираем сетку
        },
        ticks: {
            display: false, // чтобы скрыть цифры слева от оси
        },
        
      },
    },
  };

const labels = ['1-6', '7-13', '14-19', '20-26',  '27-31'];
const randomNum = [10, 20, 26, 15, 80 ];

export const data = {
  labels,
  datasets: [
    {
        data: labels.map((_, index) => randomNum[index]),
        backgroundColor: theme.colors.Primary_Purple,
        label: 'Всего откликов',
        barThickness: 9,
        barPercentage: 0.8,
        borderRadius: {
            topLeft: 7,
            topRight: 7,
          },
        
    },
  ],
};

export function VerticalBarChart() {
  return (
        <Bar  options={options} data={data} /> 
  ) 
}


