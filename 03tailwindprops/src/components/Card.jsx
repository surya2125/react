import React from 'react'

const Card = ({userName='surya',assigned='Not Assigned'}) => {
  return (
    <>
       <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-a" src="https://images.pexels.com/photos/18843275/pexels-photo-18843275/free-photo-of-ella.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {userName}
      </div>
      <div>
        {assigned}
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default Card