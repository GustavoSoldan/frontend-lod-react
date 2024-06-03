import { Cell, Pie, PieChart, Tooltip } from 'recharts'

interface CustomPieChartProps {
  data: { name: string; value: number }[]
}

export function CustomPieChart({ data }: CustomPieChartProps) {
  const COLORS = ['#32cd8c', '#C4001F']

  return (
    <PieChart width={340} height={340}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        label={({ value }) => value}
        outerRadius={100}
        innerRadius={70}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}
