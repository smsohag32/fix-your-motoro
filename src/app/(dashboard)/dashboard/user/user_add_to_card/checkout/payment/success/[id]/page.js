
const SuccessPage = ({params}) => {
  
  return (
    <div className='mt-16'>
      <h1>Your Payment successful</h1>
      <p>Your TransactionId: #{params.id}</p>
      <button className='primary-btn'>Go to view history</button>
    </div>
  )
}

export default SuccessPage