const API_BASE_URL = process.env.NEXT_PUBLIC_VPIC_API
export async function fetchMakes() {
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
    )
    const data = await res.json()
    return data.Results
  } catch (error) {
    console.error('Error fetching makes:', error)
    return []
  }
}

export async function fetchModel(makeId: string, year: string) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  )
  const data = await res.json()

  if (data.Results) {
    return data.Results
  } else {
    return []
  }
}
