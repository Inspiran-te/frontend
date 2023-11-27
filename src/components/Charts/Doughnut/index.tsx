import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { theme } from '../../../theme/theme';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      
      data: [12, 88],
      backgroundColor: [
        '#AFFFA8',
        theme.colors.grey_Light,
        
      ],
      
      borderWidth: 1,
      
    },
  ],
};
const options = {
  cutout: '72%',
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: {
      display: false,
    },
    text: 'Текст в центре'
  }
};
export function DoughnutChart() {
    return (
      
        <Doughnut data={data} options={options} />
     
    );
  }