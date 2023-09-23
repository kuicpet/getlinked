const Timeline = ({ events }) => {
  return (
    <section className='flex flex-col w-full items-center justify-center my-[2rem] border-[#FFFFFF2E] border-b py-[2rem]'>
      <div className='flex flex-col'>
        <h3 className='text-center text-[2rem] font-bold'>Timeline</h3>
        <p className='text-center text-[0.875rem] mb-4'>
          Here is the breakdown of the time we anticipate <br /> using for the
          upcoming event.
        </p>
      </div>
      <div className=''>
        {events.map((event, index) => (
          <div
            key={index}
            className='flex flex-col w-full items-start relative border-l-2 border-l-[#D434FE]'>
            <div className='text-[#D434FE] text-2xl'>{event.step}</div>
            <div className='font-bold text-xl mb-1 text-[#D434FE]'>
              {event.date}
            </div>
            <div className='timeline-description text-[#D434FE] font-bold text-2xl'>
              {event.title}
            </div>
            <p className='text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
