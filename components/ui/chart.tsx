"use client"

import type React from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement)

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor: string | string[]
    borderColor?: string
    borderWidth?: number
    tension?: number
  }[]
}

interface ChartOptions {
  responsive: boolean
  maintainAspectRatio: boolean
  scales?: {
    y: {
      beginAtZero: boolean
    }
  }
}

export const BarChart: React.FC<{ data: ChartData; options: ChartOptions }> = ({ data, options }) => {
  return <Bar data={data} options={options} />
}

export const LineChart: React.FC<{ data: ChartData; options: ChartOptions }> = ({ data, options }) => {
  return <Line data={data} options={options} />
}

export const PieChart: React.FC<{ data: ChartData; options: ChartOptions }> = ({ data, options }) => {
  return <Pie data={data} options={options} />
}

