import ResultPage from '@/components/pages/CarInfoPage'
import { fetchMakes } from '@/service/service'

import { Suspense } from 'react'

export async function generateStaticParams() {
  const data = await fetchMakes()

  // Modify property names to match the ones expected by CarInfo
  const paths = data.map((it: { MakeId: string; VehicleTypeId: string }) => ({
    params: {
      makeId: it.MakeId.toString(), // Ensure the property name matches
      year: it.VehicleTypeId.toString(), // Ensure the property name matches
    },
  }))

  return paths
}

export default async function CarInfo({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const { makeId, year } = await params

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
