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
    <thead>
      <tr>
        {Object.keys(translation).map((key, index) => {
          return <th key={index}>{translation[key]}</th>
        })}
      </tr>
    </thead> 
    <tbody>
      {data.map((item, index) => {
        console.log('item', item)
        return <tr key={index}>
          {Object.keys(translation).map((key, index) => {
            const value = key.split('.').reduce((obj, key) => obj[key], item)
            return <td key={index}>
              {renderValue(value)}
            </td>
          })}
        </tr>
      })}
    </tbody>
  </table>
}