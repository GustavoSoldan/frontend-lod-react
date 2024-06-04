import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface LatestMatchesChartProps {
  data: { name: string; Abates: number; Mortes: number }[]
}

interface CustomTooltipProps {
  active?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
  label?: string
}

export function LatestMatchesChart({ data }: LatestMatchesChartProps) {
  const COLORS = ['#14b8a6', '#C4001F']

  const customTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-slate-300 p-4 text-gray-800">
          <p>{label}</p>
          <p className="text-[#14b8a6]">Abates: {payload[0].value}</p>
          <p className="text-[#C4001F]">Mortes: {payload[1].value}</p>
        </div>
      )
    }

    return null
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={customTooltip} />
        <Legend />
        <Bar dataKey="Abates" fill={COLORS[0]} />
        <Bar dataKey="Mortes" fill={COLORS[1]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
