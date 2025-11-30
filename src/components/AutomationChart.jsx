import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: '#9ca3af', // gray-400
                font: {
                    family: 'monospace'
                }
            }
        },
        title: {
            display: false,
        },
        tooltip: {
            backgroundColor: '#1f2937', // gray-800
            titleColor: '#f3f4f6', // gray-100
            bodyColor: '#d1d5db', // gray-300
            borderColor: '#374151', // gray-700
            borderWidth: 1,
            titleFont: { family: 'monospace' },
            bodyFont: { family: 'monospace' },
            callbacks: {
                label: (context) => `${context.dataset.label}: £${context.parsed.y}`
            }
        }
    },
    scales: {
        y: {
            ticks: { color: '#6b7280', font: { family: 'monospace' } }, // gray-500
            grid: { color: '#374151' } // gray-700
        },
        x: {
            ticks: { color: '#9ca3af', font: { family: 'monospace' } }, // gray-400
            grid: { display: false }
        }
    }
};

const labels = ['Year 1 Cumulative Cost', 'Year 2 Cumulative Cost'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Custom Script (One-time Build)',
            data: [600, 600],
            backgroundColor: 'rgba(34, 197, 94, 0.8)', // green-500
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 1,
        },
        {
            label: 'Subscription Tool (e.g., Zapier)',
            data: [480, 960],
            backgroundColor: 'rgba(239, 68, 68, 0.8)', // red-500
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 1,
        },
    ],
};

export default function AutomationChart() {
    return (
        <div className="w-full h-[300px] md:h-[400px] bg-[#0f1219] p-4 rounded-lg border border-gray-800">
            <Bar options={options} data={data} />
        </div>
    );
}
