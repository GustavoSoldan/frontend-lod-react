import { Bar, BarChart, Legend, ResponsiveContainer, YAxis } from 'recharts'

interface MaestryChartProps {
  data?: { Pontos: number }[]
}

export function MaestryChart({ data }: MaestryChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data} barSize={50}>
        <YAxis orientation="right" />
        <Bar dataKey="Pontos" fill="#0f766e" label />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  )
}
