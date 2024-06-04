import { Bar, BarChart, Legend, ResponsiveContainer, YAxis } from 'recharts'

interface MaestryChartProps {
  data?: { Pontos: number }[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLabel = (props: any) => {
  const { x, y, width, height, value } = props

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {value}
    </text>
  )
}

export function MaestryChart({ data }: MaestryChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        barSize={50}
        className="font-league-spartan"
      >
        <YAxis orientation="right" tick={{ fill: '#e5e7eb' }} />
        <Bar
          dataKey="Pontos"
          fill="#0f766e"
          label={<CustomLabel />}
          className="text-xs"
        />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  )
}
