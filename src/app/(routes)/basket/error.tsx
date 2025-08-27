"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-red-500">Ошибка: {error.message}</p>
      <button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => reset()}
      >
        Попробовать снова
      </button>
    </div>
  )
}
