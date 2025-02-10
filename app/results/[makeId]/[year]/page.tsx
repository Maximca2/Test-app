import ResultPage from '@/components/pages/CarInfoPage'
import { fetchMakes } from '@/service/service'

import { Suspense } from 'react'

export async function generateStaticParams() {
  const data = await fetchMakes()

  const paths = data.map((it: { MakeId: string; VehicleTypeId: string }) => ({
    params: {
      MakeId: it.MakeId.toString(),
      VehicleTypeId: it.VehicleTypeId.toString(),
    },
  }))

  return paths
}

export default function CarInfo({
  params,
}: {
  params: { makeId: string; year: string }
}) {
  const { makeId, year } = params

  return (
    <Suspense
      fallback={
        <div className="text-xl text-gray-500 text-center">Loading...</div>
      }
    >
      <ResultPage makeId={makeId} year={year} />
    </Suspense>
  )
}
