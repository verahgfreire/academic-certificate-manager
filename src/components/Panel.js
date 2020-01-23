import React from 'react'

function renderValue (value = '') {
  if ((value + '').startsWith('http')) {
    return <a target="_blank" href={value}>{value}</a>
  } else {
    return value
  }
}

export default function({ data, translation }) {
  return <table className="table is-hoverable is-fullwidth">  
    <tbody>
      {Object.keys(translation).map((key, index) => {
        const value = data && key.split('.').reduce((obj, key) => obj[key], data)
        return <tr key={index}>
          <th>{translation[key]}</th>
          <td>{ value ? renderValue(value) : 'Loading'}</td>
        </tr>
      })}
    </tbody>
  </table>
}