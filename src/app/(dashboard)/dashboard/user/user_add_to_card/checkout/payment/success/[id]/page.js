import Link from "next/link"

const SuccessPage = ({params}) => {
  
  return (
    <div className='mt-16'>
      <h1>Your Payment successful</h1>
      <p>Your TransactionId: #{params.id}</p>
      <Link href={"/dashboard/user/user_history"} className='primary-btn'>Go to view history</Link>
    </div>
  )
}

export default SuccessPage