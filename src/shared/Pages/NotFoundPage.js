import React from 'react'

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true
  return (
    <div className="container mt-5">
      <h4><strong>Oops.. Page Not Found</strong></h4>
    </div>
  )
}

export default {
  component: NotFoundPage
}
