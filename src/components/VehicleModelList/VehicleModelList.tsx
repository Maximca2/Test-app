import { IModel } from '@/utils/types'

export default function VehicleModelList({ models }: any) {
  if (!models || models.length === 0) {
    return <div>No models found for this make and year.</div>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {models.map((model: IModel, index: string) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg">{model.Model_Name}</h3>
        </div>
      ))}
    </div>
  )
}
