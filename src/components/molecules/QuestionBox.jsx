
const QuestionBox = ({
    question,
    answer
}) => {
   return(
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{question}</h3>
    <p className="text-gray-700 leading-relaxed">
        {answer}
    </p>
    </div>
   )
}

export default QuestionBox;