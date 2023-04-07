import React from 'react'
import {Card, CardHeader, CardBody} from 'reactstrap'
const Root = () => {
  return (
    <div className='d-flex w-100 justify-content-center align-items-center p-5'>
        <Card className='w-100 m-5'>
          <CardHeader>Filter</CardHeader>
          <CardBody>
            Body
          </CardBody>
        </Card>
    </div>
  )
}

export default Root