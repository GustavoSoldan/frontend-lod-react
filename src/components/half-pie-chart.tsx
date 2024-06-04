import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

interface HalfPieChartProps {
  data: { name: string; value: number }[]
}

export function HalfPieChart({ data }: HalfPieChartProps) {
  const COLORS = ['#32cd8c', '#C4001F']

  const startAngle = 180
  const endAngle = 0

  return (
    <PieChart width={370} height={370}>
      <Legend />
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        label={({ value }) => value}
        outerRadius={100}
        innerRadius={70}
        fill="#8884d8"
        dataKey="value"
        startAngle={startAngle}
        endAngle={endAngle}
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}
