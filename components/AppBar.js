import * as React from 'react';
import { Appbar } from 'react-native-paper';
const Header = () => {
return (
    <Appbar.Header style={{marginTop:1, backgroundColor:'white'}}>
    
      <Appbar.Content title="News" />
      
    </Appbar.Header>
    
  );
};
export default Header;