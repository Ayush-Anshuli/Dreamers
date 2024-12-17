import React from 'react'

function Jobpage({result}) {
  return (
    <>
    <div>
      <h3 className='text-lg font-bold mb-2' >Jobs Found - {result.length}</h3>
    </div>
    <section className='card-container' >  {/* Card component */ }
      {result}
    </section>
    </>
  )
}

export default Jobpage