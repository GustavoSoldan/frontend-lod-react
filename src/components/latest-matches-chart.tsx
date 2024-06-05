import {
  Bar,
  BarChart,
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
  const COLORS = ['#0f766e', '#C4001F']

  const customTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip rounded border-4 border-teal-700 bg-gray-300 bg-slate-300
          p-4 font-league-spartan text-lg font-semibold text-gray-800"
        >
          <p className="text-black">{label}</p>
          <p className="text-[#0f766e]">Abates: {payload[0].value}</p>
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
          top: 30,
          right: 40,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" className="font-league-spartan" />
        <YAxis className="font-league-spartan" />
        <Tooltip content={customTooltip} />
        <Bar dataKey="Abates" fill={COLORS[0]} />
        <Bar dataKey="Mortes" fill={COLORS[1]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
