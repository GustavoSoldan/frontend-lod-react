import { Cell, Pie, PieChart, Tooltip } from 'recharts'

interface CustomPieChartProps {
  data: { name: string; value: number }[]
}

export function CustomPieChart({ data }: CustomPieChartProps) {
  const COLORS = ['#0f766e', '#C4001F']

  return (
    <PieChart width={370} height={284}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={110}
        innerRadius={70}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}
