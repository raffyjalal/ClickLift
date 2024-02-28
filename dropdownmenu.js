import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CalorieCounter from './calorie.js';
import WaterIntakeChart from './waterintake.js';

const DropdownMenu = () => {
  const [selectedComponent, setSelectedComponent] = useState('');

  const renderComponent = () => {
    if (selectedComponent === 'calorie') {
      return <CalorieCounter />;
    } else if (selectedComponent === 'waterintake') {
      return <WaterIntakeChart />;
    }
  };

  return (
    <View>
      <Text>Choose either the Calorie Counter or the Water Intake Chart:</Text>
      <Button
        title="Calorie Counter"
        onPress={() => setSelectedComponent('calorie')}
      />
      <Button
        title="Water Intake Chart"
        onPress={() => setSelectedComponent('waterintake')}
      />
      {renderComponent()}
    </View>
  );
};

export default DropdownMenu;
