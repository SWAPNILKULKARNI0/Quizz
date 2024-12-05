export function NavigationButtons({ 
  onPrevious, 
  onNext, 
  onSubmit, 
  isFirstQuestion, 
  isLastQuestion 
}) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      
      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Finish
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      )}
    </div>
  );
}