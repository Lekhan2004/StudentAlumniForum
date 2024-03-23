import {useForm} from 'react-hook-form'
import React from 'react'

export default function Hello() {
    let {handleSubmit} = useForm()
  return (
    <div>
        <form onSubmit={handleSubmit(abc)}>
            <button>GTYFDTH</button>
        </form>
    </div>
  )
}
