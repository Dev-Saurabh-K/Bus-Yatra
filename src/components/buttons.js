//search by bus number    //update location automatically   //contact bus  //report   2..inside bus
//footer---search by bus number  automatic location---on/off

import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
      <div className='Buttons'>
      {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button> */}
      <Button variant="light" className='SBN'>Search Bus Number</Button>
      <Button variant="dark" className='AL'>Auto-Locate</Button>
      {/* <Button variant="link">Link</Button> */}
    </div>
  );
}

export default TypesExample;