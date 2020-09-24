import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';

const userProfileQuery = gql`query documents($filter: String!){
  documents(siteKey: "Guest", filter: $filter) {
    items {
      creator {
        id
        name
      }
      contentUrl
      title
    }
  }
}`

export default () => {

  const {creatorId} = useParams();

  const {loading, data} = useQuery(userProfileQuery, {
    variables: {
      filter: `creatorId eq ${creatorId}`
    }
  });

  console.log(data)

  return (
    <div className="video">{
      data && data.documents && data.documents.items.map(document => (
        <video style={{width:"33%"}}
          src={'http://localhost:8080/' + document.contentUrl}
        />
      ))
    }</div>
  )
}