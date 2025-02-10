import { fetchModel } from '@/service/service'
import VehicleModelList from '../VehicleModelList/VehicleModelList'

export default async function ResultPage({
  makeId,
  year,
}: {
  makeId: string
  year: string
}) {
  const vehicleModels = await fetchModel(makeId, year)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
      <VehicleModelList models={vehicleModels} />
    </div>
  )
}
