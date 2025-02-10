'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { fetchMakes } from '@/service/service'

export default function HomePage() {
  const [makes, setMakes] = useState([])
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const router = useRouter()

  useEffect(() => {
    async function handleFetchMakes() {
      const makesData = await fetchMakes()
      setMakes(makesData)
    }

    handleFetchMakes()
  }, [])

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i)

  const handleNext = () => {
    if (selectedMake && selectedYear) {
      router.push(`/results/${selectedMake}/${selectedYear}`)
    }
  }

  return (
    <div className="flex w-full bg-white flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">
        Car Dealer
      </h1>
      <div className="w-full justify-center items-center flex-col flex gap-4">
        <select
          className="p-2 border rounded w-64 text-black"
          onChange={(e) => setSelectedMake(e.target.value)}
          value={selectedMake}
        >
          <option className='text-black' value="">Select Vehicle Make</option>
          {makes.map((make: { MakeName: string; MakeId: string }) => (
            <option key={make.MakeId} className='text-black' value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded w-64 text-black"
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear}
        >
          <option className='text-black' value="">Select Model Year</option>
          {years.map((year) => (
            <option className='text-black' key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          className={`p-2 bg-blue-500 text-white rounded w-64 cursor-pointer ${
            !selectedMake || !selectedYear
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
          disabled={!selectedMake || !selectedYear}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}
