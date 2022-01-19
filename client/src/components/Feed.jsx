import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '.';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);
      client.fetch(feedQuery).then((data) => {
        setLoading(false);
        setPins(data);
      });
    }
  }, [categoryId]);

  const ideaName = categoryId || 'new';

  if (loading)
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
