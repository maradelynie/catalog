import React from 'react';

type LoadingProps = {
  error: boolean;
  loading: boolean;
};

export default function Loading({ error, loading }: LoadingProps) {
  if (error) return <p>Something went wrong, please try again later.</p>;
  else if (loading) return <p>loading...</p>;
  else return <></>;
}
