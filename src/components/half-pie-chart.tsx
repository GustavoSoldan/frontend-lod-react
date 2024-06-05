import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

interface HalfPieChartProps {
  data: { name: string; value: number }[]
}

export function HalfPieChart({ data }: HalfPieChartProps) {
  const COLORS = ['#0f766e', '#C4001F']

  const startAngle = 180
  const endAngle = 0

  return (
    <div
      style={{
        backgroundColor: '#1f2937',
        borderRadius: '32px',
        width: 'auto',
        boxShadow: '0px 3px 4px 3px rgba(0, 0, 0, 0.7)',
      }}
    >
      <PieChart width={370} height={370}>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{
            right: 100,
            top: 220,
            fontSize: '18px',
            fontWeight: 'bolder',
          }}
        />
        <Pie
          data={data}
          cx="50%"
          cy="55%"
          label={({ value }) => value}
          outerRadius={100}
          innerRadius={70}
          fill="#8884d8"
          dataKey="value"
          startAngle={startAngle}
          endAngle={endAngle}
          className="font-league-spartan text-xl font-semibold"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}
