import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CropAnalyticsProps {
  cropData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const CropAnalytics: React.FC<CropAnalyticsProps> = ({ cropData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Crop Price Trends',
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Line options={options} data={cropData} />
    </div>
  );
};

export default CropAnalytics;