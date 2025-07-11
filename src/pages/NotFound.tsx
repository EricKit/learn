import { useNavigate } from '@solidjs/router';
import { Component } from 'solid-js';

const NotFound: Component = () => {
  const navigate = useNavigate();
  navigate('/solid');
  return <div />;
};

export default NotFound;
