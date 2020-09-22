import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const videosQuery = gql`query assetLibraryDocuments($filter: String){
  assetLibraryDocuments(assetLibraryId: "Asset Library", filter: $filter){
    actions
    items {
      contentUrl
      title
      creator {
        id
      }
    }
    lastPage
    page
    pageSize
    totalCount
  }
}`;

export default () => {
  const { creatorId } = useParams();

  const { data } = useQuery(videosQuery, {
    variables: {
      filter: `creatorId eq ${creatorId}`,
    },
  });

  return (
    <div className="video">
      {data && data.assetLibraryDocuments && data.assetLibraryDocuments.items.map((document) => (
        <video
          key={document.contentUrl}
          style={{ width: '33%' }}
          loop
          src={`http://localhost:8080/${document.contentUrl}`}
        />
      ))}
    </div>
  );
};
