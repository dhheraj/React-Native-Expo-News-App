import * as React from 'react';
import { Appbar } from 'react-native-paper';


const Header = () => {
  
return (
    <Appbar.Header style={{marginTop:1, backgroundColor:'white'}}>
      <Appbar.Content title="News" style={{borderLeftWidth:3,borderLeftWidth:3,marginLeft:10}}/>
    <Appbar.Content style={{alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 50,
    borderWidth:1,marginRight:10}} title="Donate" color='black' />
      
      
      
      
    </Appbar.Header>
    
  );
};
export default Header;